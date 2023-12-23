"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "../utils/utils.icon";
import ThemeSwitch from "../utils/utils.ThemeSwitch";
import Image from "next/image";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener(`scroll`, onScroll);
    return () => {
      window.removeEventListener(`scroll`, onScroll);
    };
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 flex flex-wrap items-center justify-between ${
        isScrolled && `shadow-2xl sm:bg-white dark:sm:bg-black`
      } shadow-white/10 transition duration-500`}
    >
      <div className="max-w-3xl w-full m-auto flex flex-wrap items-center justify-between sm:px-0 px-4 py-2">
        <div className="relative flex flex-grow basis-0 items-center">
          <Link href="/" className="block w-10 overflow-hidden lg:w-auto">
            <Image
              src="/logo.png"
              width={40}
              height={10}
              alt="pixilated child"
            />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="https://github.com" className="group">
            <Icon
              name="github"
              className="w-6 h-6  hover:opacity-100 opacity-70"
              gradientName="gradient"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
