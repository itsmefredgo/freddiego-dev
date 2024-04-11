"use client";

// Importing dependencies
import Link from "next/link";
import { usePathname } from "next/navigation";

// i18n config data
import { i18n } from "@/src/i18n.config";

import { FollowerPointerCard } from "@/src/components/ui/following-pointer";
import { HiOutlineLanguage } from "react-icons/hi2";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/components/ui/alert-dialog";

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
  const nextLanguage = getNextLanguage();

  if (nextLanguage === "en") {
    return (
      <Link
        href={getRedirectedPathName(nextLanguage)}
        className=" h-[1.5rem]flex flex-col justify-center hover:text-secondary"
      >
        <FollowerPointerCard
          title={nextLanguage}
          className="h-[1.5rem] w-[1.5rem]"
          isFixed={true}
        >
          <HiOutlineLanguage className="h-full w-full " />
        </FollowerPointerCard>
      </Link>
    );
  } else {
    return (
      <AlertDialog>
        <AlertDialogTrigger className="h-[1.5rem] w-[1.5rem] hover:text-secondary">
          <FollowerPointerCard title={nextLanguage} className="" isFixed={true}>
            <HiOutlineLanguage className="h-full w-full " />
          </FollowerPointerCard>
        </AlertDialogTrigger>
        <AlertDialogContent className=" w-fit">
          <AlertDialogHeader>
            <AlertDialogDescription className=" flex flex-col gap-4">
              <div className=" break-keep">
                일부 컨텐츠는 한국어를 지원하지 않습니다. 양해 부탁드립니다.
                감사합니다
                <br /> - 고동현 -
              </div>
              <div>
                Not all contents support Korean. Thank you for your
                understanding. <br />- Frederick -
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2">
            <AlertDialogAction className=" bg-primary">
              <Link
                href={getRedirectedPathName(nextLanguage)}
                className=" h-[1.5rem] flex flex-col justify-center"
              >
                계속하기 / Continue
              </Link>
            </AlertDialogAction>
            <AlertDialogAction className=" bg-[#e23b3b] dark:bg-[#ffacac]">
              돌아가기 / Back
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
}
