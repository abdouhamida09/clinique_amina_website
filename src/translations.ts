export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    title: "Clinique Amina - Clinique médico-chirurgicale",

    nav: {
      doctorName: "Clinique Amina",
      dentist: "Clinique médico-chirurgicale",
      clinic: "Clinique médico-chirurgicale",
      home: "Accueil",
      services: "Services",
      about: "À propos",
      gallery: "Galerie",
      faq: "FAQ",
      reviews: "Avis",
      blog: "Actualités",
      rdv: "Prendre RDV",
      skipToContent: "Aller au contenu principal",
      changeLang: "Changer de langue",
    },

    hero: {
      overline: "Clinique Amina - Lotissement Zone Est, Chiffa, Blida",
      titlePart1: "Votre santé,",
      titlePart2: "notre priorité",
      description:
        "Une prise en charge médicale et chirurgicale de qualité dans un environnement moderne, sécurisé et humain. La Clinique Amina vous accompagne avec expertise et bienveillance.",
      bookBtn: "Prendre rendez-vous",
      servicesBtn: "Découvrir nos services",
    },

    stats: {
      satisfaction: "Satisfaction",
      patients: "Patients",
      doctors: "Médecins",
    },

    urgency: {
      title: "Besoin de soins en urgence ?",
      description:
        "Notre service des urgences médico-chirurgicales assure une prise en charge rapide et adaptée.",
      callBtn: "Appeler la clinique",
    },

    services: {
      overline: "NOS SERVICES",
      title: "Nos services",
      description:
        "Une prise en charge médicale complète dans un environnement moderne, sécurisé et adapté aux besoins de chaque patient.",
      readMore: "Lire plus",
      detailOverview: "Aperçu",
      detailHighlights: "Points clés",
      detailClose: "Fermer",
      detailCta: "Prendre rendez-vous",
      prevLabel: "Service précédent",
      nextLabel: "Service suivant",
      items: [
        {
          title: "Chirurgie",
          image: "/images/services/Chirurgie.jpg",
          detail: {
            overline: "BLOC OPÉRATOIRE",
            overview:
              "Le bloc opératoire réunit trois salles d'intervention et une salle de réveil de six postes. Les équipes chirurgicales et d'anesthésie assurent la préparation, l'intervention et la surveillance post-opératoire dans un même circuit, de la consultation jusqu'à la sortie.",
            highlights: ["Trois salles d'intervention", "Salle de réveil de six postes", "Suivi post-opératoire assuré sur place"],
            equipment: {
              label: "CAPACITÉ",
              name: "3 salles d'intervention et 6 postes de réveil",
              note: "Anesthésie et surveillance continue",
            },
          },
          desc:
            "Un bloc opératoire composé de 3 salles de chirurgie et d'une salle de réveil de 6 postes pour assurer une prise en charge chirurgicale dans des conditions optimales.",
        },
        {
          title: "Maternité",
          image: "/images/services/Maternite.jpg",
          detail: {
            overline: "SUIVI ET ACCOUCHEMENT",
            overview:
              "Le service de maternité accompagne les futures mamans avant, pendant et après l'accouchement. Deux salles de prétravail équipées de monitoring permettent de suivre le déroulement du travail, avec l'équipe chirurgicale de la clinique mobilisable à tout moment si la situation le demande.",
            highlights: ["Deux salles de prétravail avec monitoring", "Suivi de la grossesse et préparation à l'accouchement", "Équipe chirurgicale mobilisable à tout moment"],
            equipment: {
              label: "CAPACITÉ",
              name: "2 salles de prétravail et de monitoring",
              note: "Surveillance continue avant l'accouchement",
            },
          },
          desc:
            "Un service de maternité dédié à l'accompagnement des futures mamans, avec 2 salles de prétravail et de monitoring pour assurer un suivi attentif avant l'accouchement.",
        },
        {
          title: "Hémodialyse",
          image: "/images/services/Hemodialyse.jpg",
          detail: {
            overline: "UNITÉ DE DIALYSE",
            overview:
              "L'unité d'hémodialyse dispose de seize postes de dialyse. Les séances sont programmées selon un planning régulier, ce qui permet à chaque patient de retrouver le même créneau et la même équipe soignante d'une séance à l'autre, dans un environnement adapté à un traitement au long cours.",
            highlights: ["Seize postes de dialyse", "Séances programmées à horaires réguliers", "Équipe soignante dédiée au suivi"],
            equipment: {
              label: "CAPACITÉ",
              name: "16 postes de dialyse",
              note: "Planning de séances régulier",
            },
          },
          desc:
            "Une unité d'hémodialyse équipée de 16 postes de dialyse pour assurer des séances de traitement dans un environnement adapté et sécurisé.",
        },
        {
          title: "Imagerie médicale",
          image: "/images/services/Imagerie medicale.jpg",
          detail: {
            overline: "PLATEAU D'IMAGERIE",
            overview:
              "L'unité d'imagerie réalise les examens nécessaires au diagnostic et au suivi, pour les patients hospitalisés comme pour les consultations externes. Les résultats sont transmis directement aux médecins de la clinique, ce qui raccourcit le délai entre l'examen et la décision médicale.",
            highlights: ["Examens pour patients hospitalisés et externes", "Résultats transmis aux médecins de la clinique", "Appui au diagnostic et au suivi"],
            equipment: {
              label: "PLATEAU TECHNIQUE",
              name: "Imagerie de diagnostic et de suivi",
              note: "Comptes rendus remis sur place",
            },
          },
          desc:
            "Une unité d'imagerie médicale équipée de matériel adapté pour contribuer au diagnostic et au suivi des patients.",
        },
        {
          title: "Pharmacie",
          image: "/images/services/Pharmacie.jpg",
          detail: {
            overline: "PHARMACIE INTERNE",
            overview:
              "La pharmacie de la clinique travaille en relation directe avec les laboratoires pharmaceutiques pour couvrir les besoins des services en médicaments et produits de santé. Les traitements sont disponibles sur place, sans interruption de la prise en charge pendant l'hospitalisation.",
            highlights: ["Approvisionnement en lien avec les laboratoires", "Médicaments et produits de santé sur place", "Continuité du traitement pendant le séjour"],
            equipment: {
              label: "ORGANISATION",
              name: "Pharmacie intégrée à la clinique",
              note: "Disponible pendant toute l'hospitalisation",
            },
          },
          desc:
            "Une pharmacie au sein de la clinique, en relation avec les laboratoires pharmaceutiques, pour répondre aux besoins en médicaments et produits de santé.",
        },
        {
          title: "Urgences",
          image: "/images/services/Urgences.jpg",
          detail: {
            overline: "PAVILLON DES URGENCES",
            overview:
              "Le pavillon des urgences médico-chirurgicales accueille les situations qui demandent des soins immédiats. L'orientation vers le bloc opératoire, l'imagerie ou le laboratoire se fait à l'intérieur de la même structure, sans transfert vers un autre établissement.",
            highlights: ["Pavillon dédié aux urgences", "Orientation immédiate vers le bloc ou l'imagerie", "Équipe médico-chirurgicale sur place"],
            equipment: {
              label: "PRISE EN CHARGE",
              name: "Urgences médico-chirurgicales",
              note: "Bloc, imagerie et laboratoire sur le même site",
            },
          },
          desc:
            "Un pavillon dédié aux urgences médico-chirurgicales pour assurer une prise en charge rapide et adaptée des situations nécessitant des soins urgents.",
        },
        {
          title: "Laboratoire",
          image: "/images/services/Laboratoire.jpg",
          detail: {
            overline: "ANALYSES MÉDICALES",
            overview:
              "Le laboratoire d'analyses médicales réalise les examens biologiques nécessaires au diagnostic et au suivi des patients. Sa présence au sein de la clinique évite les délais de transport des prélèvements et permet d'ajuster rapidement les traitements.",
            highlights: ["Analyses biologiques réalisées sur place", "Pas de délai de transport des prélèvements", "Appui aux services d'hospitalisation"],
            equipment: {
              label: "PLATEAU TECHNIQUE",
              name: "Laboratoire d'analyses médicales",
              note: "Examens de diagnostic et de suivi",
            },
          },
          desc:
            "Un laboratoire d'analyses médicales permettant la réalisation des examens nécessaires au diagnostic et au suivi médical des patients.",
        },
      ],
    },

    about: {
      overline: "À PROPOS DE LA CLINIQUE",
      expertiseTitle: "Expertise médicale",
      title: "Une prise en charge médicale au service de votre santé",
      p1:
        "La Clinique Amina est une clinique médico-chirurgicale et d'accouchement située à Chiffa, dans la wilaya de Blida. Elle dispose d'une capacité de 85 lits et places et propose plusieurs spécialités et services médicaux.",
      p2:
        "La maternité et la chirurgie constituent les principales activités de la clinique, complétées par l'hémodialyse, l'imagerie médicale, les urgences, la pharmacie et le laboratoire d'analyses médicales.",
      bookBtn: "Prendre rendez-vous",
      features: [
        {
          id: "01",
          title: "Écoute",
          desc:
            "Une équipe attentive à vos besoins pour vous accompagner à chaque étape de votre prise en charge.",
        },
        {
          id: "02",
          title: "Expertise",
          desc:
            "Des professionnels de santé qualifiés et des équipements adaptés pour une prise en charge de qualité.",
        },
        {
          id: "03",
          title: "Sécurité",
          desc:
            "Un environnement médical moderne et sécurisé, pensé pour assurer votre confort et votre bien-être.",
        },
      ],
    },

    testimonials: {
      overline: "TÉMOIGNAGES",
      title: "Ce que disent nos patients",
      description:
        "Les retours de celles et ceux que nous avons accompagnés, de la consultation jusqu'à la sortie de la clinique.",
      giveReview: "Donner mon avis",
      prevLabel: "Témoignage précédent",
      nextLabel: "Témoignage suivant",
      reviewLink: "https://search.google.com/local/writereview?placeid=ChIJQzLTMgBzjxIRMwdjW9ELJ0E",
      items: [
        {
          name: "Patient",
          text:
            "Une équipe professionnelle et accueillante. La prise en charge est sérieuse et rassurante.",
          role: "Patient",
        },
        {
          name: "Patiente",
          text:
            "Une clinique propre et bien organisée. Le personnel est à l'écoute et accompagne les patients avec beaucoup d'attention.",
          role: "Patiente",
        },
        {
          name: "Patient",
          text:
            "Très bonne prise en charge et personnel professionnel. Je recommande la Clinique Amina.",
          role: "Patient",
        },
        {
          name: "Patient",
          text: "Service et prix raisonnables.",
          role: "Patient",
        },
        {
          name: "Patient",
          text:
            "Que Dieu vous bénisse, votre service et vos soins sont excellents. Je suis très satisfait de mon expérience.",
          role: "Patient",
        },
        {
          name: "Patient",
          text:
            "Malheureusement, il n'y a pas de salle de prière 🤷🏻 …",
          role: "Patient",
        },
        {
          name: "Patient",
          text:
            "Honnêtement, c'est une bonne clinique privée en termes de services, mais la direction doit faire davantage d'efforts pour améliorer la qualité des prestations et atteindre un niveau cinq étoiles. Je dirais qu'elle mérite quatre étoiles actuellement.",
          role: "Patient",
        },
      ],
    },

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

    faq: {
      overline: "FAQ",
      title: "Questions fréquentes",
      description:
        "Les réponses aux questions les plus posées par nos patients. Notre équipe reste à votre écoute pour tout complément d'information.",
      contactTitle: "Vous avez une autre question ?",
      contactBtn: "Contacter la clinique",
      items: [
        {
          q: "Comment prendre rendez-vous à la Clinique Amina ?",
          a:
            "Vous pouvez demander un rendez-vous directement en ligne via le formulaire de réservation de ce site, ou par téléphone auprès de notre accueil. Notre équipe vous rappelle ensuite pour confirmer la date et l'horaire.",
        },
        {
          q: "Quels documents dois-je apporter le jour de ma consultation ?",
          a:
            "Munissez-vous d'une pièce d'identité, de votre carte d'assuré ou attestation de prise en charge, ainsi que de vos ordonnances et de vos examens médicaux antérieurs (analyses, radios, comptes rendus) s'ils existent.",
        },
        {
          q: "La clinique est-elle ouverte 24h/24 ?",
          a:
            "Oui. Tous nos services, y compris les urgences médico-chirurgicales, fonctionnent 24h/24 et 7j/7. Les visites aux patients hospitalisés sont quant à elles autorisées de 13h à 19h.",
        },
        {
          q: "Assurez-vous le suivi de grossesse et l'accouchement ?",
          a:
            "Oui. Notre service de maternité assure le suivi des futures mamans et les accouchements, avec 2 salles de prétravail et de monitoring ainsi qu'un bloc opératoire disponible en cas de césarienne.",
        },
      ],
    },

    footer: {
      doctorName: "Clinique Amina",
      role: "Clinique médico-chirurgicale et d'accouchement",
      description:
        "La Clinique Amina vous accompagne avec une prise en charge médicale, chirurgicale et obstétricale dans un environnement moderne et sécurisé.",
      contactTitle: "Contact",
      switchboard: "Standard téléphonique",
      mobile: "Mobile",
      linksTitle: "Liens",
      socialsTitle: "Réseaux",
      langTitle: "Langue",
      mapLoading: "Chargement de la carte…",
      scheduleTitle: "Horaires",
      address:
        "Lotissement Zone Est\n09250, Chiffa\nWilaya de Blida, Algérie",
      findUs: "Nous trouver",
      calcItinerary: "Obtenir l'itinéraire",
      rights: "Tous droits réservés.",
      madeBy: "Conçu et développé par",
      schedule: {
        visits: "Visites",
        visitsTime: "de 13h à 19h",
        services: "Tous les services",
        servicesTime: "24h / 24 – 7 jours / 7",
      },
      backToTop: "Retour en haut",
    },

    reservation: {
      overline: "RÉSERVATION",
      title: "Prendre rendez-vous",
      description:
        "Choisissez le service souhaité, puis renseignez vos coordonnées afin de demander un rendez-vous.",
      shortAddress: "Chiffa, Blida",
      step1: "Service",
      step2: "Date & heure",
      step3: "Confirmation",
      careQuestion: "Quel service souhaitez-vous ?",

      dateQuestion: "Choisissez une date",
      timeQuestion: "Choisissez un créneau",
      backBtn: "Retour",
      confirmTitle: "Confirmez votre demande",
      summaryCare: "Service",
      summaryDate: "Date",
      summaryTime: "Heure",
      fullName: "Nom complet",
      namePlaceholder: "Votre nom complet",
      phone: "Téléphone",
      phonePlaceholder: "Votre numéro de téléphone",
      email: "Email (optionnel)",
      emailPlaceholder: "Votre adresse email",
      confirmBtn: "Confirmer la demande",
      successTitle: "Demande envoyée !",
      successThanks: "Merci",
      successText1: "Votre demande pour",
      successText2: "a été enregistrée pour le",
      successText3: "à",
      successSub:
        "Notre équipe vous contactera afin de confirmer votre rendez-vous.",
      anotherBtn: "Faire une autre demande",

      days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],

      months: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ],
    },

    blog: {
      overline: "ACTUALITÉS & CONSEILS",
      title: "Actualités de la Clinique",
      readMore: "En savoir plus",

      items: [
        {
          title: "La Clinique Amina à votre service",
          excerpt:
            "Découvrez les différents services proposés par la Clinique Amina pour répondre aux besoins de ses patients.",
          date: "Clinique Amina",
          image:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Une prise en charge adaptée à chaque patient",
          excerpt:
            "Notre équipe vous accompagne dans un environnement médical moderne, sécurisé et adapté à votre situation.",
          date: "Clinique Amina",
          image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Nos principaux services médicaux",
          excerpt:
            "Chirurgie, maternité, hémodialyse, imagerie médicale, urgences et laboratoire : découvrez nos différents pôles de prise en charge.",
          date: "Clinique Amina",
          image:
            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
  },

  en: {
    title: "Clinique Amina - Medical & Surgical Clinic",

    nav: {
      doctorName: "Clinique Amina",
      dentist: "Medical & Surgical Clinic",
      clinic: "Medical & Surgical Clinic",
      home: "Home",
      services: "Services",
      about: "About",
      gallery: "Gallery",
      faq: "FAQ",
      reviews: "Reviews",
      blog: "News",
      rdv: "Book an Appointment",
      skipToContent: "Skip to main content",
      changeLang: "Change language",
    },

    hero: {
      overline: "Clinique Amina - Chiffa, Blida",
      titlePart1: "Your health,",
      titlePart2: "our priority",
      description:
        "High-quality medical and surgical care in a modern, safe and welcoming environment. Clinique Amina is committed to supporting you with expertise and compassion.",
      bookBtn: "Book an Appointment",
      servicesBtn: "Discover Our Services",
    },

    stats: {
      satisfaction: "Satisfaction",
      patients: "Patients",
      doctors: "Doctors",
    },

    urgency: {
      title: "Need Emergency Care?",
      description:
        "Our medical and surgical emergency department provides rapid and appropriate care.",
      callBtn: "Call the Clinic",
    },

    services: {
      overline: "OUR SERVICES",
      title: "Our Services",
      description:
        "Comprehensive medical care in a modern, safe environment designed around the needs of every patient.",
      readMore: "Read more",
      detailOverview: "Overview",
      detailHighlights: "Key highlights",
      detailClose: "Close",
      detailCta: "Book an appointment",
      prevLabel: "Previous service",
      nextLabel: "Next service",
      items: [
        {
          title: "Surgery",
          image: "/images/services/Chirurgie.jpg",
          detail: {
            overline: "OPERATING SUITE",
            overview:
              "The operating suite brings together three operating rooms and a six-bed recovery room. Surgical and anaesthesia teams handle preparation, the procedure and post-operative monitoring along a single pathway, from the first consultation through to discharge.",
            highlights: ["Three operating rooms", "Six-bed recovery room", "Post-operative follow-up on site"],
            equipment: {
              label: "CAPACITY",
              name: "3 operating rooms and 6 recovery beds",
              note: "Anaesthesia and continuous monitoring",
            },
          },
          desc:
            "A surgical unit with 3 operating rooms and a 6-station recovery room, providing surgical care in safe and optimal conditions.",
        },
        {
          title: "Maternity",
          image: "/images/services/Maternite.jpg",
          detail: {
            overline: "PREGNANCY AND BIRTH",
            overview:
              "The maternity unit supports mothers-to-be before, during and after birth. Two pre-labour rooms fitted with monitoring make it possible to follow labour closely, with the clinic's surgical team available at any moment should the situation call for it.",
            highlights: ["Two pre-labour rooms with monitoring", "Pregnancy follow-up and birth preparation", "Surgical team available at any moment"],
            equipment: {
              label: "CAPACITY",
              name: "2 pre-labour and monitoring rooms",
              note: "Continuous monitoring before birth",
            },
          },
          desc:
            "A dedicated maternity department supporting expectant mothers with 2 pre-labor and monitoring rooms for attentive care before delivery.",
        },
        {
          title: "Hemodialysis",
          image: "/images/services/Hemodialyse.jpg",
          detail: {
            overline: "DIALYSIS UNIT",
            overview:
              "The haemodialysis unit has sixteen dialysis stations. Sessions run to a regular schedule, so each patient finds the same slot and the same care team from one session to the next, in a setting built for long-term treatment.",
            highlights: ["Sixteen dialysis stations", "Sessions scheduled at regular times", "Care team dedicated to follow-up"],
            equipment: {
              label: "CAPACITY",
              name: "16 dialysis stations",
              note: "Regular session schedule",
            },
          },
          desc:
            "A hemodialysis unit equipped with 16 dialysis stations, providing treatment in a safe and dedicated environment.",
        },
        {
          title: "Medical Imaging",
          image: "/images/services/Imagerie medicale.jpg",
          detail: {
            overline: "IMAGING FACILITY",
            overview:
              "The imaging unit carries out the examinations needed for diagnosis and follow-up, both for inpatients and for outpatient consultations. Results go straight to the clinic's doctors, which shortens the gap between the examination and the medical decision.",
            highlights: ["Examinations for inpatients and outpatients", "Results sent to the clinic's doctors", "Support for diagnosis and follow-up"],
            equipment: {
              label: "FACILITY",
              name: "Diagnostic and follow-up imaging",
              note: "Reports issued on site",
            },
          },
          desc:
            "A medical imaging unit equipped with appropriate technology to support diagnosis and patient follow-up.",
        },
        {
          title: "Pharmacy",
          image: "/images/services/Pharmacie.jpg",
          detail: {
            overline: "IN-HOUSE PHARMACY",
            overview:
              "The clinic's pharmacy works directly with pharmaceutical laboratories to cover each department's needs in medicines and health products. Treatments are available on site, with no interruption in care during the hospital stay.",
            highlights: ["Supply arranged with the laboratories", "Medicines and health products on site", "Continuity of treatment during the stay"],
            equipment: {
              label: "SETUP",
              name: "Pharmacy integrated into the clinic",
              note: "Available throughout the stay",
            },
          },
          desc:
            "An on-site pharmacy working with pharmaceutical laboratories to meet patients' medication and healthcare needs.",
        },
        {
          title: "Emergency Care",
          image: "/images/services/Urgences.jpg",
          detail: {
            overline: "EMERGENCY PAVILION",
            overview:
              "The medical and surgical emergency pavilion takes in situations that call for immediate care. Referral to the operating suite, imaging or the laboratory happens within the same building, with no transfer to another facility.",
            highlights: ["A pavilion dedicated to emergencies", "Immediate referral to surgery or imaging", "Medical and surgical team on site"],
            equipment: {
              label: "CARE PATHWAY",
              name: "Medical and surgical emergencies",
              note: "Surgery, imaging and lab on one site",
            },
          },
          desc:
            "A dedicated medical and surgical emergency department providing rapid and appropriate care for urgent medical situations.",
        },
        {
          title: "Laboratory",
          image: "/images/services/Laboratoire.jpg",
          detail: {
            overline: "MEDICAL ANALYSES",
            overview:
              "The medical analysis laboratory runs the biological tests needed to diagnose and follow up patients. Having it inside the clinic removes sample transport delays and makes it possible to adjust treatment quickly.",
            highlights: ["Biological tests run on site", "No sample transport delay", "Support for the inpatient departments"],
            equipment: {
              label: "FACILITY",
              name: "Medical analysis laboratory",
              note: "Diagnostic and follow-up tests",
            },
          },
          desc:
            "A medical analysis laboratory providing the examinations required for diagnosis and patient follow-up.",
        },
      ],
    },

    about: {
      overline: "ABOUT THE CLINIC",
      expertiseTitle: "Medical Expertise",
      title: "Quality Healthcare at Your Service",
      p1:
        "Clinique Amina is a medical, surgical and maternity clinic located in Chiffa, Blida. The facility has a capacity of 85 beds and places and provides a wide range of medical services.",
      p2:
        "Maternity and surgery are the clinic's main activities, complemented by hemodialysis, medical imaging, emergency care, pharmacy and medical laboratory services.",
      bookBtn: "Book an Appointment",
      features: [
        {
          id: "01",
          title: "Listening",
          desc:
            "A caring team attentive to your needs throughout every stage of your treatment.",
        },
        {
          id: "02",
          title: "Expertise",
          desc:
            "Qualified healthcare professionals and appropriate medical equipment for quality care.",
        },
        {
          id: "03",
          title: "Safety",
          desc:
            "A modern and secure medical environment designed around your comfort and well-being.",
        },
      ],
    },

    testimonials: {
      overline: "TESTIMONIALS",
      title: "What Our Patients Say",
      description:
        "Feedback from the people we have cared for, from the first consultation through to their discharge.",
      giveReview: "Leave a Review",
      prevLabel: "Previous testimonial",
      nextLabel: "Next testimonial",
      reviewLink: "https://search.google.com/local/writereview?placeid=ChIJQzLTMgBzjxIRMwdjW9ELJ0E",
      items: [
        {
          name: "Patient",
          text:
            "A professional and welcoming team. The care is serious, reassuring and well organized.",
          role: "Patient",
        },
        {
          name: "Patient",
          text:
            "A clean and well-organized clinic. The staff is attentive and takes great care of patients.",
          role: "Patient",
        },
        {
          name: "Patient",
          text:
            "Very good care and professional staff. I highly recommend Clinique Amina.",
          role: "Patient",
        },
        {
          name: "Patient",
          text: "Reasonable service and prices.",
          role: "Patient",
        },
        {
          name: "Patient",
          text:
            "God bless you, your service and care are excellent. I am very satisfied with my experience.",
          role: "Patient",
        },
        {
          name: "Patient",
          text:
            "Unfortunately, there is no prayer room 🤷🏻 …",
          role: "Patient",
        },
        {
          name: "Patient",
          text:
            "Honestly, it is a good private clinic in terms of services, but management needs to put in more effort to improve the quality of care and reach a five-star level. I would say it deserves four stars as it stands.",
          role: "Patient",
        },
      ],
    },

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

    faq: {
      overline: "FAQ",
      title: "Frequently Asked Questions",
      description:
        "Answers to the questions our patients ask most often. Our team remains available for any additional information.",
      contactTitle: "Still have a question?",
      contactBtn: "Contact the clinic",
      items: [
        {
          q: "How do I book an appointment at Clinique Amina?",
          a:
            "You can request an appointment directly online through the booking form on this website, or by phone at our reception desk. Our team will then call you back to confirm the date and time.",
        },
        {
          q: "Which documents should I bring to my consultation?",
          a:
            "Please bring an ID document, your insurance card or coverage certificate, along with your prescriptions and any previous medical records (lab results, X-rays, reports) if you have them.",
        },
        {
          q: "Is the clinic open 24/7?",
          a:
            "Yes. All our departments, including medical and surgical emergency care, operate 24 hours a day, 7 days a week. Visits to hospitalized patients are allowed from 1:00 PM to 7:00 PM.",
        },
        {
          q: "Do you provide pregnancy follow-up and delivery?",
          a:
            "Yes. Our maternity department supports expectant mothers throughout their pregnancy and delivery, with 2 pre-labor and monitoring rooms as well as an operating room available for caesarean sections.",
        },
      ],
    },

    footer: {
      doctorName: "Clinique Amina",
      role: "Medical, Surgical & Maternity Clinic",
      description:
        "Clinique Amina provides medical, surgical and obstetric care in a modern and secure environment.",
      contactTitle: "Contact",
      switchboard: "Switchboard",
      mobile: "Mobile",
      linksTitle: "Links",
      socialsTitle: "Socials",
      langTitle: "Language",
      mapLoading: "Loading the map…",
      scheduleTitle: "Opening Hours",
      address:
        "Lotissement Zone Est\n09250, Chiffa\nBlida Province, Algeria",
      findUs: "Find Us",
      calcItinerary: "Get Directions",
      rights: "All rights reserved.",
      madeBy: "Designed and developed by",
      schedule: {
        visits: "Visiting hours",
        visitsTime: "1:00 PM – 7:00 PM",
        services: "All services",
        servicesTime: "24/7",
      },
      backToTop: "Back to Top",
    },

    reservation: {
      overline: "APPOINTMENT",
      title: "Book an Appointment",
      description:
        "Choose the service you need and provide your contact details to request an appointment.",
      shortAddress: "Chiffa, Blida",
      step1: "Service",
      step2: "Date & Time",
      step3: "Confirmation",
      careQuestion: "Which service do you need?",

      dateQuestion: "Choose a date",
      timeQuestion: "Choose a time slot",
      backBtn: "Back",
      confirmTitle: "Confirm Your Request",
      summaryCare: "Service",
      summaryDate: "Date",
      summaryTime: "Time",
      fullName: "Full Name",
      namePlaceholder: "Your full name",
      phone: "Phone",
      phonePlaceholder: "Your phone number",
      email: "Email (optional)",
      emailPlaceholder: "Your email address",
      confirmBtn: "Confirm Request",
      successTitle: "Request Sent!",
      successThanks: "Thank you",
      successText1: "Your request for",
      successText2: "has been registered for",
      successText3: "at",
      successSub:
        "Our team will contact you to confirm your appointment.",
      anotherBtn: "Make Another Request",

      days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],

      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },

    blog: {
      overline: "NEWS & HEALTH TIPS",
      title: "Clinic News",
      readMore: "Read More",

      items: [
        {
          title: "Clinique Amina at Your Service",
          excerpt:
            "Discover the different services provided by Clinique Amina to meet the needs of its patients.",
          date: "Clinique Amina",
          image:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Personalized Patient Care",
          excerpt:
            "Our team supports you in a modern, safe and welcoming medical environment adapted to your needs.",
          date: "Clinique Amina",
          image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Our Main Medical Services",
          excerpt:
            "Surgery, maternity, hemodialysis, medical imaging, emergency care and laboratory services: discover our main departments.",
          date: "Clinique Amina",
          image:
            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
  },

  ar: {
    title: "عيادة أمينة - العيادة الطبية والجراحية",

    nav: {
      doctorName: "عيادة أمينة",
      dentist: "العيادة الطبية والجراحية",
      clinic: "العيادة الطبية والجراحية",
      home: "الرئيسية",
      services: "خدماتنا",
      about: "عن العيادة",
      gallery: "معرض الصور",
      faq: "الأسئلة الشائعة",
      reviews: "آراء المرضى",
      blog: "الأخبار",
      rdv: "حجز موعد",
      skipToContent: "الانتقال إلى المحتوى الرئيسي",
      changeLang: "تغيير اللغة",
    },

    hero: {
      overline: "عيادة أمينة - الشفة، البليدة",
      titlePart1: "صحتكم،",
      titlePart2: "أولويتنا",
      description:
        "رعاية طبية وجراحية عالية الجودة في بيئة حديثة وآمنة وإنسانية. ترافقكم عيادة أمينة بخبرة واهتمام في مختلف مراحل العلاج.",
      bookBtn: "حجز موعد",
      servicesBtn: "اكتشف خدماتنا",
    },

    stats: {
      satisfaction: "رضا المرضى",
      patients: "المرضى",
      doctors: "أطباء",
    },

    urgency: {
      title: "هل تحتاجون إلى رعاية طارئة؟",
      description:
        "يوفر قسم الاستعجالات الطبية والجراحية رعاية سريعة ومناسبة للحالات الطارئة.",
      callBtn: "الاتصال بالعيادة",
    },

    services: {
      overline: "خدماتنا",
      title: "خدماتنا الطبية",
      description:
        "رعاية طبية متكاملة في بيئة حديثة وآمنة ومجهزة لتلبية احتياجات كل مريض.",
      readMore: "اقرأ المزيد",
      detailOverview: "نظرة عامة",
      detailHighlights: "أبرز النقاط",
      detailClose: "إغلاق",
      detailCta: "حجز موعد",
      prevLabel: "الخدمة السابقة",
      nextLabel: "الخدمة التالية",
      items: [
        {
          title: "الجراحة",
          image: "/images/services/Chirurgie.jpg",
          detail: {
            overline: "قسم العمليات",
            overview:
              "يضم قسم العمليات ثلاث قاعات جراحية وقاعة إفاقة بستة أسرّة. تتولى فرق الجراحة والتخدير التحضير وإجراء العملية والمتابعة بعد الجراحة ضمن مسار واحد، من الاستشارة الأولى إلى الخروج.",
            highlights: ["ثلاث قاعات جراحية", "قاعة إفاقة بستة أسرّة", "متابعة ما بعد الجراحة داخل العيادة"],
            equipment: {
              label: "الطاقة الاستيعابية",
              name: "3 قاعات جراحية و6 أسرّة إفاقة",
              note: "تخدير ومراقبة مستمرة",
            },
          },
          desc:
            "يضم قسم الجراحة 3 قاعات للعمليات وقاعة إفاقة مجهزة بـ6 أماكن، لضمان رعاية جراحية آمنة وفي ظروف مثالية.",
        },
        {
          title: "قسم الولادة",
          image: "/images/services/Maternite.jpg",
          detail: {
            overline: "المتابعة والولادة",
            overview:
              "يرافق قسم الولادة الأمهات قبل الولادة وأثناءها وبعدها. توفر قاعتا ما قبل المخاض المجهزتان بأجهزة المراقبة متابعة دقيقة لسير المخاض، مع إمكانية تدخل الفريق الجراحي في أي وقت عند الحاجة.",
            highlights: ["قاعتان لما قبل المخاض مع أجهزة مراقبة", "متابعة الحمل والتحضير للولادة", "فريق جراحي جاهز للتدخل في أي وقت"],
            equipment: {
              label: "الطاقة الاستيعابية",
              name: "قاعتان لما قبل المخاض والمراقبة",
              note: "مراقبة مستمرة قبل الولادة",
            },
          },
          desc:
            "قسم مخصص لمتابعة الأمهات الحوامل، يضم قاعتين للتحضير للولادة والمراقبة لضمان رعاية دقيقة قبل الولادة.",
        },
        {
          title: "تصفية الدم",
          image: "/images/services/Hemodialyse.jpg",
          detail: {
            overline: "وحدة تصفية الدم",
            overview:
              "تضم وحدة تصفية الدم ستة عشر جهازًا. تُبرمج الحصص وفق جدول منتظم، بحيث يجد كل مريض الموعد نفسه والفريق الطبي نفسه من حصة إلى أخرى، في بيئة ملائمة للعلاج الطويل الأمد.",
            highlights: ["ستة عشر جهاز تصفية", "حصص مبرمجة في مواعيد منتظمة", "فريق طبي مخصص للمتابعة"],
            equipment: {
              label: "الطاقة الاستيعابية",
              name: "16 جهاز تصفية",
              note: "جدول حصص منتظم",
            },
          },
          desc:
            "وحدة لتصفية الدم مجهزة بـ16 محطة للغسيل الكلوي، توفر للمرضى جلسات علاجية في بيئة آمنة ومجهزة.",
        },
        {
          title: "التصوير الطبي",
          image: "/images/services/Imagerie medicale.jpg",
          detail: {
            overline: "وحدة التصوير",
            overview:
              "تُجري وحدة التصوير الفحوصات اللازمة للتشخيص والمتابعة، للمرضى المقيمين ولمرضى العيادات الخارجية على حد سواء. تُسلَّم النتائج مباشرة إلى أطباء العيادة، ما يختصر المدة بين الفحص والقرار الطبي.",
            highlights: ["فحوصات للمرضى المقيمين والخارجيين", "نتائج تُسلَّم إلى أطباء العيادة", "دعم للتشخيص والمتابعة"],
            equipment: {
              label: "التجهيزات",
              name: "تصوير للتشخيص والمتابعة",
              note: "تقارير تُسلَّم في عين المكان",
            },
          },
          desc:
            "وحدة للتصوير الطبي مجهزة بمعدات تساعد على التشخيص الدقيق ومتابعة الحالة الصحية للمرضى.",
        },
        {
          title: "الصيدلية",
          image: "/images/services/Pharmacie.jpg",
          detail: {
            overline: "صيدلية داخلية",
            overview:
              "تعمل صيدلية العيادة بتنسيق مباشر مع المخابر الصيدلانية لتغطية احتياجات المصالح من الأدوية والمستلزمات الصحية. تتوفر العلاجات في عين المكان دون انقطاع في الرعاية أثناء الإقامة.",
            highlights: ["تموين بالتنسيق مع المخابر", "أدوية ومستلزمات صحية في عين المكان", "استمرارية العلاج طوال الإقامة"],
            equipment: {
              label: "التنظيم",
              name: "صيدلية مدمجة داخل العيادة",
              note: "متوفرة طوال مدة الإقامة",
            },
          },
          desc:
            "صيدلية داخل العيادة لتلبية احتياجات المرضى من الأدوية والمنتجات الصحية.",
        },
        {
          title: "الاستعجالات",
          image: "/images/services/Urgences.jpg",
          detail: {
            overline: "جناح الاستعجالات",
            overview:
              "يستقبل جناح الاستعجالات الطبية والجراحية الحالات التي تتطلب رعاية فورية. يتم التوجيه نحو قسم العمليات أو التصوير أو المخبر داخل المنشأة نفسها، دون تحويل إلى مؤسسة أخرى.",
            highlights: ["جناح مخصص للاستعجالات", "توجيه فوري نحو العمليات أو التصوير", "فريق طبي وجراحي في عين المكان"],
            equipment: {
              label: "مسار الرعاية",
              name: "استعجالات طبية وجراحية",
              note: "العمليات والتصوير والمخبر في موقع واحد",
            },
          },
          desc:
            "قسم مخصص للاستعجالات الطبية والجراحية لضمان التكفل السريع والمناسب بالحالات التي تتطلب رعاية طبية عاجلة.",
        },
        {
          title: "المخبر",
          image: "/images/services/Laboratoire.jpg",
          detail: {
            overline: "التحاليل الطبية",
            overview:
              "يُجري مخبر التحاليل الطبية الفحوصات البيولوجية اللازمة لتشخيص المرضى ومتابعتهم. وجوده داخل العيادة يلغي مدة نقل العينات ويسمح بتعديل العلاج بسرعة.",
            highlights: ["تحاليل بيولوجية تُجرى في عين المكان", "دون مدة نقل للعينات", "دعم لمصالح الاستشفاء"],
            equipment: {
              label: "التجهيزات",
              name: "مخبر تحاليل طبية",
              note: "فحوصات التشخيص والمتابعة",
            },
          },
          desc:
            "مخبر للتحاليل الطبية يوفر الفحوصات اللازمة للمساعدة في التشخيص ومتابعة الحالة الصحية للمرضى.",
        },
      ],
    },

    about: {
      overline: "عن العيادة",
      expertiseTitle: "الخبرة الطبية",
      title: "رعاية صحية متميزة في خدمتكم",
      p1:
        "عيادة أمينة هي عيادة طبية وجراحية ومتخصصة في الولادة تقع في الشفة بولاية البليدة. تضم العيادة 85 سريراً ومكاناً وتوفر مجموعة متنوعة من الخدمات الطبية.",
      p2:
        "تُعد الجراحة والولادة من أهم أنشطة العيادة، إلى جانب تصفية الدم والتصوير الطبي والاستعجالات والصيدلية ومخبر التحاليل الطبية.",
      bookBtn: "حجز موعد",
      features: [
        {
          id: "01",
          title: "الاستماع",
          desc:
            "فريق يهتم باحتياجاتكم ويرافقكم خلال جميع مراحل التكفل والعلاج.",
        },
        {
          id: "02",
          title: "الخبرة",
          desc:
            "طاقم طبي مؤهل وتجهيزات مناسبة لضمان رعاية صحية ذات جودة.",
        },
        {
          id: "03",
          title: "السلامة",
          desc:
            "بيئة طبية حديثة وآمنة مصممة لضمان راحتكم ورفاهيتكم.",
        },
      ],
    },

    testimonials: {
      overline: "آراء المرضى",
      title: "ماذا يقول مرضاؤنا",
      description:
        "شهادات من المرضى الذين رافقناهم، من الاستشارة الأولى إلى غاية مغادرة العيادة.",
      giveReview: "أعطِ رأيك",
      prevLabel: "الشهادة السابقة",
      nextLabel: "الشهادة التالية",
      reviewLink: "https://search.google.com/local/writereview?placeid=ChIJQzLTMgBzjxIRMwdjW9ELJ0E",
      items: [
        {
          name: "مريض",
          text:
            "فريق محترف ومرحب. التكفل بالمرضى جدي ومنظم ويبعث على الاطمئنان.",
          role: "مريض",
        },
        {
          name: "مريضة",
          text:
            "عيادة نظيفة ومنظمة جيداً. الطاقم يهتم بالمرضى ويتعامل معهم باهتمام كبير.",
          role: "مريضة",
        },
        {
          name: "مريض",
          text:
            "تكفل جيد جداً وطاقم محترف. أنصح بعيادة أمينة.",
          role: "مريض",
        },
        {
          name: "مريض",
          text: "خدمة وأسعار معقولة.",
          role: "مريض",
        },
        {
          name: "مريض",
          text:
            "بارك الله فيكم، خدمتكم ورعايتكم ممتازة. أنا راضٍ جدًا عن تجربتي.",
          role: "مريض",
        },
        {
          name: "مريض",
          text:
            "للأسف، لا توجد قاعة للصلاة 🤷🏻 …",
          role: "مريض",
        },
        {
          name: "مريض",
          text:
            "بصراحة، هي عيادة خاصة جيدة من حيث الخدمات، لكن على الإدارة بذل مزيد من الجهد لتحسين جودة الخدمات والوصول إلى مستوى خمس نجوم. أقول إنها تستحق أربع نجوم حاليًا.",
          role: "مريض",
        },
      ],
    },

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

    faq: {
      overline: "الأسئلة الشائعة",
      title: "أسئلة يطرحها مرضانا",
      description:
        "إجابات عن أكثر الأسئلة تكراراً لدى مرضانا. يبقى فريقنا في خدمتكم لأي معلومات إضافية.",
      contactTitle: "لديكم سؤال آخر؟",
      contactBtn: "الاتصال بالعيادة",
      items: [
        {
          q: "كيف يمكنني حجز موعد في عيادة أمينة؟",
          a:
            "يمكنكم طلب موعد مباشرة عبر استمارة الحجز في هذا الموقع، أو عن طريق الهاتف من خلال مكتب الاستقبال. بعدها يتصل بكم فريقنا لتأكيد التاريخ والتوقيت.",
        },
        {
          q: "ما هي الوثائق التي يجب إحضارها يوم الاستشارة؟",
          a:
            "يُرجى إحضار وثيقة هوية، وبطاقة التأمين أو شهادة التكفل، إضافة إلى الوصفات الطبية والفحوصات السابقة (تحاليل، أشعة، تقارير طبية) إن وُجدت.",
        },
        {
          q: "هل العيادة مفتوحة على مدار 24 ساعة؟",
          a:
            "نعم. جميع أقسامنا، بما فيها الاستعجالات الطبية والجراحية، تعمل 24 ساعة على 24 و7 أيام على 7. أما زيارات المرضى المستشفين فتكون من الساعة 13:00 إلى 19:00.",
        },
        {
          q: "هل توفرون متابعة الحمل والولادة؟",
          a:
            "نعم. يوفر قسم الولادة متابعة الأمهات الحوامل وعمليات الولادة، ويضم قاعتين للتحضير والمراقبة إضافة إلى قاعة عمليات متاحة في حالة الولادة القيصرية.",
        },
      ],
    },

    footer: {
      doctorName: "عيادة أمينة",
      role: "العيادة الطبية والجراحية وطب الولادة",
      description:
        "تقدم عيادة أمينة رعاية طبية وجراحية ورعاية خاصة بالولادة في بيئة حديثة وآمنة.",
      contactTitle: "اتصل بنا",
      switchboard: "الهاتف الثابت",
      mobile: "الهاتف النقال",
      linksTitle: "روابط",
      socialsTitle: "التواصل الاجتماعي",
      langTitle: "اللغة",
      mapLoading: "جارٍ تحميل الخريطة…",
      scheduleTitle: "أوقات العمل",
      address:
        "التجزئة المنطقة الشرقية\n09250، الشفة\nولاية البليدة، الجزائر",
      findUs: "موقعنا",
      calcItinerary: "احصل على الاتجاهات",
      rights: "جميع الحقوق محفوظة.",
      madeBy: "تصميم وتطوير",
      schedule: {
        visits: "الزيارات",
        visitsTime: "من 13:00 إلى 19:00",
        services: "جميع الخدمات",
        servicesTime: "24 ساعة / 7 أيام",
      },
      backToTop: "العودة للأعلى",
    },

    reservation: {
      overline: "حجز موعد",
      title: "حجز موعد",
      description:
        "اختر الخدمة التي تحتاجها وأدخل معلومات الاتصال الخاصة بك لطلب موعد.",
      shortAddress: "الشفة، البليدة",
      step1: "الخدمة",
      step2: "التاريخ والوقت",
      step3: "التأكيد",
      careQuestion: "ما هي الخدمة التي تحتاجها؟",

      dateQuestion: "اختر التاريخ",
      timeQuestion: "اختر التوقيت",
      backBtn: "رجوع",
      confirmTitle: "تأكيد طلبكم",
      summaryCare: "الخدمة",
      summaryDate: "التاريخ",
      summaryTime: "الوقت",
      fullName: "الاسم الكامل",
      namePlaceholder: "اسمكم الكامل",
      phone: "الهاتف",
      phonePlaceholder: "رقم هاتفكم",
      email: "البريد الإلكتروني (اختياري)",
      emailPlaceholder: "بريدكم الإلكتروني",
      confirmBtn: "تأكيد الطلب",
      successTitle: "تم إرسال الطلب!",
      successThanks: "شكراً لكم",
      successText1: "طلبكم المتعلق بـ",
      successText2: "تم تسجيله بتاريخ",
      successText3: "على الساعة",
      successSub:
        "سيتصل بكم فريقنا لتأكيد موعدكم.",
      anotherBtn: "طلب موعد آخر",

      days: [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
      ],

      months: [
        "جانفي",
        "فيفري",
        "مارس",
        "أفريل",
        "ماي",
        "جوان",
        "جويلية",
        "أوت",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ],
    },

    blog: {
      overline: "أخبار ونصائح صحية",
      title: "أخبار العيادة",
      readMore: "اقرأ المزيد",

      items: [
        {
          title: "عيادة أمينة في خدمتكم",
          excerpt:
            "اكتشفوا مختلف الخدمات التي تقدمها عيادة أمينة لتلبية احتياجات مرضاها.",
          date: "عيادة أمينة",
          image:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "تكفل طبي مناسب لكل مريض",
          excerpt:
            "يرافقكم فريقنا في بيئة طبية حديثة وآمنة ومريحة ومصممة لتلبية احتياجاتكم.",
          date: "عيادة أمينة",
          image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "أهم خدماتنا الطبية",
          excerpt:
            "الجراحة، الولادة، تصفية الدم، التصوير الطبي، الاستعجالات والمخبر: اكتشفوا مختلف أقسام التكفل لدينا.",
          date: "عيادة أمينة",
          image:
            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
  },
};