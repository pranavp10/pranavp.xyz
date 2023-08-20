import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { IconsSprite } from "@/components/utils/icons-sprite";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Hey, I’m Pranav Patel`,
  description: "I’m a software engineer love to build things for the web.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <Providers>
          {children}
          <IconsSprite />
        </Providers>
      </body>
    </html>
  );
}
