/* eslint-disable @next/next/no-img-element */
import Icon from "@/components/icon/icon";
import IconTitleCard from "../gears/components/iconsTitleCars";
import { journeyData } from "@/data/journeyData";

// todo add images, and links to the UI
const Page = () => {
  return (
    <main className="max-w-2xl w-full m-auto ">
      <header className="mt-16">
        <h1 className="text-xl">Journey</h1>
        <p className="mt-6 text-zinc-500 dark:text-dark-white-300 text-pretty font-mono text-sm">
          My path to becoming a software engineer. Experiences and Learnings
        </p>
        <div className="pt-14 flex flex-col gap-6 relative">
          {journeyData.map((data, index) => (
            <div key={data.year} className="relative">
              {journeyData.length - 1 != index && (
                <div className="sm:border do absolute top-0 bottom-0 mt-14 sm:ml-[105px] border-dashed dark:border-dark-white-100" />
              )}
              <div className="sm:grid grid-cols-8 gap-12 items-center">
                <p
                  className={`font-medium ${
                    data?.sameYear ? "hidden sm:block sm:invisible" : ""
                  }`}
                >
                  {data.year}
                </p>
                <div className="hidden sm:block sm:col-span-6">
                  <IconTitleCard
                    icon={<Icon name="plus" className={iconClassName} />}
                    title={data.title}
                  />
                </div>
              </div>
              <div className="sm:ml-36">
                <p className="text-zinc-500 dark:text-dark-white-300 font-mono text-[13px] tracking-wider text-pretty">
                  {data.description}
                </p>
                {data?.imageURl && (
                  <div className="relative w-full">
                    <img
                      src={data?.imageURl}
                      width={584}
                      height={585}
                      alt="image of website"
                      className="mt-4 rounded-xl w-full sm:h-96 object-cover"
                    />
                    <p className="absolute right-2 bottom-1 bg-primary-black/20 text-xs px-2 py-0.5 rounded-md">
                      {data.url}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </header>
    </main>
  );
};

const iconClassName =
  "border bg-zinc-100 dark:border-dark-white-50 w-8 h-8 p-2 dark:bg-dark-white-50 rounded-full text-primary-gray-500";

export default Page;
