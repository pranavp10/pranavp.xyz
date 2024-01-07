import { SVGProps } from "react";

type ISvgPropType = {
  gradientName?: string;
  name: string;
} & SVGProps<SVGSVGElement>;

const Icon = ({ name, gradientName, ...props }: ISvgPropType) => (
  <svg
    {...props}
    fill={gradientName ? `url(#${gradientName})` : "currentColor"}
  >
    <use href={`#${name}`} />
  </svg>
);

export default Icon;
