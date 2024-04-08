"use client";

// Importing dependencies
import Link from "next/link";
import { usePathname } from "next/navigation";

// i18n config data
import { i18n } from "@/src/i18n.config";

import { TbMessageLanguage } from "react-icons/tb";
import { FollowerPointerCard } from "@/src/components/ui/following-pointer";
import { HiOutlineLanguage } from "react-icons/hi2";

export default function LanguageChangeButton() {
  // Get the current pathname using the usePathname hook
  const pathName = usePathname();

  // Define a function to redirect the pathname based on the selected locale
  const getRedirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );
    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        if (segments.length === 2) return "/";
        segments.splice(1, 1);
        return segments.join("/");
      }
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  // Currently switches between en and kr only, but will add more languages in future :)
  const getNextLanguage = () => {
    const segments = pathName.split("/");

    let language = "en";
    i18n.locales.forEach((locale) => {
      if (locale == segments[1]) {
        language = segments[1];
      }
    });
    if (language === "en") return "kr";
    return "en";
  };

  // Link to switch between languages
  return (
    <Link
      href={getRedirectedPathName(getNextLanguage())}
      className=" h-[1.5rem]flex flex-col justify-center"
    >
      <FollowerPointerCard
        title={getNextLanguage()}
        className="h-[1.5rem] w-[1.5rem]"
        isFixed={true}
      >
        <HiOutlineLanguage className="h-full w-full " />
      </FollowerPointerCard>
    </Link>
  );
}
