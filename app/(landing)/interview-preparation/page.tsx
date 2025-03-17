import { BlogCard } from "@/components/card/blogCard";
import { BlogType } from "@/types";
import { getInterviewPreparationBlogs } from "@/utils/getInterviewPreparationBlogs";

const Page = async () => {
  const blogs = await getInterviewPreparationBlogs();

  return (
    <main className="max-w-2xl w-full m-auto ">
      <header className="mt-16">
        <h1 className="text-xl font-medium">Interview Preparation</h1>
        <p className="mt-6 text-zinc-500 dark:text-dark-white-300 text-pretty font-mono text-sm">
          As a Frontend Developer, you&apos;ll find a lot of material available
          for interview preparation, but it&apos;s often not organized
          systematically. To address this, I created a structured guide for
          myself to review everything before going into an interview.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {blogs.map((blogDetails: BlogType | null) =>
            blogDetails ? (
              <BlogCard
                basePath="/interview-preparation"
                blogDetails={blogDetails}
                key={blogDetails?.slug}
              />
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
