import { SVGProps } from "react";

type ISvgPropType = {
  gradientName?: string;
  name: string;
} & SVGProps<SVGSVGElement>;

export const Icon = ({ name, gradientName, ...props }: ISvgPropType) => (
  <svg
    {...props}
    fill={gradientName ? `url(#${gradientName})` : "currentColor"}
  >
    <use href={`#${name}`} />
  </svg>
);
