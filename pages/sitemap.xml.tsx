  
import React from 'react';
import { getCategories, getPages, getPosts } from '../lib/graphql/queries'

const SITE_URL = 'https://ardha.dev';

const createSitemap = ( posts, categories, pages ) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${`${SITE_URL}`}</loc>
        </url>
        ${ pages.map(({ slug }) => {
            return `
                <url>
                    <loc>${`${SITE_URL}/${slug}`}</loc>
                </url>
            `;
        })
        .join('')}
        ${ categories.map(({ slug }) => {
            return `
                <url>
                    <loc>${`${SITE_URL}/blog/tag/${slug}`}</loc>
                </url>
            `;
        })
        .join('')}
        ${ posts.map(({ slug }) => {
            return `
                <url>
                    <loc>${`${SITE_URL}/blog/${slug}`}</loc>
                </url>
            `;
        })
        .join('')}
    </urlset>
    `;

class Sitemap extends React.Component {
    public static async getInitialProps({ res }) {
        const { posts } = await getPosts()
        const { categories } = await getCategories()
        const { pages } = await getPages()

        res.setHeader("Content-Type", "text/xml");
        res.write(createSitemap(posts, categories, pages));
        res.end();
    }
}

export default Sitemap;