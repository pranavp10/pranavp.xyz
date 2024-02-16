import ProjectCard from "@/components/card/projectCard";
import { projects } from "@/data/projectData";

const Page = () => {
  return (
    <main className="max-w-2xl w-full m-auto ">
      <header className="mt-16">
        <h1 className="text-xl font-medium">Projects</h1>
        <p className="mt-6 dark:text-dark-white-300 text-pretty font-mono text-sm text-zinc-500">
          I&apos;ve been developing SaaS products for quite some time, and the
          majority of them are available as open-source. Here is a compilation
          of the projects.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.link}
              link={project.link}
              displayLink={project.displayLink}
              description={project.description}
              githubLink={project.githubLink}
              title={project.title}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </header>
    </main>
  );
};

export default Page;
