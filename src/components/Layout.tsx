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
    <header className="sticky top-0 z-10 h-full bg-background">
      <div className="flex items-center justify-between h-full d-border-b">
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
        <nav className="flex items-center h-full text-subtle">
          {NAV_ITEMS.map(({ href, label }) => {
            const isActive = path === href;
            return (
              <Link
                key={href}
                href={href}
                className={tw(
                  "relative py-2.5 px-7 h-full text-sm d-border-l",
                  isActive && "text-foreground font-medium"
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute inset-0 -bottom-[1px] border-b-2 dark:border-b-white border-b-black" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

const NAV_ITEMS = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];
