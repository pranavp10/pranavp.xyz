import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IconsSprite } from "../components/Icon";
import { Footer, Header } from "../components/Layout";

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Pranav Patel",
  description: "Software Design and Engineering",
  keywords: [
    "Software Engineering",
    "Full Stack",
    "Backend",
    "Frontend",
    "Mobile App",
    "Open Source Contributor",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Pranav Patel",
    description: "Software Design and Engineering",
    url: process.env.NEXT_PUBLIC_URL,
    type: "website",
    images: "/og-image.png",
    siteName: "Pranav P - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ThatsPranav",
    creator: "@ThatsPranav",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`antialiased`}>
        <div className="max-w-2xl mx-auto border-l border-r border-dashed border-d border-gray-200">
          <Header />
          {children}
          <Footer />
        </div>
        <IconsSprite />
      </body>
    </html>
  );
}
