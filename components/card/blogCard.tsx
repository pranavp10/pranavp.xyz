import { BlogType } from "@/types";
import Link from "next/link";

export const BlogCard = ({ blogDetails }: { blogDetails: BlogType }) => (
  <Link
    href={`/blog/${blogDetails.slug}`}
    className={`transition duration-200 ease-in-out border border-primary-white-50 flex flex-col relative bg-origin-border bg-contain rounded-lg w-full group hover:border-primary-white-100`}
    style={{
      backgroundImage: `url('/blog/${blogDetails.imageName}-card.png')`,
    }}
  >
    <div className="mt-20 bg-gradient-to-t from-primary-black group-hover:via-primary-black/25 via-primary-black/70 to-primary-black/10 group-hover:to-primary-black/0 pb-4 px-4 pt-10 rounded-lg flex flex-col">
      <div className="flex gap-3 items-center">
        <div className="mt-4 w-full">
          <p className="font-medium">{blogDetails.title}</p>
          <div className="flex justify-between items-center w-full mt-5">
            <ul className="flex items-center gap-2 flex-wrap">
              {blogDetails.tags.map((tag) => (
                <li key={tag}>
                  <p className="text-primary-white-300 bg-primary-black-link-hover text-pretty text-xs font-mono px-1.5 py-0.5 rounded-full border border-primary-white-50">
                    {tag}
                  </p>
                </li>
              ))}
            </ul>

            <p className="text-primary-white-300 text-pretty text-xs font-mono">
              {blogDetails.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Link>
);
