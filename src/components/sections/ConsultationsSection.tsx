import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  Baby,
  Blocks,
  Bone,
  Brain,
  Check,
  ChevronDown,
  Droplet,
  Droplets,
  Ear,
  HeartPulse,
  Info,
  Scissors,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from 'lucide-react';
import RevealText from '../RevealText';
import type { SectionProps } from '../../types/sections';
import type { Language } from '../../translations';
import { DURATION, EASE_OUT, fadeUp, inView } from '../../lib/motion';

/** The specialty the agenda opens on. */
const DEFAULT_SPECIALTY = 'medecineGenerale';

/* Keyed by the specialty id rather than by its name: the label is translated,
   the id is not, so an icon survives every language. */
const specialtyIcons: Record<string, LucideIcon> = {
  anesthesie: HeartPulse,
  medecineGenerale: Stethoscope,
  chirurgieViscerale: Scissors,
  gynecologie: Baby,
  nephrologie: Droplets,
  diabetologie: Syringe,
  pediatrie: Blocks,
  chirurgiePediatrique: Scissors,
  orl: Ear,
  urologie: Droplet,
  orthopedie: Bone,
  neurochirurgie: Brain,
  neurophysiologie: Activity,
};

/* `8h` in French, `8 AM` in English, `08:00` in Arabic — the convention each
   language actually reads a clinic timetable in. */
