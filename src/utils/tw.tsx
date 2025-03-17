import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function tw(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
