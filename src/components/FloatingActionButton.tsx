// @ts-nocheck

import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function FloatingActionButton() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div
      title="Scroll Up"
      className={`${location.hash === "#projects" || location.hash === "#more" ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in`}
      onClick={scrollToTop}
    >
      <Button className="grid h-[3.2rem] w-[3rem] items-center justify-center rounded-full bg-black/85 md:h-[3.5rem] md:w-[3.5rem] dark:bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-7 text-white/90 hover:text-white md:size-8 dark:text-black/90 dark:hover:text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 18.75 7.5-7.5 7.5 7.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </Button>
    </div>
  );
}
