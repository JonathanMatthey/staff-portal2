import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { group } from './config/sidebar';

/**
 * Starlight sidebar configuration object for the global site sidebar.
 *
 * - Use the `group()` utility function to define groups. This uses labels from our
 *   `src/content/nav/*.ts` files instead of defining labels and translations inline.
 *
 */
export const sidebar = [
	// Start section containing all groups
	group('start', {
		items: [
			'getting-started',
			// Team Info group
			group('teamInfo', {
				items: [
					'team-info/overview',
					'team-info/tech-team',
					'team-info/ops-team',
					'team-info/history-of-ilf',
				],
			}),
			// Resources group
			group('resources', {
				items: [
					'resources/assets',
					'resources/glossary',
					'resources/logos',
					'resources/quick-links',
				],
			}),
			// Notice Board
			'notice-board',
		],
	}),
] satisfies StarlightUserConfig['sidebar'];
