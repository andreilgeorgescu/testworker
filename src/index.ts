import { Hono } from 'hono';
import { initWasm } from '@resvg/resvg-wasm';
import wasmModule from './binaries/resvg.wasm';
import markupToVector from './lib/markupToVector';
import vectorToRaster from './lib/vectorToRaster';
import { string, z } from 'zod';
import createMarkup from './lib/createMarkup.js';
import { zValidator } from '@hono/zod-validator';
import { QueryParametersSchema } from './schemas/queryParameters';
import { HTTPException } from 'hono/http-exception';
import { LayoutSchema } from './schemas/layouts';
import { DurableObject } from "cloudflare:workers";
import streamToUint8Array from './lib/streamToUint8Array';
import { ImageMessageSchema } from './schemas/imageMessage';
import { PullConsumerMessageSchema } from './schemas/pullConsumerMessage';
import { WorkflowEntrypoint, WorkflowEvent, WorkflowStep } from "cloudflare:workers";
import { env } from 'hono/adapter';
import { NonRetryableError } from 'cloudflare:workflows';

export interface Env {
  WORKFLOW_KV_STORE: any;
  GOOGLE_FONTS(configuration: string, fontFamily: string, fontVariant: string, GOOGLE_FONTS: any, markup: ReactNode): unknown;
  SVG_BUCKET: R2Bucket;
  PNG_BUCKET: R2Bucket;
  PNG_QUEUE_PUBLISH: Queue<any>;
  IMAGE_QUEUE_PUBLISH: Queue<any>;
}

export class WorkflowKVStore extends DurableObject {
  constructor(private state: DurableObjectState, public env: Env) {
    super(state, env);
    console.log("WorkflowKVStore created");
  }

  async put(key: string, value: string) {
    console.log("PUT")
    await this.state.storage.put(key, value);
    return `Stored value for key: ${key}`;
  }

  // Method to retrieve a value
  async get(key: string) {
  console.log("GET")
    const value = await this.state.storage.get(key);
    if (value === undefined) {
      return undefined;
    }
    return value;
  }

  // Method to delete a value
  async delete(key: string) {
    await this.state.storage.delete(key);
    return `Deleted key: ${key}`;
  }
}

export type WorkflowEvent<T> = {
  payload: Readonly<T>;
  timestamp: Date;
  instanceId: string;
};

type Params = { queryParameters: z.infer<typeof QueryParametersSchema>, url: string};

