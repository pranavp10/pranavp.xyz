import { BlogCard } from "@/components/card/blogCard";
import { blogData } from "@/data/blogDate";
import { BlogType } from "@/types";

const Page = async () => {
  return (
    <main className="max-w-2xl w-full m-auto ">
      <header className="mt-16">
        <h1 className="text-xl">Blog</h1>
        <p className="mt-6 text-primary-white-300 text-pretty font-mono text-sm">
          I write all my codding
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {blogData.map((blogDetails: BlogType) => (
            <BlogCard blogDetails={blogDetails} key={blogDetails?.slug} />
          ))}
        </div>
      </header>
    </main>
  );
};

export default Page;
