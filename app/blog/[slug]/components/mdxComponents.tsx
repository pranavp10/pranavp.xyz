import { MDXComponents } from "mdx/types";
import { Code } from "bright";
import { themeData } from "@/data/themeData";
import { titleBar } from "@/components/code/tabContainer";

export const mdxComponents: MDXComponents = {
  pre: (props) => (
    <Code
      {...props}
      extensions={[titleBar]}
      theme={themeData}
      className="border border-primary-white-50 rounded-md text-sm font-medium leading-[1.8] code"
    />
  ),
};
