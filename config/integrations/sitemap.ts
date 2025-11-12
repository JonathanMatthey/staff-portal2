import AstroSitemap from '@astrojs/sitemap';
import type { AstroIntegration } from 'astro';

/** Get a preconfigured instance of the `@astrojs/sitemap` integration. */
export function sitemap(): AstroIntegration {
	return AstroSitemap();
}
