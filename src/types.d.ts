import { SVGProps } from 'react';

interface BorderGradient {
  start?: string;
  middle?: string;
  end?: string;
  name?: string;
}
export type ISvgPropType = {
  gradient?: BorderGradient | boolean;
} & SVGProps<SVGSVGElement>;
