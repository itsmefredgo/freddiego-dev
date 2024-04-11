"use client";

import { useEffect, useState } from "react";
import { FollowerPointerCard } from "@/src/components/ui/following-pointer";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className=" h-[1.5rem]"
      aria-label="Dark mode button"
    >
      <FollowerPointerCard
        title={darkMode ? "Dark Mode" : "Light Mode"}
        className="h-[1.5rem] w-[1.5rem]"
        isFixed={true}
      >
        <IoMoonOutline className="block dark:hidden h-full w-full hover:text-secondary" />
        <IoSunnyOutline className="hidden dark:block  h-full w-full hover:text-secondary" />
      </FollowerPointerCard>
    </button>
  );
};

export default ToggleDarkMode;
