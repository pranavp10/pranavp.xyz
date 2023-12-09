import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IconsSprite } from "@/components/utils/utils.iconsSprite";
import { ReactNode } from "react";
import Header from "@/components/core/core.header";
import { Footer } from "@/components/core/core.footer";
import { ThemeProvider } from "@/providers/theme.providers";
import { Analytics } from "@vercel/analytics/react";
import { SonnerProvider } from "@/providers/sonner.provider";

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
        <ThemeProvider>
          <SonnerProvider />
          <Header />
          {children}
          <Footer />
          <IconsSprite />
          <Analytics />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
