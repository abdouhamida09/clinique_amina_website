import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { DURATION, EASE_OUT } from "../lib/motion";
import type { SectionProps } from "../types/sections";

const BottomLeftCard = ({ t }: Pick<SectionProps, "t">) => {
  return (
    /* Physical `left`, not `start`: the card stays in the bottom-left corner in
       Arabic too, where the logical property would have sent it to the right —
       and into `BottomRightCorner`, which is pinned physically right. */
    <motion.aside
      initial={{ x: -16, opacity: 0 }}
      animate={{ x: 0, opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: DURATION.slow, delay: 0.2, ease: EASE_OUT },
        x: { duration: DURATION.slow, delay: 0.2, ease: EASE_OUT },
        y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
      }}
      className="glass-strong absolute bottom-16 left-4 md:bottom-6 md:left-6 lg:bottom-10 lg:left-10 z-20 flex w-fit min-w-[160px] md:min-w-[170px] lg:min-w-[190px] flex-col gap-2 rounded-[1.2rem] p-3 md:rounded-[1.5rem] md:p-4 lg:gap-3 lg:rounded-[2.2rem] lg:p-5"
    >
      <div className="flex flex-col">
        <span
          className="tabular text-xl md:text-2xl lg:text-3xl font-medium text-ink tracking-tight leading-tight"
          dir="ltr"
        >
          +213 (0) 563 02 61 81
        </span>
        <span className="mt-1 text-[10px] md:text-[12px] font-bold text-brand-red-ink uppercase tracking-[0.12em]">
          {t.urgency.title}
        </span>
      </div>

      <motion.a
        href="tel:+213563026181"
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
        transition={{ duration: DURATION.fast, ease: EASE_OUT }}
        className="sheen group flex min-h-11 items-center gap-2 self-start rounded-full bg-brand-red-strong ps-1 pe-4 md:pe-6 text-white shadow-md transition-colors duration-300 hover:bg-[#A82F32] md:gap-3"
      >
        <motion.span
          className="flex items-center justify-center rounded-full bg-white/15 p-2"
          variants={{ hover: { rotate: [0, -12, 12, -12, 0] } }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <Phone className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
        </motion.span>
        <span className="text-[13px] md:text-sm font-medium tracking-wide">{t.urgency.callBtn}</span>
      </motion.a>
    </motion.aside>
  );
};

export default BottomLeftCard;
