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

export interface Env {
  IMAGE_QUEUE_PUBLISH: Queue<any>;
}

// export class StoredImage extends DurableObject {

//   constructor(ctx: DurableObjectState, env: Env) {
//     super(ctx, env);
//   }

//   async putImage(value: string): Promise<string> {
//     const existingImage: string | undefined = await this.ctx.storage.get("image");

//     if (existingImage) {
//       return existingImage;
//     }

//     await this.ctx.storage.put("image", value);

//     return value;
//   }

//   async getImage(): Promise<string | undefined> {
//     return this.ctx.storage.get("image");
//   }

//   async deleteImage(): Promise<void> {
//     await this.ctx.storage.delete("image");
//   }
// }

// export class StoredPng extends DurableObject {

//   constructor(ctx: DurableObjectState, env: Env) {
//     super(ctx, env);
//   }

//   async putImage(value: Uint8Array): Promise<Uint8Array> {
//     const existingImage: Uint8Array | undefined = await this.ctx.storage.get("image");

//     if (existingImage) {
//       return existingImage;
//     }

//     await this.ctx.storage.put("image", value);

//     return value;
//   }

//   async getImage(): Promise<Uint8Array | undefined> {
//     return this.ctx.storage.get("image");
//   }

//   async deleteImage(): Promise<void> {
//     await this.ctx.storage.delete("image");
//   }
// }



const app = new Hono<{ Bindings: Bindings }>().basePath('/api/snapgen');
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
await initWasm(wasmModule);

app.get('/', zValidator('query', QueryParametersSchema), async (c) => {
  console.log("tesing 1");
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
  const userId = "wkenend1";

  const queryParameters = c.req.valid('query');
  const { configuration, fontFamily, fontVariant, layout, layoutIndex } = queryParameters;
  const parsedQueryParamaters = LayoutSchema.parse({
    discriminator: `${layout}${layoutIndex.toString()}`,
    data: queryParameters,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const markup = createMarkup(parsedQueryParamaters);

  const vector = await markupToVector(configuration, fontFamily, fontVariant, c.env.GOOGLE_FONTS, markup);

  const imageKey = `${userId}:${c.req.url.split('?')[1]}`;

  // console.log("working1");
  // const imageId = c.env.SVG_CACHE.idFromName(imageKey);
  console.log("working2");

  // const obj = c.env.SVG_CACHE.get(imageId);

  await c.env.SVG_BUCKET.put(imageKey, vector);

  console.log("working3");

  await c.env.IMAGE_QUEUE_PUBLISH.send({ userData: { username: "wkenned1" }, imageMetadata: parsedQueryParamaters, imageKey: imageKey });

  console.log("working5");

  return c.body(vector, 200, {
    'Content-Type': 'image/svg+xml',
    'Access-Control-Allow-Origin': '*',
  });
});

app.get('/image', async (c) => {
  const response = await fetch("https://api.cloudflare.com/client/v4/accounts/023d970e01bb762d77d714cf5f159ede/queues/b174c135f83046f580f138c4132de533/messages/pull", {
    method: "POST",
    headers: {
      authorization: `Bearer mSS8VsuMAtbH3B1FpCSd9fSrI-g3t5ggSfETxeoi`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      visibility_timeout_ms: 6000, batch_size: 50
    }),
  });

  const body = await response.json();

  if (body.result.messages.length === 0) {
    return c.json({ error: 'No messages' }, 404);
  }

  const message = JSON.parse(body.result.messages[0].body);

  const imageKey = message.imageKey;

  return c.body(await c.env.PNG_BUCKET.get(imageKey), 200, {
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
    console.log(`MESSAGE: ${JSON.stringify(batch.messages[0].body)}`);
    const body = batch.messages[0].body;

    console.log("WORKING WORKING WORKING")

    // const imageId = env.SVG_CACHE.idFromName(body.imageKey);
    // const obj = env.SVG_CACHE.get(imageId);
    // const image = await obj.getImage();
    const image = await env.SVG_BUCKET.get(body.imageKey);

    console.log("TESIING 1")

    const encoder = new TextEncoder();
    const imageData = encoder.encode(image);

    console.log("TESIING 2")

    try {
      console.log(imageData);

      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream", // Change if needed (e.g., "image/png")
        },
        body: imageData, // Send the raw binary data
      });

      console.log(`RESPONSE: ${response.status} ${response.statusText}`);

      console.log("TESIING 3")


      // const pngKey = `png:${body.imageKey}`;

      // const pngId = env.PNG_CACHE.idFromName(pngKey);
      // const pngObj = env.PNG_CACHE.get(pngId);
      // const png = await pngObj.setImage(new Uint8Array(await response.arrayBuffer()));

      await env.PNG_BUCKET.put(body.imageKey, new Uint8Array(await response.arrayBuffer()));

      console.log("TESIING 4")


      await env.PNG_QUEUE_PUBLISH.send({ userData: { username: "wkenned1" }, imageMetadata: body.imageMetadata, imageKey: body.imageKey });

      console.log("TESIING 5")
    }
    catch (error) {
      console.error("Error processing image:", error);
    }

  },
}