const formatHour = (hour: number, lang: Language) => {
  if (lang === 'fr') return `${hour}h`;
  if (lang === 'ar') return `${String(hour).padStart(2, '0')}:00`;
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12} ${hour >= 12 ? 'PM' : 'AM'}`;
};

/** `"{count} consultations"` → `"7 consultations"`. */
const fill = (template: string, values: Record<string, number>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));

interface SpecialtySelectProps extends SectionProps {
  value: string;
  onChange: (id: string) => void;
}

/**
 * Specialty picker.
 *
 * Same idiom as the navbar's language switcher — press to open, pointerdown
 * outside or Escape to close — rather than a native `<select>`, whose list is
 * drawn by the OS and cannot carry the specialty icons or the site's surfaces.
 */
const SpecialtySelect = ({ value, onChange, t }: SpecialtySelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const specialties = t.consultations.specialties;
  const current = specialties.find((item) => item.id === value) ?? specialties[0];
  const CurrentIcon = specialtyIcons[current.id] ?? Stethoscope;

  useEffect(() => {
    if (!isOpen) return;

    /* `pointerdown`, not `click`: the menu should be gone by the time the press
       lands, and a click listener also fires for the button that opened it. */
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative w-full sm:w-[23rem]">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`flex min-h-14 w-full items-center gap-3 rounded-2xl border bg-white px-4 text-start shadow-[var(--elev-1)] transition-colors duration-200 ${
          isOpen
            ? 'border-[rgba(224,74,77,0.45)]'
            : 'border-[rgba(15,47,92,0.12)] hover:border-[rgba(224,74,77,0.35)]'
        }`}
      >
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[rgba(224,74,77,0.12)] text-brand-red-ink"
        >
          <CurrentIcon className="h-4.5 w-4.5" strokeWidth={2} />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            {t.consultations.filterLabel}
          </span>
          <span className="block truncate text-[14.5px] font-medium leading-snug text-ink">
            {current.name}
          </span>
        </span>

        <motion.span
          aria-hidden="true"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: DURATION.base, ease: EASE_OUT }}
          className="flex shrink-0 text-ink-muted"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="listbox"
            aria-label={t.consultations.filterLabel}
            /* `origin-top` so it unfolds downward from the trigger rather than
               growing from its own middle. */
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97, transition: { duration: DURATION.fast } }}
            transition={{ duration: DURATION.base, ease: EASE_OUT }}
            className="glass-strong absolute top-[calc(100%+0.5rem)] start-0 end-0 z-50 max-h-[19rem] origin-top overflow-y-auto overscroll-contain rounded-2xl p-1.5"
          >
            {specialties.map((specialty) => {
              const Icon = specialtyIcons[specialty.id] ?? Stethoscope;
              const isSelected = specialty.id === value;

              return (
                <button
                  key={specialty.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(specialty.id);
                    setIsOpen(false);
                  }}
                  className={`flex min-h-11 w-full items-center gap-2.5 rounded-xl px-3 py-2 text-start transition-colors ${
                    isSelected
                      ? 'bg-[rgba(224,74,77,0.12)] text-brand-red-ink'
                      : 'text-ink-soft hover:bg-white/70 hover:text-ink'
                  }`}
                >
                  <Icon aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={2} />
                  <span className="flex-1 text-[13.5px] font-medium leading-snug">
                    {specialty.name}
                  </span>
                  {isSelected && (
                    <Check aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={2.4} />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/** One line of the agenda: a practitioner sitting in one day at one time. */
interface Entry {
  doctorName: string;
  role: string;
  from: number;
  to: number;
}

interface EntryRowProps extends SectionProps {
  entry: Entry;
}

/* An agenda line reads across: when, then who. The hours are stacked the way a
   diary stacks them — start above, end below — which keeps the time column
   narrow enough to survive a 320px screen. */
const EntryRow = ({ entry, lang, t }: EntryRowProps) => (
  <li className="flex gap-3 px-4 py-3.5 sm:gap-4 sm:px-5 transition-colors duration-200 hover:bg-[#F7F9FC]">
    <div
      dir="ltr"
      className="tabular flex w-[46px] shrink-0 flex-col items-center pt-0.5 text-center sm:w-[54px]"
    >
      <span className="text-[13px] sm:text-[14px] font-semibold leading-none text-ink">
        {formatHour(entry.from, lang)}
      </span>
      <span
        aria-hidden="true"
        className="my-1.5 w-px flex-1 min-h-[10px] bg-[rgba(224,74,77,0.3)]"
      />
      <span className="text-[12px] sm:text-[12.5px] leading-none text-ink-muted">
        {formatHour(entry.to, lang)}
      </span>
    </div>

    <div className="min-w-0 flex-1">
      <p className="text-[14px] sm:text-[15px] font-medium leading-snug text-ink">
        <span className="text-ink-muted">{t.consultations.doctorPrefix}</span>{' '}
        {/* Latin names inside an Arabic paragraph: the isolation keeps the
            surname and the given name from being reordered. */}
        <span dir="ltr" className="inline-block">
          {entry.doctorName}
        </span>
      </p>
      <p className="mt-0.5 text-[12px] leading-snug text-ink-muted">{entry.role}</p>
    </div>
  </li>
);

const ConsultationsSection = ({ lang, t }: SectionProps) => {
  const [activeId, setActiveId] = useState(DEFAULT_SPECIALTY);

  /* `Date#getDay()` returns 0 for Sunday, which is exactly how the roster
     numbers its days — no conversion needed. Read once per mount: the agenda
     does not need to notice midnight passing. */
  const [todayIndex] = useState(() => new Date().getDay());

  const specialties = t.consultations.specialties;
  const current = specialties.find((item) => item.id === activeId) ?? specialties[0];

  /* The roster is stored per doctor; the agenda needs it per day. This flattens
     every slot of the chosen specialty into a day bucket and sorts each one by
     starting hour, so a reader scanning a day sees the morning first. */
  const week = useMemo(() => {
    const buckets: Entry[][] = Array.from({ length: 7 }, () => []);

    for (const doctor of current.doctors) {
      for (const slot of doctor.slots) {
        buckets[slot.day].push({
          doctorName: doctor.name,
          role: doctor.role,
          from: slot.from,
          to: slot.to,
        });
      }
    }

    return buckets.map((entries) => [...entries].sort((a, b) => a.from - b.from || a.to - b.to));
  }, [current]);

  /* Practitioners who hold no scheduled consultation — the anaesthesia and
     intensive care team — have no day to sit in, so they get their own panel
     rather than vanishing from the agenda. */
  const unscheduled = current.doctors.filter((doctor) => doctor.slots.length === 0);

  const entryCount = week.reduce((total, entries) => total + entries.length, 0);
  const doctorCount = current.doctors.length;

  return (
    <section id="consultations" className="px-4 sm:px-6 md:px-6 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="eyebrow">{t.consultations.overline}</span>
            <RevealText
              as="h2"
              text={t.consultations.title}
              className="mt-3 section-title text-ink"
            />
          </div>
          <p className="section-lead max-w-md">{t.consultations.description}</p>
        </motion.div>

        {/* `relative z-20`: this block and the agenda below it both carry a
            transform, which makes each its own stacking context. Without a
            z-index the later one wins and swallows the open dropdown. */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="relative z-20 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <SpecialtySelect value={activeId} onChange={setActiveId} lang={lang} t={t} />

          {/* `aria-live` so a screen reader hears the agenda change after a pick. */}
          <p aria-live="polite" className="text-[13px] font-medium text-ink-muted">
            {fill(doctorCount === 1 ? t.consultations.countOne : t.consultations.countMany, {
              count: doctorCount,
            })}
          </p>
        </motion.div>

        {/* CSS columns rather than a grid: the day panels have very different
            heights, and a column flow packs them without the ragged holes a
            row-aligned grid leaves. */}
        <motion.div
          key={activeId}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-5 columns-1 gap-4 md:columns-2 xl:columns-3"
        >
          {week.map((entries, day) => {
            // A day this specialty does not consult on is dropped rather than
            // shown empty: what is left is exactly when one can be seen.
            if (entries.length === 0) return null;

            const isToday = day === todayIndex;

            return (
              <article
                key={day}
                className={`mb-4 break-inside-avoid overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem] bg-white shadow-[var(--elev-1)] ${
                  isToday
                    ? 'border-2 border-[rgba(224,74,77,0.45)]'
                    : 'border border-[rgba(15,47,92,0.08)]'
                }`}
              >
                <header
                  className={`flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 border-b px-4 py-3 sm:px-5 ${
                    isToday
                      ? 'border-[rgba(224,74,77,0.2)] bg-[rgba(224,74,77,0.07)]'
                      : 'border-[rgba(15,47,92,0.07)] bg-[#F7F9FC]'
                  }`}
                >
                  <h3 className="flex items-center gap-2 text-[15px] sm:text-base font-semibold tracking-tight text-ink">
                    {t.consultations.days[day].long}
                    {isToday && (
                      <span className="rounded-full bg-brand-red-strong px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                        {t.consultations.today}
                      </span>
                    )}
                  </h3>
                  <span className="text-[11.5px] font-medium text-ink-muted">
                    {fill(
                      entries.length === 1 ? t.consultations.slotOne : t.consultations.slotMany,
                      { count: entries.length }
                    )}
                  </span>
                </header>

                <ul className="divide-y divide-[rgba(15,47,92,0.06)]">
                  {entries.map((entry) => (
                    <EntryRow
                      key={`${entry.doctorName}-${entry.from}`}
                      entry={entry}
                      lang={lang}
                      t={t}
                    />
                  ))}
                </ul>
              </article>
            );
          })}

          {unscheduled.length > 0 && (
            <article className="mb-4 break-inside-avoid overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem] border border-[rgba(15,47,92,0.08)] bg-white shadow-[var(--elev-1)]">
              <header className="border-b border-[rgba(15,47,92,0.07)] bg-[#F7F9FC] px-4 py-3 sm:px-5">
                <h3 className="text-[15px] sm:text-base font-semibold tracking-tight text-ink">
                  {t.consultations.onCallTitle}
                </h3>
              </header>

              <ul className="divide-y divide-[rgba(15,47,92,0.06)]">
                {unscheduled.map((doctor) => (
                  <li key={doctor.name} className="px-4 py-3 sm:px-5">
                    <p className="text-[14px] sm:text-[15px] font-medium leading-snug text-ink">
                      <span className="text-ink-muted">{t.consultations.doctorPrefix}</span>{' '}
                      <span dir="ltr" className="inline-block">
                        {doctor.name}
                      </span>
                    </p>
                    <p className="mt-0.5 text-[12px] leading-snug text-ink-muted">{doctor.role}</p>
                  </li>
                ))}
              </ul>

              <p className="px-4 py-3 sm:px-5 text-[12px] italic leading-snug text-ink-muted">
                {t.consultations.onCall}
              </p>
            </article>
          )}
        </motion.div>

        {entryCount === 0 && unscheduled.length === 0 && (
          <p className="mt-5 rounded-[1.25rem] border border-[rgba(15,47,92,0.08)] bg-white px-5 py-8 text-center text-sm text-ink-muted">
            {t.consultations.empty}
          </p>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="glass mt-2 md:mt-4 flex flex-col gap-4 rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(224,74,77,0.12)] text-brand-red-ink"
            >
              <Info className="h-4.5 w-4.5" strokeWidth={2} />
            </span>
            <p className="max-w-xl text-[14px] leading-6 text-ink-soft">{t.consultations.note}</p>
          </div>

          <motion.a
            href="#reservation"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: DURATION.fast, ease: EASE_OUT }}
            className="sheen flex min-h-12 w-full shrink-0 items-center justify-center rounded-full bg-brand-red-strong px-6 text-sm font-medium text-white shadow-lg transition-colors duration-300 hover:bg-[#A82F32] md:w-auto"
          >
            {t.consultations.cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationsSection;
