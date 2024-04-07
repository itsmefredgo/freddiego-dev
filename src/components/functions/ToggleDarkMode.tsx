"use client";

import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { FollowerPointerCard } from "@/src/components/ui/following-pointer";

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
    <button onClick={() => setDarkMode(!darkMode)} className=" h-[1.5rem]">
      <FollowerPointerCard
        title={darkMode ? "Dark Mode" : "Light Mode"}
        className="h-[1.5rem] w-[1.5rem]"
      >
        <IoMoon className="block dark:hidden h-full w-full" />
        <IoMdSunny className="hidden dark:block  h-full w-full" />
      </FollowerPointerCard>
    </button>
  );
};

export default ToggleDarkMode;
