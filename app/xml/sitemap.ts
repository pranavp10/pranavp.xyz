import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const WEBSITE_URL = process.env.PUBLIC_URL

    const siteLinks: SitemapFile[] = links.map((slug) => ({
        url: `${WEBSITE_URL}${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    return [{
        url: `${WEBSITE_URL}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    }, ...siteLinks]
}

const links = ['/skills', '/projects', '/gears', '/vscode-setup', '/work', '/blog', '/about']

interface SitemapFile {
    url: string;
    lastModified?: string | Date | undefined;
    changeFrequency?: "monthly" | "yearly" | "weekly" | "always" | "hourly" | "daily" | "never" | undefined;
    priority?: number | undefined;
}
