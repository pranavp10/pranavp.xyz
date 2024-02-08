import { RESUME_DATA } from "@/data/resumeData";
import Icon from "./icon/icon";
import Quote from "./quote";

export const Footer = () => {
  const { contact } = RESUME_DATA;
  return (
    <footer className="max-w-2xl w-full m-auto mt-16 mb-24">
      <Quote />
      <ul className="flex gap-3 sm:gap-6 items-center text-zinc-500 dark:text-dark-white-300 mt-16">
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
                {social.name === "Mail" ? "hi@pranavp10.com" : `${social.name}`}
              </p>
              <Icon
                name="social-link"
                className="w-2 h-2 group-hover:scale-125"
              />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
