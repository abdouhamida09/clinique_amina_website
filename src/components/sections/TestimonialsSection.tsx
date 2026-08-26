import { MessageCircle, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealText from '../RevealText';
import type { SectionProps } from '../../types/sections';
import { DURATION, EASE_OUT, fadeUp, inView } from '../../lib/motion';
import { useDraggableMarquee } from '../../lib/useDraggableMarquee';
import { site } from '../../content/site';

/** Copies of the list per half of the track — enough to cover a wide screen. */
const COPIES_PER_HALF = 3;
/** Seconds a card takes to cross; keeps the speed even whatever the card count. */
const SECONDS_PER_CARD = 7;

const TestimonialsSection = ({ lang, t }: SectionProps) => {
  const items = t.testimonials.items;
  const isRtl = lang === 'ar';

  /* Two identical halves: the track travels -50%, so it lands back on a copy of
     its own start and the loop never shows a seam. Each half repeats the list
     until it is wider than the viewport, otherwise the ribbon would run out of
     cards mid-screen. */
  const half = Array.from({ length: COPIES_PER_HALF }, () => items).flat();
  const cards = [...half, ...half];

  /* Draggable on every screen, unlike the services ribbon: this one is the
     mobile layout too, and a thumb is the natural way through it. */
  const { viewportProps, trackProps } = useDraggableMarquee({
    loopSeconds: half.length * SECONDS_PER_CARD,
  });

  return (
    <section id="avis" className="relative px-4 sm:px-6 md:px-6 pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">{t.testimonials.overline}</span>
          <RevealText as="h2" text={t.testimonials.title} className="mt-3 section-title text-ink" />
          <p className="mt-5 section-lead">{t.testimonials.description}</p>
        </motion.div>
      </div>

      {/* The ribbon runs wider than the text column and fades out at both edges.
          `dir="ltr"` is forced here so the travel direction is the same in every
          language; each card restores the reading direction for its own copy. */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        dir="ltr"
        role="region"
        aria-label={t.testimonials.title}
        className="marquee-viewport -mx-4 sm:-mx-6 mt-10 md:mt-14 py-2"
        {...viewportProps}
      >
        <motion.ul {...trackProps} className="marquee-draggable gap-3 md:gap-4 px-2">
          {cards.map((item, index) => (
            <li
              // Repeats past the first pass are decoration: the reader hears the
              // list once, and the duplicates stay out of the accessibility tree.
              key={index}
              aria-hidden={index >= items.length}
              dir={isRtl ? 'rtl' : 'ltr'}
              className="flex w-[232px] sm:w-[260px] shrink-0 flex-col rounded-[1.25rem] md:rounded-[1.5rem] border border-[rgba(15,47,92,0.06)] bg-[#F7F9FC] p-5 shadow-[var(--elev-1)]"
            >
              <Quote
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-[rgba(15,47,92,0.16)]"
                fill="currentColor"
                strokeWidth={0}
              />
              {/* Arabic has no italics — a synthetic slant only mangles the joins. */}
              <p
                className={`mt-3 flex-1 text-[13px] leading-6 text-ink-soft ${
                  isRtl ? '' : 'italic'
                }`}
              >
                “{item.text}”
              </p>
              <div className="mt-4">
                <p className="text-[13px] font-semibold text-ink">{item.name}</p>
                <p className="mt-0.5 text-xs text-brand-red-ink">{item.role}</p>
              </div>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="mt-10 flex justify-center">
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: DURATION.fast, ease: EASE_OUT }}
          href={site.reviewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="glass lift inline-flex min-h-13 items-center gap-2 rounded-full px-6 text-ink font-medium hover:bg-white/85"
        >
          {t.testimonials.giveReview}
          <MessageCircle className="h-4 w-4 opacity-70" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
