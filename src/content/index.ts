/**
 * Assemblage du contenu du site.
 *
 * Chaque section a son fichier dans ce dossier, avec les trois langues côte à
 * côte. Ce fichier ne fait que les recoller en un seul objet `translations`,
 * dont la forme est exactement celle attendue par les composants : `t.hero`,
 * `t.services`, `t.footer`…
 *
 * Pour changer un texte, ouvrir le fichier de la section concernée — jamais
 * celui-ci. Ce fichier ne change que si une section est ajoutée ou retirée.
 */
import { meta } from './meta';
import { nav } from './nav';
import { hero } from './hero';
import { about } from './about';
import { services } from './services';
import { gallery } from './gallery';
import { reservation } from './reservation';
import { faq } from './faq';
import { testimonials } from './testimonials';
import { footer } from './footer';
import { blog } from './blog';

export type Language = 'fr' | 'en' | 'ar';

/* L'ordre des sections suit celui de la page, du haut vers le bas. */
export const translations = {
  fr: {
    ...meta.fr,
    ...nav.fr,
    ...hero.fr,
    ...about.fr,
    ...services.fr,
    ...gallery.fr,
    ...reservation.fr,
    ...faq.fr,
    ...testimonials.fr,
    ...footer.fr,
    ...blog.fr,
  },
  en: {
    ...meta.en,
    ...nav.en,
    ...hero.en,
    ...about.en,
    ...services.en,
    ...gallery.en,
    ...reservation.en,
    ...faq.en,
    ...testimonials.en,
    ...footer.en,
    ...blog.en,
  },
  ar: {
    ...meta.ar,
    ...nav.ar,
    ...hero.ar,
    ...about.ar,
    ...services.ar,
    ...gallery.ar,
    ...reservation.ar,
    ...faq.ar,
    ...testimonials.ar,
    ...footer.ar,
    ...blog.ar,
  },
};
