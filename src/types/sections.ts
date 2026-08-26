import type { Language } from '../translations';
import type { translations } from '../translations';

export type Translation = (typeof translations)[Language];

export interface SectionProps {
  lang: Language;
  t: Translation;
}

export interface HomePageProps extends SectionProps {
  toggleLang: () => void;
  setLang: (lang: Language) => void;
}

/** The footer owns the language selector, so it needs `setLang` on top of `t`. */
export interface FooterProps extends SectionProps {
  setLang: (lang: Language) => void;
}
