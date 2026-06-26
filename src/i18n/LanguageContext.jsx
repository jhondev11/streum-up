import { createContext, useState, useCallback, useMemo } from "react";
import { translations } from "./translations";

export const LanguageContext = createContext(null);

function detectInitialLanguage() {
  if (typeof window === "undefined") return "en";
  const stored = window.__lang;
  if (stored && translations[stored]) return stored;
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  if (translations[nav]) return nav;
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLanguage);

  const changeLang = useCallback((code) => {
    if (translations[code]) {
      setLang(code);
      if (typeof document !== "undefined") {
        document.documentElement.lang = code;
      }
    }
  }, []);

  const t = useMemo(() => translations[lang], [lang]);

  const value = useMemo(
    () => ({ lang, setLang: changeLang, t }),
    [lang, changeLang, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

