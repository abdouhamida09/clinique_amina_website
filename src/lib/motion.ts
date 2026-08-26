import type { RefObject } from 'react';
import {
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';

/**
 * One motion vocabulary for the whole site.
 *
 * Micro-interactions (hover, tap, colour) stay in the 150–300ms band, where a
 * pointer expects a quick, repeatable response.
 *
 * Entrances are longer and softer, matching the timings this site shipped with
 * before the redesign: 0.55–0.8s on a plain `easeOut`, with enough travel and
 * scale to be felt. That gentle ease matters — the site's own EASE_OUT is a
 * near-expo curve that dumps most of its distance in the first third and reads
 * as a snap on a large block. Everything animates transform/opacity only, so
 * nothing triggers layout.
 * Reduced-motion is handled globally by <MotionConfig reducedMotion="user">.
 */

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_IN = [0.4, 0, 1, 1] as const;

export const DURATION = {
  fast: 0.16,
  base: 0.24,
  slow: 0.4,
  /** Blocks and columns arriving on scroll. */
  entrance: 0.7,
  /** One card inside a staggered set — shorter, since several overlap. */
  card: 0.55,
} as const;

const blockTransition = { duration: DURATION.entrance, ease: 'easeOut' } as const;
const cardTransition = { duration: DURATION.card, ease: 'easeOut' } as const;

/**
 * Smoothing applied to every scroll-linked value.
 *
 * A wheel or trackpad delivers scroll in discrete jumps, so a value mapped
 * straight off `scrollYProgress` steps rather than glides. The spring turns
 * those steps into continuous motion at the cost of a few milliseconds of lag.
 */
export const SCROLL_SPRING = { stiffness: 120, damping: 28, restDelta: 0.0005 } as const;

/** Standard viewport trigger: fire once, slightly before the element is centred. */
export const inView = { once: true, margin: '-12% 0px -8% 0px' } as const;

/** Section entrance — headers, blocks, single cards. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 44, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: blockTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

/** Directional entrance for two-column blocks. `x` is flipped by the caller in RTL. */
export const slideIn = (x: number): Variants => ({
  hidden: { opacity: 0, x, scale: 0.98 },
  show: { opacity: 1, x: 0, scale: 1, transition: blockTransition },
});

/** Parent of a list/grid — children reveal 60ms apart. */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

/** Child of `staggerParent`. */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: cardTransition },
};

/** Press feedback for cards and buttons — scale only, never layout. */
export const press = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.97 },
  transition: { duration: DURATION.fast, ease: EASE_OUT },
} as const;

/**
 * Subtle scroll-linked parallax for a large image inside an overflow-hidden box.
 *
 * Returns a `y` MotionValue that travels from `-distance` to `+distance` while the
 * element crosses the viewport. The image must be oversized (roughly 118% height,
 * pulled up ~9%) so the shift never exposes an edge. Returns a flat 0 when the
 * reader has asked the OS to reduce motion.
 */
export function useParallax(ref: RefObject<HTMLElement | null>, distance = 24) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const shift = prefersReducedMotion ? 0 : distance;
  const smoothed = useSpring(scrollYProgress, SCROLL_SPRING);
  return useTransform(smoothed, [0, 1], [-shift, shift]);
}

/** Carousel slide, direction-aware. */
export const slideVariants: Variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 48 : -48 }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE_OUT },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
    transition: { duration: DURATION.base, ease: EASE_IN },
  }),
};
