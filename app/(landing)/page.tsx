import BasicCard from "./component/basicCard";
import ProjectCard from "./component/projectCard";

const Home = () => {
  return (
    <main className="max-w-2xl w-full m-auto mb-36">
      <header className="mt-16">
        <h1 className="text-xl">Hello, I'm Pranav Patel! 👋🏻</h1>
        <p className="mt-6 text-primary-white-300 text-pretty font-mono text-sm">
          A self-taught Software Engineer and Open Source Contributor, with a
          focus on JavaScript, React, and UI/UX design. Enthusiastic about
          crafting products from the ground up, driven by a keen eye for design.
        </p>
        <div className="mt-4 flex gap-2 items-center">
          <a
            href="mailto:hi@pranavp10.com?subject=Work inquiry"
            className="text-highlight bg-highlight-50 px-4 rounded-lg py-1.5 text-sm font-medium hover:bg-highlight-100"
          >
            Open for project -{">"}
          </a>
          <a
            href="mailto:hi@pranavp10.com"
            className="text-primary-white-300 bg-primary-black-link-hover px-4 rounded-lg py-1.5 text-sm font-medium hover:text-primary-white "
          >
            hi@pranavp10.com
          </a>
        </div>
        <div className="mt-16">
          <h2 className="text-xl">Projects</h2>
          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            <ProjectCard
              link="http://www.aidetective.xyz/"
              displayLink="www.aidetective.xyz"
              description="Search Top AI SaaS Products"
              githubLink="sdfs"
              techStack={["Nextjs", "Prisma", "Tailwind"]}
              title="AI Detective"
              imageUrl="/ai-detective-logo.png"
            />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-xl">Experience</h2>
          <div className="mt-3 flex flex-col gap-3">
            <BasicCard
              link="/skills"
              iconName="coding"
              title="Tools & technology"
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
