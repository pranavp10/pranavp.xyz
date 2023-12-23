import { Container } from "@/components/core/core.container";
import { IconTitleCard } from "@/components/core/core.iconTitleCard";
import { Section } from "@/components/core/core.section";
import { Icon } from "@/components/utils/utils.icon";
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
} from "@/data/data.reactLib";
import Image from "next/image";
import { FC } from "react";

const ReactLib = () => {
  return (
    <Container
      title="Skills"
      description="Technology I have learnt form my years of experience"
    >
      <div className="pt-14">
        {ListOfLibraries.map((item) => (
          <Section title={item.title} key={item.title}>
            <IconTitleCard>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {item.list.map((data) => (
                  <LibraryCard {...data} key={data.name} />
                ))}
              </div>
            </IconTitleCard>
          </Section>
        ))}
      </div>
    </Container>
  );
};

export default ReactLib;

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

const LibraryCard: FC<{
  githubLink: string;
  name: string;
  path: string;
  tried: boolean;
  website?: string;
}> = ({ githubLink, name, path, website }) => {
  return (
    <a
      href={website || githubLink}
      target="_blank"
      className="group relative cursor-pointer"
    >
      <div className="p-2 border-4 border-zinc-100 dark:border-zinc-900 rounded-2xl w-full relative h-16 flex items-center justify-between dark:hover:bg-zinc-900 hover:bg-zinc-100">
        <div className="flex items-center space-x-4">
          {path ? (
            <Image src={`/${path}`} width={40} height={40} alt={name} />
          ) : (
            <div className="w-10 h-10 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          <p className="font-medium">{name}</p>
        </div>
        <Icon
          name="external-link"
          className="w-5 h-5 group-hover:block hidden"
        />
      </div>
    </a>
  );
};
