import matter from "gray-matter";
import path from "path";
import fs from "fs/promises";
import { cache } from "react";

export interface BlogType {
  title: string;
  slug: string;
  date: string;
  body?: string | null;
  tags: string[];
  description: string;
  imageName: string;
}

export const getBlogs = cache(async (): Promise<(BlogType | null)[]> => {
  const posts = await fs.readdir("./src/app/blog/[slug]/content/");

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".md")
      .map(async (file) => {
        const filePath = `./src/app/blog/[slug]/content/${file}`;
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);
        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as BlogType;
      })
  ) as Promise<(BlogType | null)[]>;
});

export async function getBlogDetails(slug: string) {
  const posts = await getBlogs();
  return posts.find((post: any) => post.slug === slug);
}
