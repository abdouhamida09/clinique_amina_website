import { motion } from 'framer-motion';
import GlassMedia from '../GlassMedia';
import RevealText from '../RevealText';
import type { SectionProps } from '../../types/sections';
import { inView, slideIn, staggerChild, staggerParent } from '../../lib/motion';

const AboutSection = ({ lang, t }: SectionProps) => {
  const isRtl = lang === 'ar';

  return (
    <section id="propos" className="px-4 sm:px-6 md:px-6 py-14 md:py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-4 md:gap-6 items-stretch">
        <motion.div
          variants={slideIn(isRtl ? 24 : -24)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="group"
        >
          <GlassMedia
            src="/images/clinique5.jpg"
            alt={t.about.title}
            parallax={26}
            scrim="soft"
            className="h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[420px] rounded-[1.75rem] md:rounded-[2.25rem] shadow-[var(--elev-2)]"
          >
            <div className="glass-caption absolute bottom-4 inset-x-4 rounded-[1.25rem] md:rounded-[1.5rem] p-4 md:p-5">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold opacity-95">
                {t.about.expertiseTitle}
              </span>
              <h3 className="mt-1.5 text-xl md:text-2xl font-medium tracking-tight">
                {t.nav.doctorName}
              </h3>
            </div>
          </GlassMedia>
        </motion.div>

        <motion.div
          variants={slideIn(isRtl ? -24 : 24)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="rounded-[1.75rem] md:rounded-[2.25rem] bg-[#F7F9FC] border border-[rgba(15,47,92,0.06)] p-6 md:p-9 lg:p-12 shadow-[var(--elev-1)]"
        >
          <span className="eyebrow">{t.about.overline}</span>
          <RevealText as="h2" text={t.about.title} className="mt-4 section-title text-ink" />

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="mt-6 space-y-4 max-w-[65ch]"
          >
            <motion.p variants={staggerChild} className="section-lead">
              {t.about.p1}
            </motion.p>
            <motion.p variants={staggerChild} className="section-lead">
              {t.about.p2}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
