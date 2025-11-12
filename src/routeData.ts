import type { APIContext } from 'astro';
import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
	updateHead(context);
});

function updateHead(context: APIContext) {
	const { head } = context.locals.starlightRoute;

	const is404 = context.url.pathname.endsWith('/404/');

	// Algolia docsearch language facet
	head.push({ tag: 'meta', attrs: { name: 'docsearch:language', content: 'en' } });

	// Fathom analytics
	head.push({
		tag: 'script',
		attrs: {
			src: 'https://cdn.usefathom.com/script.js',
			'data-site': 'EZBHTSIG',
			'data-canonical': is404 ? 'false' : 'true',
			defer: true,
		},
	});
}
