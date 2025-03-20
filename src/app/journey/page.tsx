import { Icon } from "@/components/Icon";
import { HowToDoIt, Quote, quotes } from "@/components/Quote";
import { journeyData } from "@/app/journey/journeyData";
import { tw } from "@/utils/tw";
import Image from "next/image";
import { FC, ReactNode } from "react";

const Page = () => {
  return (
    <div>
      <div className="px-7 py-10">
        <p className="text-2xl font-medium">Journey</p>
        <p className="text-subtle py-3">
          All the things I've learned and experienced in my life so far.
        </p>
      </div>
      <div className="d-border-t  gap-2 -mx-7 justify-between sticky top-0">
        {journeyData.map(({ events, year }, index) => (
          <div
            key={year}
            className={tw(
              "flex  py-7 px-7",
              !(index + 1 === journeyData.length) && "d-border-b"
            )}
          >
            <div className="w-40 flex justify-center shrink-0">
              <p className="text-sm font-medium">{year}</p>
            </div>
            <div>
              {events.map((data, i) => (
                <div
                  key={data.title}
                  className={tw(
                    "pr-10",
                    events.length === i + 1 ? "pb-4" : "pb-9"
                  )}
                >
                  <p className="font-medium">{data.title}</p>
                  <p className=" text-subtle text-sm">{data.description}</p>
                  {data?.imageURl && (
                    <div className="relative group rounded-md overflow-hidden w-fit mt-4">
                      <a
                        href={data?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 left-0 w-full h-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-opacity transition-transform duration-200"
                      >
                        <div className="absolute top-0 right-0 p-2 bg-white/40 inset-0 rounded-md flex items-center justify-center">
                          <Icon
                            name="external-link"
                            className="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
                          />
                        </div>
                      </a>
                      <Image
                        src={data?.imageURl}
                        width={100}
                        height={50}
                        alt="image of website"
                        className=""
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="px-7 d-border-b">
          <HowToDoIt
            lesson={quotes.project.lesson}
            steps={quotes.project.steps}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

const IconTitleCard: FC<{
  title: string;
  icon: ReactNode;
  experience?: string;
}> = ({ icon, title }) => (
  <div className="flex gap-6 items-center">
    {icon}
    <p className="font-mono text-sm text-pretty">{title}</p>
  </div>
);
