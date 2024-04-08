import "server-only";
import type { Locale } from "@/src/i18n.config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  // kr: () => import("@/dictionaries/kr.json").then((module) => module.default),
  kr: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
