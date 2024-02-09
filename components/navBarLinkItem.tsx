"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBarLinkItem = ({ link, title }: { link: string; title: string }) => {
  const pathname = usePathname();

  return (
    <div className="relative group">
      <Link
        href={link}
        className={`text-sm px-3 transition duration-200 ease-in-out rounded-full py-1 ${
          pathname === link ? "text-highlight" : "group-hover:text-highlight"
        }`}
      >
        {title}
      </Link>
      <span
        className={`absolute inset-x-1 -bottom-1.5 h-px bg-gradient-to-r from-highlight/0 via-highlight/40 to-teal-500/0 ${
          pathname === link ? "block" : "group-hover:block hidden"
        }`}
      />
    </div>
  );
};

export default NavBarLinkItem;
