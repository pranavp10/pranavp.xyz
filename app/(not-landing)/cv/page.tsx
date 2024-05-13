import { CVExperienceCard } from "@/components/card/CVExperienceCard";
import Icon from "@/components/icon/icon";
import { CV_DATA } from "@/data/cv";
import { Metadata } from "next";
import Link from "next/link";
const { name, about, contact, summary, work, skills, education } = CV_DATA;
import { projects } from "@/data/projectData";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "/cv",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "CV | Pranav Patel",
  description: about,
  keywords: [...skills],
  robots: "index, follow",
  openGraph: {
    title: "CV | Pranav Patel",
    description: about,
    url: `${process.env.NEXT_PUBLIC_URL}/cv`,
    type: "website",
    siteName: " CV | Pranav P",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ThatsPranav",
    creator: "@ThatsPranav",
  },
};

const Page = () => {
  return (
    <main className="max-w-2xl w-full m-auto pb-20">
      <div className="flex mt-16 gap-5 items-center">
        <header>
          <h1 className="font-semibold text-2xl">{name}</h1>
          <p className="text-zinc-500 dark:text-dark-white-300 mt-2 tracking-wider">
            {summary}
          </p>
        </header>
      </div>
      <div>
        <h2 className="mt-8 mb-5 text-lg">Contact</h2>
        <div className="grid grid-cols-4 gap-y-4">
          {contact.social.map(({ url, name, displayName }) => (
            <>
              <p className="text-zinc-500 dark:text-dark-white-300" key={url}>
                {name}
              </p>
              <a
                target="_blank"
                rel="rel"
                href={url}
                key={url}
                className="col-span-3 flex items-center gap-1 hover:text-highlight group"
              >
                {displayName}
                <Icon
                  name="social-link"
                  className="w-1.5 h-1.5 group-hover:scale-125"
                />
              </a>
            </>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="mb-5 text-lg">Work Experience</h3>
        <div className="mt-3 grid gap-5">
          {work.map((data) => (
            <CVExperienceCard
              link={data.link}
              title={data.title}
              descriptions={data.descriptions}
              key={data.company}
              location={data.location}
              company={data.company}
              start={data.start}
              end={data.end}
            />
          ))}
        </div>
        <div className="mt-8">
          <h3 className="mb-5 text-lg">Projects</h3>
          <div className="space-y-10">
            {projects.map((project) => (
              <div key={project.title} className="grid grid-cols-4 gap-y-4">
                <p className="text-zinc-500 dark:text-dark-white-300">2024</p>
                <div className="col-span-3 space-y-2 transition ease-in-out duration-200  cursor-pointer p-4 border dark:border-dark-white-50 rounded-xl dark:hover:border-dark-white-100 flex flex-col hover:border-highlight group relative">
                  <a
                    target="_blank"
                    href={project.link}
                    className="group-hover:text-highlight group flex gap-1 absolute inset-0"
                  />
                  <Image
                    src={project.imageUrl}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-lg"
                    alt="logo of project"
                  />
                  <div>
                    <a
                      target="_blank"
                      href={project.link}
                      className="group-hover:text-highlight group flex gap-1"
                    >
                      <p>{project.title}</p>
                      <Icon
                        name="social-link"
                        className="w-2 h-2 group-hover:scale-125 mt-1.5"
                      />
                    </a>
                    <p className="text-zinc-500 dark:text-dark-white-300 tracking-wider text-sm text-pretty mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="mb-5 text-lg">Skills</h3>
          <div className="grid grid-cols-4 gap-y-4">
            <p className="text-zinc-500 dark:text-dark-white-300">Tech Stack</p>
            <div className="col-span-3">
              <div className="flex gap-2 flex-wrap">
                {skills.map((skill) => (
                  <p
                    key={skill}
                    className="dark:bg-dark-white-100 py-0.5 text-sm px-3 rounded-full dark:border-dark-white-50 border font-medium bg-zinc-50"
                  >
                    {skill}
                  </p>
                ))}

                <Link
                  href="/skills"
                  className="transition ease-in-out duration-300 dark:bg-dark-white-100 hover:bg-highlight-100 hover:border-highlight hover:text-highlight font-medium py-0.5 text-sm px-3 rounded-full dark:border-dark-white-50 border flex gap-1 group bg-zinc-50"
                >
                  See all
                  <Icon
                    name="social-link"
                    className="w-1.5 h-1.5 group-hover:scale-125 mt-1.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="mb-5 text-lg">Education</h3>
          {education.map((ed) => (
            <div key={ed.end} className="grid grid-cols-4 gap-y-4 ">
              <p className="text-zinc-500 dark:text-dark-white-300">
                {ed.start} - {ed.end}
              </p>
              <div className="col-span-3">
                <p>{ed.degree}</p>
                <p className="text-zinc-500 dark:text-dark-white-300 tracking-wider mt-1.5 text-pretty">
                  {ed.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Page;
