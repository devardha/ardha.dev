import Layout from "../components/Layout";
import RenderMarkdown from "../components/RenderMarkdown";
import { getPageBySlug, getPages } from "../lib/graphql/queries";

export default function Page({ page }) {
    return (
        <Layout metaTitle={ page.seo.metaTitle } metaDescription={ page.seo.metaDescription } shareImage={ page.seo.shareImage && page.seo.shareImage.url }>
            <div className="container py-10 px-5">
                <header>
                    <div className="max-w-screen-md m-auto mb-10">
                        <h1 className="text-6xl font-bold leading-tight tracking-tight">{ page.title }</h1>
                    </div>
                </header>
                <div className="max-w-screen-md m-auto">
                    <RenderMarkdown content={ page.content }/>
                </div>
            </div>
        </Layout>
    )
}
export async function getStaticPaths() {
    const { pages } = await getPages();

    const paths = pages.map((page) => ({
        params: { slug: page.slug },
    }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
    const { pages } = await getPageBySlug(slug);

    return {
        props: {
            page: pages[0]
        },
    }
}