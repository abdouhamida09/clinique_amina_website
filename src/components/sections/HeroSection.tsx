import { useRef } from 'react';
import BottomLeftCard from '../BottomLeftCard';
import BottomRightCorner from '../BottomRightCorner';
import HeroBadge from '../HeroBadge';
import RevealText from '../RevealText';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { SectionProps } from '../../types/sections';
import { DURATION, EASE_OUT, SCROLL_SPRING } from '../../lib/motion';
import { site } from '../../content/site';

/* Full-bleed height, minus the page gutter. dvh keeps mobile browser chrome from
   cropping the hero when the address bar collapses. */
const HERO_HEIGHT =
  'min-h-[calc(100dvh-1rem)] sm:min-h-[calc(100dvh-1.5rem)] md:min-h-[calc(100dvh-2rem)]';

const HeroSection = ({ lang, t }: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  /* 0 while the hero fills the screen → 1 once it has scrolled past the top.
     The photo drifts down slower than the page and the copy lifts slightly
     faster, which reads as depth as the reader moves into the next section. */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  /* Same smoothing as `useParallax`: raw wheel scroll arrives in steps, and on
     a full-bleed photo the stepping is the most visible thing on the page. */
  const progress = useSpring(scrollYProgress, SCROLL_SPRING);
  const imageY = useTransform(progress, [0, 1], [0, prefersReducedMotion ? 0 : 70]);
  const contentY = useTransform(progress, [0, 1], [0, prefersReducedMotion ? 0 : -32]);

  return (
  <section
    ref={sectionRef}
    id="accueil"
    dir={lang === 'ar' ? 'rtl' : 'ltr'}
    className={`relative ${HERO_HEIGHT} w-full rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-clip bg-white`}
  >
    {/* Oversized and pulled up so the parallax shift never exposes an edge */}
    <motion.img
      style={{ y: imageY }}
      src={site.images.hero}
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      decoding="async"
      className="absolute inset-x-0 -top-[9%] w-full h-[118%] object-cover object-[65%] lg:object-center z-0"
    />
    <div
      aria-hidden="true"
      className={`absolute inset-0 z-[1] pointer-events-none ${
        lang === 'ar'
          ? 'bg-gradient-to-l from-white/45 via-white/14 via-30% to-transparent to-52% md:from-white/32 md:via-white/10'
          : 'bg-gradient-to-r from-white/45 via-white/14 via-30% to-transparent to-52% md:from-white/32 md:via-white/10'
      }`}
    />
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 z-[1] h-28 pointer-events-none bg-gradient-to-t from-[#F3F6FA]/35 to-transparent"
    />

    <div className={`relative z-10 ${HERO_HEIGHT} flex flex-col`}>
      <motion.div
        style={{ y: contentY }}
        className="relative flex-1 flex flex-col items-start justify-center text-start w-full px-5 sm:px-10 md:px-16 lg:px-24 pt-28 md:pt-0 pb-52 md:pb-28 lg:pb-24 max-w-4xl"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-6 -inset-x-4 sm:-inset-x-8 rounded-[3rem] bg-white/14 blur-2xl md:bg-white/10"
        />

        <HeroBadge t={t} />

        <h1 className="relative display-1 text-ink mb-5 [text-shadow:0_1px_18px_rgba(255,255,255,0.72)]">
          {/* drift 0: the hero already runs its own parallax on the whole copy
              block, and a second one on the title would fight it. */}
          <RevealText
            as="span"
            text={t.hero.titlePart1}
            className="block"
            stagger={0.055}
            drift={0}
          />
          <RevealText
            as="span"
            text={t.hero.titlePart2}
            className="block text-brand-red"
            stagger={0.055}
            drift={0}
          />
        </h1>

        <motion.p
          /* Bold, well past the 400 that `.section-lead` inherits — the hero is the
             only place this text sits over a photograph, where a light weight thins
             out against the image. The other sections keep the lighter setting. */
          className="relative section-lead max-w-2xl font-bold [text-shadow:0_1px_12px_rgba(255,255,255,0.7)]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASE_OUT, delay: 0.22 }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASE_OUT, delay: 0.32 }}
          className="relative mt-8 flex flex-wrap gap-3"
        >
          <motion.a
            href="#reservation"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: DURATION.fast, ease: EASE_OUT }}
            className="sheen flex min-h-13 items-center gap-3 rounded-full bg-brand-red-strong ps-2 pe-6 py-2.5 text-white shadow-xl hover:bg-[#A82F32] transition-colors duration-300 group"
          >
            <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
              <Calendar className="w-5 h-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium tracking-wide">{t.hero.bookBtn}</span>
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: DURATION.fast, ease: EASE_OUT }}
            className="glass-strong flex min-h-13 items-center gap-2 rounded-full px-7 py-3.5 text-ink font-medium hover:bg-white/85 transition-colors duration-300 group"
          >
            <span>{t.hero.servicesBtn}</span>
            <ArrowUpRight
              className="w-4 h-4 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </motion.a>
        </motion.div>
      </motion.div>

      <BottomLeftCard t={t} />
      <BottomRightCorner t={t} />
    </div>
  </section>
  );
};

export default HeroSection;
