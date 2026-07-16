import type { Content, Lang } from "./types";
import { en } from "./en";
import { es } from "./es";
import { ua } from "./ua";

export type { Content, Lang } from "./types";
export { LINKS } from "./links";

export const CONTENT: Record<Lang, Content> = { EN: en, ES: es, UA: ua };

export const DEFAULT_LANG: Lang = "EN";

export const LANG_OPTIONS: Lang[] = ["EN", "ES", "UA"];

// BCP-47 code for the <html lang> attribute.
export const HTML_LANG: Record<Lang, string> = {
  EN: "en",
  ES: "es",
  UA: "uk",
};

export function getContent(lang: Lang): Content {
  return CONTENT[lang] ?? CONTENT[DEFAULT_LANG];
}
