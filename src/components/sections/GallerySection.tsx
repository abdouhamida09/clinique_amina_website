import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import GlassMedia from '../GlassMedia';
import RevealText from '../RevealText';
import type { SectionProps } from '../../types/sections';
import { DURATION, EASE_OUT, fadeUp, inView, staggerChild, staggerParent } from '../../lib/motion';

/** Bento placement per image index: large lead tile, then four supporting tiles. */
const tileClasses = [
  'col-span-2 lg:row-span-2 h-52 sm:h-72 lg:h-full',
  'h-36 sm:h-52 lg:h-56',
  'h-36 sm:h-52 lg:h-56',
  'h-36 sm:h-52 lg:h-56',
  'h-36 sm:h-52 lg:h-56',
];

const GallerySection = ({ lang, t }: SectionProps) => {
  const items = t.gallery.items;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isRtl = lang === 'ar';

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpenIndex((current) =>
        current === null ? current : (current + dir + items.length) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') step(isRtl ? -1 : 1);
      if (event.key === 'ArrowLeft') step(isRtl ? 1 : -1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [openIndex, close, step, isRtl]);

  const controlClass =
    'flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition-colors duration-200 hover:bg-white/30 active:scale-95';

  return (
    <section id="galerie" className="px-4 sm:px-6 md:px-6 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="eyebrow">{t.gallery.overline}</span>
            <RevealText as="h2" text={t.gallery.title} className="mt-3 section-title text-ink" />
          </div>
          <p className="section-lead max-w-md">{t.gallery.description}</p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 md:gap-4"
        >
          {items.map((item, index) => (
            <motion.button
              key={item.image}
              type="button"
              variants={staggerChild}
              whileTap={{ scale: 0.985 }}
              onClick={() => setOpenIndex(index)}
              aria-label={`${item.caption} — ${t.gallery.openLabel}`}
              className={`glass lift group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] text-start ${
                tileClasses[index] ?? tileClasses[1]
              }`}
            >
              {/* Same frame as the About portrait and the service cards; only the
                  lead tile drifts with the scroll. */}
              <GlassMedia
                src={item.image}
                alt={item.caption}
                parallax={index === 0 ? 22 : 0}
                scrim="strong"
                className="h-full w-full rounded-[1.5rem] md:rounded-[2rem]"
              >
                {/* Phones get plain text on the scrim; from `md` the caption
                    becomes the same glass panel as the About portrait. The
                    expand affordance sits inside the caption in both, where the
                    scrim is darkest — on mobile it carries its own drop shadow
                    and full opacity, since there is no panel behind it and no
                    hover to bring it up. */}
                <span className="glass-caption bare-sm absolute bottom-3 start-3 end-3 flex items-center gap-3 px-0 py-0 md:px-4 md:py-3 md:rounded-[1.1rem] text-[13px] md:text-sm font-medium">
                  <span className="flex-1">{item.caption}</span>
                  <Expand
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 drop-shadow-[0_1px_6px_rgba(8,20,40,0.55)] md:drop-shadow-none md:opacity-70 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-110 group-focus-visible:opacity-100"
                  />
                </span>
              </GlassMedia>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: DURATION.fast } }}
            transition={{ duration: DURATION.base }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={t.gallery.title}
            className="fixed inset-0 z-[1100] flex flex-col items-center justify-center bg-[rgba(8,20,40,0.86)] backdrop-blur-lg p-4 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6"
          >
            <button
              type="button"
              onClick={close}
              aria-label={t.gallery.closeLabel}
              className={`absolute top-4 end-4 sm:top-6 sm:end-6 z-10 ${controlClass}`}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97, transition: { duration: DURATION.fast } }}
              transition={{ duration: DURATION.base, ease: EASE_OUT }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) step(1);
                if (info.offset.x > 60) step(-1);
              }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-4xl overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white/10 border border-white/20 shadow-2xl cursor-grab active:cursor-grabbing"
            >
              <img
                src={items[openIndex].image}
                alt={items[openIndex].caption}
                className="w-full max-h-[58vh] sm:max-h-[68vh] object-contain bg-black/25"
              />
              <p className="px-5 py-4 text-center text-sm md:text-base text-white/90">
                {items[openIndex].caption}
              </p>
            </motion.div>

            <div className="mt-5 flex items-center gap-4" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label={t.gallery.prevLabel}
                className={controlClass}
              >
                {isRtl ? (
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
              <span className="tabular text-sm tracking-[0.18em] text-white/85" dir="ltr">
                {openIndex + 1} / {items.length}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label={t.gallery.nextLabel}
                className={controlClass}
              >
                {isRtl ? (
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
