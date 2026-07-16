import { useEffect, useState } from "react";
import {
  CONTENT,
  DEFAULT_LANG,
  HTML_LANG,
  getContent,
  type Content,
  type Lang,
} from "@/data/content";

const STORAGE_KEY = "lang";
const EVENT = "langchange";

function isLang(value: unknown): value is Lang {
  return value === "EN" || value === "ES" || value === "UA";
}

export function getStoredLang(): Lang {
  if (typeof localStorage === "undefined") return DEFAULT_LANG;
  const stored = localStorage.getItem(STORAGE_KEY);
  return isLang(stored) ? stored : DEFAULT_LANG;
}

export function setLang(lang: Lang): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = HTML_LANG[lang];
  window.dispatchEvent(new CustomEvent<Lang>(EVENT, { detail: lang }));
}

/**
 * Shared language state for every React island. Each island subscribes to the
 * same `langchange` event so a change in the navbar re-renders the whole page.
 */
export function useLang(): {
  lang: Lang;
  content: Content;
  changeLang: (lang: Lang) => void;
} {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    setLangState(getStoredLang());

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<Lang>).detail;
      setLangState(isLang(detail) ? detail : getStoredLang());
    };

    window.addEventListener(EVENT, handler);
    return () => window.removeEventListener(EVENT, handler);
  }, []);

  return {
    lang,
    content: getContent(lang),
    changeLang: setLang,
  };
}

export { CONTENT, type Content, type Lang };
