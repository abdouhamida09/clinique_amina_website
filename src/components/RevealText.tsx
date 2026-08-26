import { Fragment, useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { DURATION, EASE_OUT, inView, useParallax } from '../lib/motion';

interface RevealTextProps {
  text: string;
  className?: string;
  /** Seconds between each word. */
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /** Scroll-linked drift in px. 0 holds the heading still. */
  drift?: number;
}

const wordVariants = {
  hidden: { y: 16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATION.slow, ease: EASE_OUT },
  },
};

/**
 * Reveals a heading one word at a time.
 *
 * Two deliberate constraints:
 *
 * 1. Splits on whitespace only, never per character. Arabic is cursive — wrapping
 *    individual letters severs the joins between them. Word boundaries are already
 *    non-joining, so splitting there is safe in all three languages.
 * 2. No `overflow: hidden` mask. The masked "rise out of nothing" variant clips
 *    descenders, and Arabic descenders (ج ح خ ع غ م ه) are deep enough that it
 *    shows. A short translate plus fade survives every script.
 *
 * The wrapper carries the full string as its accessible name and the word spans are
 * hidden from assistive tech, so a screen reader announces one clean sentence.
 */
const RevealText = ({
  text,
  className,
  stagger = 0.045,
  as = 'h2',
  drift = 12,
}: RevealTextProps) => {
  const words = text.split(/\s+/).filter(Boolean);
  const MotionTag = motion[as];

  /* The heading keeps moving after it has arrived: it drifts a few pixels
     against the scroll while its section crosses the viewport, which reads as
     depth between one section and the next. Safe on a heading — a transform
     would trap `position: fixed` descendants, and there are none here. The
     wrapper's own variants only orchestrate the word stagger, so nothing of
     framer's competes for this transform. */
  const ref = useRef<HTMLHeadingElement>(null);
  /* Rounded to whole pixels: a heading parked on a fractional offset renders
     soft, and headings are the one place that shows. */
  const y = useTransform(useParallax(ref, drift), (value) => Math.round(value));

  return (
    // key={text} is load-bearing. On a language switch the word spans get new keys
    // and remount, but this wrapper would not — and its `once: true` viewport
    // animation has already fired, so the fresh words would inherit `hidden` and
    // never be animated to `show`. The title would simply vanish. Re-keying the
    // wrapper remounts it, which re-arms whileInView for the new words.
    <MotionTag
      key={text}
      ref={ref}
      style={{ y }}
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {words.map((word, index) => (
        // The space lives outside the inline-block: a trailing space *inside* one
        // collapses away and the words would run together.
        <Fragment key={`${word}-${index}`}>
          <motion.span aria-hidden="true" variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
          {index < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </MotionTag>
  );
};

export default RevealText;
