import { ExperienceCard } from "@/components/card/experienceCard";
import Icon from "@/components/icon/icon";
import { RESUME_DATA } from "@/data/resumeData";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const { name, about, avatarUrl, contact, summary, work, skills, education } =
    RESUME_DATA;
  return (
    <main className="max-w-2xl w-full m-auto ">
      <div className="flex mt-16 gap-5 items-center">
        <header>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="mt-2.5 text-primary-white-300 text-pretty font-mono text-sm">
            {about}
          </p>
          <div className="flex gap-1.5 mt-3">
            {contact.social.map(({ icon, url }) => (
              <a
                target="_blank"
                rel="rel"
                href={url}
                key={url}
                className="text-primary-white-300 border-primary-white-100 rounded-md hover:bg-primary-white-100 border p-1.5 hover:text-primary-white"
              >
                {icon}
              </a>
            ))}
          </div>
        </header>
        <Image src={avatarUrl} width={212} height={122} alt="logo of user" />
      </div>
      <h2 className="text-xl mt-8 font-bold">About</h2>
      <p className="text-primary-white-300 text-pretty font-mono text-sm mt-3">
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
                  <p className="text-primary-white-300 text-sm">
                    {ed.start} - {ed.end}
                  </p>
                </div>
                <p className="text-primary-white-300 tracking-wider font-mono text-sm mt-1.5 text-pretty">
                  {ed.degree}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold">Skills</h3>
          <div className="mt-3 flex gap-1">
            {skills.map((skill) => (
              <p
                key={skill}
                className="bg-primary-white-100 font-normal py-0.5 text-xs px-2 rounded-full border-primary-white-50 border"
              >
                {skill}
              </p>
            ))}

            <Link
              href="/skills"
              className="transition ease-in-out duration-300 bg-primary-white-100 hover:bg-highlight-100 hover:border-highlight hover:text-highlight font-normal py-0.5 text-xs px-2 rounded-full border-primary-white-50 border flex gap-1 items-center group"
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
