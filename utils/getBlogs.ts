import matter from 'gray-matter'
import path from 'path'
import fs from 'fs/promises'
import { cache } from 'react'
import { BlogType } from "@/types";


export const getBlogs = cache(async (): Promise<(BlogType | null)[]> => {
    const posts = await fs.readdir('./data/blog/')

    return Promise.all(
        posts
            .filter((file) => path.extname(file) === '.md')
            .map(async (file) => {
                const filePath = `./data/blog/${file}`
                const postContent = await fs.readFile(filePath, 'utf8')
                const { data, content } = matter(postContent)
                if (data.published === false) {
                    return null
                }

                return { ...data, body: content } as BlogType
            })
    ) as Promise<(BlogType | null)[]>
})

export async function getBlogDetails(slug: string) {
    const posts = await getBlogs()
    return posts.find((post: any) => post.slug === slug)
}

