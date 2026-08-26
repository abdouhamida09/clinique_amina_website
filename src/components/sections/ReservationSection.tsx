import { motion } from 'framer-motion';
import Reservation from '../../Reservation';
import type { SectionProps } from '../../types/sections';
import { fadeUp, inView } from '../../lib/motion';
import '../../Reservation.css';

const ReservationSection = ({ lang }: SectionProps) => (
  <motion.section
    id="reservation"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={inView}
    className="px-4 sm:px-6 md:px-6 pb-20 md:pb-32"
  >
    <div className="max-w-7xl mx-auto">
      <Reservation lang={lang} />
    </div>
  </motion.section>
);

export default ReservationSection;
