import { useEffect } from 'react';
import Navbar from './Navbar';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import AmbientBackground from './AmbientBackground';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import GallerySection from './sections/GallerySection';
import ReservationSection from './sections/ReservationSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FaqSection from './sections/FaqSection';
import FooterSection from './sections/FooterSection';
import type { HomePageProps } from '../types/sections';

const HomePage = ({ lang, toggleLang, setLang, t }: HomePageProps) => {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    target?.scrollIntoView({ block: 'start' });
  }, []);

  const sectionProps = { lang, t };

  return (
    <>
      <a href="#main" className="skip-link">
        {t.nav.skipToContent}
      </a>
      <ScrollProgress />
      <AmbientBackground />
      {/* No background here on purpose: body paints the canvas colour and the
          aurora sits between the two. A background on <main> would bury it. */}
      <main
        id="main"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        className="min-h-dvh w-full p-2.5 sm:p-3 md:p-4 text-ink"
      >
        <Navbar lang={lang} toggleLang={toggleLang} setLang={setLang} t={t} />
        <HeroSection {...sectionProps} />
        <AboutSection {...sectionProps} />
        <ServicesSection {...sectionProps} />
        <GallerySection {...sectionProps} />
        <ReservationSection {...sectionProps} />
        <FaqSection {...sectionProps} />
        <TestimonialsSection {...sectionProps} />
        <FooterSection {...sectionProps} setLang={setLang} />
        {/* Inside <main> so it inherits the page direction and lands in the
            inline-end corner in both scripts. */}
        <BackToTop label={t.footer.backToTop} />
      </main>
    </>
  );
};

export default HomePage;
