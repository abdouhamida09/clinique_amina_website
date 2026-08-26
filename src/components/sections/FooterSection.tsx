import { Clock, Facebook, Instagram, Languages, Mail, MapPin, Phone, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import FlagIcon from '../FlagIcon';
import MapEmbed from '../MapEmbed';
import { LANG_LABEL, LANGUAGES } from '../../lib/languages';
import WhatsAppIcon from '../WhatsAppIcon';
import type { FooterProps } from '../../types/sections';
import { fadeUp, inView } from '../../lib/motion';

/* Numbers live here rather than in the translations: they read the same in every
   language, and one list means one place to edit. */
const SWITCHBOARD = ['+213 (0) 28 68 43 63', '+213 (0) 28 68 43 98', '+213 (0) 28 68 44 44'];
const MOBILE = '+213 (0) 563 02 61 81';

/** Studio credit in the bottom bar. */
const STUDIO = 'IBS';

/** `+213 (0) 28 68 43 63` → `+21328684363` */
const toTelHref = (number: string) => `tel:${number.replace(/\(0\)|[^\d+]/g, '')}`;

const socialClass =
  'h-11 w-11 rounded-full bg-[rgba(224,74,77,0.1)] border border-[rgba(224,74,77,0.14)] flex items-center justify-center text-brand-red-ink hover:bg-[rgba(224,74,77,0.18)] transition-colors duration-200';

/* 40px tap height on touch screens, compact on desktop where a cursor does the work */
const linkClass =
  'inline-flex min-h-10 md:min-h-0 md:py-1 items-center gap-2 text-ink-soft hover:text-brand-red-ink transition-colors duration-200';

const FooterSection = ({ lang, t, setLang }: FooterProps) => (
  <footer id="contact" className="px-2 sm:px-4 md:px-6 pb-2 sm:pb-3 md:pb-4">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className="glass max-w-7xl mx-auto overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem] text-ink-soft"
    >
      <div className="grid gap-6 md:gap-6 md:grid-cols-[1.2fr_0.7fr_1.6fr] p-4 md:p-6 lg:p-8">
        <div className="flex flex-col">
          <a
            href="#accueil"
            className="glass-soft inline-flex items-center gap-3 rounded-full py-1.5 ps-2 pe-5 w-fit"
          >
            <span className="h-10 w-10 overflow-hidden rounded-full flex items-center justify-center bg-[rgba(224,74,77,0.08)]">
              <img
                src="/images/logo.png"
                alt=""
                width="40"
                height="40"
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </span>
            {/* Same serif as the navbar mark, a size up for the same reason. */}
            <span className="font-display text-xl font-semibold text-ink">{t.nav.doctorName}</span>
          </a>
          <p className="mt-3 md:mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">{t.footer.description}</p>

          <div className="mt-5 md:mt-8">
            <h3 className="eyebrow !tracking-[0.22em]">{t.footer.contactTitle}</h3>
            <div className="mt-2 flex flex-col text-sm">
              {/* One icon per group rather than one per line: three stacked
                  handsets would read as three separate contact methods. */}
              <div className="flex gap-2 pt-1">
                <Phone className="h-4 w-4 mt-3 md:mt-2 shrink-0 text-brand-red-ink" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    {t.footer.switchboard}
                  </span>
                  {SWITCHBOARD.map((number) => (
                    <a key={number} href={toTelHref(number)} className={linkClass}>
                      <span dir="ltr" className="tabular">
                        {number}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Smartphone className="h-4 w-4 mt-3 md:mt-2 shrink-0 text-brand-red-ink" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    {t.footer.mobile}
                  </span>
                  <a href={toTelHref(MOBILE)} className={linkClass}>
                    <span dir="ltr" className="tabular">
                      {MOBILE}
                    </span>
                  </a>
                </div>
              </div>
              <a href="mailto:contact@cliniqueamina.com" className={linkClass}>
                <Mail className="h-4 w-4 shrink-0 text-brand-red-ink" aria-hidden="true" />
                contact@cliniqueamina.com
              </a>
              <a
                href="https://maps.app.goo.gl/gCqrqou6dtNnxmEEA"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} items-start !py-1.5`}
              >
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-brand-red-ink" aria-hidden="true" />
                <span className="whitespace-pre-line leading-relaxed">{t.footer.address}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grid gap-6 md:gap-0">
            <div>
              <h3 className="eyebrow !tracking-[0.22em]">{t.footer.linksTitle}</h3>
              <nav className="mt-2 flex flex-col text-sm">
                <a href="#accueil" className={linkClass}>
                  {t.nav.home}
                </a>
                <a href="#propos" className={linkClass}>
                  {t.nav.about}
                </a>
                <a href="#services" className={linkClass}>
                  {t.nav.services}
                </a>
                <a href="#galerie" className={linkClass}>
                  {t.nav.gallery}
                </a>
                <a href="#faq" className={linkClass}>
                  {t.nav.faq}
                </a>
                <a href="#reservation" className={linkClass}>
                  {t.nav.rdv}
                </a>
                <a
                  href="https://maps.app.goo.gl/gCqrqou6dtNnxmEEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {t.footer.calcItinerary}
                </a>
              </nav>
            </div>

            <div className="mt-0 md:mt-7">
              <h3 className="eyebrow !tracking-[0.22em]">{t.footer.socialsTitle}</h3>
              <div className="mt-3 flex flex-nowrap items-center gap-2">
                <a
                  href="https://www.instagram.com/clinique__amina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={socialClass}
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/cliniqueaminaofficielle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={socialClass}
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/213563026181"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={socialClass}
                >
                  {/* Smaller box than the stroked icons: a solid glyph at 20px
                      would sit heavier than the two beside it. */}
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>

            {/* Direct pick rather than the navbar's cycle button: this is where a
                reader looks for the full list, and two taps to reach Arabic from
                French would be a poor trade for the space saved. The heading and
                the icon are what say "languages" — flags alone name countries,
                not languages. */}
            <div className="mt-5 md:mt-7">
              <h3 className="eyebrow !tracking-[0.22em] flex items-center gap-2">
                <Languages className="h-4 w-4" aria-hidden="true" />
                {t.footer.langTitle}
              </h3>
              <div
                role="group"
                aria-label={t.nav.changeLang}
                className="mt-3 flex flex-nowrap items-center gap-2"
              >
                {LANGUAGES.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={code === lang}
                    className={`flex min-h-11 items-center gap-2 rounded-full border px-3 text-sm transition-colors duration-200 ${
                      code === lang
                        ? 'border-[rgba(224,74,77,0.24)] bg-[rgba(224,74,77,0.1)] text-brand-red-ink font-semibold'
                        : 'border-[rgba(15,47,92,0.1)] text-ink-soft hover:border-[rgba(224,74,77,0.2)] hover:text-ink'
                    }`}
                  >
                    <FlagIcon lang={code} className="h-3.5 w-5" />
                    {/* `lang` on the label so a screen reader voices "ع" as Arabic. */}
                    <span lang={code} className="text-xs font-semibold uppercase">
                      {LANG_LABEL[code]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="eyebrow !tracking-[0.22em] flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" /> {t.footer.scheduleTitle}
            </h3>
            <div className="mt-3 md:mt-4 flex flex-col gap-2 md:gap-2.5 text-sm text-ink-muted">
              <div className="flex justify-between gap-4 border-b border-[rgba(224,74,77,0.1)] pb-2">
                <span>{t.footer.schedule.visits}</span>
                <span className="font-medium text-ink text-end">{t.footer.schedule.visitsTime}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>{t.footer.schedule.services}</span>
                <span className="font-bold text-brand-red-ink text-end">
                  {t.footer.schedule.servicesTime}
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex-1 min-h-[140px] md:min-h-[170px] rounded-[1.5rem] overflow-hidden border border-[rgba(224,74,77,0.14)] bg-[rgba(224,74,77,0.04)] shadow-inner">
            <MapEmbed
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.8666001854263!2d2.7443334999999998!3d36.46078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f730032d33243%3A0x41270bd15b630733!2sClinique%20Amina!5e0!3m2!1sfr!2sdz!4v1787232567715!5m2!1sfr!2sdz"
              title={t.footer.doctorName}
              loadingLabel={t.footer.mapLoading}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 border-t border-[rgba(15,47,92,0.07)] px-5 md:px-6 lg:px-8 py-3 text-center text-xs text-ink-muted">
        {/* The year comes from the clock so the notice never goes stale. */}
        <p>
          © {new Date().getFullYear()} {t.footer.doctorName}. {t.footer.rights}
        </p>
        {/* Studio name kept out of the translations — it is a proper noun, and
            holding it in one place means one edit if it ever becomes a link. */}
        <p>
          {t.footer.madeBy} <span className="font-semibold text-ink-soft">{STUDIO}</span>
        </p>
      </div>
    </motion.div>
  </footer>
);

export default FooterSection;
