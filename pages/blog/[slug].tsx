import Layout from "../../components/Layout";
import { getPostBySlug, getPosts } from "../../lib/graphql/queries";
import Image from'next/image';
import ReactMarkdown from 'react-markdown';
import style from '../../styles/content.module.css';

export default function Blog({ post }) {
    return (
        <Layout title={ post.title }>
            <div className="container py-10 px-5">
                <header>
                    <div className="max-w-screen-md m-auto mb-10">
                        <h1 className="text-6xl font-bold leading-tight tracking-tight">{ post.title }</h1>
                        <p className="text-gray-400 text-xl mt-4">{ post.description }</p>
                        <div className="flex mt-10 items-center">
                            <div className="rounded-full w-10 h-10 overflow-hidden relative bg-whitesmoke">
                                <Image objectFit="cover" sizes="100%" layout="fill" src="https://avatars.githubusercontent.com/u/59217768?v=4" alt="author" />
                            </div>
                            <div className="text-sm flex flex-col ml-4 uppercase">
                                <a href="#" className="font-medium">Ardha Yudhatama</a>
                                <span className="text-gray-500 mt-1">10 Jan 2022 • 10 Min Read</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <div className="rounded overflow-hidden w-full h-144 relative mb-2">
                            <Image objectFit="cover" sizes="100%" layout="fill" placeholder="blur" blurDataURL={ post.image.url } src={ post.image.url }/>
                        </div>
                        { post.image.url && <span className="text-sm">{ post.image.caption }</span> }
                    </div>
                </header>
                <div className="max-w-screen-md m-auto">
                    <ReactMarkdown children={post.content} className={style.content}/>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const { posts } = await getPosts();

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
    const { posts } = await getPostBySlug(slug);

    return {
        props: {
            post: posts[0]
        },
    }
}