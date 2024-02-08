import Image from "next/image";
import Icon from "../icon/icon";

const ProjectCard = ({
  link,
  title,
  techStack,
  description,
  githubLink,
  imageUrl,
  displayLink,
}: {
  link: string;
  title: string;
  description: string;
  githubLink: string;
  techStack: string[];
  imageUrl: string;
  displayLink: string;
}) => (
  <div className="transition ease-in-out duration-200  cursor-pointer p-6 border dark:border-dark-white-50 rounded-xl dark:hover:border-dark-white-100 flex flex-col hover:border-highlight group relative">
    <a target="_blank" href={link} className="absolute inset-0" />
    <div className="flex gap-4 relative justify-between">
      <Image
        src={imageUrl}
        width={36}
        height={36}
        className="rounded-full w-9 h-9"
        alt="logo of project"
      />
      <a
        href={githubLink}
        target="_blank"
        className="text-sm rounded-md dark:bg-primary-black-link-hover dark:hover:text-dark-white hover:text-zinc-900 dark:text-dark-white-300"
      >
        <span className="sr-only">Github</span>
        <svg
          className="w-4.5 h-5 text-zinc-600"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          ></path>
        </svg>
      </a>
    </div>
    <p className="font-medium mt-4">{title}</p>
    <p className="text-zinc-500 dark:text-dark-white-300 text-pretty font-mono text-sm ">
      {description}
    </p>
    <div className="flex items-center gap-3 mt-3 ">
      <a
        target="_blank"
        href={link}
        className="text-sm text-zinc-500 dark:text-dark-white-300 flex items-center group-hover:text-highlight gap-1"
      >
        {displayLink}
        <Icon name="social-link" className="w-1.5 h-1.5" />
      </a>
    </div>
  </div>
);

export default ProjectCard;
