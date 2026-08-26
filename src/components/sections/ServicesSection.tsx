import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Ambulance,
  Baby,
  Check,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Microscope,
  Pill,
  ScanLine,
  Scissors,
  Stethoscope,
  X,
  type LucideIcon,
} from 'lucide-react';
import GlassMedia from '../GlassMedia';
import RevealText from '../RevealText';
import type { SectionProps } from '../../types/sections';
import { DURATION, EASE_OUT, fadeUp, inView } from '../../lib/motion';
import { useDraggableMarquee } from '../../lib/useDraggableMarquee';

type ServiceItem = SectionProps['t']['services']['items'][number];

/* Keyed by image path rather than by title or index: the photo is the one field
   that is identical across fr/en/ar, so a service keeps its icon in every
   language and survives a reordering of one locale's list. */
const serviceIcons: Record<string, LucideIcon> = {
  '/images/services/Chirurgie.jpg': Scissors,
  '/images/services/Maternite.jpg': Baby,
  '/images/services/Hemodialyse.jpg': Droplets,
  '/images/services/Imagerie medicale.jpg': ScanLine,
  '/images/services/Pharmacie.jpg': Pill,
  '/images/services/Urgences.jpg': Ambulance,
  '/images/services/Laboratoire.jpg': Microscope,
};

interface ServiceContentProps extends SectionProps {
  service: ServiceItem;
  index: number;
  /** Renders the `1 — 7` counter used by the pinned mobile stack. */
  total?: number;
  onOpen: () => void;
  /** False on a ribbon's duplicated cards, which are hidden from assistive tech
      and must therefore stay out of the tab order too. */
  focusable?: boolean;
  imageClass: string;
  titleClass: string;
  descClass: string;
}

/* One card body for both layouts: photo carrying the service icon, numbered
   eyebrow, the full description, and the button that opens the detail dialog. */
const ServiceContent = ({
  service,
  index,
  total,
  lang,
  t,
  onOpen,
  focusable = true,
  imageClass,
  titleClass,
  descClass,
}: ServiceContentProps) => {
  const Icon = serviceIcons[service.image] ?? Stethoscope;
  const Chevron = lang === 'ar' ? ChevronLeft : ChevronRight;

  return (
    <>
      <GlassMedia src={service.image} alt={service.title} scrim="none" className={imageClass}>
        <span
          aria-hidden="true"
          className="glass-strong absolute bottom-4 start-4 flex h-11 w-11 items-center justify-center rounded-[0.9rem] text-brand-red-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        >
          <Icon className="h-5 w-5" strokeWidth={1.9} />
        </span>

        {total !== undefined && (
          <span
            aria-hidden="true"
            dir="ltr"
            className="absolute top-4 end-4 flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 backdrop-blur-md"
          >
            <span className="tabular text-[10px] font-bold tracking-widest text-brand-red-ink">
              {index + 1}
            </span>
            <span className="w-4 h-px bg-[rgba(224,74,77,0.3)]" />
            <span className="tabular text-[10px] font-bold text-[rgba(224,74,77,0.5)]">
              {total}
            </span>
          </span>
        )}
      </GlassMedia>

      <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
        <span className="eyebrow tabular !text-[0.7rem] !tracking-[0.2em]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className={titleClass}>{service.title}</h3>
        <p className={descClass}>{service.desc}</p>

        {/* `mt-auto` pins it to the bottom of the card, so the row of buttons
            lines up across the grid whatever the length of the copy above. */}
        <button
          type="button"
          onClick={onOpen}
          tabIndex={focusable ? undefined : -1}
          className="mt-auto pt-4 self-start inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red-ink transition-colors duration-200 hover:text-brand-red-strong"
        >
          {t.services.readMore}
          <Chevron aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </>
  );
};

interface ServiceModalProps extends SectionProps {
  service: ServiceItem;
  onClose: () => void;
}

/* The detail dialog: the service photo as a header carrying its icon and label,
   then the overview, the highlights and the capacity panel, and a footer that
   hands the reader over to the booking form. Same surfaces as the rest of the
   site — navy copy on `#F7F9FC` panels, red accent, glass over photography. */
