import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { SCROLL_SPRING } from '../lib/motion';

/**
 * Hairline reading-progress bar pinned to the top of the page.
 *
 * Sits below the gallery lightbox (z 1100) so a modal still covers it, and grows
 * from the inline start edge so it runs right-to-left in Arabic.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  // The spring smooths the jitter of raw scroll input; skipped for reduced motion.
  const scaleX = useSpring(
    scrollYProgress,
    prefersReducedMotion ? { duration: 0 } : SCROLL_SPRING
  );

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[1002] h-[3px] origin-left rtl:origin-right bg-brand-red-strong"
    />
  );
};

export default ScrollProgress;
