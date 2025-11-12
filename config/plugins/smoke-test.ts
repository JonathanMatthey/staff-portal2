import type { StarlightPlugin } from '@astrojs/starlight/types';

/**
 * Starlight plugin for smoke tests.
 * Currently a no-op since we don't use locales.
 */
export function starlightPluginSmokeTest(): StarlightPlugin {
	return {
		name: 'starlight-plugin-smoke-test',
		hooks: {
			'config:setup'() {
				// No-op: plugin kept for compatibility but doesn't modify config
			},
		},
	};
}
