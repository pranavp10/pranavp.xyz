import {
  browserExtensions,
  codingApps,
  gears,
  softwares,
} from "@/app/gears/gearData";
import { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { FC } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "/gears",
    languages: { "en-US": "/en-US" },
  },
  title:
    "Optimizing Productivity: Essential Gears for Seamless Workflow | Pranav P",
  description:
    "Explore the tech tools that enhance productivity and streamline workflow. Discover my favorite software, web extensions, and coding tools.",
  keywords: ["Laptop", "JavaScript", "React", "UI/UX", "Portfolio", "Gears"],
  robots: "index, follow",
  openGraph: {
    title:
      "Optimizing Productivity: Essential Gears for Seamless Workflow | Pranav P",
    description:
      "Discover the tools that power my daily workflow and enhance productivity. Explore my favorite software, web extensions, and coding applications.",
    url: `${process.env.NEXT_PUBLIC_URL}/gears`,
    type: "website",
    siteName: "Gears | Pranav P",
  },
};

const Section: FC<{
  title: string;
  items: { href: string; title: string }[];
  icon: string;
}> = ({ title, items, icon }) => (
  <div>
    <div className="py-3 px-7 d-border-t d-border-b font-medium flex items-center gap-2">
      <p>{title}</p>
      <Icon name={icon} className="w-4 h-4" gradientName="gradient" />
    </div>
    <div className="px-7 py-3 space-y-2">
      {items.map((app) => (
        <a
          key={app.href}
          href={app.href}
          target="_blank"
          className="text-sm text-subtle flex gap-1 items-center group transition duration-300 ease-in-out w-fit capitalize"
        >
          <span className="text-3xl leading-none pr-1">·</span>
          {app.title}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-2 h-2 group-hover:scale-125 group-hover:text-highlight block"
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            />
          </svg>
        </a>
      ))}
    </div>
  </div>
);

const Page: FC = () => (
  <main>
    <div className="px-7 py-10">
      <p className="text-2xl font-medium">Gears</p>
      <p className="text-subtle py-3">
        Productivity tools that keep my workflow seamless and efficient.
      </p>
    </div>
    <p className="px-7 d-border-t py-3 d-border-b font-medium flex items-center gap-2">
      Devices
    </p>
    <div>
      <div className="px-14 my-3 -mx-7">
        {gears.map(({ iconsName, title }) => (
          <div className="flex gap-6 items-center py-1.5" key={title}>
            <Icon
              name={iconsName}
              className="d-border w-9 h-9 p-2 rounded-md"
              gradientName="gradient"
            />
            <p className="text-subtle text-sm text-pretty">{title}</p>
          </div>
        ))}
      </div>
      <div className="d-border-b">
        <Section title="Coding Tools" items={codingApps} icon="coding" />
        <Section title="Web Extensions" items={browserExtensions} icon="box" />
        <Section title="Software" items={softwares} icon="laptop" />
      </div>
    </div>
  </main>
);

export default Page;
