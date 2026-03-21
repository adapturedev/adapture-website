"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { type Locale, defaultLocale } from "@/lib/i18n";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({ locale: defaultLocale, setLocale: () => {} });

/** Read current locale and setter from context. */
export function useLocale() {
  return useContext(LocaleContext);
}

/** Wraps the app in a locale context that enables SPA-style language switching. */
export function LocaleProvider({
  initial,
  children,
}: {
  initial: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState(initial);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    history.pushState(null, "", `/${l}`);
    document.documentElement.lang = l;
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const onPopState = () => {
      const match = window.location.pathname.match(/^\/(pt|en)/);
      if (match) {
        const l = match[1] as Locale;
        setLocaleState(l);
        document.documentElement.lang = l;
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
