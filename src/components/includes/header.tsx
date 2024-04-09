"use client";

import { Locale } from "@/src/i18n.config";
import Image from "next/image";
import LanguageChangeButton from "../functions/LanguageChangeButton";
import HeaderLink from "../ui/HeaderLink";
import { IoMenu } from "react-icons/io5";
import getCurrentPage from "../helpers/useFindCurrentPage";
import freddiego from "@/public/assets/images/freddiego.svg";
import ToggleDarkMode from "../functions/ToggleDarkMode";
import ContactButton from "../functions/ContactButton";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

export default function Header({ lang }: { lang: Locale }) {
  const navigation = {
    about: "About",
    archive: "Archive",
  };
  // ${defaultNavBarStyle}
  return (
    <header>
      <nav
        className={` w-full h-16 fixed text-text 
                  flex flex-row gap-4 
                  md:gap-0 md:justify-between items-center 
                  
                  px-[1rem]
                  sm:px-[min(calc((100%-36rem)/2),4rem)]
                  md:px-[min(calc((100%-40rem)/2),8rem)]
                  lg:px-[min(calc((100%-48rem)/2),10rem)]
                  xl:px-[calc((100%-60rem)/2)] z-50 `}
      >
        <div
          className="  flex flex-row-reverse 
          justify-end md:justify-start md:flex-row gap-2 md:gap-8 items-center "
        >
          <span
            className=" flex md:pr-8
            md:border-r-[1.25px] md:border-text "
          >
            <HeaderLink href={`/`} lang={lang} key={""}>
              <div className=" h-[25px] w-auto ">
                <Image
                  src={freddiego}
                  alt="Freddiego"
                  className=" h-full w-full customSvgColour"
                />
              </div>
            </HeaderLink>
          </span>
          <div
            className="hidden md:static w-auto h-auto bg-inherit gap-12
            md:flex md:flex-row"
          >
            <SubLinks></SubLinks>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className=" md:hidden ">
              <IoMenu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-fit bg-subBackground dark:bg-subBackground">
              {Object.entries(navigation).map(([key, value]) => (
                <HeaderLink href={`/` + key} lang={lang} key={key}>
                  <DropdownMenuItem>{value}</DropdownMenuItem>
                  {value !== navigation.archive}
                  <DropdownMenuSeparator></DropdownMenuSeparator>
                </HeaderLink>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div
          className=" flex gap-4 text-primary items-center
          justify-around sm:justify-end md:gap-8 "
        >
          <ContactButton />
          <LanguageChangeButton />
          <ToggleDarkMode />
        </div>
      </nav>
    </header>
  );

  // These are links in header except main page link (About & Archive)
  function SubLinks() {
    return (
      <>
        {Object.entries(navigation).map(([key, value]) => (
          <span
            key={key}
            className={` duration-100 ${
              getCurrentPage(lang) === key ? " font-bold" : " font-normal"
            }`}
          >
            <HeaderLink href={`/` + key} lang={lang} key={key}>
              {value}
            </HeaderLink>
          </span>
        ))}
      </>
    );
  }
}

const defaultNavBarStyle = `
w-full h-16 fixed text-text 
flex flex-row gap-4 
md:gap-0 md:justify-between items-center px-[2rem] 
sm:px-[min(calc((100%-36rem)/2),4rem)]
md:px-[min(calc((100%-40rem)/2),8rem)]
lg:px-[min(calc((100%-48rem)/2),10rem)]
xl:px-[calc((100%-60rem)/2)] z-50
`;
