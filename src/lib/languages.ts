import type { Language } from '../translations';

/** Switcher order, shared by every language selector. */
export const LANGUAGES: Language[] = ['fr', 'en', 'ar'];

/** Short label beside each flag. Arabic uses its own letter, not "AR". */
export const LANG_LABEL: Record<Language, string> = { fr: 'FR', en: 'EN', ar: 'ع' };

/** Endonyms for the mobile drawer's language select — a name reads the same
    whatever the current UI language, so they are not part of `translations`. */
export const LANG_NAME: Record<Language, string> = {
  fr: 'Français',
  en: 'English',
  ar: 'العربية',
};
