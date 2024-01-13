import BasicCard from "@/components/card/basicCard";
import { BlogCard } from "@/components/card/blogCard";
import ProjectCard from "@/components/card/projectCard";
import { projects } from "@/data/projectData";
import { BlogType } from "@/types";
import { getBlogs } from "@/utils/getBlogs";
import Link from "next/link";

const Home = async () => {
  const blogs = await getBlogs();
  return (
    <main className="max-w-2xl w-full m-auto   mt-16">
      <header>
        <h1 className="text-xl">
          Hello, I&apos;m Pranav Patel! <span className="wave">👋🏻</span>
        </h1>
        <p className="mt-6 text-primary-white-300 text-pretty font-mono text-sm">
          A self-taught Software Engineer and Open Source Contributor, with a
          focus on JavaScript, React, and UI/UX design. Enthusiastic about
          crafting products from the ground up, driven by a keen eye for design.
        </p>
        <div className="mt-4 flex gap-2 items-center">
          <a
            href="mailto:hi@pranavp10.com?subject=Work inquiry"
            className="text-highlight bg-highlight-50 px-4 rounded-lg py-1.5 text-sm font-medium hover:bg-highlight-100 transition duration-300 ease-in-out"
          >
            Open for project -{">"}
          </a>
          <a
            href="mailto:hi@pranavp10.com"
            className="text-primary-white-300 bg-primary-black-link-hover px-4 rounded-lg py-1.5 text-sm font-medium hover:text-primary-white transition duration-300 ease-in-out"
          >
            hi@pranavp10.com
          </a>
        </div>
        <div className="mt-16">
          <h2 className="text-xl">Projects</h2>
          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.link}
                link={project.link}
                displayLink={project.displayLink}
                description={project.description}
                githubLink={project.githubLink}
                techStack={project.techStack}
                title={project.title}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
          <div className="mt-3 flex justify-center">
            <Link
              href="/projects"
              className="text-primary-white-300 px-4 rounded-lg py-2.5 text-sm font-medium hover:text-primary-white border border-primary-white-50 hover:bg-primary-black-link-hover  w-full text-center transition duration-300 ease-in-out"
            >
              Sell all
            </Link>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-xl">Blog</h2>
          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            {blogs.map((blogDetails: BlogType | null) =>
              blogDetails ? (
                <BlogCard blogDetails={blogDetails} key={blogDetails?.slug} />
              ) : (
                <></>
              )
            )}
          </div>
          <div className="mt-3 flex justify-center">
            <Link
              href="/blog"
              className="text-primary-white-300 px-4 rounded-lg py-2.5 text-sm font-medium hover:text-primary-white border border-primary-white-50 hover:bg-primary-black-link-hover  w-full text-center transition duration-300 ease-in-out"
            >
              Sell all
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xl">Experience</h2>
          <div className="mt-3 flex flex-col gap-3">
            <BasicCard
              link="/skills"
              iconName="coding"
              title="Skill & technology"
              description="The knowledge I've gained through years of experience in technology."
            />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-xl">Development Setup</h2>
          <div className="mt-3 flex flex-col gap-3">
            <BasicCard
              link="/gears"
              iconName="gear"
              title="Gears Used"
              description="Productivity tools, explore the tech that keeps my workflow seamless and efficient."
            />
            <BasicCard
              link="/vscode-setup"
              iconName="coding"
              title="VS Code Setup"
              description="The VS Code settings I use every day for coding."
            />
          </div>
        </div>
      </header>
    </main>
  );
};

export default Home;
