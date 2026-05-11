"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations } from "./translations";

type Language = "en" | "ar";
type Translations = typeof translations.en;

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang === "en" || savedLang === "ar") {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = translations[language] || translations.en;

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
      <button
        onClick={toggleLanguage}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full glassmorphism border-2 border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white font-bold text-lg hover:scale-110 transition-transform shadow-2xl"
      >
        {language === "en" ? "ع" : "EN"}
      </button>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return English by default if used outside provider (e.g. during SSR before hydration)
    return { language: "en", toggleLanguage: () => {}, t: translations.en };
  }
  return context;
}
