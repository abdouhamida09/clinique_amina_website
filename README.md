# 🏥 Clinique Amina — Site web de la clinique

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

Site vitrine de la **Clinique Amina**, clinique médico-chirurgicale et d'accouchement située à Chiffa, wilaya de Blida (Algérie). Une page unique, trilingue (FR / EN / AR), qui présente les services de la clinique, sa galerie, ses horaires et un formulaire de demande de rendez-vous.

---

## ✨ Fonctionnalités

- **🌍 Trilingue FR / EN / AR** — dictionnaire centralisé dans [translations.ts](src/translations.ts), bascule RTL automatique (`dir`, `lang`, `<title>`) pour l'arabe, avec polices dédiées (Cairo, Noto Sans Arabic).
- **📅 Demande de rendez-vous en 3 étapes** — choix du service, puis date et créneau via un calendrier maison, puis coordonnées et récapitulatif ([Reservation.tsx](src/Reservation.tsx)).
- **🩺 Fiches services détaillées** — 7 services avec aperçu, points clés et capacité technique, ouvrables en vue détail.
- **🖼️ Galerie** — photos de la clinique avec agrandissement au clic et navigation clavier.
- **📍 Contact & plan** — carte Google Maps intégrée en lazy-load, standard téléphonique, mobile, WhatsApp, Instagram et Facebook.
- **🎨 Design system dédié** — palette bleu marine `#0F2F5C` / rouge `#E04A4D` sur fond `#F3F6FA`, surfaces glassmorphism et tokens Tailwind v4 définis dans [index.css](src/index.css).
- **🎬 Vocabulaire de motion unifié** — variantes, durées et parallaxe partagés dans [motion.ts](src/lib/motion.ts), avec respect de `prefers-reduced-motion` via `<MotionConfig reducedMotion="user">`.
- **♿ Accessibilité** — lien d'évitement, cibles tactiles de 40 px minimum, libellés ARIA traduits, focus visible.

---

## 🛠️ Stack technique

- **Frontend** : [React 19](https://react.dev/), [TypeScript 5.9](https://www.typescriptlang.org/)
- **Build** : [Vite 8](https://vitejs.dev/)
- **Styles** : [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Animations** : [Framer Motion 12](https://www.framer.com/motion/)
- **Composants** : [Radix UI](https://www.radix-ui.com/) / [shadcn/ui](https://ui.shadcn.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Utilitaires** : `clsx`, `tailwind-merge`, `date-fns`, `sonner` (toasts), `vaul` (drawers), `next-themes`
- **Tests** : [Vitest](https://vitest.dev/) + Testing Library

---

## 🚀 Démarrage

### Prérequis
- Node.js (dernière LTS recommandée)
- npm

### Installation
```bash
git clone https://github.com/abdouhamida09/clinique_amina_website.git
cd clinique_amina_website
npm install
npm run dev
```

Le serveur de dev écoute sur toutes les interfaces réseau (`server.host: true`), il est donc accessible depuis un téléphone sur le même Wi-Fi à l'adresse `Network:` affichée par Vite.

### Scripts
| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement Vite |
| `npm run build` | Vérification TypeScript puis build de production |
| `npm run preview` | Prévisualisation du build |
| `npm run lint` | ESLint sur tout le projet |

### Déploiement dans un sous-dossier
Si le site n'est pas servi à la racine du domaine, décommenter et adapter `base` dans [vite.config.ts](vite.config.ts) (par exemple `base: '/website/'`).

---

## 📂 Structure du projet

```text
src/
├── components/
│   ├── sections/          # Hero, About, Services, Gallery, Reservation, FAQ, Testimonials, Footer
│   ├── ui/                # Composants de base Radix / shadcn
│   ├── HomePage.tsx       # Assemblage de la page unique
│   ├── Navbar.tsx         # Navigation + sélecteur de langue
│   └── …                  # MapEmbed, ScrollProgress, BackToTop, AmbientBackground, CountUp…
├── lib/
│   ├── motion.ts          # Variantes, durées et parallaxe partagées
│   ├── languages.ts       # Ordre des langues et libellés
│   └── utils.ts
├── types/sections.ts      # Props communes aux sections
├── Reservation.tsx        # Parcours de prise de rendez-vous en 3 étapes
├── translations.ts        # Dictionnaire FR / EN / AR
├── index.css              # Tokens de thème Tailwind v4 et styles globaux
├── App.tsx                # Langue, thème, direction du document
└── main.tsx               # Point d'entrée
public/images/             # Photos de la clinique et visuels des services
```

---

## 🏥 À propos de la clinique

La **Clinique Amina** est une clinique médico-chirurgicale et d'accouchement d'une capacité de **85 lits et places**. La maternité et la chirurgie constituent ses activités principales.

**Services présentés sur le site :**
- 🔬 Chirurgie — 3 salles d'intervention et une salle de réveil de 6 postes
- 🤰 Maternité — 2 salles de prétravail et de monitoring
- 💧 Hémodialyse — 16 postes de dialyse
- 🩻 Imagerie médicale — examens pour patients hospitalisés et externes
- 💊 Pharmacie interne
- 🚑 Urgences médico-chirurgicales
- 🧪 Laboratoire d'analyses médicales

**Adresse** : Lotissement Zone Est, 09250 Chiffa, wilaya de Blida, Algérie
**Horaires** : tous les services 24h/24 – 7j/7 · visites de 13h à 19h
**Téléphone** : +213 (0) 28 68 43 63 · +213 (0) 28 68 43 98 · +213 (0) 28 68 44 44
**Mobile / WhatsApp** : +213 (0) 563 02 61 81

---

## 📄 Licence

Projet privé — Tous droits réservés.
Conçu et développé par **IBS**.
