import { BlogCard } from "@/components/card/blogCard";
import { BlogType } from "@/types";
import { getBlogs } from "@/utils/getBlogs";

const Page = async () => {
  const blogs = await getBlogs();

  return (
    <main className="max-w-2xl w-full m-auto ">
      <header className="mt-16">
        <h1 className="text-xl font-medium">Blog</h1>
        <p className="mt-6 text-zinc-500 dark:text-dark-white-300 text-pretty font-mono text-sm">
          I have a passion for blogging, primarily focusing on topics such as
          technology, success, and spirituality. However, my main emphasis is on
          technology, and my content consistently addresses the common
          challenges encountered in software engineering. I delve into subjects
          like overcoming failure and problem-solving strategies.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {blogs.map((blogDetails: BlogType | null) =>
            blogDetails ? (
              <BlogCard blogDetails={blogDetails} key={blogDetails?.slug} />
            ) : (
              <></>
            )
          )}
        </div>
      </header>
    </main>
  );
};

export default Page;
