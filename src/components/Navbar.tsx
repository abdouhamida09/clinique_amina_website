import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Language } from "../translations";
import { DURATION, EASE_OUT } from "../lib/motion";
import FlagIcon from "./FlagIcon";
import LanguageMenu from "./LanguageMenu";
import { LANG_LABEL } from "../lib/languages";
import { site } from '../content/site';

interface NavbarProps {
  lang: Language;
  /** Cycles to the next language — still used by the mobile drawer. */
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  t: any;
}


const Navbar = ({ lang, toggleLang, setLang, t }: NavbarProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("accueil");
  const lastScrollY = useRef(0);
  const drawerRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: t.nav.home, href: "#accueil", id: "accueil" },
    { label: t.nav.about, href: "#propos", id: "propos" },
    { label: t.nav.services, href: "#services", id: "services" },
    { label: t.nav.gallery, href: "#galerie", id: "galerie" },
    { label: t.nav.faq, href: "#faq", id: "faq" },
  ];

  /* Scroll state — read once per frame instead of on every scroll event */
  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setIsSticky(currentScrollY > 100);
        setIsVisible(!(currentScrollY > lastScrollY.current && currentScrollY > 120));
        lastScrollY.current = currentScrollY;
        frame = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  /* Scrollspy — the nav always shows where the reader currently is */
  useEffect(() => {
    const sections = menuItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  /* Drawer: lock the page, close on Escape, move focus inside */
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => {
      drawerRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    }, 80);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [isMobileMenuOpen]);

  const containerVariants = {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.slow, ease: EASE_OUT, staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : { y: -110, opacity: 0 }}
        transition={{ duration: DURATION.base, ease: EASE_OUT }}
        aria-label={t.nav.home}
        className={`fixed top-0 left-0 right-0 z-[999] flex items-center justify-center pointer-events-none transition-[padding] duration-500 ${
          isSticky ? "pt-3 px-3 sm:px-4 md:px-6 lg:px-10" : "pt-6 md:pt-10 px-3 sm:px-4 md:px-6 lg:px-10"
        }`}
      >
        <div
          className={`w-full flex items-center justify-between gap-2 pointer-events-auto transition-all duration-500 ${
            isSticky
              ? "max-w-7xl glass-strong rounded-full px-2 sm:px-3 py-2"
              : "max-w-none"
          }`}
        >
          {/* Logo */}
          <motion.a
            variants={itemVariants}
            href="#accueil"
            className={`flex items-center gap-3 min-w-0 rounded-full transition-all duration-500 ${
              isSticky
                ? "py-1.5 ps-1 pe-3 sm:pe-4 hover:bg-white/50"
                : "glass py-1.5 ps-2 pe-4"
            }`}
          >
            <span
              className={`overflow-hidden rounded-full flex items-center justify-center bg-[rgba(224,74,77,0.08)] transition-all duration-500 ${
                isSticky ? "h-9 w-9" : "h-10 w-10"
              }`}
            >
              <img
                src={site.logo}
                alt=""
                width="40"
                height="40"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="flex flex-col leading-tight min-w-0">
              {/* Cormorant sits on a small x-height, so it runs a size above the
                  sans it replaces to read at the same weight on screen. */}
              <span
                className={`font-display font-semibold text-ink truncate transition-all duration-500 ${
                  isSticky ? "text-sm sm:text-base md:text-lg" : "text-base sm:text-lg md:text-xl"
                }`}
              >
                {t.nav.doctorName}
              </span>
              <span className="text-[10px] sm:text-[11px] md:text-xs text-ink-muted truncate">
                {t.nav.clinic}
              </span>
            </span>
          </motion.a>

          {/* Desktop menu */}
          <motion.ul
            variants={itemVariants}
            className={`hidden md:flex items-center transition-all duration-500 ${
              isSticky
                ? "gap-1 lg:gap-2 px-1 text-xs lg:text-sm"
                : "glass gap-1 lg:gap-2 px-2 py-1.5 rounded-full text-sm"
            }`}
          >
            {menuItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative flex items-center whitespace-nowrap rounded-full px-3 py-2 transition-colors duration-200 ${
                      isActive
                        ? "text-brand-red-ink font-medium"
                        : "text-ink-soft hover:text-brand-red-ink"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        transition={{ duration: DURATION.base, ease: EASE_OUT }}
                        className="absolute inset-0 rounded-full bg-[rgba(224,74,77,0.1)]"
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </motion.ul>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className={`flex items-center gap-1 transition-all duration-500 ${
              isSticky ? "" : "glass p-1 rounded-full"
            }`}
          >
            <LanguageMenu lang={lang} setLang={setLang} label={t.nav.changeLang} />

            <motion.a
              href="#reservation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: DURATION.fast, ease: EASE_OUT }}
              className={`sheen hidden sm:flex items-center justify-center bg-brand-red-strong hover:bg-[#A82F32] text-white rounded-full shadow-lg transition-colors duration-300 group min-h-11 ${
                isSticky ? "px-4 gap-1.5" : "px-5 gap-2"
              }`}
            >
              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              <span className={`font-medium whitespace-nowrap ${isSticky ? "text-xs" : "text-sm"}`}>
                {t.nav.rdv}
              </span>
            </motion.a>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="md:hidden h-11 w-11 flex items-center justify-center rounded-full bg-[rgba(224,74,77,0.1)] text-ink hover:bg-[rgba(224,74,77,0.18)] transition-colors"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: DURATION.fast } }}
              transition={{ duration: DURATION.base }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[rgba(10,26,50,0.45)] backdrop-blur-sm z-[1000] md:hidden"
            />
            <motion.div
              ref={drawerRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: lang === "ar" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{
                x: lang === "ar" ? "-100%" : "100%",
                transition: { duration: DURATION.base, ease: EASE_OUT },
              }}
              transition={{ type: "spring", damping: 26, stiffness: 240 } as any}
              className={`fixed top-0 bottom-0 ${
                lang === "ar" ? "left-0" : "right-0"
              } w-[300px] max-w-[86vw] glass-strong z-[1001] md:hidden flex flex-col px-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]`}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="eyebrow">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={t.gallery.closeLabel}
                  className="h-11 w-11 flex items-center justify-center rounded-full bg-[rgba(224,74,77,0.1)] text-ink hover:bg-[rgba(224,74,77,0.18)] transition-colors"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 overflow-y-auto">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={activeId === item.id ? "true" : undefined}
                    initial={{ opacity: 0, x: lang === "ar" ? -16 : 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + index * 0.045, duration: DURATION.base, ease: EASE_OUT }}
                    className={`flex min-h-12 items-center rounded-2xl px-4 text-xl transition-colors ${
                      activeId === item.id
                        ? "bg-[rgba(224,74,77,0.1)] text-brand-red-ink font-medium"
                        : "text-ink hover:bg-white/50"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-[rgba(15,47,92,0.08)] flex flex-col gap-3">
                <button
                  onClick={() => {
                    toggleLang();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex min-h-12 items-center justify-between w-full rounded-2xl bg-[rgba(224,74,77,0.07)] px-4 text-ink"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <FlagIcon lang={lang} />
                    {t.nav.changeLang}
                  </span>
                  <span className="font-semibold uppercase">{LANG_LABEL[lang]}</span>
                </button>
                <a
                  href="#reservation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex min-h-12 items-center justify-center w-full rounded-2xl bg-brand-red-strong hover:bg-[#A82F32] text-white font-medium shadow-lg transition-colors"
                >
                  {t.nav.rdv}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
