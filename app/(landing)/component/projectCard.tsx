import Image from "next/image";

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
  <div className="duration-200 ease-in-out cursor-pointer p-6 border border-primary-white-50 rounded-xl hover:border-highlight flex flex-col ">
    <div>
      <Image
        src={imageUrl}
        width={35}
        height={35}
        className="rounded-sm w-auto h-auto"
        alt="logo of project"
      />
    </div>
    <div>
      <p className="font-medium mt-4">{title}</p>
      <p className="text-xs text-primary-white-300">{displayLink}</p>
    </div>
    <p className="text-primary-white-300 text-pretty font-mono text-sm mt-4">
      {description}
    </p>
    <ul className="flex items-center gap-2 flex-wrap mt-3">
      {techStack.map((tech) => (
        <li
          key={tech}
          className="text-xs rounded-md bg-primary-black-link-hover px-2 py-1 font-medium text-primary-white-300"
        >
          {tech}
        </li>
      ))}
    </ul>
    <div className="flex items-center gap-3 mt-6 ">
      <a
        href={link}
        target="_blank"
        className="text-sm text-highlight bg-highlight-50 px-3 rounded-lg py-1.5 flex gap-2 items-center hover:bg-highlight-100"
      >
        Website
        <svg
          width="12"
          className="w-2 h-2"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
      <a
        href={githubLink}
        target="_blank"
        className="text-sm rounded-md bg-primary-black-link-hover px-3 py-1.5 hover:text-primary-white text-primary-white-300"
      >
        <span className="sr-only">Github</span>
        <svg
          className="w-5 h-5"
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
  </div>
);

export default ProjectCard;
