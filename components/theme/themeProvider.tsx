"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { usePathname } from "next/navigation";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const pathName = usePathname();
  const isCVPath = pathName.includes("/cv");

  return (
    <NextThemesProvider {...props} forcedTheme={isCVPath ? "light" : undefined}>
      {children}
    </NextThemesProvider>
  );
}
