import { ExperienceCard } from "@/components/card/experienceCard";
import Icon from "@/components/icon/icon";
import { RESUME_DATA } from "@/data/resumeData";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
const { name, about, avatarUrl, contact, summary, work, skills, education } =
  RESUME_DATA;

export const metadata: Metadata = {
  alternates: {
    canonical: "/work",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Resume | Pranav Patel",
  description: about,
  keywords: [...skills],
  robots: "index, follow",
  openGraph: {
    title: "Resume | Pranav Patel",
    description: about,
    url: `${process.env.NEXT_PUBLIC_URL}/work`,
    type: "website",
    siteName: " Resume | Pranav P",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ThatsPranav",
    creator: "@ThatsPranav",
  },
};

const Page = () => {
  return (
    <main className="max-w-2xl w-full m-auto ">
      <div className="flex mt-16 gap-5 items-center">
        <header>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="mt-2.5 text-zinc-500 dark:text-dark-white-300 text-pretty font-mono text-sm">
            {about}
          </p>
          <div className="flex gap-1.5 mt-3">
            {contact.social.map(({ icon, url }) => (
              <a
                target="_blank"
                rel="rel"
                href={url}
                key={url}
                className="text-zinc-500 dark:text-dark-white-300 dark:border-dark-white-100 rounded-md dark:hover:bg-dark-white-100 border p-1.5 dark:hover:text-dark-white-900 hover:bg-zinc-100/50 hover:text-black"
              >
                {icon}
              </a>
            ))}
          </div>
        </header>
        <Image src={avatarUrl} width={212} height={122} alt="logo of user" />
      </div>
      <h2 className="text-xl mt-8 font-bold">About</h2>
      <p className="text-zinc-500 dark:text-dark-white-300 text-pretty font-mono text-sm mt-3">
        {summary}
      </p>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Work Experience</h3>
        <div className="mt-3 grid gap-5">
          {work.map((data) => (
            <ExperienceCard
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
          <h3 className="text-xl font-bold">Education</h3>
          <div className="mt-3">
            {education.map((ed) => (
              <div key={ed.end}>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">{ed.school}</p>
                  <p className="text-zinc-500 dark:text-dark-white-300 text-sm">
                    {ed.start} - {ed.end}
                  </p>
                </div>
                <p className="text-zinc-500 dark:text-dark-white-300 tracking-wider font-mono text-sm mt-1.5 text-pretty">
                  {ed.degree}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold">Skills</h3>
          <div className="mt-3 flex gap-2 flex-wrap">
            {skills.map((skill) => (
              <p
                key={skill}
                className="dark:bg-dark-white-100 py-0.5 text-xs px-3 rounded-full dark:border-dark-white-50 border font-medium bg-zinc-50"
              >
                {skill}
              </p>
            ))}

            <Link
              href="/skills"
              className="transition ease-in-out duration-300 dark:bg-dark-white-100 hover:bg-highlight-100 hover:border-highlight hover:text-highlight font-medium py-0.5 text-xs px-3 rounded-full dark:border-dark-white-50 border flex gap-1 items-center group bg-zinc-50"
            >
              See all{" "}
              <Icon
                name="social-link"
                className="w-1.5 h-1.5 group-hover:scale-125"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
