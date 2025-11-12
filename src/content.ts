import { getCollection } from 'astro:content';
import { isRecipeEntry, isTutorialEntry } from './content.config';

export const allPages = await getCollection('docs', (entry) => {
	// Filter out language-specific directories (ar, de, es, fr, etc.) but keep root docs
	const langPrefix = entry.id.split('/')[0];
	const languageDirs = ['ar', 'de', 'es', 'fr', 'hi', 'it', 'ja', 'ko', 'pl', 'pt-br', 'ru', 'zh-cn', 'zh-tw'];
	return !languageDirs.includes(langPrefix);
});
export const tutorialPages = allPages.filter(isTutorialEntry);
export const recipePages = allPages.filter(isRecipeEntry);
export const englishPages = allPages; // All pages are now English (no language prefix)
