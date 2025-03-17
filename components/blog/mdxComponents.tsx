import { MDXComponents } from "mdx/types";
import { Code } from "bright";
import { themeData } from "@/data/themeData";
import { titleBar } from "@/components/code/tabContainer";
import Info from "./Info";
import Tag from "./tag";

export const mdxComponents: MDXComponents = {
  pre: (props) => (
    <Code
      {...props}
      extensions={[titleBar]}
      theme={{ dark: themeData, light: "github-light" }}
      className="border dark:border-dark-white-50 rounded-xl text-sm font-medium leading-[1.8] code"
    />
  ),
  Info,
  Tag,
};
