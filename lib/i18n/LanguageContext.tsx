'use client';

import React, { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react';
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

function getInitialLanguage(): Language {
  if (typeof document === 'undefined') {
    return 'en';
  }

  const language = document.documentElement.dataset.lang;
  return language === 'es' || language === 'en' ? language : 'en';
}

function subscribeToLanguage() {
  return () => {};
}

function getServerLanguage(): Language {
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const domLanguage = useSyncExternalStore(
    subscribeToLanguage,
    getInitialLanguage,
    getServerLanguage,
  );
  const [selectedLanguage, setLanguageState] = useState<Language | null>(null);
  const language = selectedLanguage ?? domLanguage;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      document.documentElement.dataset.languageReady = 'true';
    });

    return () => cancelAnimationFrame(frame);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    try {
      localStorage.setItem(STORAGE_KEY, lang);
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
