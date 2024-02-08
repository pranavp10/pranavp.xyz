import {
  DocumentationData,
  CssInJsData,
  FetchersData,
  FrameworkData,
  NotesData,
  ReactDataFetchingData,
  StateManagementData,
  UiLibraryData,
  UtilityData,
} from "@/data/skillData";
import SkillCard from "./component/skillCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/skills",
    languages: {
      "en-US": "/en-US",
    },
  },
  title:
    "Tech-Savvy Professional: A Journey of Expertise in Frameworks, Languages, and Methodologies | Pranav P",
  description:
    "Embark on a voyage through my professional evolution, where I've cultivated a wealth of technology expertise. Dive into the depths of my hands-on experience, as I hone skills in diverse frameworks, languages, and methodologies. This journey not only elevates my software development proficiency but also enriches problem-solving capabilities and widens my tech perspective. Join me in navigating the dynamic tech landscape, fueled by a commitment to continuous learning and adaptability",
  keywords: [
    "Technology",
    "JavaScript",
    "React",
    "UI/UX",
    "Portfolio",
    "Skills",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Tech-Savvy Professional: A Journey of Expertise in Frameworks, Languages, and Methodologies | Pranav P",
    description:
      "Embark on a voyage through my professional evolution, where I've cultivated a wealth of technology expertise. Dive into the depths of my hands-on experience, as I hone skills in diverse frameworks, languages, and methodologies. This journey not only elevates my software development proficiency but also enriches problem-solving capabilities and widens my tech perspective. Join me in navigating the dynamic tech landscape, fueled by a commitment to continuous learning and adaptability",
    url: `${process.env.PUBLIC_URL}/skills`,
    type: "website",
    siteName: " Skills | Pranav P",
  },
};

const Page = () => {
  return (
    <main className="max-w-2xl w-full m-auto ">
      <header className="mt-16">
        <h1 className="text-xl font-medium">Skills & technology</h1>
        <p className="mt-3 text-zinc-500 dark:text-dark-white-300 text-pretty font-mono text-sm">
          Throughout my professional journey, I&apos;ve gained extensive
          technology expertise, honing skills in frameworks, languages, and
          methodologies. This hands-on experience not only deepened my software
          development proficiency but also enhanced problem-solving and
          broadened my tech perspective. Continuous learning has shaped my
          adaptability in the dynamic tech landscape.
        </p>

        <div className="pt-14">
          {ListOfLibraries.map((item) => (
            <div key={item.title}>
              <h2 className="ml-2 font-medium" key={item.title}>
                {item.title}
              </h2>
              <div className="mt-2 flex flex-col gap-3">
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-6 mb-8">
                  {item.list.map((data) => (
                    <SkillCard {...data} key={data.name} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>
    </main>
  );
};

export default Page;

const ListOfLibraries = [
  { title: `CSS in JS`, list: CssInJsData },
  { title: `Document Each Component`, list: DocumentationData },
  { title: `Fetchers`, list: FetchersData },
  { title: `Framework`, list: FrameworkData },
  { title: `Note It down`, list: NotesData },
  { title: `Data Fetching Hooks`, list: ReactDataFetchingData },
  { title: `State Management`, list: StateManagementData },
  { title: `UI Library`, list: UiLibraryData },
  { title: `Utility`, list: UtilityData },
];
