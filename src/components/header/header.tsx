"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "../utils/icon";

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
        isScrolled && `shadow-md sm:bg-white dark:sm:bg-black`
      } shadow-slate-900/5 transition duration-500`}
    >
      <div className="max-w-3xl w-full m-auto flex flex-wrap items-center justify-between sm:px-2 px-4 py-4">
        <div className="relative flex flex-grow basis-0 items-center">
          <Link href="/" className="block w-10 overflow-hidden lg:w-auto">
            <Icon name="frame" gradientName="gradient" className="w-6 h-6" />
          </Link>
        </div>
        <Link href="https://github.com" className="group">
          <Icon
            name="github"
            className="w-6 h-6  hover:opacity-100 opacity-70"
            gradientName="gradient"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
