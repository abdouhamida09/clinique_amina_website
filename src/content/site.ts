/**
 * Les données de la clinique qui ne se traduisent pas.
 *
 * Numéros, adresses web, images d'ambiance et chiffres clés s'écrivent de la
 * même façon en français, en anglais et en arabe : ils n'ont donc rien à faire
 * dans les fichiers de contenu par section, où il faudrait les tenir à jour
 * trois fois. Ils vivent ici, en un seul endroit.
 *
 * Les textes, eux, restent dans les fichiers de section (`hero.ts`,
 * `footer.ts`, …).
 */
export const site = {
  /** Logo de la clinique, affiché dans la navbar et le pied de page. */
  logo: '/images/logo.png',

  email: 'contact@cliniqueamina.com',

  phones: {
    /** Standard téléphonique — toutes les lignes sont listées dans le footer. */
    switchboard: ['+213 (0) 28 68 43 63', '+213 (0) 28 68 43 98', '+213 (0) 28 68 44 44'],
    /** Ligne mobile, également utilisée par l'encart urgences et par WhatsApp. */
    mobile: '+213 (0) 563 02 61 81',
  },

  social: {
    instagram: 'https://www.instagram.com/clinique__amina/',
    facebook: 'https://www.facebook.com/cliniqueaminaofficielle/',
    whatsapp: 'https://wa.me/213563026181',
  },

  maps: {
    /** Fiche Google Maps, ouverte par l'adresse et le bouton « itinéraire ». */
    link: 'https://maps.app.goo.gl/gCqrqou6dtNnxmEEA',
    /** Carte intégrée du pied de page. */
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.8666001854263!2d2.7443334999999998!3d36.46078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f730032d33243%3A0x41270bd15b630733!2sClinique%20Amina!5e0!3m2!1sfr!2sdz!4v1787232567715!5m2!1sfr!2sdz',
  },

  /** Formulaire d'avis Google, ouvert depuis la section témoignages. */
  reviewLink: 'https://search.google.com/local/writereview?placeid=ChIJQzLTMgBzjxIRMwdjW9ELJ0E',

  /** Compteurs animés de l'encart en bas à droite du hero. */
  stats: {
    patients: 6000,
    doctors: 56,
  },

  /** Photos d'ambiance placées directement par un composant, sans légende. */
  images: {
    hero: '/images/clinique6.jpg',
    about: '/images/clinique5.jpg',
  },

  /** Crédit studio affiché dans la barre du bas. */
  studio: 'IBS',
};

/**
 * Transforme un numéro affichable en href composable.
 * `+213 (0) 28 68 43 63` → `tel:+21328684363`
 */
export const toTelHref = (number: string) => `tel:${number.replace(/\(0\)|[^\d+]/g, '')}`;
