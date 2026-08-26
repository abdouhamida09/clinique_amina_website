import type { Language } from '../translations';

/** Switcher order, shared by the navbar cycle and the footer selector. */
export const LANGUAGES: Language[] = ['fr', 'en', 'ar'];

/** Short label beside each flag. Arabic uses its own letter, not "AR". */
export const LANG_LABEL: Record<Language, string> = { fr: 'FR', en: 'EN', ar: 'ع' };
