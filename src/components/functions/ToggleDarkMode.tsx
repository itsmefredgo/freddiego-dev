"use client";

import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
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
      <IoMoon className="block dark:hidden h-full w-full" />
      <IoMdSunny className="hidden dark:block  h-full w-full" />
    </button>
  );
};

export default ToggleDarkMode;
