"use client";
import Highlight, { Language, Prism } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import Window from "./window";

const Code = ({
  code,
  language,
  title,
}: {
  title: string;
  code: string;
  language: Language;
}) => {
  return (
    <Window height={"487px"} textToCopy={code} title={title}>
      <Highlight Prism={Prism} theme={theme} code={code} language={language}>
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
                <p className="pl-3 pr-5 text-primary-white-300 font-mono text-sm">
                  {i + 1}
                </p>
                {line.map((token, key) => (
                  <span
                    key={`${key} ${i} ${i}`}
                    {...getTokenProps({
                      token,
                      key,
                      className: "text-primary-white-300 font-mono text-sm",
                    })}
                  />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Window>
  );
};

export default Code;
