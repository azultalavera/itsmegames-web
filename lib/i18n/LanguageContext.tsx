'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';
import type { Language, Translations } from './types';

const STORAGE_KEY = 'itsmegames_lang';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default is English as requested
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Read stored language preference if exists
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored === 'en' || stored === 'es') {
        setLanguageState(stored);
        document.documentElement.lang = stored;
      } else {
        document.documentElement.lang = 'en';
      }
    } catch {
      // localStorage may fail in restricted/private contexts
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore localStorage write error
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
