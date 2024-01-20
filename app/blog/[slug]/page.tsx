import { getBlogDetails, getBlogs } from "@/utils/getBlogs";
import { notFound } from "next/navigation";
import { PostBody } from "./components/PostBody";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getBlogs();

  return posts.filter((post) => {
    if (post)
      return {
        slug: post.slug,
      };
  });
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const post = await getBlogDetails(params.slug);
  if (!post) return notFound();
  return (
    <main className="max-w-2xl w-full m-auto">
      <header className="mt-16">
        <div className="flex justify-between items-center w-full">
          <ul className="flex items-center gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <li key={tag}>
                <p className="text-primary-white-300 bg-primary-black-link-hover text-pretty text-xs font-mono px-1.5 py-0.5 rounded-full border border-primary-white-50">
                  {tag}
                </p>
              </li>
            ))}
          </ul>
          <div className="">
            <time className="text-primary-white-300 text-pretty text-xs font-mono">
              {post.date}
            </time>
          </div>
        </div>
        <Image
          src={`/blog/${post.imageName}.png`}
          width={700}
          height={450}
          className="rounded-2xl my-4"
          alt="image of blg"
        />
      </header>
      <h1 className="text-xl my-4 font-medium">{post.title}</h1>
      <article className="blog">
        <PostBody>{post?.body || ""}</PostBody>
      </article>
      <div className="pt-4">
        <Link
          href="/blog"
          className="text-primary-white-300 bg-primary-black-link-hover text-pretty text-xs font-mono px-4 py-1 rounded-full border border-primary-white-50 hover:text-highlight hover:border-highlight transition duration-300 ease-in-out"
        >
          &larr; All Posts
        </Link>
      </div>
    </main>
  );
};

export default Page;
