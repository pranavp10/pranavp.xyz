import { BorderGradient } from "@/types";
import { FC } from "react";

export const GradientSvg: FC<BorderGradient> = ({
  end = `#090909`,
  middle = `#fafafaa3`,
  start = `#090909`,
  name = "gradient",
}) => (
  <defs>
    <radialGradient
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      id={name}
      gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
    >
      <stop stopColor={start}></stop>
      <stop stopColor={middle} offset=".527"></stop>
      <stop stopColor={end} offset="1"></stop>
    </radialGradient>
  </defs>
);
