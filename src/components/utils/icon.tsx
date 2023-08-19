import { SVGProps } from "react";

interface BorderGradient {
  start?: string;
  middle?: string;
  end?: string;
}

type ISvgPropType = {
  gradientName?: string;
  name: string;
} & SVGProps<SVGSVGElement>;

export const Icon = ({ name, gradientName, ...props }: ISvgPropType) => {
  return (
    <svg
      {...props}
      fill={gradientName ? `url(#${gradientName})` : "currentColor"}
    >
      <use href={`#${name}`} />
    </svg>
  );
};
