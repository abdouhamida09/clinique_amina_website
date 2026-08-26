import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import FlagIcon from './FlagIcon';
import { LANG_LABEL, LANGUAGES } from '../lib/languages';
import { DURATION, EASE_OUT } from '../lib/motion';
import type { Language } from '../translations';

interface LanguageMenuProps {
  lang: Language;
  setLang: (lang: Language) => void;
  /** Accessible name for the trigger, e.g. "Changer de langue". */
  label: string;
}

/**
 * Navbar language switcher: the current flag, and the two others on demand.
 *
 * It replaces a button that cycled fr → en → ar, where reaching Arabic from
 * French cost two clicks and neither of them announced where they led. Here the
 * choice is visible before it is made.
 */
const LanguageMenu = ({ lang, setLang, label }: LanguageMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const others = LANGUAGES.filter((code) => code !== lang);

  useEffect(() => {
    if (!isOpen) return;

    /* `pointerdown`, not `click`: the menu should be gone by the time the press
       lands, and a click listener also fires for the button that opened it. */
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={`${label} (${LANG_LABEL[lang]})`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-full px-3 text-ink-soft hover:bg-white/60 hover:text-ink transition-colors"
      >
        <FlagIcon lang={lang} className="h-3.5 w-5" />
        <span className="text-xs font-semibold uppercase">{LANG_LABEL[lang]}</span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: DURATION.base, ease: EASE_OUT }}
          className="flex"
        >
          <ChevronDown className="h-3.5 w-3.5 opacity-70" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            aria-label={label}
            /* `origin-top` so it unfolds downward from the trigger rather than
               growing from its own middle. */
            initial={{ opacity: 0, y: -8, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96, transition: { duration: DURATION.fast } }}
            transition={{ duration: DURATION.base, ease: EASE_OUT }}
            className="glass-strong absolute top-[calc(100%+0.5rem)] end-0 z-50 flex origin-top flex-col gap-1 rounded-2xl p-1.5"
          >
            {others.map((code, index) => (
              <motion.button
                key={code}
                type="button"
                role="menuitem"
                initial={{ opacity: 0, y: -6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.05 + index * 0.05, duration: DURATION.base, ease: EASE_OUT },
                }}
                onClick={() => {
                  setLang(code);
                  setIsOpen(false);
                }}
                className="flex min-h-10 items-center gap-2 whitespace-nowrap rounded-xl px-3 text-ink-soft transition-colors hover:bg-white/70 hover:text-ink"
              >
                <FlagIcon lang={code} className="h-3.5 w-5" />
                {/* `lang` on the label so a screen reader voices "ع" as Arabic. */}
                <span lang={code} className="text-xs font-semibold uppercase">
                  {LANG_LABEL[code]}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageMenu;
