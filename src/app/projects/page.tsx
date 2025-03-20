import { projects } from "@/app/projects/projectData";
import { HowToDoIt, Quote, quotes } from "@/components/Quote";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Projects = () => {
  return (
    <div>
      <div className="px-7 py-10">
        <p className="text-2xl font-medium">Projects</p>
        <p className="text-subtle py-3">
          I build side projects that make an impact and are used by people
          worldwide. Explore my projects below!
        </p>
      </div>
      <div className="d-border-t px-7 -mx-7 sticky top-0">
        <div className="grid grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={twMerge(
                "px-7 py-5 h-full dark:hover:bg-neutral-900  hover:bg-gray-50 relative text-left w-full",
                i % 2 === 0 && "d-border-r",
                i !== projects.length - 1 && "d-border-b"
              )}
            >
              <a
                target="_blank"
                href={project.link}
                className="group flex gap-1 absolute inset-0"
              />
              <Image
                src={project.imageUrl}
                width={36}
                height={36}
                className="w-9 h-9 rounded-lg"
                alt={`Logo of ${project.title}`}
              />
              <div className="mt-6">
                <a
                  target="_blank"
                  href={project.link}
                  className="group-hover:text-highlight group flex gap-1"
                >
                  <p className="text-lg font-medium">{project.title}</p>
                </a>
                <p className="text-subtle mt-2 leading-5">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 text-sm text-subtle">
                <p>{project.displayLink}</p>
              </div>
            </div>
          ))}
        </div>
        <HowToDoIt
          lesson={quotes.project.lesson}
          steps={quotes.project.steps}
        />
        <Quote quote={quotes.project.quote} author={quotes.project.author} />
      </div>
    </div>
  );
};

export default Projects;
