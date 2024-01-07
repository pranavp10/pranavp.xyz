const BlogCard = ({
  link,
  title,
  techStack,
  description,
  github,
  imageUrl,
  displayLink,
}: {
  link: string;
  title: string;
  description: string;
  github: string;
  techStack: string[];
  imageUrl: string;
  displayLink: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="duration-200 ease-in-out cursor-pointer p-4 border border-primary-white-50 rounded-md hover:bg-primary-card flex flex-col"
    >
      <div className="flex gap-3 items-center">
        <div className="mt-4 mb-3">
          <p className="font-medium">{title}</p>
          <div className="flex items-center gap-1">
            <p className="text-xs text-primary-white-300">{displayLink}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-primary-white-300 text-pretty font-mono text-sm">
        {description}
      </p>
      <ul className="flex items-center gap-2 flex-wrap mt-3">
        {techStack.map((tech) => (
          <li className="text-xs rounded-md bg-primary-black-link-hover px-2 py-1 ">
            {tech}
          </li>
        ))}
      </ul>
    </a>
  );
};
