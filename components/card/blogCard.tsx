import { BlogType } from "@/types";
import Link from "next/link";

export const BlogCard = ({ blogDetails }: { blogDetails: BlogType }) => (
  <Link
    href={`/blog/${blogDetails.slug}`}
    className={
      "transition duration-200 ease-in-out border dark:border-dark-white-50 flex flex-col relative bg-origin-border bg-contain rounded-lg w-full group dark:hover:border-dark-white-100 hover:border-highlight "
    }
    style={{
      backgroundImage: `url('/blog/${blogDetails.imageName}.png')`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0 -30px",
    }}
  >
    <div className="mt-20 dark:bg-gradient-to-t dark:from-primary-black dark:group-hover:via-primary-black/25 dark:via-primary-black/70 dark:to-primary-black/10 dark:group-hover:to-primary-black/0 pb-4 px-4 pt-10 rounded-lg flex flex-col">
      <div className="flex gap-3 items-center">
        <div className="mt-4 w-full">
          <p className="font-medium">{blogDetails.title}</p>
          <div className="flex justify-between items-center w-full mt-5">
            <ul className="flex items-center gap-2 flex-wrap">
              {blogDetails.tags?.map((tag) => (
                <li key={tag}>
                  <p className="bg-zinc-100 dark:text-zinc-500 dark:text-dark-white-300 dark:bg-primary-black-link-hover text-pretty text-xs font-mono px-2 py-0.5 rounded-full border border-dark-white-50 text-zinc-500">
                    {tag}
                  </p>
                </li>
              ))}
            </ul>

            <p className="text-zinc-500 dark:text-dark-white-300 text-pretty text-xs font-mono">
              {blogDetails.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Link>
);
