/**
 * Planning des consultations externes : spécialités, praticiens, jours et
 * horaires de présence.
 *
 * Contrairement aux autres fichiers de contenu, le planning lui-même n'est
 * écrit qu'une seule fois (`roster`, plus bas) : un nom ou un créneau ne se
 * corrige donc qu'à un seul endroit. Seuls les libellés — nom de la spécialité,
 * intitulé du praticien, textes de la section — existent en trois langues, et
 * les trois versions de `t.consultations` sont assemblées à partir des deux.
 *
 * Les horaires sont des heures pleines (`from`/`to` en 24 h) et les jours des
 * index : 0 = dimanche … 6 = samedi, l'ordre de la semaine algérienne. Le
 * composant se charge de les mettre en forme selon la langue.
 */

export type ConsultationSlot = {
  /** 0 = dimanche … 6 = samedi. */
  day: number;
  from: number;
  to: number;
};

type SpecialtyId =
  | 'anesthesie'
  | 'medecineGenerale'
  | 'chirurgieViscerale'
  | 'gynecologie'
  | 'nephrologie'
  | 'diabetologie'
  | 'pediatrie'
  | 'chirurgiePediatrique'
  | 'orl'
  | 'urologie'
  | 'orthopedie'
  | 'neurochirurgie'
  | 'neurophysiologie';

type RoleId =
  | 'reanimateur'
  | 'generaliste'
  | 'chirurgien'
  | 'gynecologue'
  | 'nephrologue'
  | 'diabetologue'
  | 'pediatre'
  | 'chirurgienInfantile'
  | 'chirurgienOrl'
  | 'urologue'
  | 'orthopediste'
  | 'orthopedisteMain'
  | 'neurochirurgien'
  | 'neurophysiologiste';

interface RosterDoctor {
  /** Sans le « Dr » : le composant ajoute le titre dans la langue affichée. */
  name: string;
  role: RoleId;
  /** Vide pour les équipes qui ne tiennent pas de consultation programmée. */
  slots: ConsultationSlot[];
}

interface RosterSpecialty {
  id: SpecialtyId;
  doctors: RosterDoctor[];
}

/** Un créneau : `d(jour, début, fin)`. */
const d = (day: number, from: number, to: number): ConsultationSlot => ({ day, from, to });

/** Le même horaire répété sur plusieurs jours : `days([0, 1, 2], 8, 16)`. */
const days = (list: number[], from: number, to: number): ConsultationSlot[] =>
  list.map((day) => d(day, from, to));

const SUN = 0;
const MON = 1;
const TUE = 2;
const WED = 3;
const THU = 4;
const FRI = 5;
const SAT = 6;

