import { ReactNode } from 'satori';
import { ArticleLayoutSchema1 } from '../schemas/layouts';
import { z } from 'zod';

export default ({
	authorImage,
	authorName,
	metadata1,
	metadata2,
	metadata3,
	tag1,
	tag2,
	tag3,
	title,
}: z.infer<typeof ArticleLayoutSchema1>['data']): ReactNode => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'row',
			height: '100%',
			width: '100%',
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '4em',
		}}
	>
		<svg width="10em" height="10em" aria-hidden="true" class="h-48 w-full md:h-64" slot="logo" data-icon="companies/rock-the-jvm">
			{' '}
			<symbol id="ai:local:companies/rock-the-jvm" viewBox="0 0 1024 1024">
				<path
					fill="#0E203E"
					d="M770.438 11.438q1.902.869 3.807 1.735 4.154 1.892 8.303 3.794c7.068 3.234 14.163 6.409 21.254 9.593q6.338 2.848 12.675 5.702l2.583 1.162q8.194 3.69 16.388 7.384 5.536 2.496 11.074 4.99l5.293 2.388 7.353 3.314 2.188.989A272 272 0 0 0 872 57v371l6 2q2.089.856 4.147 1.784l2.298 1.033 2.434 1.105 2.571 1.159q4.058 1.832 8.112 3.669l5.37 2.422A3675 3675 0 0 1 931 454v382c-9.325 4.663-18.534 9.257-28.07 13.425a4610 4610 0 0 0-13.844 6.102l-2.485 1.099c-9.476 4.194-18.914 8.47-28.351 12.749l-13.34 6.045A10602 10602 0 0 1 817 888c-13.905 6.25-27.8 12.524-41.687 18.813a9775 9775 0 0 1-38.352 17.277c-14.406 6.449-28.796 12.932-43.188 19.411q-8.871 3.995-17.746 7.983a22092 22092 0 0 0-51.715 23.328 9373 9373 0 0 1-38.274 17.243 8578 8578 0 0 0-21.53 9.672l-2.757 1.242c-5.47 2.465-5.47 2.465-10.941 4.933l-7.591 3.422-2.294 1.037a490 490 0 0 1-4.152 1.847 108 108 0 0 0-4.35 2.084c-7.27 2.123-13.929-2.186-20.243-5.366l-3.162-1.562a2815 2815 0 0 1-10.143-5.052l-7.027-3.479q-6.883-3.405-13.762-6.82a1792 1792 0 0 0-21.211-10.326 6337 6337 0 0 1-33.75-16.375l-2.633-1.285-10.588-5.169q-13.887-6.78-27.779-13.545l-2.446-1.192a27607 27607 0 0 0-36.192-17.596 17457 17457 0 0 1-33.372-16.249 31183 31183 0 0 0-48.268-23.52 765 765 0 0 1-3.902-1.912 178 178 0 0 0-10.613-4.787l-2.35-1.003a130 130 0 0 0-4.488-1.813c-2.784-1.205-4.881-2.213-6.464-4.87-.855-2.429-1.44-4.863-2.03-7.371q-.807-2.932-1.623-5.86c-1.115-4.024-2.183-8.06-3.26-12.093l-1.461-5.446q-1.57-5.85-3.135-11.7-2.508-9.373-5.023-18.743-3.068-11.437-6.133-22.875-5.342-19.933-10.7-39.861l-.774-2.877-3.85-14.317-7.008-26.066-3.908-14.537-1.562-5.812-.782-2.907-53.125-197.625-16.402-61.015-.781-2.905a313808 313808 0 0 1-14.905-55.46l-.785-2.923-4.656-17.334a18719 18719 0 0 0-16.168-59.88q-2.54-9.345-5.074-18.693a9282 9282 0 0 0-4.85-17.796q-1.49-5.464-2.969-10.93a1615 1615 0 0 0-1.382-5.058c-.633-2.302-1.256-4.606-1.878-6.912l-.56-2.014C58.214 221.49 57.657 218.003 58 214c1.844-2.098 1.844-2.098 4.5-4.062l3.031-2.317 1.68-1.258c3.33-2.537 6.55-5.212 9.789-7.863l4.137-3.36c4.965-4.033 9.915-8.085 14.863-12.14l5.5-4.5 2.75-2.25 22.02-18.016 5.304-4.343q2.654-2.175 5.313-4.344a1715 1715 0 0 0 7.258-5.969L148.5 140l2.106-1.747 1.988-1.628 1.771-1.46c3.336-2.376 5.74-2.17 9.594-1.533l3.101.502 3.4.573 3.583.585q4.868.798 9.732 1.612 5.092.846 10.187 1.68 8.558 1.41 17.114 2.83a16367 16367 0 0 0 24.113 3.986 28885 28885 0 0 1 37.48 6.195l3.118.519 2.7.448c2.514.438 5.013.927 7.513 1.438 9.192 33.465 18.229 66.971 27.188 100.5.38 1.426.38 1.426.77 2.881Q320.984 283.688 328 310c3.448-1.65 6.12-3.606 9.063-6.062l2.94-2.442L343 299q2.748-2.253 5.5-4.5l2.75-2.25 10.977-8.98 5.734-4.696 2.914-2.387 2.617-2.144L376 272l2.13-2.181c3.969-2.515 6.91-1.784 11.308-.96l2.702.446q3.121.518 6.238 1.065c4.06.706 8.125 1.373 12.192 2.034a7948 7948 0 0 1 21.839 3.588q6.376 1.055 12.751 2.121 6.26 1.047 12.522 2.073 2.364.39 4.727.79c2.186.369 4.375.727 6.564 1.084l3.758.625c4.235.408 7.01.158 10.558-2.216l2.336-1.969 2.637-2.191L491 274q2.715-2.221 5.438-4.437L502 265a5878 5878 0 0 1 21.085-17.193Q531.558 240.922 540 234l8.492-6.957L551 225l2.174-2.172c3.745-2.422 6.373-1.898 10.545-1.117l2.3.372c2.498.409 4.989.85 7.481 1.292q2.6.435 5.2.864 5.41.898 10.814 1.828c5.39.923 10.788 1.793 16.19 2.648l7.6 1.208q5.841.929 11.68 1.878l3.898.63C632 233 632 233 635 234V57l40-18c9.66-4.365 9.66-4.365 19.315-8.738A11490 11490 0 0 1 743.437 8.12c10.799-4.714 16.629-1.487 27 3.319"
				/>
				<path
					fill="#C82D51"
					d="m759.595 407.021 2.83 1.288 3.289 1.484 3.599 1.645q1.919.87 3.839 1.737 4.188 1.895 8.372 3.796c4.6 2.087 9.205 4.16 13.812 6.228l4.867 2.187 2.478 1.113a10932 10932 0 0 1 34.018 15.349l13.306 6.032a3290 3290 0 0 0 41.955 18.666l2.048.896q2.71 1.187 5.424 2.369C902 471 902 471 903 472c.098 1.84.124 3.684.123 5.527l.006 3.658-.009 4.07q0 2.143.003 4.285.002 5.914-.007 11.828-.005 6.368-.002 12.734 0 11.04-.008 22.082-.011 15.963-.012 31.926-.004 25.896-.019 51.793-.014 25.162-.02 50.325v3.13l-.005 15.55Q903.034 753.454 903 818l-3.12 1.45-4.092 1.907-2.05.953a428 428 0 0 0-15.904 7.836 111 111 0 0 1-10.232 4.596c-6.967 2.734-13.72 5.934-20.507 9.08a6015 6015 0 0 1-14.956 6.9 2023 2023 0 0 1-24.844 11.222 1246 1246 0 0 0-19 8.625 3109 3109 0 0 1-10.957 5.053 849 849 0 0 0-5.376 2.505 809 809 0 0 1-7.548 3.49l-2.263 1.084c-6.141 2.768-10.203 2.399-16.584.018a276 276 0 0 1-3.649-1.649l-2.043-.914c-2.233-1.002-4.46-2.016-6.687-3.031l-4.789-2.155q-6.395-2.882-12.783-5.783-6.46-2.928-12.925-5.843-10.53-4.757-21.054-9.528a12934 12934 0 0 0-33.909-15.305C633.176 831.954 618.586 825.483 604 819V472c9.326-4.663 18.537-9.258 28.073-13.427 4.6-2.016 9.196-4.045 13.79-6.077l2.477-1.095c9.768-4.323 19.495-8.738 29.223-13.151 12.921-5.86 25.852-11.694 38.832-17.423a988 988 0 0 0 18.629-8.477c3.573-1.621 7.193-3.083 10.855-4.49 2.147-.808 2.147-.808 4.086-2.032 3.419-1.391 6.3-.117 9.63 1.193"
				/>
				<path
					fill="#B0274D"
					d="M187.125 166.375q4.003.671 8.008 1.336l1.99.333c5.586.927 11.187 1.729 16.795 2.514 3.854.553 7.685 1.205 11.52 1.88 8.225 1.42 16.481 2.499 24.77 3.472l2.808.344 2.477.291c3.092.561 5.651 1.102 8.507 2.455 1.32 2.698 1.32 2.698 2.125 6.129l.945 3.829.462 2.016c.459 1.985.952 3.958 1.46 5.932A1190 1190 0 0 1 272 208.937c2.273 9.22 4.602 18.416 7.067 27.587 1.316 4.902 2.594 9.814 3.87 14.726 1.845 7.086 3.696 14.17 5.563 21.25 2.101 7.97 4.184 15.945 6.26 23.922 1.212 4.651 2.429 9.3 3.662 13.945l.68 2.565q.622 2.346 1.25 4.691c1.352 5.098 2.538 10.22 3.648 15.377l-2.816 2.195c-6.168 4.82-12.31 9.63-18.184 14.805 2.017 9.81 4.338 19.5 6.875 29.188l1.072 4.123q1.52 5.845 3.053 11.689l.76 2.9a6421 6421 0 0 0 3.033 11.522c1.392 5.273 2.769 10.55 4.144 15.828l.76 2.915 3.074 11.792 2.291 8.793.758 2.907a3307 3307 0 0 0 3.457 13.167 1818 1818 0 0 1 7.668 29.994A403 403 0 0 0 324 510a2535 2535 0 0 1 3.375 12.438l.883 3.255a860 860 0 0 1 4.476 17.268c2.911 11.747 6.005 23.448 9.074 35.154q1.064 4.059 2.123 8.118c3.55 13.6 7.134 27.183 11.05 40.683 2.274 7.875 4.27 15.808 6.207 23.771 2.86 11.764 2.86 11.764 6.29 23.37C368 676 368 676 368 679l3.606.36c6.6.735 13.141 1.827 19.695 2.89l4.103.661 8.544 1.382q5.469.886 10.938 1.765l8.45 1.364 4.034.65q2.814.455 5.627.912l3.229.523L439 690l2.269.4c1.731.6 1.731.6 3.435 3.214l1.687 3.484.926 1.882c.99 2.021 1.962 4.052 2.933 6.082q1.018 2.088 2.04 4.174 1.995 4.075 3.967 8.161a976 976 0 0 0 6.055 12.29l1.762 3.56c1.497 2.968 3.086 5.879 4.696 8.788l1.434 2.624a345 345 0 0 0 2.825 5.05l1.26 2.307 1.147 2.04c.564 1.944.564 1.944-.031 4.042-1.804 2.443-3.38 3.133-6.17 4.32l-3.08 1.337-3.405 1.433q-2.717 1.173-5.432 2.35-1.962.85-3.927 1.696c-7.818 3.365-15.58 6.854-23.347 10.34a12816 12816 0 0 1-14.592 6.537 6950 6950 0 0 1-12.901 5.764c-7.754 3.46-15.413 7.01-22.98 10.867-3.193 1.562-6.45 2.858-9.762 4.14-9.327 3.71-18.458 7.924-27.53 12.211-6.21 2.914-12.495 5.657-18.779 8.407-7.811 3.42-15.572 6.904-23.281 10.547-9.326 4.358-18.778 8.454-28.195 12.61q-2.893 1.285-5.775 2.595l-2.444 1.111-2.102.966C260 856 260 856 258 856c-3.97-13.136-7.559-26.364-11.097-39.623a5691 5691 0 0 0-3.482-12.944 11379 11379 0 0 1-9.438-35.251 11768 11768 0 0 0-9.124-33.996q-2.182-8.092-4.359-16.186l-1.75-6.5-10.5-39-.875-3.249-1.752-6.51q-2.167-8.05-4.338-16.1A11960 11960 0 0 1 192 612l-4.89-18.343c-2.918-10.95-5.878-21.885-8.977-32.785-6.216-21.894-12.09-43.88-17.967-65.867q-1.738-6.5-3.48-13a17113 17113 0 0 1-19.054-71.692A7920 7920 0 0 0 124.187 360l-2.064-7.645a58706 58706 0 0 0-9.474-35.04q-4.292-15.848-8.57-31.7-2.14-7.934-4.29-15.866a8822 8822 0 0 1-4.06-15.02q-.752-2.79-1.51-5.578-1.047-3.851-2.08-7.705l-.617-2.249c-1.26-4.727-2.24-9.303-2.522-14.197 2.075-2.318 3.601-3.639 6.125-5.312q1.951-1.407 3.898-2.82l2.015-1.431c3.036-2.223 5.868-4.663 8.712-7.125a473 473 0 0 1 13.46-11.09c3.595-2.863 7.162-5.76 10.728-8.66l2.097-1.705q5.895-4.796 11.778-9.607l2.601-2.105a179 179 0 0 0 5.422-4.696l2.851-2.512 2.512-2.285c7.391-4.36 17.872-.65 25.926.723"
				/>
				<path
					fill="#732159"
					d="m577 637 1 199c31.724 14.359 31.724 14.359 63.484 28.633 9.136 4.09 18.264 8.197 27.391 12.304l2.563 1.154A31896 31896 0 0 1 720 900c-2.954 2.38-5.861 3.975-9.328 5.504l-3.298 1.465-3.624 1.593-3.853 1.71q-3.11 1.385-6.222 2.763a4353 4353 0 0 0-23.357 10.462l-7.601 3.42q-13.181 5.932-26.346 11.895l-2.659 1.205-5.31 2.406-2.652 1.202-2.654 1.203a4695 4695 0 0 1-36.533 16.36 3328 3328 0 0 0-37.063 16.687l-2.303 1.053q-3.21 1.468-6.416 2.94l-1.91.874c-3.555 1.634-3.555 1.634-6.982 3.516-3.484 1.369-6.255.01-9.563-1.387l-2.928-1.433-3.369-1.64-3.654-1.798-3.85-1.877a4639 4639 0 0 1-8.23-4.021c-6.517-3.192-13.048-6.357-19.577-9.525l-6.698-3.254a11305 11305 0 0 0-31.168-15.085c-9.123-4.4-18.239-8.817-27.352-13.238q-15.491-7.516-31-15a16009 16009 0 0 1-33.114-16.026 12816 12816 0 0 0-31.681-15.31 4636 4636 0 0 1-22.83-11.101l-2.935-1.436q-7.256-3.55-14.51-7.108l-5.36-2.624c-.812-.4-1.624-.8-2.461-1.21A252 252 0 0 0 258 857c3.152-2.57 6.357-4.203 10.066-5.855l3.633-1.625q1.932-.855 3.863-1.707l3.958-1.763q12.013-5.339 24.154-10.38c5.763-2.403 11.41-5.015 17.053-7.69 5.544-2.598 11.164-5.026 16.773-7.48 10.763-4.713 21.507-9.454 32-14.75 3.454-1.727 6.942-3.252 10.5-4.75 7.748-3.373 15.413-6.93 23.093-10.454 11.695-5.362 23.4-10.697 35.157-15.921l3.251-1.447a979 979 0 0 1 16.241-7.033L461 764.76a679 679 0 0 1 6.111-2.553l2.71-1.15 2.384-.99c2.139-1.007 2.139-1.007 2.796-4.068-.656-1.913-.656-1.913-1.809-3.887l-1.25-2.316-1.378-2.485a3993 3993 0 0 1-2.825-5.234l-1.423-2.627c-1.752-3.266-3.422-6.567-5.065-9.889l-1.89-3.816-1.073-2.164a1660 1660 0 0 0-3.932-7.825 6687 6687 0 0 1-3.88-7.697q-.972-1.93-1.95-3.858-1.375-2.72-2.744-5.444l-1.623-3.215C443 693 443 693 443 691c5.63.672 11.218 1.488 16.813 2.41l5.007.81q3.891.631 7.78 1.271 3.794.624 7.587 1.232l2.318.388c9.165 1.65 9.165 1.65 17.628-1.13a115 115 0 0 0 2.992-2.793q1.69-1.532 3.387-3.055l1.74-1.585c2.787-2.468 5.733-4.72 8.685-6.986 5.507-4.269 10.82-8.726 16.087-13.286a367 367 0 0 1 12.562-10.358c2.602-2.067 5.164-4.177 7.726-6.293A3330 3330 0 0 1 559 647l1.672-1.373a564 564 0 0 1 5.203-4.19l1.622-1.339c3.644-2.87 4.566-3.098 9.503-3.098"
				/>
				<path
					fill="#EB5161"
					d="m759.595 407.021 2.83 1.288 3.289 1.484 3.599 1.645q1.919.87 3.839 1.737 4.188 1.895 8.372 3.796c4.6 2.087 9.205 4.16 13.812 6.228l4.867 2.187 2.478 1.113a10932 10932 0 0 1 34.018 15.349l13.306 6.032a3290 3290 0 0 0 41.955 18.666l2.048.896q2.71 1.187 5.424 2.369C902 471 902 471 903 472c.098 2.555.13 5.082.12 7.637l.003 2.453c.002 2.733-.004 5.466-.01 8.2l.001 5.852q-.001 7.971-.013 15.941c-.006 5.547-.006 11.094-.008 16.64q-.005 15.767-.021 31.535-.015 17.945-.022 35.89-.016 36.927-.05 73.852c-9.426-3.076-9.426-3.076-13.899-4.99l-2.571-1.093-2.69-1.155-2.873-1.222q-4.516-1.922-9.03-3.852c-11.86-5.071-23.691-10.115-35.822-14.509-3.212-1.216-6.187-2.645-9.213-4.253-3.22-1.568-6.61-2.672-9.984-3.863-5.048-1.839-9.972-3.969-14.918-6.063q-3-1.252-6-2.5l-3.004-1.254q-2.978-1.238-5.96-2.46a343 343 0 0 1-15.598-6.848c-4.909-2.296-9.842-4.22-14.954-6.008-2.95-1.105-5.68-2.477-8.468-3.934-3.042-1.503-6.194-2.69-9.36-3.906-3.809-1.563-7.457-3.442-11.113-5.332-2.55-.998-2.55-.998-5.18-.078-2.275 1.27-3.58 2.459-5.363 4.32a173 173 0 0 1-5.375 3.438c-3.762 2.316-7.182 4.798-10.625 7.562a70 70 0 0 1-3.625 2.063c-2.732 1.568-4.274 2.736-6.375 4.937q-1.987 1.025-4 2l-2 2c-2.697 1.763-5.436 3.452-8.176 5.148-2.83 1.793-2.83 1.793-5.324 3.852-2.624 2.1-5.332 3.856-8.187 5.625-3.885 2.4-3.885 2.4-7.313 5.375a393 393 0 0 1-5 3c-4.228 2.717-4.228 2.717-8 6l-4 2-2 2c-2.014 1.31-4.068 2.54-6.125 3.781-2.007 1.212-2.007 1.212-3.875 3.219a393 393 0 0 1-5 3c-4.228 2.717-4.228 2.717-8 6-4.5 3-4.5 3-8 3l-2 2V472c9.326-4.663 18.537-9.258 28.073-13.427 4.6-2.016 9.196-4.045 13.79-6.077l2.477-1.095c9.768-4.323 19.495-8.738 29.223-13.151 12.921-5.86 25.852-11.694 38.832-17.423a988 988 0 0 0 18.629-8.477c3.573-1.621 7.193-3.083 10.855-4.49 2.147-.808 2.147-.808 4.086-2.032 3.419-1.391 6.3-.117 9.63 1.193"
				/>
				<path
					fill="#F29B4B"
					d="m417.531 301.469 4.348.728q5.66.95 11.317 1.913 4.625.782 9.25 1.557 9.57 1.604 19.134 3.226l3.4.576c2.683.472 5.352.983 8.02 1.531 4.352 14.542 8.12 29.207 11.752 43.942 2.865 11.617 5.799 23.205 9.185 34.683 1.589 5.51 2.954 11.042 4.25 16.625 2.247 9.63 4.718 19.193 7.25 28.75l.593 2.236a1229 1229 0 0 0 8.008 28.815c1.875 6.485 3.452 13.01 4.907 19.601.836 3.617 1.855 7.167 2.89 10.73 2.446 8.465 4.558 17.003 6.665 25.555 2.352 9.522 4.735 19.03 7.281 28.502 2.519 9.394 4.965 18.807 7.414 28.219a4427 4427 0 0 0 2.616 10.009 4264 4264 0 0 1 3.048 11.685l.957 3.623.87 3.371c.255.974.51 1.948.771 2.952.54 2.69.791 4.969.543 7.702-2.02 2.36-2.02 2.36-4.812 4.75l-1.504 1.304A331 331 0 0 1 541 628l-2.793 2.332A948 948 0 0 1 530 637a4176 4176 0 0 0-5.5 4.5c-11 9-11 9-13.738 11.238a2050 2050 0 0 0-5.617 4.617 574 574 0 0 1-5.602 4.555c-2.507 2.005-2.507 2.005-4.555 4.024-2.875 2.61-4.824 4.035-8.8 4.14l-3.172-.316-3.502-.344a449 449 0 0 1-15.889-2.164l-3.485-.528q-5.57-.85-11.14-1.722l-3.813-.595a2726 2726 0 0 1-23.262-3.76q-5.01-.822-10.025-1.612c-3.24-.517-6.476-1.058-9.712-1.596l-3.633-.562-3.325-.566-2.925-.475C390 655 390 655 388.756 653.26c-.858-2.565-1.512-5.098-2.088-7.741l-.723-3.251-.757-3.457c-1.695-7.546-3.41-15.043-5.688-22.437-2.716-8.821-4.888-17.764-7.098-26.723-1.379-5.587-2.844-11.146-4.343-16.703-1.363-5.058-2.677-10.13-3.997-15.199a7209 7209 0 0 0-5.562-21.25c-2.538-9.63-5.052-19.267-7.562-28.904l-2.11-8.082a25327 25327 0 0 1-10.949-42.087 169636 169636 0 0 1-9.936-38.284A4024 4024 0 0 0 320 389q-1.602-6.03-3.187-12.062l-.788-2.967A640 640 0 0 1 314 366l-.914-3.441C313 360 313 360 314.52 357.945l2.293-1.82 2.546-2.074L322 352c.748-.605 1.495-1.21 2.266-1.832a609 609 0 0 1 4.804-3.84c3.644-2.896 7.257-5.829 10.868-8.765l2.096-1.705C347.7 331.25 353.352 326.628 359 322l2.52-2.059c4.304-3.517 8.602-7.04 12.882-10.586a2823 2823 0 0 0 6.936-5.747l2.135-1.764 1.914-1.588c7.54-5.87 23.228-.31 32.144 1.213"
				/>
				<path
					fill="#F3A04B"
					d="M766.414 40.578c.8.363 1.6.727 2.425 1.1 2.599 1.183 5.192 2.377 7.786 3.572q2.692 1.229 5.386 2.453 5.42 2.467 10.833 4.944c6.612 3.022 13.243 6 19.88 8.967l5.378 2.412A683 683 0 0 0 844 75v349c-4.999-3.75-9.374-7.2-13.906-11.352-7.393-6.45-15.659-10.157-24.594-14.023q-2.437-1.083-4.87-2.172a1554 1554 0 0 0-9.852-4.355 1469 1469 0 0 1-13.5-6.008l-4.028-1.813-1.93-.869c-3.925-1.763-7.858-3.51-11.79-5.257A161 161 0 0 1 753 375l-.044-2.288c-.076-3.488-.172-6.975-.269-10.462l-.068-3.598c-.329-10.935-2.701-20.228-6.385-30.484-2.807-7.89-5.474-15.819-8.077-23.777q-1.154-3.526-2.312-7.048l-3.352-10.214q-4.503-13.73-9.02-27.457l-.935-2.842c-6.726-20.442-13.531-40.857-20.35-61.267-7.276-21.78-14.526-43.566-21.59-65.416a2623 2623 0 0 0-8.32-25.311l-.934-2.79a5908 5908 0 0 0-4.437-13.2l-1.555-4.631-.727-2.14C663 77.227 663 77.227 663 75l1.546-.587c8.177-3.185 16.145-6.82 24.136-10.44a3588 3588 0 0 1 7.843-3.533c8.23-3.701 16.451-7.419 24.64-11.208 3.466-1.601 6.937-3.19 10.41-4.776q2.473-1.137 4.939-2.293a678 678 0 0 1 6.896-3.175l2.025-.97c7.817-3.496 13.747-.804 20.98 2.56"
				/>
				<path
					fill="#E0395D"
					d="m353 620 .918 3.523c2.137 8.176 4.302 16.34 6.582 24.477 1.808 6.47 3.582 12.947 5.313 19.438l.664 2.458C367.3 673.007 368 675.767 368 679l3.606.36c6.6.735 13.141 1.827 19.695 2.89l4.103.661 8.544 1.382q5.469.886 10.938 1.765l8.45 1.364 4.034.65q2.814.455 5.627.912l3.229.523L439 690l2.269.4c1.731.6 1.731.6 3.435 3.214l1.687 3.484.926 1.882c.99 2.021 1.962 4.052 2.933 6.082q1.018 2.088 2.04 4.174 1.995 4.075 3.967 8.161a976 976 0 0 0 6.055 12.29l1.762 3.56c1.497 2.968 3.086 5.879 4.696 8.788l1.434 2.624a345 345 0 0 0 2.825 5.05l1.26 2.307 1.147 2.04c.564 1.944.564 1.944-.031 4.042-1.804 2.443-3.38 3.133-6.17 4.32l-3.08 1.337-3.405 1.433q-2.717 1.173-5.432 2.35-1.962.85-3.927 1.696c-7.818 3.365-15.58 6.854-23.347 10.34a12816 12816 0 0 1-14.592 6.537 6950 6950 0 0 1-12.901 5.764c-7.754 3.46-15.413 7.01-22.98 10.867-3.193 1.562-6.45 2.858-9.762 4.14-9.327 3.71-18.458 7.924-27.53 12.211-6.21 2.914-12.495 5.657-18.779 8.407-7.811 3.42-15.572 6.904-23.281 10.547-9.326 4.358-18.778 8.454-28.195 12.61q-2.893 1.285-5.775 2.595l-2.444 1.111-2.102.966C260 856 260 856 258 856c-3.97-13.136-7.559-26.364-11.097-39.623a5691 5691 0 0 0-3.482-12.944 11379 11379 0 0 1-9.438-35.251 11768 11768 0 0 0-9.124-33.996q-2.182-8.092-4.359-16.186l-1.75-6.5-3.5-13-.876-3.254q-.87-3.228-1.736-6.456a2799 2799 0 0 0-4.599-16.923l-.97-3.547q-.918-3.35-1.848-6.695l-.838-3.07-.738-2.673c-.81-3.616-1.228-7.2-1.645-10.882a8027 8027 0 0 1 103.094-17.976l2.22-.373q5.303-.89 10.607-1.777c5.56-.932 11.12-1.87 16.665-2.886l2.394-.438q2.892-.537 5.78-1.09c3.453-.49 6.757-.542 10.24-.46"
				/>
				<path
					fill="#ED615D"
					d="M187.125 166.375q4.003.671 8.008 1.336l1.99.333c5.586.927 11.187 1.729 16.795 2.514 3.854.553 7.685 1.205 11.52 1.88 8.225 1.42 16.481 2.499 24.77 3.472l2.808.344 2.477.291c3.092.561 5.651 1.102 8.507 2.455 1.32 2.698 1.32 2.698 2.125 6.129l.945 3.829.462 2.016c.459 1.985.952 3.958 1.46 5.932A1190 1190 0 0 1 272 208.937c2.273 9.22 4.602 18.416 7.067 27.587 1.316 4.902 2.594 9.814 3.87 14.726 1.845 7.086 3.696 14.17 5.563 21.25 2.101 7.97 4.184 15.945 6.26 23.922 1.212 4.651 2.429 9.3 3.662 13.945l.68 2.565q.622 2.346 1.25 4.691c1.352 5.098 2.538 10.22 3.648 15.377l-2.816 2.195c-6.168 4.82-12.31 9.63-18.184 14.805 2.017 9.81 4.338 19.5 6.875 29.188l1.072 4.123q1.52 5.845 3.053 11.689l.76 2.9a6421 6421 0 0 0 3.033 11.522c1.392 5.273 2.769 10.55 4.144 15.828l.76 2.915 3.074 11.792 2.291 8.793.758 2.907a3307 3307 0 0 0 3.457 13.167 1818 1818 0 0 1 7.668 29.994A398 398 0 0 0 324 510c1.085 3.89 2.14 7.787 3.188 11.688l.865 3.126.802 3.01.74 2.722c.418 2.533.226 4.047-.595 6.454-7.136-9.068-14.191-18.182-21-27.5-5.177-7.082-10.487-14.041-15.895-20.948a889 889 0 0 1-12.43-16.31c-4.143-5.55-8.343-11.054-12.55-16.555a1307 1307 0 0 1-15.5-20.687c-8.508-11.599-17.331-22.936-26.234-34.234q-3.448-4.38-6.891-8.766-4.069-5.182-8.145-10.36a4456 4456 0 0 1-17.156-21.958 3866 3866 0 0 0-14.872-18.996q-4.103-5.216-8.2-10.435a7250 7250 0 0 0-6.912-8.786l-2.778-3.527-1.363-1.73a661 661 0 0 1-6.918-8.942l-1.384-1.82a695 695 0 0 1-2.6-3.448c-2.182-2.956-2.182-2.956-5.172-4.998l-1-3-3-2-1-3-2-1-2-4-1.375-1.375c-2.277-2.277-3.856-4.943-5.625-7.625l-2-2a162 162 0 0 1-2.5-3.312 852 852 0 0 0-8-10.563l-1.255-1.633a1322 1322 0 0 0-7.792-10.015l-1.857-2.372a1559 1559 0 0 0-3.598-4.573C96.069 235.515 92.462 230.349 89 225l2.605-2.02c6.713-5.225 13.315-10.545 19.785-16.068a433 433 0 0 1 11.82-9.69c3.595-2.863 7.162-5.76 10.728-8.66l2.097-1.705q5.895-4.796 11.778-9.607l2.601-2.105a179 179 0 0 0 5.422-4.696l2.851-2.512 2.512-2.285c7.391-4.36 17.872-.65 25.926.723"
				/>
				<path
					fill="#871F4D"
					d="M604 680c5.477.782 8.142 1.259 12.805 3.527l3.39 1.622c.595.29 1.19.58 1.805.878 3.325 1.615 6.669 3.192 10.012 4.77l2.177 1.029c8.76 4.12 17.627 7.99 26.499 11.861l5.223 2.283 7.987 3.488a7299 7299 0 0 1 29.79 13.105l2.7 1.193a8403 8403 0 0 1 43.482 19.373c6.819 3.058 13.64 6.105 20.49 9.094l3.378 1.474q2.948 1.284 5.903 2.555c5.337 2.32 10.567 4.818 15.765 7.434l2.12 1.063 4.352 2.185q3.892 1.954 7.785 3.904l5.623 2.818 14.652 7.34q5.505 2.755 11.008 5.514c27.72 14.244 27.72 14.244 56.048 27.175 2.703 1.183 4.175 2.054 6.006 4.315l-2.719 1.25c-7.565 3.496-15.067 7.083-22.472 10.908a110 110 0 0 1-10.207 4.584c-6.967 2.734-13.72 5.934-20.507 9.08-4.143 1.92-8.291 3.83-12.439 5.74l-2.517 1.16a2023 2023 0 0 1-24.844 11.222 1246 1246 0 0 0-19 8.625 3109 3109 0 0 1-10.957 5.053 849 849 0 0 0-5.376 2.505 809 809 0 0 1-7.548 3.49l-2.263 1.084c-6.141 2.768-10.203 2.399-16.584.018a276 276 0 0 1-3.649-1.649l-2.043-.914c-2.233-1.002-4.46-2.016-6.687-3.031l-4.789-2.155q-6.395-2.882-12.783-5.783-6.46-2.928-12.925-5.843-10.53-4.757-21.054-9.528a12934 12934 0 0 0-33.909-15.305C633.176 831.954 618.586 825.483 604 819z"
				/>
				<path
					fill="#F28D4D"
					d="M563 251c8.807.089 17.64 2.005 26.303 3.483q3.803.647 7.61 1.286 8.076 1.36 16.15 2.731 9.372 1.589 18.746 3.166 3.725.628 7.448 1.264c7.566 1.28 15.09 2.445 22.743 3.07 2.097 5.317 3.716 10.486 4.938 16.063 1.661 7.306 3.525 14.538 5.48 21.772 3.908 14.545 7.605 29.143 11.222 43.761l.844 3.404.742 3a257 257 0 0 0 1.75 6.41c1.044 3.66 2 7.332 2.934 11.02l1.06 4.156q.826 3.238 1.646 6.478a2716 2716 0 0 0 1.607 6.303l.96 3.785c.533 2.725.533 2.725 1.817 3.848.04 1.666.043 3.334 0 5q-16.514 7.479-33.035 14.946-8.73 3.947-17.457 7.903-5.376 2.436-10.754 4.865-2.537 1.147-5.072 2.299c-8.476 3.849-16.938 7.527-25.66 10.794-5.203 2.054-10.195 4.533-15.21 7.005q-3.018 1.485-6.042 2.958l-2.638 1.3C579 454 579 454 577 454v145c-2.215-3.322-2.862-5.894-3.805-9.766l-.5-2.031c-.53-2.15-1.05-4.301-1.57-6.453q-1.025-4.196-2.055-8.39l-.515-2.106c-1.75-7.113-3.647-14.182-5.555-21.254a3807 3807 0 0 1-2.437-9.25l-1.926-7.328-1.856-7.047q-3.793-14.404-7.548-28.818A10423 10423 0 0 0 542 469q-4.41-16.725-8.771-33.46a6089 6089 0 0 0-4.667-17.79 5095 5095 0 0 1-6.125-23.5 2738 2738 0 0 0-6.343-24.125c-1.883-7.062-3.694-14.143-5.523-21.219a1854 1854 0 0 0-4.696-17.844c-2.415-8.989-4.637-18.027-6.875-27.062a237 237 0 0 1 15.688-13.25 349 349 0 0 0 14.562-11.937c4.58-3.964 9.205-7.837 13.957-11.594 3.808-3.025 7.581-6.09 11.356-9.156l2.169-1.76 2.022-1.643 1.822-1.48c1.388-1.113 1.388-1.113 2.424-2.18"
				/>
				<path
					fill="#D63458"
					d="M313 360c4.93 4.133 9.565 8.43 14.094 12.996l2.033 2.037q2.168 2.175 4.332 4.351 3.436 3.454 6.877 6.9 8.54 8.564 17.073 17.136 7.222 7.251 14.452 14.497 3.371 3.383 6.74 6.771l4.176 4.187 1.863 1.878c3.72 3.72 7.568 7.236 11.548 10.677 6.78 5.876 13.17 12.21 19.603 18.462a495 495 0 0 0 5.679 5.391c12.167 11.388 20.33 20.674 23.134 37.407.514 2.997 1.217 5.933 1.932 8.887.487 2.017.948 4.04 1.405 6.064 1.158 4.92 2.577 9.759 3.997 14.609 2.3 7.87 4.297 15.768 6.14 23.757a295 295 0 0 0 4.399 16.567c4.903 16.888 9.224 33.94 13.67 50.953q1.838 7.03 3.681 14.06A53415 53415 0 0 1 487 665c1.918-9.965 3.678-19.933 5.191-29.969l1.174-7.664q.904-5.931 1.804-11.862.882-5.8 1.772-11.599l.537-3.567c.904-5.884 1.999-11.586 3.522-17.339.216-1.807.39-3.62.5-5.437a57 57 0 0 1 1.434-9.7c1.24-5.368 1.936-10.776 2.628-16.238q.374-2.919.754-5.836l.327-2.572C507 541 507 541 508 538c.3-2.184.564-4.372.813-6.562 1.027-8.688 2.364-17.322 3.72-25.963 1.108-7.065 2.123-14.128 2.975-21.229L516 482l2-1 .67 2.7 2.528 10.148 1.082 4.349a1388 1388 0 0 0 6.545 25.384c1.818 6.805 3.567 13.627 5.331 20.446a7651 7651 0 0 0 5.81 22.306q1.99 7.604 3.97 15.21 1.017 3.891 2.04 7.783c1.003 3.814 1.996 7.63 2.989 11.447l.928 3.51.841 3.254.744 2.842c.53 2.658.762 4.92.522 7.621-2.02 2.36-2.02 2.36-4.812 4.75l-1.504 1.304A331 331 0 0 1 541 628l-2.793 2.332A948 948 0 0 1 530 637a4176 4176 0 0 0-5.5 4.5c-11 9-11 9-13.738 11.238a2050 2050 0 0 0-5.617 4.617 574 574 0 0 1-5.602 4.555c-2.507 2.005-2.507 2.005-4.555 4.024-2.875 2.61-4.824 4.035-8.8 4.14l-3.172-.316-3.502-.344a449 449 0 0 1-15.889-2.164l-3.485-.528q-5.57-.85-11.14-1.722l-3.813-.595a2726 2726 0 0 1-23.262-3.76q-5.01-.822-10.025-1.612c-3.24-.517-6.476-1.058-9.712-1.596l-3.633-.562-3.325-.566-2.925-.475C390 655 390 655 388.756 653.26c-.858-2.565-1.512-5.098-2.088-7.741l-.723-3.251-.757-3.457c-1.695-7.546-3.41-15.043-5.688-22.437-2.716-8.821-4.888-17.764-7.098-26.723-1.379-5.587-2.844-11.146-4.343-16.703-1.363-5.058-2.677-10.13-3.997-15.199a7209 7209 0 0 0-5.562-21.25c-2.538-9.63-5.052-19.267-7.562-28.904l-2.11-8.082a25327 25327 0 0 1-10.949-42.087 169636 169636 0 0 1-9.936-38.284A4024 4024 0 0 0 320 389q-1.602-6.03-3.187-12.062l-.788-2.967c-1.217-4.64-2.359-9.212-3.025-13.971"
				/>
				<path
					fill="#F17555"
					d="M903 473v197c-10.122-3.374-10.122-3.374-13.899-4.99-1.273-.54-1.273-.54-2.571-1.093l-2.69-1.155-2.873-1.222a5347 5347 0 0 1-9.03-3.852c-11.86-5.071-23.691-10.115-35.822-14.509-3.212-1.216-6.187-2.645-9.213-4.253-3.22-1.568-6.61-2.672-9.984-3.864-5.048-1.838-9.972-3.968-14.918-6.062q-3-1.252-6-2.5l-3.004-1.254q-2.978-1.238-5.96-2.46a343 343 0 0 1-15.598-6.848c-4.909-2.296-9.842-4.22-14.954-6.008-2.95-1.105-5.68-2.477-8.468-3.934-3.037-1.5-6.187-2.683-9.34-3.914-4.628-1.871-9.148-3.982-13.676-6.082 3.812-4.054 7.867-7.217 12.438-10.375l2.216-1.549c7.027-4.893 14.113-9.701 21.196-14.512a936 936 0 0 0 16.462-11.439c7.998-5.69 16.119-11.193 24.244-16.698a1612 1612 0 0 0 22.259-15.393c7.93-5.571 15.93-11.037 23.937-16.498q4.333-2.964 8.653-5.947a1256 1256 0 0 1 18.45-12.484c3.839-2.57 7.65-5.176 11.457-7.793.659-.451 1.317-.903 1.995-1.369 3.217-2.215 6.4-4.462 9.548-6.775C901 473 901 473 903 473"
				/>
				<path
					fill="#D63558"
					d="M662 267c1.846 2.77 2.44 4.22 3.148 7.36l.602 2.606.625 2.784q.668 2.888 1.34 5.773l.663 2.855c1.234 5.206 2.656 10.359 4.057 15.522 3.91 14.52 7.593 29.1 11.205 43.696l.844 3.404.742 3a257 257 0 0 0 1.75 6.41c1.044 3.66 2 7.332 2.934 11.02l1.06 4.156q.826 3.238 1.646 6.478a2716 2716 0 0 0 1.607 6.303l.96 3.785c.533 2.725.533 2.725 1.817 3.848.04 1.666.043 3.334 0 5q-16.514 7.479-33.035 14.946-8.73 3.947-17.457 7.903-5.376 2.436-10.754 4.865-2.537 1.147-5.072 2.299c-8.476 3.849-16.938 7.527-25.66 10.794-5.203 2.054-10.195 4.533-15.21 7.005q-3.018 1.485-6.042 2.958l-2.638 1.3C579 454 579 454 577 454v145c-2.215-3.322-2.862-5.894-3.805-9.766l-.5-2.031c-.53-2.15-1.05-4.301-1.57-6.453q-1.025-4.196-2.055-8.39l-.515-2.106c-1.75-7.113-3.647-14.182-5.555-21.254a3807 3807 0 0 1-2.437-9.25l-1.926-7.328-1.856-7.047q-3.793-14.404-7.548-28.818A10423 10423 0 0 0 542 469q-4.41-16.725-8.771-33.46a6089 6089 0 0 0-4.667-17.79 5095 5095 0 0 1-6.125-23.5c-1.79-6.922-3.583-13.844-5.437-20.75-1.923-7.18-3.81-14.37-5.687-21.562l-.94-3.575-.885-3.398-.795-3.043c-.702-2.961-1.227-5.916-1.693-8.922 8.512 7.158 17.004 14.406 24.153 22.951 1.902 2.11 3.904 3.922 6.05 5.783 7.628 6.8 14.733 14.133 21.922 21.391q4.219 4.258 8.445 8.508l1.901 1.926c3.723 3.743 7.576 7.257 11.571 10.708 3.137 2.777 6.072 5.743 9.013 8.725l1.902 1.914q2.962 2.981 5.918 5.969 3.93 3.969 7.867 7.93l1.815 1.84c2.934 3.053 2.934 3.053 6.443 5.355l.295-2.766c.786-5.461 2.434-10.69 3.978-15.976l.984-3.403q1.028-3.555 2.062-7.105 1.574-5.407 3.134-10.816l2.946-10.166c1.303-4.468 2.628-8.915 4.134-13.32 1.744-5.146 3.098-10.381 4.475-15.635 4.257-16.015 8.845-31.932 13.437-47.854q1.814-6.292 3.621-12.588 1.406-4.893 2.816-9.784l1.337-4.65q.923-3.213 1.85-6.421l1.06-3.68C661 269 661 269 662 267"
				/>
				<path
					fill="#E13A5E"
					d="M727 598c4.971.414 8.391 1.546 12.766 3.895 2.524 1.249 5.075 2.176 7.734 3.105 3.295 1.159 6.408 2.378 9.5 4 2.997 1.568 5.994 2.76 9.188 3.875 5.377 1.89 10.454 4.248 15.605 6.68 3.848 1.734 7.764 3.131 11.746 4.523 2.16.81 4.116 1.714 6.149 2.797 4.552 2.384 9.364 4.07 14.177 5.841a340 340 0 0 1 15.131 6.012q4.012 1.698 8.035 3.37 12.688 5.283 25.367 10.585 2.84 1.188 5.683 2.373 4.187 1.748 8.372 3.499l2.486 1.036c8.064 3.376 16.047 6.903 24.061 10.409v147c-5.628-5.628-5.628-5.628-7.945-8.496l-1.557-1.92-1.623-2.021-1.727-2.137a1198 1198 0 0 1-11.912-15.064c-4.252-5.429-8.646-10.735-13.044-16.045a656 656 0 0 1-12.008-15.008c-3.649-4.67-7.404-9.245-11.184-13.809a749 749 0 0 1-13.88-17.253c-4.628-5.926-9.381-11.747-14.132-17.575-2.972-3.647-5.911-7.32-8.843-11a1415 1415 0 0 0-6.77-8.352c-4.693-5.758-9.36-11.533-13.937-17.383a2186 2186 0 0 0-11.938-15.125l-1.53-1.927c-2.212-2.772-4.46-5.387-6.97-7.885a523 523 0 0 1-4-5l-2.5-3a445 445 0 0 1-6.5-8l-2-2.5-2-2.5-2.062-2.562A288 288 0 0 1 740 616a1049 1049 0 0 0-4-5l-1.937-2.5c-2.075-2.616-2.075-2.616-4.813-5.125C727 601 727 601 727 598"
				/>
				<path
					fill="#F29B4E"
					d="M480 341c2.41 2.41 2.613 3.841 3.367 7.137l.739 3.166.769 3.385a5966 5966 0 0 0 1.61 6.875l.786 3.367c1.97 8.301 4.269 16.508 6.666 24.695 1.589 5.51 2.954 11.042 4.25 16.625 2.247 9.63 4.72 19.192 7.25 28.75l.59 2.228c2.594 9.789 5.248 19.557 8.21 29.243 2.905 9.764 2.761 17.634.95 27.654q-.57 3.345-1.136 6.691l-.556 3.235c-1.223 7.286-2.086 14.622-2.987 21.953A715 715 0 0 1 507 551l-.758 4.96-.805 5.227-.384 2.543c-.94 6.043-.94 6.043-2.053 8.27a258 258 0 0 0-.875 7.125c-.605 5.464-1.471 10.801-2.513 16.2-1.546 8.126-2.852 16.28-4.092 24.456l-.66 4.304q-.854 5.572-1.702 11.145-.873 5.723-1.75 11.446Q489.7 657.836 488 669c-1.423-2.679-2.435-5.206-3.2-8.139l-.654-2.475-.696-2.69-.75-2.855q-1.225-4.68-2.442-9.36-.855-3.268-1.712-6.534-2.256-8.62-4.503-17.24-2.27-8.697-4.547-17.393a30674 30674 0 0 1-5.13-19.623 4464 4464 0 0 0-7.528-28.55c-1.477-5.538-2.906-11.09-4.338-16.641-1.833-7.089-3.667-14.177-5.562-21.25l-.891-3.36c-.86-3.225-1.759-6.44-2.656-9.656L441.687 497l-.845-2.972-.768-2.84c-.23-.832-.462-1.663-.7-2.52-.952-6.797 1.584-13.6 3.407-20.09l.865-3.117q1.422-5.107 2.854-10.211l2.004-7.182c7.35-26.29 14.914-52.517 22.529-78.73q1.499-5.178 2.987-10.359l1.918-6.643.893-3.121.821-2.839.719-2.498C479 342 479 342 480 341"
				/>
				<path
					fill="#F3A14A"
					d="m353 620 .918 3.523c2.137 8.176 4.302 16.34 6.582 24.477 1.808 6.47 3.582 12.947 5.313 19.438l.664 2.458C367.3 673.007 368 675.767 368 679l3.606.36c6.6.735 13.141 1.827 19.695 2.89l4.103.661 8.544 1.382q5.469.886 10.938 1.765l8.45 1.364 4.034.65q2.814.455 5.627.912l3.229.523L439 690l2.269.4c1.731.6 1.731.6 3.435 3.214l1.687 3.484.926 1.882c.99 2.022 1.962 4.052 2.933 6.082q1.017 2.085 2.038 4.17a1760 1760 0 0 1 3.965 8.157 970 970 0 0 0 6.122 12.423l1.773 3.563a358 358 0 0 0 4.329 8.25l1.272 2.368a626 626 0 0 0 2.46 4.516C475 753.672 475 753.672 475 757a244 244 0 0 1-17.52-6.379l-2.421-.981a5236 5236 0 0 1-7.872-3.202q-2.803-1.14-5.607-2.278a19547 19547 0 0 1-53.257-21.75q-9.75-3.996-19.507-7.984a51383 51383 0 0 1-64.663-26.49q-8.318-3.414-16.637-6.823a18904 18904 0 0 1-60.264-24.82l-2.855-1.18-5.246-2.171A1375 1375 0 0 0 202 646v-1a8027 8027 0 0 1 103.094-17.976l2.22-.373q5.303-.89 10.607-1.777c5.56-.932 11.12-1.87 16.665-2.886l2.394-.438q2.892-.537 5.78-1.09c3.453-.49 6.757-.542 10.24-.46"
				/>
				<path
					fill="#D03155"
					d="M787 762c1.296 3.888.248 6.482-.874 10.266l-.64 2.233c-.702 2.443-1.417 4.882-2.13 7.321q-.736 2.55-1.47 5.102a4910 4910 0 0 1-3.9 13.454c-2.079 7.153-4.144 14.311-6.21 21.469q-1.08 3.737-2.17 7.472c-2.086 7.191-4.048 14.356-5.606 21.683a109 109 0 0 1-1.406 3.754c-2.634 6.672-4.205 13.726-5.989 20.662l-.886 3.299-.783 3.004c-.31.752-.618 1.505-.936 2.281-4.233 1.411-6.796-.415-10.637-2.207l-2.346-1.066c-2.572-1.17-5.138-2.355-7.705-3.54l-5.427-2.474a6090 6090 0 0 1-11.289-5.157c-7.696-3.52-15.416-6.986-23.137-10.452q-6.202-2.785-12.4-5.577l-2.492-1.12q-7.727-3.479-15.451-6.961l-15.587-7.027c-8.169-3.684-16.34-7.356-24.56-10.923l-3.586-1.559q-3.218-1.392-6.443-2.767l-2.78-1.201-2.386-1.018C606 820 606 820 605 818c10.906-4.209 22.099-7.575 33.25-11.062l3.302-1.035c37.174-11.642 74.483-22.875 111.874-33.8A2472 2472 0 0 0 787 762"
				/>
				<path
					fill="#E0395E"
					d="M179 559a159 159 0 0 1 18.067.779l2.602.251q4.232.412 8.464.833l5.994.584q7.898.77 15.795 1.55 7.868.774 15.734 1.54 12.14 1.185 24.276 2.378 14.265 1.4 28.533 2.773c9.995.964 19.986 1.951 29.973 3l3.767.392q4.397.458 8.795.92l.886 3.469a33616 33616 0 0 0 4.69 18.34l2.041 7.976.632 2.476A441 441 0 0 0 353 620l-2.27.377c-41.313 6.844-41.313 6.844-82.605 13.81l-3.871.662c-7.968 1.375-15.92 2.82-23.871 4.288l-3.048.56c-4.955.914-9.91 1.833-14.862 2.765l-5.395.999-2.47.472c-4.62.848-8.91 1.221-13.608 1.067-3.047-10.81-5.987-21.646-8.875-32.5l-1.028-3.862-1.553-5.835a11886 11886 0 0 0-5.419-20.303l-.867-3.252c-1.062-3.959-2.13-7.872-3.446-11.756-.954-2.928-.958-5.432-.812-8.492"
				/>
				<path
					fill="#7C2155"
					d="M663 77c2.117 3.175 3.098 5.925 4.3 9.543l.671 2.009q1.106 3.316 2.2 6.635l1.573 4.723q1.664 4.998 3.319 9.998 2.052 6.194 4.114 12.385a7595 7595 0 0 1 17.741 53.98 5191 5191 0 0 0 14.336 43.516l.912 2.728q4.11 12.293 8.232 24.582 2.745 8.187 5.48 16.378l.899 2.687c5.165 15.475 10.135 31.009 14.984 46.586 2.254 7.213 4.532 14.333 7.443 21.314 3.795 9.232 4.192 18.326 3.984 28.186l-.042 3.738A982 982 0 0 1 753 375l2 1-1.84.491c-6.38 1.796-12.122 4.226-18.035 7.197q-2.46 1.235-4.93 2.449l-2.155 1.084C726 388 726 388 722 388a3972 3972 0 0 1-7.717-29.244A6342 6342 0 0 0 709.5 340.5c-3.385-12.842-6.728-25.695-10.074-38.547a4197 4197 0 0 0-7.352-27.91c-1.441-5.405-2.85-10.818-4.261-16.23l-.795-3.047c-2.046-7.853-2.046-7.853-3.018-11.766l-1.712-.26q-3.833-.584-7.663-1.178l-2.695-.408-2.578-.4-2.38-.365C665 240 665 240 663 239z"
				/>
				<path
					fill="#F2874F"
					d="M604 473c4.132 1.377 7.164 2.483 10.836 4.54l2.699 1.495 2.84 1.59c6.46 3.576 12.92 7.089 19.563 10.313 10.62 5.194 20.81 11.184 31.062 17.062q4.448 2.546 8.898 5.09 2.727 1.563 5.452 3.128l2.474 1.419 2.16 1.24A130 130 0 0 0 696 522c-.653 3.318-1.893 5.783-3.625 8.676l-1.627 2.734-1.748 2.903-1.795 3.007Q684.61 543.665 682 548l-2.406 4.012a3588 3588 0 0 1-3.157 5.252c-2.635 4.38-5.234 8.782-7.827 13.187a2085 2085 0 0 1-16.86 28.111 1792 1792 0 0 0-18.298 30.737c-6.187 10.61-12.516 21.126-18.92 31.605-3.253 5.326-6.48 10.652-9.532 16.096h-1z"
				/>
				<path
					fill="#C72D51"
					d="m752 405 1 2c-.874 2.261-.874 2.261-2.29 5.117-.521 1.067-1.044 2.133-1.582 3.232l-1.753 3.526q-1.833 3.736-3.656 7.477l-.95 1.939c-3.063 6.275-5.982 12.613-8.894 18.959-6.13 13.31-12.539 26.479-18.989 39.636l-2.308 4.712-1.136 2.315a813 813 0 0 0-5.952 12.426l-1.24 2.646q-1.18 2.52-2.345 5.047l-1.066 2.282-.933 2.015C699 520 699 520 697 522c-4.517-.29-8.057-2.512-11.875-4.75l-4.281-2.457-2.344-1.354c-4.61-2.653-9.244-5.262-13.875-7.876l-2.976-1.682L653 499l-2.528-1.429c-8.44-4.763-16.915-9.376-25.61-13.656-7.044-3.47-13.954-7.183-20.862-10.915 2.082-2.273 3.928-3.622 6.736-4.878.748-.34 1.496-.678 2.267-1.027l2.458-1.087 2.572-1.158c2.778-1.248 5.56-2.486 8.342-3.725l5.798-2.601q7.14-3.203 14.29-6.39 5.184-2.318 10.365-4.646 6.803-3.054 13.61-6.097A5514 5514 0 0 0 688 433.484l7.998-3.61q2.57-1.16 5.136-2.323c9.722-4.403 19.473-8.709 29.333-12.797 7.283-3.028 14.418-6.35 21.533-9.754"
				/>
				<path
					fill="#D13256"
					d="M480 341c2.41 2.41 2.613 3.841 3.367 7.137l.739 3.166.769 3.385a5966 5966 0 0 0 1.61 6.875l.786 3.367c1.97 8.301 4.269 16.508 6.666 24.695 1.85 6.422 3.405 12.892 4.913 19.403a586 586 0 0 0 4.283 17.074l.56 2.116c1.114 4.218 1.114 4.218 2.249 8.43q.801 2.957 1.581 5.918l.935 3.467c.81 4.43.81 4.43-.458 6.967-1.929 1.302-1.929 1.302-4.52 2.453l-2.987 1.354-3.305 1.443-3.422 1.535a1422 1422 0 0 1-7.556 3.357c-4.575 2.016-9.138 4.056-13.702 6.096a6549 6549 0 0 1-20.89 9.29c-4.194 1.854-8.4 3.673-12.618 5.472 3.483-14.669 7.627-29.156 11.723-43.662q.892-3.157 1.78-6.315c6.762-24 13.619-47.971 20.556-71.921l.774-2.675q1.079-3.715 2.167-7.427l.814-2.813.807-2.756.729-2.501C479 342 479 342 480 341"
				/>
				<path
					fill="#DA375A"
					d="M563 251c8.807.089 17.64 2.005 26.303 3.483q3.803.647 7.61 1.286 8.076 1.36 16.15 2.731 9.372 1.589 18.746 3.166 3.725.628 7.448 1.264c7.566 1.28 15.09 2.445 22.743 3.07-3.303 2.202-5.98 2.955-9.809 3.988l-2.043.556c-2.193.595-4.39 1.182-6.586 1.769l-4.539 1.225c-8.639 2.327-17.292 4.585-25.984 6.706a478 478 0 0 0-15.543 4.108l-4.756 1.328-2.402.67c-6.438 1.79-12.888 3.531-19.338 5.275l-2.321.628A5246 5246 0 0 1 528.188 303l-2.747.72-7.773 2.03-2.303.602c-4.781 1.245-9.57 2.456-14.365 3.648l-2-6a237 237 0 0 1 15.688-13.25 349 349 0 0 0 14.562-11.937c4.58-3.964 9.205-7.837 13.957-11.594 3.808-3.025 7.581-6.09 11.356-9.156l2.169-1.76 2.022-1.643 1.822-1.48c1.388-1.113 1.388-1.113 2.424-2.18"
				/>
				<path
					fill="#582368"
					d="M693 277c7.526 7.283 14.227 15.191 20.625 23.466 4.07 5.228 8.38 10.221 12.745 15.204a320 320 0 0 1 10.587 12.783c3.015 3.76 6.144 7.42 9.276 11.083A701 701 0 0 1 750 344l1.633 1.787c1.832 2.965 1.71 5.041 1.66 8.51l-.03 3.652c-.024 1.254-.05 2.509-.076 3.801l-.04 3.848q-.054 4.701-.147 9.402l2 1-1.84.491c-6.38 1.796-12.122 4.226-18.035 7.197q-2.46 1.235-4.93 2.449l-2.155 1.084C726 388 726 388 722 388a3972 3972 0 0 1-7.717-29.244A6342 6342 0 0 0 709.5 340.5c-2.59-9.827-5.154-19.66-7.716-29.495q-1.213-4.65-2.429-9.298l-.814-3.118-1.537-5.877A1305 1305 0 0 1 693 277"
				/>
				<path
					fill="#E43D61"
					d="m752 345 2 1v4l1.59.652c3.355 1.877 6.1 4.383 8.972 6.91q1.897 1.65 3.797 3.293l1.885 1.635c3.19 2.743 6.457 5.388 9.72 8.041 10.151 8.257 20.237 16.59 30.204 25.067A1145 1145 0 0 0 819 403l-2 1c-2.365-.842-2.365-.842-5.379-2.219l-3.436-1.555-3.747-1.726-3.847-1.749a3077 3077 0 0 1-8.223-3.753c-4.516-2.068-9.04-4.12-13.563-6.17q-8.709-3.946-17.41-7.906l-3.599-1.638A161 161 0 0 1 753 375z"
				/>
				<path
					fill="#D48C49"
					d="m838 73 6 2v349c-2-2-2-2-2.248-4.41l.002-3.1-.012-3.569.017-3.955q0-2.088-.005-4.176c-.004-3.838.004-7.675.014-11.513.008-4.134.006-8.267.004-12.4q-.001-10.75.017-21.5c.016-10.36.021-20.722.024-31.083q.007-25.214.036-50.427.028-24.498.041-48.995l.002-3.049.007-15.141Q841.932 147.841 842 85l-2 2q.464-2.188.938-4.375l.527-2.46C842 78 842 78 843 76h-66v-1l61-1z"
				/>
				<path fill="#ED9B47" d="M575 571h1v23c-3.222-4.833-4.546-10.107-3.457-15.879A91 91 0 0 1 575 571" />
			</symbol>
			<use href="#ai:local:companies/rock-the-jvm"></use>{' '}
		</svg>

		<div
			style={{
				height: '50%',
				width: '50%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'center',
				gap: '0.5em',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: '1em',
					alignItems: 'center',
				}}
			>
				<img style={{ width: '2em' }} src={authorImage} />
				<span>{authorName}</span>
			</div>
			<div style={{ fontSize: 32, fontWeight: 600 }}>{title}</div>
			<div
				style={{
					fontSize: 16,
					fontWeight: 0,
				}}
			>
				{metadata1} · {metadata2} · {metadata3}
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: '0.5em',
				}}
			>
				<div style={{ backgroundColor: '#e0e8ff', padding: '5px 10px 5px 10px', borderRadius: '15px' }}>{tag1}</div>
				<div style={{ backgroundColor: '#e0e8ff', padding: '5px 10px 5px 10px', borderRadius: '15px' }}>{tag2}</div>
				<div style={{ backgroundColor: '#e0e8ff', padding: '5px 10px 5px 10px', borderRadius: '15px' }}>{tag3}</div>
			</div>
		</div>
	</div>
);
