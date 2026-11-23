"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  translations,
  type ActiveLocale,
  type LanguageCode,
  type Translations,
} from "./translations";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  locale: ActiveLocale;
  isRtl: boolean;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("EN");

  const locale: ActiveLocale =
    language === "FA" ? "fa" : language === "TR" ? "tr" : "en";
  const isRtl = locale === "fa";
  const t = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.title = t.meta.title;
  }, [locale, isRtl, t.meta.title]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, locale, isRtl, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
