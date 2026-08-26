/**
 * Point d'entrée historique du contenu — conservé pour que les imports
 * existants (`from './translations'`) continuent de fonctionner.
 *
 * Le contenu lui-même vit désormais dans `src/content/`, un fichier par
 * section, avec les trois langues côte à côte :
 *
 *   src/content/hero.ts          section d'accueil, chiffres clés, urgences
 *   src/content/about.ts         « À propos »
 *   src/content/services.ts      les sept services et leurs fiches
 *   src/content/gallery.ts       galerie photo
 *   src/content/reservation.ts   prise de rendez-vous
 *   src/content/faq.ts           questions fréquentes
 *   src/content/testimonials.ts  témoignages
 *   src/content/footer.ts        pied de page
 *   src/content/blog.ts          actualités
 *   src/content/nav.ts           navigation
 *   src/content/meta.ts          titre de l'onglet
 *   src/content/site.ts          téléphones, réseaux, carte, images, chiffres
 *
 * Pour modifier un texte, ouvrir le fichier de la section concernée.
 */
export { translations } from './content';
export type { Language } from './content';