/* L'ordre suit celui de la page « Consultations » de la clinique. */
const roster: RosterSpecialty[] = [
  {
    id: 'anesthesie',
    doctors: [
      { name: 'BENTCHAKAL Yacine', role: 'reanimateur', slots: [] },
      { name: 'BELKACEM Rafik', role: 'reanimateur', slots: [] },
      { name: 'MEGTAOUI Youcef', role: 'reanimateur', slots: [] },
      { name: 'CHOUDAR Amar', role: 'reanimateur', slots: [] },
    ],
  },
  {
    id: 'medecineGenerale',
    doctors: [
      {
        name: 'BOUTALEB Oussama',
        role: 'generaliste',
        slots: days([SUN, MON, TUE, WED, THU], 8, 16),
      },
    ],
  },
  {
    id: 'chirurgieViscerale',
    doctors: [
      {
        name: 'BEKHOUCHE Redouane',
        role: 'chirurgien',
        slots: days([SUN, MON, TUE, WED, THU], 8, 16),
      },
    ],
  },
  {
    id: 'gynecologie',
    doctors: [
      { name: 'CHEBOUTI Chahrazed', role: 'gynecologue', slots: [d(SUN, 8, 16)] },
      { name: 'BOUKHALKHAL Salim', role: 'gynecologue', slots: [d(MON, 8, 16), d(FRI, 8, 16)] },
      { name: 'ABOU MUSTAPHA Mounira', role: 'gynecologue', slots: [d(TUE, 8, 16)] },
      { name: 'EL RICH Safwane', role: 'gynecologue', slots: [d(WED, 8, 16)] },
      { name: 'MEROUANI Sihem', role: 'gynecologue', slots: [d(THU, 8, 16)] },
      { name: 'LACHEB Sohaib', role: 'gynecologue', slots: [d(SAT, 8, 16)] },
    ],
  },
  {
    id: 'nephrologie',
    doctors: [
      { name: 'BOUKADER Mourad', role: 'nephrologue', slots: days([SUN, TUE, THU], 10, 14) },
    ],
  },
  {
    id: 'diabetologie',
    doctors: [{ name: 'BOURKAIB Mounira', role: 'diabetologue', slots: days([MON, WED], 9, 15) }],
  },
  {
    id: 'pediatrie',
    doctors: [{ name: 'BOUCHAMA Zahir', role: 'pediatre', slots: [d(FRI, 9, 12)] }],
  },
  {
    id: 'chirurgiePediatrique',
    doctors: [
      { name: 'AISSIOU Djamel', role: 'chirurgienInfantile', slots: days([MON, TUE], 13, 15) },
    ],
  },
  {
    id: 'orl',
    doctors: [
      { name: 'BACHA Nadia', role: 'chirurgienOrl', slots: days([SUN, TUE], 12, 15) },
      { name: 'SABIH Mohamed Cherif', role: 'chirurgienOrl', slots: [d(MON, 8, 12)] },
    ],
  },
  {
    id: 'urologie',
    doctors: [
      { name: 'OUDJOUEDJ Bachir', role: 'urologue', slots: [d(SUN, 9, 16)] },
      { name: 'NAIT TAHAR Mohamed', role: 'urologue', slots: [d(THU, 9, 16)] },
    ],
  },
  {
    id: 'orthopedie',
    doctors: [
      {
        name: 'BOUACHA Kheireddine',
        role: 'orthopediste',
        slots: [d(SUN, 10, 14), d(TUE, 9, 16), d(THU, 9, 16)],
      },
      { name: 'RAZALI Samir', role: 'orthopedisteMain', slots: days([MON, WED, SAT], 9, 15) },
    ],
  },
  {
    id: 'neurochirurgie',
    doctors: [
      { name: 'EL BLIDI Abdelkrim', role: 'neurochirurgien', slots: [d(MON, 9, 14)] },
      { name: 'BOUCHAMA Hamdane', role: 'neurochirurgien', slots: [d(THU, 9, 12)] },
    ],
  },
  {
    id: 'neurophysiologie',
    doctors: [{ name: 'HAMMACHE Fayçal', role: 'neurophysiologiste', slots: [d(SAT, 9, 15)] }],
  },
];

/* Libellés traduits : noms de spécialités, intitulés des praticiens, jours de
   la semaine et textes de la section. Le planning, lui, reste unique.

   Chaque spécialité et chaque jour ont deux formes : `long` pour le tableau et
   les titres, `short` pour les pastilles de filtre et les en-têtes de colonnes
   sur téléphone, où la place manque. */
