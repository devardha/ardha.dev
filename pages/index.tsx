import BlogPosts from "../components/BlogPosts";
import Layout from "../components/Layout";
import { getPosts } from "../lib/graphql/queries";

export default function Home({ posts }) {
    return (
        <Layout>
            <BlogPosts posts={posts}/>
        </Layout>
    )
}

export async function getStaticProps() {
    const { posts } = await getPosts();

    return {
        props: {
            posts
        },
    }
}