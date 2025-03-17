import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getBlogDetails, getBlogs } from "./getBlogs";
import { PostBody } from "./components/PostBody";
import { Icon } from "@/components/Icon";
type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  try {
    const a = await params;
    const { slug } = await params;

    const posts = await getBlogs();

    const post = posts.find((post) => {
      return post?.slug === slug;
    });
    if (post) {
      const metadata: Metadata = {
        alternates: {
          canonical: `/blog/${slug}`,
          languages: {
            "en-US": "/en-US",
          },
        },
        title: post.title,
        description: post.description,
        keywords: ["Blog", ...post.tags],
        robots: "index, follow",
        openGraph: {
          title: post.title,
          description: post.description,
          url: `${process.env.NEXT_PUBLIC_URL}/blog/${slug}`,
          type: "website",
          siteName: "Blog | Pranav",
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
  const posts = await getBlogs();

  return posts.filter((post) => {
    if (post)
      return {
        slug: post.slug,
      };
  });
}

const Page = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const post = await getBlogDetails(slug);
  if (!post) return notFound();
  return (
    <main>
      <div className="px-7">
        <Image
          src={`/blog/${post.imageName}.png`}
          width={300}
          height={150}
          className="rounded-2xl my-4 mx-auto"
          alt="image of blg"
        />
      </div>
      <div className="px-7 pb-10 d-border-b">
        <p className="text-2xl font-medium text-center">{post.title}</p>
        <p className="text-subtle pt-3 text-center text-balance">
          {post.description}
        </p>
      </div>
      <div className="flex justify-between items-center py-3 px-7 d-border-b">
        <p className="text-subtle text-sm">3 min</p>
        <time className="text-subtle text-sm">{post.date}</time>
      </div>
      <article className="blog py-3 px-7">
        <PostBody>{post?.body || ""}</PostBody>
      </article>
      <div className="px-7 py-3 d-border-b flex justify-between">
        <Link href="/blog" className="text-subtle flex items-center gap-1">
          <Icon name="social-link" className="w-2 h-2  -rotate-[135deg]" />
          <p className="text-sm">Back to Blog</p>
        </Link>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/blog/tags/${tag}`}>
              <p className="text-subtle text-sm d-border rounded-md px-2 py-0.5">
                {tag}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
