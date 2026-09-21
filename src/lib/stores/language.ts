import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Language = 'en' | 'es';

const getInitialLanguage = (): Language => {
	if (!browser) return 'en';
	const saved = localStorage.getItem('wedding-language');
	return saved === 'es' ? 'es' : 'en';
};

export const language = writable<Language>(getInitialLanguage());

language.subscribe((value) => {
	if (browser) {
		localStorage.setItem('wedding-language', value);
		document.documentElement.lang = value;
	}
});
