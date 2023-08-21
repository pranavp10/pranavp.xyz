"use client";

import Highlight, { Language, Prism } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/nightOwlLight";
import Window from "./core.window";

type CodeProps = {
  code: string;
  title: string;
  language: Language;
};
export const Code = ({ code, title, language }: CodeProps) => (
  <Window
    copyClipBoard={() => {
      navigator.clipboard.writeText(code);
    }}
    title={title}
    height="384px"
  >
    <Highlight
      Prism={Prism}
      theme={{ ...dracula }}
      code={code}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre>
          {tokens.map((line, i) => (
            <div
              key={`${i} ${i}`}
              {...getLineProps({
                line,
                key: i,
                className: "flex item-center",
              })}
            >
              <p className="pl-3 pr-5 text-zinc-400 dark:text-zinc-600">
                {i + 1}
              </p>
              {line.map((token, key) => (
                <span
                  key={`${key} ${i} ${i}`}
                  {...getTokenProps({ token, key })}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </Window>
);
