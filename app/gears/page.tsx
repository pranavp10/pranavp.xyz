import {
  browserExtensions,
  codingApps,
  gears,
  softwares,
} from "@/data/gearData";
import IconTitleCard from "./components/iconsTitleCars";
import Icon from "@/components/icon/icon";
import NumberList from "@/components/numberList";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/gears",
    languages: {
      "en-US": "/en-US",
    },
  },
  title:
    "Optimizing Productivity: Unveiling the Essential Gears for Seamless Workflow | Pranav P",
  description:
    "Embark on a voyage through my professional evolution, where I've cultivated a wealth of technology expertise. Dive into the depths of my hands-on experience, as I hone skills in diverse frameworks, languages, and methodologies. This journey not only elevates my software development proficiency but also enriches problem-solving capabilities and widens my tech perspective. Join me in navigating the dynamic tech landscape, fueled by a commitment to continuous learning and adaptability",
  keywords: ["Laptop", "JavaScript", "React", "UI/UX", "Portfolio", "Gears"],
  robots: "index, follow",
  openGraph: {
    title:
      "Optimizing Productivity: Unveiling the Essential Gears for Seamless Workflow | Pranav P",
    description:
      "Discover the secret to a seamless and efficient workflow as I unveil the productivity tools that power my daily endeavors. Delve into the tech landscape that keeps me at the forefront of productivity, exploring the gears that transform tasks into achievements. From essential tools to innovative solutions, join me in unlocking the potential of a streamlined work process. Elevate your own productivity game by exploring the gears that make every moment count.",
    url: `${process.env.PUBLIC_URL}/gears`,
    type: "website",
    siteName: "Gears | Pranav P",
  },
};

const Page = () => (
  <main className="max-w-2xl w-full m-auto ">
    <header className="mt-16">
      <h1 className="text-xl">Gears Used </h1>
      <p className="mt-3 text-primary-white-300 text-pretty font-mono text-sm">
        Productivity tools, explore the tech that keeps my workflow seamless and
        efficient.
      </p>
      <div className="pt-14">
        <h2 className="mb-3">Devices</h2>
        <div className="flex flex-col gap-5">
          {gears.map((gear) => (
            <IconTitleCard
              key={gear.title}
              icon={
                <Icon
                  name={gear.iconsName}
                  className={iconClassName}
                  gradientName="gradient"
                />
              }
              title={gear.title}
            />
          ))}
        </div>
        <div className="pt-14">
          <h2 className="mb-6">Software and Apps</h2>
          <IconTitleCard
            icon={
              <Icon
                name="coding"
                className={iconClassName}
                gradientName="gradient"
              />
            }
            title="Coding Tools"
          />
          <div className="ml-[6.5px]">
            <NumberList>
              {codingApps.map((app) => (
                <a
                  target="_blank"
                  className="font-mono text-sm text-pretty flex gap-1 items-center hover:text-highlight group transition duration-300 ease-in-out pt-[1px] w-fit"
                  key={app.href}
                  href={app.href}
                >
                  {app.title}
                  <svg
                    width="12"
                    className="w-2 h-2 group-hover:scale-125 group-hover:text-highlight block"
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
              ))}
            </NumberList>
          </div>
        </div>
        <div className="pt-6">
          <IconTitleCard
            icon={
              <Icon
                name="box"
                className={iconClassName}
                gradientName="gradient"
              />
            }
            title="Web Extensions"
          />
          <div className="ml-[6.5px]">
            <NumberList>
              {browserExtensions.map((app) => (
                <a
                  target="_blank"
                  className="font-mono text-sm text-pretty flex gap-1 items-center hover:text-highlight group transition duration-300 ease-in-out pt-[1px] w-fit"
                  key={app.href}
                  href={app.href}
                >
                  {app.title}
                  <svg
                    width="12"
                    className="w-2 h-2 group-hover:scale-125 group-hover:text-highlight block"
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
              ))}
            </NumberList>
          </div>
        </div>
        <div className="pt-6">
          <IconTitleCard
            icon={
              <Icon
                name="laptop"
                className={iconClassName}
                gradientName="gradient"
              />
            }
            title="Software"
          />
          <div className="ml-[6.5px]">
            <NumberList>
              {softwares.map((app) => (
                <a
                  target="_blank"
                  className="font-mono text-sm text-pretty flex gap-1 items-center hover:text-highlight group transition duration-300 ease-in-out pt-[1px] w-fit"
                  key={app.href}
                  href={app.href}
                >
                  {app.title}
                  <svg
                    width="12"
                    className="w-2 h-2 group-hover:scale-125 group-hover:text-highlight block"
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
              ))}
            </NumberList>
          </div>
        </div>
      </div>
    </header>
  </main>
);

const iconClassName = `border border-primary-white-50 w-9 h-9 p-2 bg-primary-white-50 rounded-md`;

export default Page;
