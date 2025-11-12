import { defineConfig } from '@lunariajs/core/config';

export default defineConfig({
	repository: {
		name: 'withastro/docs',
	},
	sourceLocale: {
		label: 'English',
		lang: 'en',
		parameters: {
			tag: 'en',
		},
	},
	locales: [],
	files: [
		{
			include: ['src/content/i18n/en.yml'],
			pattern: 'src/content/i18n/@tag.yml',
			type: 'dictionary',
		},
		{
			include: ['src/content/nav/en.ts'],
			pattern: 'src/content/nav/@tag.ts',
			type: 'dictionary',
		},
		{
			include: ['src/content/docs/**/*.(md|mdx)'],
			pattern: 'src/content/docs/@path',
			type: 'universal',
		},
	],
	tracking: {
		localizableProperty: 'i18nReady',
		ignoredKeywords: [
			'lunaria-ignore',
			'typo',
			'en-only',
			'broken link',
			'i18nReady',
			'i18nIgnore',
		],
	},
});