const ServiceModal = ({ service, t, onClose }: ServiceModalProps) => {
  const Icon = serviceIcons[service.image] ?? Stethoscope;
  const { detail } = service;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: DURATION.fast } }}
      transition={{ duration: DURATION.base }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-[rgba(8,20,40,0.86)] backdrop-blur-lg p-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, transition: { duration: DURATION.fast } }}
        transition={{ duration: DURATION.base, ease: EASE_OUT }}
        onClick={(event) => event.stopPropagation()}
        className="flex w-full max-w-2xl max-h-[90vh] flex-col overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[2rem] bg-white shadow-[var(--elev-3)]"
      >
        <GlassMedia
          src={service.image}
          alt={service.title}
          scrim="strong"
          className="h-36 sm:h-48 md:h-56 max-h-[32vh] w-full shrink-0"
          priority
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={t.services.detailClose}
            className="glass-caption absolute top-3 end-3 sm:top-4 sm:end-4 flex h-10 w-10 items-center justify-center rounded-full"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="absolute bottom-4 start-4 end-4 sm:bottom-5 sm:start-5 sm:end-5 flex items-center gap-3 sm:gap-4">
            <span
              aria-hidden="true"
              className="glass-strong flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-[0.9rem] sm:rounded-[1rem] text-brand-red-ink"
            >
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.9} />
            </span>
            <div className="min-w-0">
              <h3 className="truncate text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white">
                {service.title}
              </h3>
              <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
                {detail.overline}
              </span>
            </div>
          </div>
        </GlassMedia>

        {/* `min-h-0` is what makes this band scroll instead of stretching the
            card: a flex child defaults to `min-height: auto` and refuses to
            shrink below its content, which would push the footer out of the
            clipped panel. */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-6 md:p-8">
          <h4 className="text-lg font-semibold tracking-tight text-ink">
            {t.services.detailOverview}
          </h4>
          <p className="mt-3 text-sm sm:text-[15px] leading-7 text-ink-soft">{detail.overview}</p>

          <hr className="my-6 border-t border-[rgba(15,47,92,0.08)]" />

          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div>
              <h4 className="text-lg font-semibold tracking-tight text-ink">
                {t.services.detailHighlights}
              </h4>
              <ul className="mt-4 space-y-3">
                {detail.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-ink-soft">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-red-ink"
                      strokeWidth={2.4}
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.25rem] bg-[#F7F9FC] border border-[rgba(15,47,92,0.06)] p-5">
              <span className="eyebrow !text-[0.65rem]">{detail.equipment.label}</span>
              <p className="mt-2 text-base font-semibold leading-snug text-ink">
                {detail.equipment.name}
              </p>
              <p className="mt-2 text-[13px] leading-6 text-ink-muted">{detail.equipment.note}</p>
            </div>
          </div>
        </div>

        <div className="shrink-0 flex flex-col-reverse sm:flex-row sm:justify-end gap-3 border-t border-[rgba(15,47,92,0.08)] bg-[#F7F9FC] px-5 sm:px-6 md:px-8 py-4">
          <button
            type="button"
            onClick={onClose}
            className="min-h-11 w-full sm:w-auto rounded-full border border-[rgba(15,47,92,0.14)] bg-white px-5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-[rgba(15,47,92,0.04)]"
          >
            {t.services.detailClose}
          </button>
          {/* Hands over to the booking form rather than to a service page that
              does not exist. Closing first releases the body scroll lock, which
              the anchor needs to be able to scroll at all. */}
          <motion.a
            href="#reservation"
            onClick={onClose}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: DURATION.fast, ease: EASE_OUT }}
            className="sheen flex min-h-11 w-full sm:w-auto items-center justify-center rounded-full bg-brand-red-strong px-6 text-sm font-medium text-white shadow-lg transition-colors duration-300 hover:bg-[#A82F32]"
          >
            {t.services.detailCta}
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface ServiceCardMobileProps extends SectionProps {
  service: ServiceItem;
  index: number;
  total: number;
  onOpen: () => void;
}

/* Mobile: cards stack and pin under the navbar as the reader scrolls, so each
   service gets the full screen without a carousel or a 7-card wall of text. */
