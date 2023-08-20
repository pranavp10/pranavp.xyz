import { Container } from "@/components/core/core.container";
import { Section } from "@/components/core/core.section";
import { Icon } from "@/components/utils/utils.icon";
import Link from "next/link";

const Home = () => (
  <Container
    title="Hey, I’m Pranav Patel"
    description="A Self taught Software engineer with 4+ years of experience who likes to build the product from the scratch with the eye on design"
  >
    <Section title="Development Setup">
      <div className="grid grid-cols-2 gap-4 mb-10">
        {devSetup.map((item) => (
          <div key={item.title}>
            <div className="group relative">
              <div className="flex flex-wrap justify-center w-full rounded-2xl transition duration-200 ease-in-out cursor-pointer transform group-hover:scale-[1.01] motion-reduce:transform-none">
                <div className="pt-2 pb-4 px-4 border-4 border-zinc-100 dark:border-zinc-900 rounded-2xl w-full relative">
                  <Link href={item.href} className="absolute inset-0 z-0" />
                  <div className="flex gap-4">
                    <Icon
                      name={item.iconName}
                      className="w-6 h-6 mt-2 flex-shrink-0"
                      gradientName="gradient"
                    />
                    <div className="flex flex-col">
                      <div>
                        <p className="text-xl leading-none font-semibold my-2">
                          {item.title}
                        </p>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
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
