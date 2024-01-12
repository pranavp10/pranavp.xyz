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


export interface BlogType {
  title: string,
  slug: string
  date: string
  body?: string | null
  tags: string[]
  description: string
  imageName: string
}
