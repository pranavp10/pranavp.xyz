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

const Page = () => {
  return (
    <main className="max-w-2xl w-full m-auto mb-36">
      <header className="mt-16">
        <h1 className="text-xl">Skills & technology </h1>
        <p className="mt-3 text-primary-white-300 text-pretty font-mono text-sm">
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
              <h2 className="ml-2" key={item.title}>
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
