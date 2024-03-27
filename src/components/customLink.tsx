import Link from "next/link";
import React from "react";
import { i18n } from "../i18n.config";

type CustomLinkProps = {
  href: string;
  lang: string;
  children: React.ReactNode;
  [key: string]: any;
};

function CustomLink({ href, lang, ...props }: CustomLinkProps) {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  return (
    <Link href={path} {...props}/>
  );
}

export default CustomLink;
