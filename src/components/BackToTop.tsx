import { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';
import { DURATION, EASE_OUT } from '../lib/motion';

/** Distance scrolled before the button appears — roughly one screen. */
const REVEAL_AFTER = 480;

/**
 * Floating scroll-to-top control with a reading-progress ring.
 *
 * The ring is the same measure as the hairline bar at the top of the page, drawn
 * as an arc: `pathLength` runs 0 → 1 with the scroll, and the `-rotate-90` on the
 * svg starts it at twelve o'clock. Sits below the navbar drawer (z 1000) and the
 * dialogs (z 1100), so both still cover it.
 */
const BackToTop = ({ label }: { label: string }) => {
  const { scrollY, scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  // The spring smooths the jitter of raw scroll input; skipped for reduced motion.
  const progress = useSpring(
    scrollYProgress,
    prefersReducedMotion ? { duration: 0 } : { stiffness: 140, damping: 30, restDelta: 0.001 }
  );

  useMotionValueEvent(scrollY, 'change', (value) => setIsVisible(value > REVEAL_AFTER));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
          }
          aria-label={label}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12, transition: { duration: DURATION.fast } }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: DURATION.base, ease: EASE_OUT }}
          className="glass-strong group fixed bottom-5 end-5 sm:bottom-7 sm:end-7 z-[990] flex h-12 w-12 items-center justify-center rounded-full text-ink"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 48 48"
            className="absolute inset-0 h-full w-full -rotate-90"
          >
            <circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              stroke="rgba(15,47,92,0.12)"
              strokeWidth="2.5"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              stroke="var(--color-brand-red-strong)"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </svg>

          <ArrowUp
            aria-hidden="true"
            className="relative h-5 w-5 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:text-brand-red-ink"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
