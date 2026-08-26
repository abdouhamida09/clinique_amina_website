import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from '../lib/motion';

type InViewOptions = NonNullable<Parameters<typeof useInView>[1]>;

interface CountUpProps {
  to: number;
  /** Decimal places — 1 renders 5.0, 0 renders 500. */
  decimals?: number;
  suffix?: string;
  duration?: number;
  /**
   * Viewport inset for the trigger. The default waits until the number is well
   * inside the screen, which is right for a figure the reader scrolls down to —
   * but wrong for one sitting on the very edge of the fold, which never enters
   * that shrunken band and would stay at zero. Pass `'0px'` there.
   */
  margin?: InViewOptions['margin'];
  className?: string;
}

/**
 * Counts from zero to `to` the first time it scrolls into view.
 *
 * Renders the final value immediately when the reader prefers reduced motion, and
 * keeps `dir="ltr"` so the digits stay in Latin order inside Arabic copy.
 */
const CountUp = ({
  to,
  decimals = 0,
  suffix = '',
  duration = 1.4,
  margin = '-15%',
  className,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin });
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(prefersReducedMotion ? to : 0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const controls = animate(0, to, {
      duration,
      ease: EASE_OUT,
      onUpdate: (latest) => setValue(latest),
    });

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, to, duration]);

  return (
    <span ref={ref} className={className} dir="ltr">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
