import { Icon } from "@/components/Icon";
import { HowToDoIt, Quote, quotes } from "@/components/Quote";
import { tw } from "@/utils/tw";
import Link from "next/link";
import type React from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const features = [
  {
    iconName: "user-square",
    name: "About",
    description: "Who am I? What do I do? Find out here.",
    href: "/about",
    className: "col-start-1 col-end-2 row-start-1 row-end-2",
  },
  {
    iconName: "rocket",
    name: "Projects",
    description:
      "Side projects that people actually use (surprising, right?). Check them out!",
    href: "/projects",
    className: "md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2",
  },
  {
    iconName: "book-closed",
    name: "Blog",
    description:
      "Tech tips, life lessons, and the occasional bug-induced meltdown—read at your own risk.",
    href: "/blog",
    className: "row-start-2 row-end-3 col-start-1 col-end-3",
  },
  {
    iconName: "gear",
    name: "Gears",
    description: "Cool gadgets, I probably spent too much on them.",
    href: "/gears",
    className: "col-start-1 col-end-2 row-start-3 row-end-4",
  },
  {
    iconName: "route",
    name: "Journey",
    description: "How I got here—plot twists, bad code.",
    href: "/journey",
    className: "col-start-2 col-end-3 row-start-3 row-end-4",
  },
  {
    iconName: "briefcase",
    name: "Work",
    description:
      "An overview of my experience as a Software Engineer—projects, skills, and the impact I’ve made.",
    href: "/work",
    cta: "Learn more",
    className: "col-start-3 col-end-3 row-start-2 row-end-4",
  },
];

export default function Home() {
  return (
    <div className="d-border-b">
      <div className="px-7 pt-4 pb-5">
        <p className="text-2xl font-medium">Pranav Patel</p>
        <p className="text-subtle">Software Design and Engineering</p>
      </div>
      <div>
        <div className="d-border-t border-gray-200  flex items-center gap-2 justify-between sticky top-0">
          <div className="px-7 py-5 space-y-3">
            <BentoGrid className="space-y-5 md:space-y-0 md:grid-rows-3">
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </div>
      </div>
      <HowToDoIt
        lesson={quotes.home.lesson}
        steps={quotes.home.steps}
        title="Life Lessons"
      />
      <Quote quote={quotes.home.quote} author={quotes.home.author} />
    </div>
  );
}

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  iconName: string;
  description: string;
  href: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={tw(
        "md:grid w-full auto-rows-[22rem] md:grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  iconName,
  description,
  href,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={tw(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl d-border",
      className
    )}
    {...props}
  >
    <Link href={href}>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 py-4 transition-all duration-300 group-hover:-translate-y-10">
        <Icon
          name={iconName}
          className="h-5 w-5 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
        />
        <h3 className="font-semibold leading-2">{name}</h3>
        <p className="text-xs text-subtle">{description}</p>
      </div>

      <div
        className={tw(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 px-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <div className="text-subtle text-sm flex items-center gap-2">
          Learn more
          <Icon name="social-link" className="h-2 w-2 rotate-45" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] " />
    </Link>
  </div>
);