const labels = {
  fr: {
    ui: {
      overline: "CONSULTATIONS",
      title: "Horaires des consultations",
      description:
        "Les horaires de la semaine, jour par jour. Choisissez une spécialité pour afficher ses horaires.",
      filterLabel: "Spécialité",
      doctorPrefix: "Dr",
      today: "Aujourd'hui",
      slotOne: "{count} consultation",
      slotMany: "{count} consultations",
      countOne: "{count} médecin",
      countMany: "{count} médecins",
      onCall: "Présence selon le programme opératoire",
      onCallTitle: "Sans consultation programmée",
      empty: "Aucune consultation pour cette sélection.",
      note:
        "Les horaires peuvent évoluer. Confirmez votre créneau à l'accueil ou par téléphone avant de vous déplacer.",
      cta: "Prendre rendez-vous",
    },
    days: [
      { long: "Dimanche", short: "Dim" },
      { long: "Lundi", short: "Lun" },
      { long: "Mardi", short: "Mar" },
      { long: "Mercredi", short: "Mer" },
      { long: "Jeudi", short: "Jeu" },
      { long: "Vendredi", short: "Ven" },
      { long: "Samedi", short: "Sam" },
    ],
    specialty: {
      anesthesie: { long: "Anesthésie-réanimation", short: "Anesthésie" },
      medecineGenerale: { long: "Médecine générale", short: "Médecine générale" },
      chirurgieViscerale: {
        long: "Chirurgie viscérale, générale et digestive",
        short: "Chirurgie viscérale",
      },
      gynecologie: { long: "Gynécologie-obstétrique", short: "Gynécologie" },
      nephrologie: { long: "Néphrologie", short: "Néphrologie" },
      diabetologie: { long: "Diabétologie", short: "Diabétologie" },
      pediatrie: { long: "Pédiatrie", short: "Pédiatrie" },
      chirurgiePediatrique: { long: "Chirurgie pédiatrique", short: "Chirurgie pédiatrique" },
      orl: { long: "ORL — oto-rhino-laryngologie", short: "ORL" },
      urologie: { long: "Urologie", short: "Urologie" },
      orthopedie: { long: "Orthopédie", short: "Orthopédie" },
      neurochirurgie: { long: "Neurochirurgie", short: "Neurochirurgie" },
      neurophysiologie: { long: "Neurophysiologie — EMG", short: "Neurophysiologie" },
    },
    role: {
      reanimateur: "Médecin réanimateur",
      generaliste: "Médecin généraliste",
      chirurgien: "Chirurgien",
      gynecologue: "Médecin gynécologue",
      nephrologue: "Médecin néphrologue",
      diabetologue: "Médecin généraliste, C.E.S. en diabétologie",
      pediatre: "Pédiatre",
      chirurgienInfantile: "Chirurgien infantile",
      chirurgienOrl: "Chirurgien ORL",
      urologue: "Médecin urologue",
      orthopediste: "Chirurgien orthopédiste",
      orthopedisteMain: "Chirurgien orthopédiste, spécialiste de la chirurgie de la main",
      neurochirurgien: "Neurochirurgien",
      neurophysiologiste: "Médecin neurophysiologiste",
    },
  },

  en: {
    ui: {
      overline: "CONSULTATIONS",
      title: "Consultation hours",
      description:
        "The week's hours, day by day. Pick a specialty to see its own hours.",
      filterLabel: "Specialty",
      doctorPrefix: "Dr",
      today: "Today",
      slotOne: "{count} consultation",
      slotMany: "{count} consultations",
      countOne: "{count} doctor",
      countMany: "{count} doctors",
      onCall: "In attendance according to the surgical schedule",
      onCallTitle: "No scheduled consultation",
      empty: "No consultation for this selection.",
      note:
        "Times may change. Please confirm your slot at the reception desk or by phone before travelling.",
      cta: "Book an appointment",
    },
    days: [
      { long: "Sunday", short: "Sun" },
      { long: "Monday", short: "Mon" },
      { long: "Tuesday", short: "Tue" },
      { long: "Wednesday", short: "Wed" },
      { long: "Thursday", short: "Thu" },
      { long: "Friday", short: "Fri" },
      { long: "Saturday", short: "Sat" },
    ],
    specialty: {
      anesthesie: { long: "Anaesthesia & intensive care", short: "Anaesthesia" },
      medecineGenerale: { long: "General medicine", short: "General medicine" },
      chirurgieViscerale: {
        long: "Visceral, general & digestive surgery",
        short: "Visceral surgery",
      },
      gynecologie: { long: "Gynaecology & obstetrics", short: "Gynaecology" },
      nephrologie: { long: "Nephrology", short: "Nephrology" },
      diabetologie: { long: "Diabetology", short: "Diabetology" },
      pediatrie: { long: "Paediatrics", short: "Paediatrics" },
      chirurgiePediatrique: { long: "Paediatric surgery", short: "Paediatric surgery" },
      orl: { long: "ENT — ear, nose & throat", short: "ENT" },
      urologie: { long: "Urology", short: "Urology" },
      orthopedie: { long: "Orthopaedics", short: "Orthopaedics" },
      neurochirurgie: { long: "Neurosurgery", short: "Neurosurgery" },
      neurophysiologie: { long: "Neurophysiology — EMG", short: "Neurophysiology" },
    },
    role: {
      reanimateur: "Intensive care physician",
      generaliste: "General practitioner",
      chirurgien: "Surgeon",
      gynecologue: "Gynaecologist",
      nephrologue: "Nephrologist",
      diabetologue: "General practitioner, postgraduate diploma in diabetology",
      pediatre: "Paediatrician",
      chirurgienInfantile: "Paediatric surgeon",
      chirurgienOrl: "ENT surgeon",
      urologue: "Urologist",
      orthopediste: "Orthopaedic surgeon",
      orthopedisteMain: "Orthopaedic surgeon, hand surgery specialist",
      neurochirurgien: "Neurosurgeon",
      neurophysiologiste: "Neurophysiologist",
    },
  },

  ar: {
    ui: {
      overline: "العيادات الخارجية",
      title: "مواعيد الاستشارات",
      description:
        "مواعيد الأسبوع، يوماً بيوم. اختر تخصصاً لعرض مواعيده.",
      filterLabel: "التخصص",
      doctorPrefix: "د.",
      today: "اليوم",
      slotOne: "استشارة واحدة",
      slotMany: "{count} استشارات",
      countOne: "طبيب واحد",
      countMany: "{count} أطباء",
      onCall: "الحضور حسب البرنامج الجراحي",
      onCallTitle: "بدون استشارة مبرمجة",
      empty: "لا توجد استشارات لهذا الاختيار.",
      note:
        "قد تتغيّر المواعيد. يُرجى تأكيد الموعد لدى الاستقبال أو عبر الهاتف قبل التنقّل.",
      cta: "حجز موعد",
    },
    days: [
      { long: "الأحد", short: "أحد" },
      { long: "الإثنين", short: "إثنين" },
      { long: "الثلاثاء", short: "ثلاثاء" },
      { long: "الأربعاء", short: "أربعاء" },
      { long: "الخميس", short: "خميس" },
      { long: "الجمعة", short: "جمعة" },
      { long: "السبت", short: "سبت" },
    ],
    specialty: {
      anesthesie: { long: "التخدير والإنعاش", short: "التخدير" },
      medecineGenerale: { long: "الطب العام", short: "الطب العام" },
      chirurgieViscerale: {
        long: "الجراحة العامة والحشوية والهضمية",
        short: "الجراحة العامة",
      },
      gynecologie: { long: "أمراض النساء والتوليد", short: "أمراض النساء" },
      nephrologie: { long: "أمراض الكلى", short: "أمراض الكلى" },
      diabetologie: { long: "داء السكري", short: "داء السكري" },
      pediatrie: { long: "طب الأطفال", short: "طب الأطفال" },
      chirurgiePediatrique: { long: "جراحة الأطفال", short: "جراحة الأطفال" },
      orl: { long: "الأنف والأذن والحنجرة", short: "أنف وأذن وحنجرة" },
      urologie: { long: "المسالك البولية", short: "المسالك البولية" },
      orthopedie: { long: "جراحة العظام", short: "جراحة العظام" },
      neurochirurgie: { long: "جراحة الأعصاب", short: "جراحة الأعصاب" },
      neurophysiologie: {
        long: "فيزيولوجيا الأعصاب — تخطيط العضلات",
        short: "فيزيولوجيا الأعصاب",
      },
    },
    role: {
      reanimateur: "طبيب إنعاش",
      generaliste: "طبيب عام",
      chirurgien: "جرّاح",
      gynecologue: "طبيب أمراض النساء والتوليد",
      nephrologue: "طبيب أمراض الكلى",
      diabetologue: "طبيب عام، شهادة دراسات معمّقة في داء السكري",
      pediatre: "طبيب أطفال",
      chirurgienInfantile: "جرّاح أطفال",
      chirurgienOrl: "جرّاح أنف وأذن وحنجرة",
      urologue: "طبيب مسالك بولية",
      orthopediste: "جرّاح عظام",
      orthopedisteMain: "جرّاح عظام، أخصائي جراحة اليد",
      neurochirurgien: "جرّاح أعصاب",
      neurophysiologiste: "طبيب فيزيولوجيا الأعصاب",
    },
  },
};

type LanguageKey = keyof typeof labels;

/* Recolle planning et libellés : le composant ne voit plus que des chaînes
   déjà traduites, plus les créneaux bruts qu'il met en forme lui-même. */
const buildSpecialties = (lang: LanguageKey) =>
  roster.map((specialty) => ({
    id: specialty.id as string,
    name: labels[lang].specialty[specialty.id].long,
    shortName: labels[lang].specialty[specialty.id].short,
    doctors: specialty.doctors.map((doctor) => ({
      name: doctor.name,
      role: labels[lang].role[doctor.role],
      slots: doctor.slots,
    })),
  }));

const build = (lang: LanguageKey) => ({
  consultations: {
    ...labels[lang].ui,
    days: labels[lang].days,
    specialties: buildSpecialties(lang),
  },
});

export const consultations = {
  fr: build('fr'),
  en: build('en'),
  ar: build('ar'),
};
