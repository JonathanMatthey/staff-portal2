import starlight from '@astrojs/starlight';
import { defineConfig, sharpImageService } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import remarkSmartypants from 'remark-smartypants';
import { sidebar } from './astro.sidebar';
import { devServerFileWatcher } from './config/integrations/dev-server-file-watcher';

/* https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables */
const NETLIFY_PREVIEW_SITE = process.env.CONTEXT !== 'production' && process.env.DEPLOY_PRIME_URL;

const site = NETLIFY_PREVIEW_SITE || 'https://docs.astro.build/';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		devServerFileWatcher([
			'./config/**', // Custom plugins and integrations
			'./astro.sidebar.ts', // Sidebar configuration file
			'./src/content/nav/*.ts', // Sidebar labels
		]),
		starlight({
			title: 'Docs',
			components: {
				EditLink: './src/components/starlight/EditLink.astro',
				Hero: './src/components/starlight/Hero.astro',
				MarkdownContent: './src/components/starlight/MarkdownContent.astro',
				MobileTableOfContents: './src/components/starlight/MobileTableOfContents.astro',
				TableOfContents: './src/components/starlight/TableOfContents.astro',
				PageSidebar: './src/components/starlight/PageSidebar.astro',
				Footer: './src/components/starlight/Footer.astro',
				SiteTitle: './src/components/starlight/SiteTitle.astro',
				Sidebar: './src/components/starlight/Sidebar.astro',
				MobileMenuFooter: './src/components/starlight/MobileMenuFooter.astro',
				PageTitle: './src/components/starlight/PageTitle.astro',
			},
			routeMiddleware: './src/routeData.ts',
			sidebar,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/interledger' },
			],
			pagefind: true,
			head: [
				// Add ICO favicon fallback for Safari.
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.ico',
						sizes: '32x32',
					},
				},
			],
			disable404Route: true,
			customCss: ['./src/styles/global.css'],
		}),
	],
	trailingSlash: 'always',
	scopedStyleStrategy: 'where',
	compressHTML: false,
	markdown: {
		// Override with our own config
		smartypants: false,
		remarkPlugins: [
			// @ts-expect-error — `remark-smartypants` type is not matching Astro's for some reason even though they both use unified's `Plugin` type
			[remarkSmartypants, { dashes: false }],
		],
		rehypePlugins: [rehypeSlug],
	},
	image: {
		domains: ['avatars.githubusercontent.com'],
		service: sharpImageService(),
	},
});
