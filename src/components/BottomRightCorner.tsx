import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Stethoscope, Users } from "lucide-react";
import CountUp from "./CountUp";
import type { SectionProps } from "../types/sections";
import { site } from '../content/site';

interface StatProps {
  /* Passed already rendered rather than as a component type: the icon differs
     per stat, and building a component during render resets its state. */
  icon: ReactNode;
  to: number;
  label: string;
}

const Stat = ({ icon, to, label }: StatProps) => (
  <div className="flex items-center gap-2 md:gap-3">
    <span className="flex h-9 w-9 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(224,74,77,0.12)] bg-[rgba(224,74,77,0.08)] text-brand-red">
      {icon}
    </span>
    <div className="flex flex-col leading-tight">
      <span className="tabular text-sm md:text-[20px] font-medium text-ink">
        {/* This corner rides the bottom edge of the fold, so the default inset
            trigger would never fire and both figures would sit at zero. */}
        <CountUp to={to} suffix="+" margin="0px" />
      </span>
      <span className="text-[10px] md:text-[13px] text-ink-muted">{label}</span>
    </div>
  </div>
);

const BottomRightCorner = ({ t }: Pick<SectionProps, "t">) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-0 right-0 p-2.5 pt-4 pl-6 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#F3F6FA] rounded-tl-[1.2rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-2.5 sm:gap-4 md:gap-6"
    >
      <div className="absolute -top-[1.2rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.2rem] sm:w-[2rem] md:w-[3.5rem] h-[1.2rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#F3F6FA" />
        </svg>
      </div>
      <div className="absolute bottom-0 -left-[1.2rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.2rem] sm:w-[2rem] md:w-[3.5rem] h-[1.2rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#F3F6FA" />
        </svg>
      </div>

      {/* Two figures, two icons — one shared mark could not stand for patients
          and doctors at once. No longer a link: it used to point at the reviews
          it counted, and neither of these numbers leads anywhere. */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
        <Stat
          icon={<Users className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />}
          to={site.stats.patients}
          label={t.stats.patients}
        />
        <span aria-hidden="true" className="h-8 md:h-11 w-px bg-[rgba(15,47,92,0.1)]" />
        <Stat
          icon={<Stethoscope className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />}
          to={site.stats.doctors}
          label={t.stats.doctors}
        />
      </div>
    </motion.div>
  );
};

export default BottomRightCorner;
