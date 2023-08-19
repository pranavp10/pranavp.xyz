import { Icon } from "../utils/icon";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center max-w-3xl m-auto py-10 sm:flex-row-reverse sm:justify-between">
      <div className="flex items-center space-x-4">
        <a href="https://twitter.com/ThatsPranav" target="_blank">
          <Icon
            name="twitter"
            className="w-5 h-5 hover:opacity-100 opacity-70"
            gradientName="gradient"
          />
        </a>
        <a href="/https://github.com/pranavp10" target="_blank">
          <Icon
            name="github"
            className="w-5 h-5  hover:opacity-100 opacity-70"
            gradientName="gradient"
          />
        </a>
        <a href="/https://github.com/pranavp10" target="_blank">
          <Icon
            name="linkedin"
            className="w-5 h-5  hover:opacity-100 opacity-70"
            gradientName="gradient"
          />
        </a>
      </div>
      <p className="mt-6 text-sm dark:text-slate-400 text-slate-500 sm:mt-0 flex justify-center  items-center">
        Made with
        <span className="inline-block px-1">
          <Icon name="heart" className="w-3.5 h-3.5" gradientName="gradient" />
        </span>
        in{` `}
        <span className="animate-move-bg bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-[length:400%] bg-clip-text text-transparent font-bold ml-1">
          India
        </span>
      </p>
    </footer>
  );
};
