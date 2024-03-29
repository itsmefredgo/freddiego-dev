"use client";

import { Locale } from "@/src/i18n.config";
import LanguageChangeButton from "../LanguageChangeButton";
import HeaderLink from "../HeaderLink";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import getCurrentPage from "../helpers/findCurrentPage";

export default function Header({ lang }: { lang: Locale }) {
  const navigation = {
    "": "freddiego",
    about: "About",
    archive: "Archive",
    contact: "Contact",
  };

  const [isMobileLinksOpen, setIsMobileLinksOpen] = useState(false);

  return (
    <header>
      <nav
        className=" min-w-full px-8 h-16 fixed bg-[#b3c6d070]
        flex justify-between items-center"
      >
        <div className=" flex gap-8">
          <span className=" flex gap-4 md:after:content-['|'] md:after:ml-4">
            <button
              className=" md:hidden"
              onClick={() => setIsMobileLinksOpen(true)}
            >
              <IoMenu />
            </button>
            <HeaderLink href={`/`} lang={lang} key={""}>
              freddiego
            </HeaderLink>
          </span>
          <div
            className={` absolute left-0 top-0 h-screen w-[20rem] max-w-full
            flex flex-col duration-300 items-end gap-8 p-8 bg-[#c4d1d6]
            ${isMobileLinksOpen ? "translate-x-0" : "translate-x-[-30rem]"}
            md:static md:translate-x-0 md:w-auto md:bg-inherit md:h-auto
            md:flex md:gap-12 md:p-0 md:flex-row`}
          >
            <button
              className=" md:hidden"
              onClick={() => setIsMobileLinksOpen(false)}
            >
              Close
            </button>
            {Object.entries(navigation).map(
              ([key, value]) =>
                key !== "" && (
                  <span
                    key={key}
                    className={` duration-100 ${
                      getCurrentPage(lang) === key
                        ? " font-bold"
                        : " font-normal"
                    }`}
                  >
                    <HeaderLink href={`/` + key} lang={lang} key={key}>
                      {value}
                    </HeaderLink>
                  </span>
                )
            )}
          </div>
        </div>
        <div className=" flex gap-8">
          <LanguageChangeButton />
        </div>
      </nav>
    </header>
  );
}
