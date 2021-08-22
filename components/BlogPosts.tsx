import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'

function Post({ post }){
    return(
        <li className="post px-5 mb-12 lg:mb-10" key={post.id}>
            <Link href={'/blog/' + post.slug}>
                <a className="w-full relative block rounded overflow-hidden h-48 bg-whitesmoke">
                    { post.image.url ? <Image objectFit="cover" sizes="100%" layout="fill" placeholder="blur" blurDataURL={ post.image.url } src={ post.image.url } alt={ post.title } /> : '' }
                </a>
            </Link>
            <div className="mt-4">
                <div className="mb-2 flex">
                    { post.categories.map((category, index) => (
                        <Link href={'/blog/tag/' + category.slug} key={index}>
                            <a className="text-xs py-1 px-2 bg-blue-50 text-blue-600 rounded-sm mr-2">{ category.name }</a>
                        </Link>
                    )) }
                </div>
                <Link href={'/blog/' + post.slug}>
                    <a>
                        <h3 className="font-semibold tracking-tight leading-tight text-xl">{ post.title }</h3>
                        <p className="mt-2 text-gray-400"> { post.description } </p>
                    </a>
                </Link>
                <div className="flex mt-4 items-center">
                    <div className="rounded-full w-8 h-8 overflow-hidden relative bg-whitesmoke">
                        <Image objectFit="cover" sizes="100%" layout="fill" src="https://avatars.githubusercontent.com/u/59217768?v=4" alt="author" />
                    </div>
                    <div className="text-xs flex flex-col ml-4 uppercase">
                        <a href="#" className="font-medium">Ardha Yudhatama</a>
                        <span className="text-gray-500 mt-1">{ format(new Date(post.published_at), 'dd MMMM yyy') } • 10 Min Read</span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default function BlogPosts({ posts }){
    return(
        <div className="container">
            <ul className="flex flex-wrap flex-col md:flex-row">
                { posts.map((post, index) => (
                    <Post post={post} key={index}/>
                )) }
            </ul>
        </div>
    )
}