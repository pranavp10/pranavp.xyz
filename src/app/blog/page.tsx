import Link from "next/link";
import { getBlogs } from "./[slug]/getBlogs";
import { tw } from "@/utils/tw";
import { HowToDoIt, quotes } from "@/components/Quote";
import { Icon } from "@/components/Icon";

const Page = async () => {
  const posts = await getBlogs();

  return (
    <div className="d-border-b">
      <div className="px-7 py-10">
        <p className="text-2xl font-medium">Blog</p>
        <p className="text-subtle py-3">
          I have a passion for blogging, primarily focusing on topics such as
          technology, success, and spirituality. However, my main emphasis is on
          technology, and my content consistently addresses the common
          challenges encountered in software engineering. I delve into subjects
          like overcoming failure and problem-solving strategies.
        </p>
      </div>
      <div className="border-gray-200 d-border-t -mx-7 px-7">
        {posts.map((post, i) => {
          if (!post) return null;
          return (
            <div
              key={post.slug}
              className="group relative overflow-hidden dark:hover:bg-neutral-900 hover:bg-gray-50"
            >
              <Link
                href={`/blog/${post.slug}`}
                className={tw(
                  "transition-all duration-300 group-hover:-translate-y-8 ease-in-out flex relative w-full   px-4",
                  !(i === posts.length - 1) && "d-border-b"
                )}
              >
                <div className="flex flex-col p-3 w-full">
                  <div className="flex justify-between items-center pb-2">
                    <p className="text-xs text-subtle">{post.date}</p>
                    <ul className="flex items-center gap-2 flex-wrap">
                      {post.tags?.map((tag) => (
                        <li key={tag}>
                          <p className="text-pretty text-xs px-1.5 py-[1px] d-border text-subtle rounded-md">
                            {tag}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className=" w-full">
                      <p className="font-medium text-lg">{post.title}</p>
                      <p className="text-sm text-subtle text-balance mt-2">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={tw(
                    "pointer-events-none absolute bottom-0 flex w-full translate-y-8 transform-gpu flex-row items-center opacity-0 transition-all duration-300 group-hover:translate-y-4 group-hover:opacity-100"
                  )}
                >
                  <div className="font-medium text-sm flex gap-1 items-center pt-4 pl-3">
                    <div>Read article</div>
                    <Icon name="chevron-right" className="w-3 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <HowToDoIt lesson={quotes.project.lesson} steps={quotes.project.steps} />
    </div>
  );
};

export default Page;
