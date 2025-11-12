import AstroSitemap from '@astrojs/sitemap';
import type { AstroIntegration } from 'astro';

/** Match a pathname starting with "lighthouse". */
const ValidRouteRE = /^\/lighthouse\//;

/** Test a pathname starts with a valid prefix. */
const isValidPath = (path: string) => ValidRouteRE.test(path);

/** Get a preconfigured instance of the `@astrojs/sitemap` integration. */
export function sitemap(): AstroIntegration {
	return AstroSitemap({
		filter: (page) => isValidPath(new URL(page).pathname),
	});
}
