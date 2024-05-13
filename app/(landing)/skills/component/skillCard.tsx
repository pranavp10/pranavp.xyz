import Icon from "@/components/icon/icon";
import Image from "next/image";
import { FC } from "react";

const SkillCard: FC<{
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
      className="group p-3 border dark:border-dark-white-50 rounded-xl w-full relative transition duration-300 ease-in-out flex items-center gap-3 justify-between hover:border-highlight"
    >
      <div className=" flex items-center gap-3">
        <div className="space-x-4 h-12 w-12 bg-zinc-100 dark:bg-dark-white-50 rounded-md flex justify-center items-center flex-shrink-0">
          {path ? (
            <Image
              src={`/${path}`}
              width={30}
              height={30}
              alt={name}
              className="w-auto h-auto rounded-sm object-fill"
            />
          ) : (
            <div className="w-10 h-10 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:scale-105"
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
        </div>
        <div>
          <div className="flex items-center gap-1">
            <p className="text-sm text-pretty group-hover:text-highlight">
              {name}
            </p>
            <svg
              width="12"
              className="w-2 h-2 group-hover:scale-125 group-hover:text-highlight block"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <p className="text-xs text-pretty text-zinc-500 dark:text-dark-white-300">
            {website ? linkExtractor(website) : githubExtractor(githubLink)}
          </p>
        </div>
      </div>
    </a>
  );
};

export default SkillCard;

const linkExtractor = (link: string) => {
  const splitLink = link.split("/");
  return splitLink[2];
};

const githubExtractor = (link: string) => {
  const splitLink = link.split("/");
  return `github.com/${splitLink[3]}/${splitLink[4]}`;
};
