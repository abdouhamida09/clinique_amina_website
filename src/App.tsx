import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import { translations } from './translations';
import type { Language } from './translations';
import { Toaster } from './components/ui/sonner';
import { MotionConfig } from 'framer-motion';

import { ThemeProvider } from 'next-themes';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.title = t.title;
  }, [lang, t.title]);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {/* Honours the OS "reduce motion" setting for every framer-motion animation */}
      <MotionConfig reducedMotion="user">
        <HomePage lang={lang} setLang={setLang} t={t} />
        <Toaster />
      </MotionConfig>
    </ThemeProvider>
  );
}
