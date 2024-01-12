import { RESUME_DATA } from "@/data/resumeData";
import Icon from "./icon/icon";

export const Footer = () => {
  const { contact } = RESUME_DATA;
  return (
    <footer className="max-w-2xl w-full m-auto mt-16 mb-24">
      <div>
        <div className="mt-3 rounded-xl relative">
          <svg
            viewBox="0 0 24 24"
            fill="#ff8000"
            stroke="currentColor"
            className="w-6 h-6  rotate-180 text-highlight "
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>

          <p className="text-pretty font-mono font-medium">
            You have a right to perform your prescribed duty, but you are not
            entitled to the fruits of actions
          </p>
          <p className="text-pretty font-mono  text-end text-highlight">
            - bhagavad gita
          </p>
        </div>
      </div>
      <ul className="flex gap-6 items-center text-primary-white-300 mt-16">
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
