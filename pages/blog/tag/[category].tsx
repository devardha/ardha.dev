import BlogPosts from "../../../components/BlogPosts";
import Layout from "../../../components/Layout";
import { getCategories, getCategoryBySlug, getPostsByCategory } from "../../../lib/graphql/queries";

export default function Category({ posts, category }) {
    return (
        <Layout metaTitle={ category.name + ' - Devardha Blog' }>
            <div className="py-10">
                <BlogPosts posts={ posts }/>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const { categories } = await getCategories();

    const paths = categories.map((category) => ({
        params: { category: category.slug },
    }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params: { category } }) {
    const { posts } = await getPostsByCategory(category);
    const { categories } = await getCategoryBySlug(category);

    return {
        props: {
            posts,
            category: categories[0]
        },
    }
}