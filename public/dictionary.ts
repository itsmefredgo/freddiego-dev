import "server-only";
import type { Locale } from "@/src/i18n.config";

const dictionaries = {
  en: () =>
    import("@/public/dictionaries/en.json").then((module) => module.default),
  kr: () =>
    import("@/public/dictionaries/kr.json").then((module) => module.default),
  // kr: () =>
  //   import("@/public/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
