import { useState } from 'react';
import { HelpCircle, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import RevealText from '../RevealText';
import type { SectionProps } from '../../types/sections';
import { DURATION, EASE_OUT, fadeUp, inView, staggerChild, staggerParent } from '../../lib/motion';

const FaqSection = ({ lang, t }: SectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 sm:px-6 md:px-6 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="lg:sticky lg:top-32"
        >
          <span className="eyebrow">{t.faq.overline}</span>
          <RevealText as="h2" text={t.faq.title} className="mt-3 section-title text-ink" />
          <p className="mt-5 section-lead max-w-md">{t.faq.description}</p>

          <div className="glass mt-8 rounded-[1.75rem] md:rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(224,74,77,0.12)] text-brand-red-ink">
                <HelpCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-base font-medium text-ink">{t.faq.contactTitle}</p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: DURATION.fast, ease: EASE_OUT }}
              className="sheen mt-5 flex min-h-13 w-full items-center justify-center rounded-full bg-brand-red-strong px-6 text-sm font-medium text-white shadow-lg transition-colors duration-300 hover:bg-[#A82F32]"
            >
              {t.faq.contactBtn}
            </motion.a>
          </div>
        </motion.div>

        {/* Same reason as the services grid: the panels are keyed by their
            translated question and would remount into a finished stagger. */}
        <motion.div
          key={lang}
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="flex flex-col gap-3 md:gap-4"
        >
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <motion.div
                key={item.q}
                variants={staggerChild}
                className={`overflow-hidden rounded-[1.5rem] md:rounded-[2rem] transition-colors duration-300 ${
                  isOpen ? 'glass-strong !border-[rgba(224,74,77,0.24)]' : 'glass-soft'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 md:p-6 text-start"
                  >
                    <span className="text-[16px] md:text-lg font-medium leading-snug text-ink">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen
                          ? 'bg-brand-red-strong text-white rotate-45'
                          : 'bg-[rgba(224,74,77,0.1)] text-brand-red-ink'
                      }`}
                    >
                      <Plus className="h-4 w-4 md:h-5 md:w-5" />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: { height: { duration: DURATION.slow, ease: EASE_OUT }, opacity: { duration: DURATION.base, delay: 0.08 } },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: { height: { duration: DURATION.base, ease: EASE_OUT }, opacity: { duration: 0.12 } },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <div aria-hidden="true" className="h-px w-full bg-[rgba(224,74,77,0.14)]" />
                        <p className="mt-4 max-w-[68ch] text-[15px] md:text-base leading-relaxed text-ink-soft">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