// Create your own class that implements a Workflow
export class ImageGenWorkflow extends WorkflowEntrypoint<Env, Params> {
  // Define a run() method
  async run(event: Readonly<WorkflowEvent<Params>>, step: WorkflowStep) {
    const { userId, imageKey } = await step.do("Preprocessing", async (): Promise<{ userId: string; imageKey: string }> => {
      return { userId, imageKey: `${userId}:${event.payload.url.split('?')[1]}`};
    });

    await step.do("Store workflow ID", async () => {
      const id = this.env.WORKFLOW_KV_STORE.idFromName(imageKey);
      const stub = this.env.WORKFLOW_KV_STORE.get(id);

      if (await stub.get(imageKey)) {
        throw new NonRetryableError("Image already exists");
      }

      await stub.put(imageKey, event.instanceId);
    });

    const { imageMessage, vector } = await step.do("createVector", async () => {
      const { configuration, fontFamily, fontVariant, layout, layoutIndex } = event.payload.queryParameters;
      const parsedQueryParamaters = LayoutSchema.parse({
        discriminator: `${layout}${layoutIndex.toString()}`,
        data: event.payload.queryParameters,
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const markup = createMarkup(parsedQueryParamaters);
      const vector = await markupToVector(configuration, fontFamily, fontVariant, env.GOOGLE_FONTS, markup);
      const imageMessage: z.infer<typeof ImageMessageSchema> = { userData: { userId: userId }, imageMetadata: parsedQueryParamaters, imageKey: imageKey };

      return { imageMessage, vector };
    });

    await step.do("Cache svg", async () => {
      if (!this.env.SVG_BUCKET) {
        console.error("SVG_BUCKET is not defined in the environment");
      }

      await this.env.SVG_BUCKET.put(imageMessage.imageKey, vector);
    });

    const png = await step.do("createPng", async () => {
      const encoder = new TextEncoder();

      const response = await fetch("https://snapgen.media/png/", {
        method: "POST",
        headers: {
          "Accept": "*/*",
          "Connection": "keep-alive",
          "Content-Type": "image/svg+xml",
          "CF-Worker": "true",
          "User-Agent": "SnapGen/1.0 (Cloudflare Worker; +https://staticpress.host)"
        },
        body: encoder.encode(vector),
      });

      return await response.arrayBuffer();
    });

    await step.do("Cache png", async () => {
      if (!this.env.PNG_BUCKET) {
        console.error("PNG_BUCKET is not defined in the environment");
      }

      await this.env.PNG_BUCKET.put(imageMessage.imageKey, png, {
        httpMetadata: { contentType: "image/png" },
      });
    });

    await step.do("Publish png", async () => {
      await env.PNG_QUEUE_PUBLISH.send(imageMessage);
    });

  }
}

const app = new Hono<{ Bindings: Bindings }>().basePath('/api/snapgen');
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
await initWasm(wasmModule);

app.get('/', zValidator('query', QueryParametersSchema), async (c) => {
  const queryParameters = c.req.valid('query');
  const { configuration, fontFamily, fontVariant, layout, layoutIndex } = queryParameters;
  const parsedQueryParamaters = LayoutSchema.parse({
    discriminator: `${layout}${layoutIndex.toString()}`,
    data: queryParameters,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const markup = createMarkup(parsedQueryParamaters);

  const vector = await markupToVector(configuration, fontFamily, fontVariant, c.env.GOOGLE_FONTS, markup);

  const raster = vectorToRaster(vector);

  return c.body(raster, 200, {
    'Content-Type': 'image/png',
    'Access-Control-Allow-Origin': '*',
  });
});

app.post('/', zValidator('query', QueryParametersSchema), async (c) => {
  const queryParameters = c.req.valid('query');

  if (!c.env.IMAGE_GENERATION_WORKFLOWS) {
    console.error("IMAGE_GENERATION_WORKFLOWS is not defined in the environment");
  }

  const params: Params = { queryParameters: queryParameters, url: c.req.url.toString()};

  const instance = await c.env.IMAGE_GEN_WORKFLOW.create({params});

  return c.json({ instanceId: instance.id }, 200);
});

app.get('/image', async (c) => {
  const response = await fetch("https://api.cloudflare.com/client/v4/accounts/023d970e01bb762d77d714cf5f159ede/queues/b174c135f83046f580f138c4132de533/messages/pull", {
    method: "POST",
    headers: {
      authorization: `Bearer mSS8VsuMAtbH3B1FpCSd9fSrI-g3t5ggSfETxeoi`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      visibility_timeout_ms: 6000, batch_size: 1
    }),
  });

  const bodyJson = await response.json();

  const body = PullConsumerMessageSchema.parse(bodyJson);

  if (body.result.messages.length === 0) {
    return c.json({ error: 'No messages' }, 404);
  }

  const message = body.result.messages[0].body;

  const imageKey = message.imageKey;

  if (!c.env.PNG_BUCKET) {
    console.error("PNG_BUCKET is not defined in the environment");
  }

  const image = await c.env.PNG_BUCKET.get(imageKey);
  const imageBinary = await streamToUint8Array(image.body);

  return c.body(imageBinary, 200, {
    'Content-Type': 'image/png',
    'Access-Control-Allow-Origin': '*',
  });
});

app.onError((error, c) => {
  if (error instanceof z.ZodError) {
    return c.json({ error: error.issues }, 400);
  } else if (error instanceof HTTPException) {
    return c.json({ error: error.message }, error.status);
  } else if (error instanceof Error) {
    return c.json({ error: error.message }, 500);
  } else {
    return c.json({ error: 'Unknown error' }, 500);
  }
});

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch<any>, env: Environment) {
  },
}


/*

Testing:

POST https://staticpress.host/api/snapgen?authorImage=https%3A%2F%2Frockthejvm.com%2F_astro%2Fdaniel-ciocirlan.BPZFON2k.jpeg&authorName=Daniel%20Cioc%C3%AErlan&logo=https%3A%2F%2Frockthejvm.com%2Flogos%2Frtjvm.png&metadata1=10%20min%20read&metadata2=Feb%201%2C%202025&metadata3=Explanation&tag1=scala&tag2=scala-3&tag3=metaprogramming&title=Scala%203%20Inlines%20Explained&fontFamily=Roboto&fontVariant=regular&layout=article&layoutIndex=1&configuration=og
GET https://staticpress.host/api/snapgen/image

*/
