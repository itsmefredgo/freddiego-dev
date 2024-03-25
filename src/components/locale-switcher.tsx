"use client";

// Importing dependencies
import Link from "next/link";
import { usePathname } from "next/navigation";

// i18n config data
import { i18n } from "@/src/i18n.config";

export default function ChangeLanguage() {
  // Get the current pathname using the usePathname hook
  const pathName = usePathname();

  // Define a function to redirect the pathname based on the selected locale
  const redirectedPathName = (locale: string) => {
    // If the url pathname is missing, return "/"
    if (!pathName) return "/";

    // Check if the url pathname has locale segment or not
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    // If the url is missing the locale, return the current url if the selected locale is the default locale
    // else, add locale to the url
    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      // If the url has the locale, remove if the locale is the default locale
      // else, replace the locale with the selected locale
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        // return without locale if the url is already the default locale
        if (segments.length === 2) return "/";
        segments.splice(1, 1);
        return segments.join("/");
      }
      // If the selected locale is not the default locale,
      // replace the locale segment with the selected locale
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  // Currently switches between en and kr only, but will add more languages in future :)
  const getNextLanguage = (): string => {
    const segments = pathName.split("/");
    const language = segments[1] || "en";
    return language === "en" ? "de" : "en";
  };

  // Link to switch between languages
  return (
    <Link
      href={redirectedPathName(getNextLanguage())}
      className="rounded-md border bg-black px-3 py-2 text-white"
    >
      {getNextLanguage()}
    </Link>
  );
}
