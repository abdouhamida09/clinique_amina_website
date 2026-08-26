/**
 * Les sept services de la clinique, avec leur fiche détaillée.
 *
 * Les trois langues sont côte à côte : modifier ce fichier suffit à changer
 * le contenu de cette section partout sur le site.
 */
export const services = {
  fr: {
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
  },

  en: {
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
  },

  ar: {
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
  },
};
