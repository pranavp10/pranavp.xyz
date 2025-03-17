"use client";
import Image from "next/image";
import { Icon } from "./Icon";
import Link from "next/link";
import { tw } from "@/utils/tw";
import { usePathname } from "next/navigation";

const footerList = [
  { text: "hi@pranavp.xyz", href: "mailto:hi@pranavp.xyz" },
  { text: "Github", href: "https://github.com/pranavp10" },
  { text: "Linkedin", href: "https://www.linkedin.com/in/pranavp10/" },
  { text: "X", href: "https://x.com/thatspranav" },
];

export const Footer = () => (
  <footer>
    <div className="d-border-b">
      <div className="flex items-center gap-8 py-3 px-7 justify-center">
        {footerList.map(({ text, href }) => (
          <a
            key={text}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-subtle flex items-center gap-1 hover:underline"
          >
            <p>{text}</p>
            <Icon name="social-link" className="w-2 h-2" />
          </a>
        ))}
      </div>
    </div>
    <div className="h-10" />
  </footer>
);

export const Header = () => {
  const path = usePathname();
  return (
    <header className="h-full bg-white sticky top-0 z-10">
      <div className="flex items-center justify-between d-border-b h-full">
        <div className="flex items-center gap-4">
          <div className="px-5 py-2">
            <Link href="/">
              <Image
                src="/logo.png"
                width={36}
                height={36}
                alt="logo"
                className="w-6 h-6 rounded-lg"
              />
            </Link>
          </div>
        </div>
        <div className=" flex items-center text-subtle h-full">
          <Link
            href="/projects"
            className={tw(
              "relative py-2.5 px-7 h-full text-sm d-border-l",
              path === "/projects" && "text-black font-medium"
            )}
          >
            Projects
            {path === "/projects" && (
              <span className="border-b-black absolute inset-0 -bottom-[1px] border-b-2" />
            )}
          </Link>
          <Link
            href="/blog"
            className={tw(
              "py-2.5 d-border-l px-7 h-full text-sm relative",
              path === "/blog" && "text-black font-medium"
            )}
          >
            Blog
            {path === "/blog" && (
              <span className="border-b-black absolute inset-0 -bottom-[1px] border-b-2" />
            )}
          </Link>
          <Link
            href="/about"
            className={tw(
              "py-2.5 d-border-l px-7 h-full text-sm relative",
              path === "/about" && "text-black font-medium"
            )}
          >
            About
            {path === "/about" && (
              <span className="border-b-black absolute inset-0 -bottom-[1px] border-b-2" />
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
