import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { translations, Language, languageNames, languageFlags } from "./translations";

type DeepStringValues<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? DeepStringValues<T[K]> : string;
};

type TranslationType = DeepStringValues<typeof translations.es>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
  languageNames: typeof languageNames;
  languageFlags: typeof languageFlags;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("mukis-lang") as Language;
      if (saved && translations[saved]) return saved;
    }
    return "es";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("mukis-lang", lang);
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language] as unknown as TranslationType;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languageNames, languageFlags }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
