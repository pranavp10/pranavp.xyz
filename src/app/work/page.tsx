import React from "react";
import { RESUME_DATA } from "./workData";
import { Icon } from "@/components/Icon";

const Page: React.FC = () => {
  return (
    <main className="pt-10">
      <p className="text-2xl font-medium px-7">{name}</p>
      <p className="text-subtle py-3 px-7 d-border-b">{summary}</p>
      <Section title="Skills">
        {skills.map(({ category, items }) => (
          <SkillCategory key={category} category={category} items={items} />
        ))}
      </Section>
      <Section title="Professional Experience">
        {work.map((data) => (
          <ExperienceCard key={data.company} {...data} />
        ))}
      </Section>
      <Section title="Education">
        {education.map((ed) => (
          <EducationCard key={ed.end} {...ed} />
        ))}
      </Section>
    </main>
  );
};

export default Page;

const { name, summary, work, education } = RESUME_DATA;

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "GO", "Python"],
  },
  {
    category: "Front-End",
    items: ["React", "Next.js"],
  },
  {
    category: "Back-End",
    items: ["Node.js", "Fastify", "Express.js"],
  },
  {
    category: "Databases",
    items: ["PostgresSQL", "MongoDB", "Redis"],
  },
  { category: "DevOps", items: ["Docker", "Kubernetes(k8s)", "AWS", "CI/CD"] },
  {
    category: "Tools",
    items: ["Git", "Figma", "REST APIs", "GraphQL", "NATS"],
  },
];

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="d-border-b">
    <p className="text-sm py-3 px-7 d-border-b font-medium">{title}</p>
    <div className="px-7 py-3 grid gap-3">{children}</div>
  </div>
);

const ExperienceCard: React.FC<{
  company: string;
  location: string;
  title: string;
  descriptions: string[];
  start: string;
  end: string;
  link: string;
}> = ({ company, location, title, descriptions, start, end, link }) => (
  <div className="py-3">
    <div className="flex justify-between items-center">
      <a
        href={link}
        target="_blank"
        className="font-semibold flex items-center gap-2"
      >
        {company} <Icon name="social-link" className="w-1.5 h-1.5" />
        <span className="font-normal py-[1px] text-xs ml-3 px-2 d-border md:block hidden">
          {location}
        </span>
      </a>
      <p className="text-subtle text-xs">
        {start} - {end}
      </p>
    </div>
    <p className="mt-1.2 text-sm font-medium">{title}</p>
    <ul className="text-subtle text-[15px] grid gap-2.5 mt-2">
      {descriptions.map((desc) => (
        <li key={desc}>{desc}</li>
      ))}
    </ul>
  </div>
);

const EducationCard: React.FC<{
  school: string;
  degree: string;
  start: string;
  end: string;
}> = ({ school, degree, start, end }) => (
  <div>
    <div className="flex justify-between items-center">
      <p className="font-semibold">{school}</p>
      <p className="text-subtle text-xs">
        {start} - {end}
      </p>
    </div>
    <p className="text-sm mt-1.5 text-subtle">{degree}</p>
  </div>
);

const SkillCategory: React.FC<{ category: string; items: string[] }> = ({
  category,
  items,
}) => (
  <div className="grid grid-cols-6 items-center">
    <p className="text-sm font-medium whitespace-nowrap">{category}</p>
    <ul className="flex gap-2 px-7 list-inside text-sm t-border-b items-center col-span-4">
      {items.map((skill) => (
        <li key={skill} className="whitespace-nowrap">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);
