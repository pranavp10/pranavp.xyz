import { MDXComponents } from "mdx/types";
import { Code } from "bright";
import { themeData } from "@/app/blog/[slug]/themeData";
import Info from "./Info";
import Tag from "./tag";
import { titleBar } from "./code/tabContainer";

export const mdxComponents: MDXComponents = {
  pre: (props) => (
    <div id="code-container" className="relative">
      <Code
        {...props}
        extensions={[titleBar]}
        theme={{ dark: themeData, light: themeData }}
        className="d-border  rounded-md text-sm font-medium leading-[1.8] code"
      />
    </div>
  ),
  Info,
  Tag,
};
