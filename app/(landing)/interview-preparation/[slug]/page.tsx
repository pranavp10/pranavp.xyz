import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PostBody } from "@/components/blog/PostBody";
import {
  getInterviewPreparationBlogs,
  getInterviewPreparationDetails,
} from "@/utils/getInterviewPreparationBlogs";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  try {
    const posts = await getInterviewPreparationBlogs();

    const post = posts.find((post) => post?.slug === slug);
    if (post) {
      const metadata: Metadata = {
        alternates: {
          canonical: `/interview-preparation/${slug}`,
          languages: {
            "en-US": "/en-US",
          },
        },
        title: post.title,
        description: post.description,
        keywords: ["Blog", "interview-preparation", ...post.tags],
        robots: "index, follow",
        openGraph: {
          title: post.title,
          description: post.description,
          url: `${process.env.NEXT_PUBLIC_URL}/interview-preparation/${slug}`,
          type: "website",
          siteName: "Interview Preparation | Pranav",
          images: [
            { url: `${process.env.NEXT_PUBLIC_URL}/${post.imageName}.png` },
          ],
        },
        twitter: {
          card: "summary_large_image",
          site: "@ThatsPranav",
          creator: "@ThatsPranav",
        },
      };
      return metadata;
    } else {
      return {
        title: "Not found",
        description: "The page you are looking  for does not exits.",
      };
    }
  } catch (e) {
    return {
      title: "Not found",
      description: "The page you are looking  for does not exits.",
    };
  }
}

export async function generateStaticParams() {
  const posts = await getInterviewPreparationBlogs();

  return posts.filter((post) => {
    if (post)
      return {
        slug: post.slug,
      };
  });
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const post = await getInterviewPreparationDetails(params.slug);
  if (!post) return notFound();
  return (
    <main className="max-w-2xl w-full m-auto">
      <header className="mt-16">
        <div className="flex justify-between items-center w-full">
          <ul className="flex items-center gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <li key={tag}>
                <p className="bg-zinc-100 dark:text-dark-white-300 dark:bg-primary-black-link-hover text-pretty text-xs font-mono px-3 py-0.5 rounded-full border dark:border-dark-white-50">
                  {tag}
                </p>
              </li>
            ))}
          </ul>
          <time className="text-dark-white-300 text-pretty text-xs font-mono">
            {post.date}
          </time>
        </div>
        <Image
          src={`/blog/${post.imageName}.png`}
          width={700}
          height={450}
          className="rounded-2xl my-4 border dark:border-dark-white-50"
          alt="image of blg"
        />
      </header>
      <h1 className="text-4xl my-4 font-semibold">{post.title}</h1>
      <article className="blog">
        <PostBody>{post?.body || ""}</PostBody>
      </article>
      <div className="pt-4">
        <Link
          href="/blog"
          className="text-zinc-500 dark:text-dark-white-300 dark:bg-primary-black-link-hover text-pretty text-xs font-mono px-4 py-1 rounded-full border dark:border-dark-white-50 hover:text-highlight hover:border-highlight transition duration-300 ease-in-out"
        >
          &larr; All Posts
        </Link>
      </div>
    </main>
  );
};

export default Page;
