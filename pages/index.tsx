import BlogPosts from "../components/BlogPosts";
import Categories from "../components/Categories";
import Layout from "../components/Layout";
import { getCategories, getPosts } from "../lib/graphql/queries";

export default function Home({ posts, categories }) {
    return (
        <Layout>
            <div className="py-10">
                <Categories categories={ categories }/>
                <BlogPosts posts={ posts }/>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const { posts } = await getPosts();
    const { categories } = await getCategories();

    return {
        props: {
            posts,
            categories
        },
    }
}