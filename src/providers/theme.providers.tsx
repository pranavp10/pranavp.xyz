"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <NextThemeProvider attribute="class">{children}</NextThemeProvider>
);
