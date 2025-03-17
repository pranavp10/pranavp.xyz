import { BrightProps } from "bright";
import { themeIcons } from "seti-icons";
import CopyCode from "./copyCode";
import { JSX } from "react";

export const titleBar = {
  name: "titleBar",
  TitleBarContent: TitleBarContent,
};

function TitleBarContent(props: BrightProps): JSX.Element {
  const { title, code } = props;
  const { svg, color } = getDarkIcon(title || "");
  const __html = svg.replace(/svg/, `svg fill='${color}'`);
  return (
    <div
      className="flex justify-between items-center px-4 py-2 w-full bg-gray-50! d-border-b"
      id="title-bar"
    >
      <div className="flex gap-0.5 items-center">
        <span
          dangerouslySetInnerHTML={{ __html }}
          className="w-6 h-6 flex justify-center items-center"
        />
        <p className="text-sm font-normal text-black!">{title}</p>
      </div>
      <CopyCode textToCopy={code} />
    </div>
  );
}

const getDarkIcon = themeIcons({
  blue: "#00aaff",
  grey: "#88a2a6",
  "grey-light": "#a4c0c7",
  green: "#aaff00",
  orange: "#ffae33",
  pink: "#ff66a1",
  purple: "#bf8eff",
  red: "#ff3d44",
  white: "#ffffff",
  yellow: "#ffff66",
  ignore: "#556677",
});