const ServiceCardMobile = ({ service, index, total, lang, t, onOpen }: ServiceCardMobileProps) => (
  <div
    className="sticky w-full h-[78vh] -mb-[10vh] flex items-start justify-center px-2 pt-3"
    style={{ top: `${index * 18 + 96}px`, zIndex: 10 + index }}
  >
    <motion.article
      initial={{ opacity: 0, scale: 0.94, y: 32 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: DURATION.slow, ease: EASE_OUT }}
      /* Opaque, unlike the desktop glass card: these pin on top of one another,
         and a translucent surface would let the card underneath bleed through. */
      className="group relative flex w-full max-w-[94%] flex-col overflow-hidden rounded-[2rem] bg-white border border-white/60 shadow-[var(--elev-3)]"
    >
      <ServiceContent
        service={service}
        index={index}
        total={total}
        lang={lang}
        t={t}
        onOpen={onOpen}
        imageClass="h-44 rounded-t-[2rem]"
        titleClass="mt-2 text-[1.6rem] leading-tight font-medium tracking-tight text-ink"
        descClass="mt-3 text-[15px] leading-7 text-ink-soft"
      />
    </motion.article>
  </div>
);

/** Copies of the list per half of the track — enough to cover a wide screen. */
const COPIES_PER_HALF = 2;
/** Seconds a card takes to cross; keeps the speed even whatever the card count. */
const SECONDS_PER_CARD = 7;

interface ServicesMarqueeProps extends SectionProps {
  onOpen: (index: number) => void;
}

/* Desktop only — the phone layout keeps its pinned stack. The ribbon shares its
   whole behaviour with the testimonials one: see `useDraggableMarquee`. */
const ServicesMarquee = ({ lang, t, onOpen }: ServicesMarqueeProps) => {
  const items = t.services.items;
  const half = Array.from({ length: COPIES_PER_HALF }, () => items).flat();
  const cards = [...half, ...half];

  const { viewportProps, trackProps } = useDraggableMarquee({
    loopSeconds: half.length * SECONDS_PER_CARD,
  });

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      /* Forced `ltr` so the ribbon travels the same way in every language; each
         card restores the reading direction for its own copy. */
      dir="ltr"
      role="region"
      aria-label={t.services.title}
      className="marquee-viewport hidden md:block -mx-4 sm:-mx-6 py-3"
      {...viewportProps}
    >
      <motion.ul
        {...trackProps}
        className="marquee-draggable gap-4 px-2"
      >
        {cards.map((service, index) => {
          const position = index % items.length;
          // Repeats past the first pass are decoration: the reader hears the list
          // once, and their buttons stay out of the tab order.
          const isDuplicate = index >= items.length;

          return (
            <li
              key={index}
              aria-hidden={isDuplicate}
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
              /* Flat white, not `.glass`: a dozen backdrop-filters under a
                 permanently running animation is what melts a laptop fan. */
              className="lift group flex w-[300px] lg:w-[330px] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[var(--elev-1)]"
            >
              <ServiceContent
                service={service}
                index={position}
                lang={lang}
                t={t}
                onOpen={() => onOpen(position)}
                focusable={!isDuplicate}
                imageClass="aspect-[16/10]"
                titleClass="mt-2 text-2xl font-semibold tracking-tight text-ink"
                descClass="mt-3 text-sm leading-relaxed text-ink-soft"
              />
            </li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

const ServicesSection = ({ lang, t }: SectionProps) => {
  const items = t.services.items;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const close = useCallback(() => setOpenIndex(null), []);

  /* Same dialog handling as the gallery lightbox: Escape closes it, and the
     page behind stops scrolling while the panel is open. */
  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [openIndex, close]);

  return (
    <section id="services" className="px-4 sm:px-6 md:px-6 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="eyebrow">{t.services.overline}</span>
            <RevealText as="h2" text={t.services.title} className="mt-3 section-title text-ink" />
          </div>
          <p className="section-lead max-w-md">{t.services.description}</p>
        </motion.div>

        {/* key={lang} remounts the ribbon when the labels change, so the CSS
            animation restarts from its origin rather than mid-travel. */}
        <ServicesMarquee key={lang} lang={lang} t={t} onOpen={setOpenIndex} />

        <div key={`${lang}-mobile`} className="md:hidden relative flex flex-col pt-8 pb-[12vh]">
          {items.map((service, index) => (
            <ServiceCardMobile
              key={service.title}
              service={service}
              index={index}
              total={items.length}
              lang={lang}
              t={t}
              onOpen={() => setOpenIndex(index)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <ServiceModal service={items[openIndex]} lang={lang} t={t} onClose={close} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
