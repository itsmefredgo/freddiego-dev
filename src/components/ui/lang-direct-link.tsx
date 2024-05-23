import Link from "next/link";
import React from "react";
import { i18n } from "../../i18n.config";

type LinkForLanguageProps = {
  href: string;
  lang: string;
  children: React.ReactNode;
  [key: string]: any;
};

/**
 * Renders a link in the header.
 * @param href The path of the link.
 * @param lang The language of the link.
 * @returns The rendered link.
 */
function LinkForLanguage({ href, lang, ...props }: LinkForLanguageProps) {
  // Generate the path based on the current language selected.
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  return <Link href={path} {...props} />;
}

export default LinkForLanguage;
