import { useId } from 'react';
import type { Language } from '../translations';

interface FlagIconProps {
  lang: Language;
  className?: string;
}

/**
 * Inline SVG flags for the language switcher.
 *
 * Deliberately not emoji: 🇫🇷 / 🇩🇿 / 🇬🇧 do not render on Windows at all — the OS
 * falls back to the bare region letters ("FR", "DZ", "GB") — and they vary wildly
 * across platforms. SVG renders identically everywhere and scales cleanly.
 *
 * Decorative by default: the button around them carries the accessible label.
 */
/* 3:2 box — matches the French and Algerian flags exactly, so `slice` only trims
   the Union Jack (2:1) slightly at the sides where it stays recognisable. */
const FlagIcon = ({ lang, className = 'h-4 w-6' }: FlagIconProps) => {
  // The Union Jack needs a clipPath; a fixed id would collide when the navbar and
  // the mobile drawer both render a flag.
  const clipId = useId();

  // The ring keeps the white bands of the French and UK flags from bleeding into
  // the light glass surfaces behind the button.
  const shared = {
    className: `${className} shrink-0 rounded-[2px] ring-1 ring-black/10`,
    'aria-hidden': true,
  };

  if (lang === 'fr') {
    return (
      <svg {...shared} viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice">
        <rect width="1" height="2" fill="#002395" />
        <rect x="1" width="1" height="2" fill="#FFFFFF" />
        <rect x="2" width="1" height="2" fill="#ED2939" />
      </svg>
    );
  }

  if (lang === 'ar') {
    return (
      <svg {...shared} viewBox="0 0 900 600" preserveAspectRatio="xMidYMid slice">
        <rect width="900" height="600" fill="#FFFFFF" />
        <rect width="450" height="600" fill="#006233" />
        {/* Crescent: the outer disc minus a disc shifted toward the fly. evenodd on
            two subpaths leaves the lune, so it works over both halves of the field. */}
        <path
          fill="#D21034"
          fillRule="evenodd"
          d="M425,150 a150,150 0 1,1 -0.1,0 Z M475,180 a120,120 0 1,0 0.1,0 Z"
        />
        <path
          fill="#D21034"
          d="M478.0,300.0 L526.4,284.3 L526.4,233.4 L556.3,274.6 L604.6,258.9 L574.7,300.0 L604.6,341.1 L556.3,325.4 L526.4,366.6 L526.4,315.7 Z"
        />
      </svg>
    );
  }

  return (
    <svg {...shared} viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice">
      <clipPath id={clipId}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath={`url(#${clipId})`}
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
};

export default FlagIcon;
