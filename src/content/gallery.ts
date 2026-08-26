/**
 * Galerie photo : légendes des images et libellés de la visionneuse.
 *
 * Les trois langues sont côte à côte : modifier ce fichier suffit à changer
 * le contenu de cette section partout sur le site.
 */
export const gallery = {
  fr: {
    gallery: {
      overline: "GALERIE",
      title: "La clinique en images",
      description:
        "Découvrez nos espaces de soins, pensés pour offrir confort, sécurité et sérénité à chaque patient.",
      openLabel: "Agrandir l'image",
      closeLabel: "Fermer",
      prevLabel: "Image précédente",
      nextLabel: "Image suivante",
      items: [
        { image: "/images/clinique1.jpg", caption: "Accueil de la clinique" },
        { image: "/images/clinique2.jpg", caption: "Espace de réception" },
        { image: "/images/clinique3.jpg", caption: "Couloirs et circulation" },
        { image: "/images/clinique4.jpg", caption: "Chambres d'hospitalisation" },
        { image: "/images/clinique5.jpg", caption: "Espaces de soins" },
      ],
    },
  },

  en: {
    gallery: {
      overline: "GALLERY",
      title: "The Clinic in Pictures",
      description:
        "Take a look inside our facilities, designed to provide comfort, safety and peace of mind to every patient.",
      openLabel: "Enlarge image",
      closeLabel: "Close",
      prevLabel: "Previous image",
      nextLabel: "Next image",
      items: [
        { image: "/images/clinique1.jpg", caption: "Clinic entrance" },
        { image: "/images/clinique2.jpg", caption: "Reception area" },
        { image: "/images/clinique3.jpg", caption: "Corridors and circulation" },
        { image: "/images/clinique4.jpg", caption: "Patient rooms" },
        { image: "/images/clinique5.jpg", caption: "Care areas" },
      ],
    },
  },

  ar: {
    gallery: {
      overline: "معرض الصور",
      title: "العيادة في صور",
      description:
        "اكتشفوا مرافقنا الطبية المصممة لتوفير الراحة والأمان والطمأنينة لكل مريض.",
      openLabel: "تكبير الصورة",
      closeLabel: "إغلاق",
      prevLabel: "الصورة السابقة",
      nextLabel: "الصورة التالية",
      items: [
        { image: "/images/clinique1.jpg", caption: "مدخل العيادة" },
        { image: "/images/clinique2.jpg", caption: "فضاء الاستقبال" },
        { image: "/images/clinique3.jpg", caption: "الأروقة والممرات" },
        { image: "/images/clinique4.jpg", caption: "غرف الاستشفاء" },
        { image: "/images/clinique5.jpg", caption: "فضاءات العلاج" },
      ],
    },
  },
};
