"use client";
import { RESUME_DATA } from "@/data/resumeData";
import Icon from "./icon/icon";
import Quote from "./quote";
import ThemeSwitch from "./theme/themeSwitch";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const { contact } = RESUME_DATA;
  const pathname = usePathname();

  if (pathname.includes("/cv")) {
    return <></>;
  }

  return (
    <footer className="max-w-2xl w-full m-auto mt-16 mb-24">
      <Quote />
      <div className="flex justify-between gap-10 flex-col sm:flex-row items-center mt-16">
        <ul className="flex gap-3 sm:gap-6 items-center text-zinc-500 dark:text-dark-white-300 ">
          {contact.social.map((social) => (
            <li
              key={social.name}
              className="hover:text-highlight group text-sm font-mono transition duration-300 ease-in-out"
            >
              <a
                href={social.url}
                target="_blank"
                className="flex items-center gap-1"
              >
                <p>
                  {social.name === "Mail" ? "hi@pranavp.xyz" : `${social.name}`}
                </p>
                <Icon
                  name="social-link"
                  className="w-2 h-2 group-hover:scale-125"
                />
              </a>
            </li>
          ))}
        </ul>
        <ThemeSwitch />
      </div>
    </footer>
  );
};
