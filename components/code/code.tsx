import { themeData } from "@/data/themeData";
import { titleBar } from "./tabContainer";
import { Code } from "bright";

export const CodeWindow = ({
  code,
  lang,
  title,
  showLineNumbers,
}: {
  code: string;
  lang: string;
  title: string;
  showLineNumbers?: boolean;
}) => {
  return (
    <Code
      extensions={[titleBar]}
      code={code}
      lang={lang}
      lineNumbers={showLineNumbers}
      theme={{ dark: themeData, light: "github-light" }}
      title={title}
      className="border dark:border-dark-white-50 rounded-md text-sm font-medium leading-[1.8] code !m-0"
    />
  );
};
