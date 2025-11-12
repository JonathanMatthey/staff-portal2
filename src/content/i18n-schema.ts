import { z } from 'astro/zod';

export const AstroDocsI18nSchema = z
	.object({
		// Site settings
		'site.title': z.string(),
		// Left Sidebar
		'leftSidebar.sponsoredBy': z.string(),
		// Footer
		'footer.community': z.string(),
		'footer.contribute': z.string(),
		'footer.translatePage': z.string(),
		'footer.sponsor': z.string(),
		// Installation Guide
		'install.autoTab': z.string(),
		'install.manualTab': z.string(),
		// 404 Page
		'404.title': z.string(),
		'404.content': z.string(),
		'404.linkText': z.string(),
		// Code snippet vocabulary
		'expressiveCode.terminalWindowFallbackTitle': z.string(),
		'expressiveCode.copyButtonTooltip': z.string(),
		'expressiveCode.copyButtonCopied': z.string(),
		// Starlight banner
		'starlight.title': z.string(),
		'starlight.description': z.string(),
		'studioHeading.label': z.string(),
		// Upgrade guide
		'upgrade.implementationPR': z.string(),

		// DocSearch component strings
		// These two keys are Astro Docs-specific and apply to the search box in the header.
		'docsearch.button': z.string(),
		'docsearch.shortcutLabel': z.string(),
		// Search box placeholder text within the DocSearch modal.
		'docsearch.placeholder': z.string(),
		// SEARCH BOX
		'docsearch.modal.searchBox.resetButtonTitle': z.string(),
		'docsearch.modal.searchBox.resetButtonAriaLabel': z.string(),
		'docsearch.modal.searchBox.cancelButtonText': z.string(),
		'docsearch.modal.searchBox.cancelButtonAriaLabel': z.string(),
		'docsearch.modal.searchBox.searchInputLabel': z.string(),
		// START SCREEN
		'docsearch.modal.startScreen.recentSearchesTitle': z.string(),
		'docsearch.modal.startScreen.noRecentSearchesText': z.string(),
		'docsearch.modal.startScreen.saveRecentSearchButtonTitle': z.string(),
		'docsearch.modal.startScreen.removeRecentSearchButtonTitle': z.string(),
		'docsearch.modal.startScreen.favoriteSearchesTitle': z.string(),
		'docsearch.modal.startScreen.removeFavoriteSearchButtonTitle': z.string(),
		// ERROR SCREEN
		'docsearch.modal.errorScreen.titleText': z.string(),
		'docsearch.modal.errorScreen.helpText': z.string(),
		// FOOTER
		'docsearch.modal.footer.selectText': z.string(),
		'docsearch.modal.footer.selectKeyAriaLabel': z.string(),
		'docsearch.modal.footer.navigateText': z.string(),
		'docsearch.modal.footer.navigateUpKeyAriaLabel': z.string(),
		'docsearch.modal.footer.navigateDownKeyAriaLabel': z.string(),
		'docsearch.modal.footer.closeText': z.string(),
		'docsearch.modal.footer.closeKeyAriaLabel': z.string(),
		'docsearch.modal.footer.searchByText': z.string(),
		// NO RESULTS SCREEN
		'docsearch.modal.noResultsScreen.noResultsText': z.string(),
		'docsearch.modal.noResultsScreen.suggestedQueryText': z.string(),
		'docsearch.modal.noResultsScreen.reportMissingResultsText': z.string(),
		'docsearch.modal.noResultsScreen.reportMissingResultsLinkText': z.string(),
	})
	.partial();
