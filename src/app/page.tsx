import { Container } from "@/components/core/core.container";
import { Section } from "@/components/core/core.section";
import { Icon } from "@/components/utils/utils.icon";
import Link from "next/link";

const Home = () => (
  <Container
    title="Hey, I’m Pranav Patel"
    description="A Self taught Software engineer with 4+ years of experience who likes to build the product from the scratch with the eye on design"
  >
    <div className="flex space-x-2 mt-3 items-center px-4">
      <a href="https://twitter.com/ThatsPranav" target="_blank">
        <Icon name="twitter" className="w-5 h-5 hover:opacity-100 opacity-70" />
      </a>
      <a href="https://github.com/pranavp10" target="_blank">
        <Icon name="github" className="w-5 h-5 hover:opacity-100 opacity-70" />
      </a>
      <a href="https://www.linkedin.com/in/pranavp10/" target="_blank">
        <Icon
          name="linkedin"
          className="w-5 h-5  hover:opacity-100 opacity-70"
        />
      </a>
    </div>
    <div className="mt-20 px-4">
      <Section title="Experience">
        <div className="mt-3">
          <Link
            href="/skills"
            className="duration-200 ease-in-out cursor-pointer"
          >
            <div className="p-3 border border-[#FAFAFA] dark:border-zinc-900 rounded-xl w-full relative hover:bg-zinc-100 dark:hover:bg-[#101010] transition flex items-center gap-3">
              <div className="h-12 w-12 bg-[#ffffff0a] rounded-md flex justify-center items-center">
                <Icon
                  name="coding"
                  className="w-6 h-6"
                  gradientName="gradient"
                />
              </div>
              <div>
                <p className="text-sm">Skills</p>
                <p className="text-sm text-[#fafafaa3]">
                  Technology I have learnt form my years of experience
                </p>
              </div>
            </div>
          </Link>
        </div>
      </Section>
    </div>
    <div className="mt-20 px-4">
      <Section title="Development Setup">
        {devSetup.map((item) => (
          <div className="mt-3" key={item.title}>
            <Link
              href={item.href}
              className="duration-200 ease-in-out cursor-pointer"
            >
              <div className="p-3 border border-[#FAFAFA] dark:border-zinc-900 rounded-xl w-full relative hover:bg-zinc-100 dark:hover:bg-[#101010] transition flex items-center gap-3">
                <div className="h-12 w-12 bg-[#ffffff0a] rounded-md flex justify-center items-center">
                  <Icon
                    name={item.iconName}
                    className="w-6 h-6"
                    gradientName="gradient"
                  />
                </div>
                <div>
                  <p className="text-sm">{item.title}</p>
                  <p className="text-sm text-[#fafafaa3]">{item.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Section>
    </div>
  </Container>
);

export default Home;

const devSetup = [
  {
    title: `Gears Used`,
    description: `This setup that helps me achieve my goals`,
    href: `/gears`,
    iconName: "gear",
  },
  {
    title: `VS Code Setup`,
    description: `Vs code settings that i use for day to day coding`,
    href: `/vscode-setup`,
    iconName: "coding",
  },
];
