import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { DURATION, EASE_OUT } from "../lib/motion";
import type { SectionProps } from "../types/sections";

const HeroBadge = ({ t }: Pick<SectionProps, "t">) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.slow, ease: EASE_OUT }}
      className="glass-strong flex items-center gap-3 px-5 py-3 rounded-full mb-6 w-fit max-w-full"
    >
      <MapPin className="w-4 h-4 shrink-0 text-brand-red-ink" aria-hidden="true" />
      <span className="text-[10px] xs:text-[11px] md:text-[13px] font-semibold text-ink-soft uppercase tracking-[0.14em] xs:tracking-[0.18em] leading-snug">
        {t.hero.overline}
      </span>
    </motion.div>
  );
};

export default HeroBadge;
