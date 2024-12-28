import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import FloatingActionButton from "../components/FloatingActionButton";
import { DrawerWithNavigation } from "../components/NavigationDrawer";

export default function Navbar() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedPreference = localStorage.getItem("theme");
    return savedPreference === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function toggleDarkMode() {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("dark", newMode);
    // Save the preference to localStorage
    localStorage.setItem("theme", newMode ? "dark" : "light");
  }

  return (
    <>
      <nav className="flex h-20 w-full items-center justify-between px-6 font-semibold md:h-24 md:justify-around md:pt-0 dark:bg-black dark:text-white">
        <div className="rounded-full p-3 text-2xl tracking-tighter md:text-3xl">
          yazbeck.dev
        </div>
        <div className="hidden space-x-10 p-3 md:flex md:items-center">
          <div
            onClick={() => scrollTo("about-me")}
            className={`cursor-pointer rounded-full p-3 shadow-gray-400 hover:bg-black hover:text-white md:text-lg lg:text-xl dark:hover:bg-white dark:hover:text-black ${
              location.hash === "#about-me"
                ? "bg-black text-white shadow-md shadow-gray-500 dark:bg-white dark:text-black dark:shadow-gray-600"
                : "text-shadow"
            }`}
          >
            About me
          </div>
          <div
            onClick={() => scrollTo("projects")}
            className="cursor-pointer rounded-full p-3 shadow-gray-400 text-shadow hover:bg-black hover:text-white md:text-lg lg:text-xl dark:hover:bg-white dark:hover:text-black"
          >
            Projects
          </div>
          <div
            onClick={() => scrollTo("more")}
            className="cursor-pointer rounded-full p-3 shadow-gray-400 text-shadow hover:bg-black hover:text-white md:text-lg lg:text-xl dark:hover:bg-white dark:hover:text-black"
          >
            More
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            title="Switch Mode"
            className="items-center justify-center rounded-full text-black active:animate-ping md:flex md:h-14 md:w-14 md:hover:animate-spin md:hover:bg-black md:hover:text-white dark:bg-black dark:text-white dark:md:hover:bg-white dark:md:hover:text-black"
            onClick={toggleDarkMode}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={isDarkMode ? "size-7" : "h-[2.1rem] w-[2.1rem]"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isDarkMode
                    ? "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    : "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                }
              />
            </svg>
          </div>

          <div className="ml-3 md:hidden">
            <DrawerWithNavigation />
          </div>
        </div>
      </nav>
      <div className="fixed bottom-10 right-4 z-20 md:bottom-20 md:right-14 lg:right-24">
        <FloatingActionButton />
      </div>
    </>
  );
}
