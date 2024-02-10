import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "About Pranav Patel",
  description:
    "Hey, I'm Pranav, a passionate software engineer with a love for gadgets and design.",
  keywords: ["Laptop", "JavaScript", "React", "UI/UX", "Portfolio", "Gears"],
  robots: "index, follow",
  openGraph: {
    title: "About Pranav Patel",
    description:
      "Hey, I'm Pranav, a passionate software engineer with a love for gadgets and design.",
    url: `${process.env.NEXT_PUBLIC_URL}/gears`,
    type: "website",
    siteName: "About | Pranav P",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ThatsPranav",
    creator: "@ThatsPranav",
  },
};

const Page = () => {
  return (
    <main className="max-w-2xl w-full m-auto ">
      <header className="mt-16 flex flex-col text-pretty font-mono gap-6 text-zinc-500 dark:text-dark-white-300">
        <h1>
          Hey, I&apos;m Pranav, a passionate software engineer with a love for
          gadgets and design. I vividly recall the excitement when smartphones
          were taking off – that&apos;s when I got my first one at 17. Similar
          to the rapid evolution of those devices, we&apos;re now witnessing
          exciting advancements in web3 and AI.
        </h1>

        <h2>
          As a curious kid, I always asked &apos;why.&apos; That curiosity
          steered me into the world of software. I find joy in writing blogs,
          crafting cool websites, and building SAAS products to grasp what users
          think.
        </h2>

        <h3>
          In my downtime, you&apos;ll catch me on the volleyball court,
          immersing myself in spiritual content, and exploring the vast
          landscapes of video games. Life, to me, is an adventure, and I&apos;m
          all in! 🌟🚀
        </h3>

        <h4>
          Lastly, let&apos;s talk about the power of thought. Life&apos;s
          difficulty often reflects our mindset. Stay positive, tackle
          challenges, but never let it turn you cruel. Be humble, open-minded,
          and focus on finding solutions rather than adding more problems.
          Life&apos;s journey is about growth and kindness. 🌈✨
        </h4>
      </header>
    </main>
  );
};

export default Page;
