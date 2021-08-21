import Image from 'next/image'
import Link from 'next/link'

function Post({ item }){
    return(
        <li className="post px-5 mb-10" key={item.id}>
            <Link href={'/blog/' + item.slug}>
                <a className="w-full relative block rounded overflow-hidden h-48 bg-whitesmoke">
                    { item.image.url ? <Image objectFit="cover" sizes="100%" layout="fill" placeholder="blur" blurDataURL={ item.image.url } src={ item.image.url } alt={ item.title } /> : '' }
                </a>
            </Link>
            <div className="mt-4">
                <div className="mb-2 flex">
                    { item.categories.map((item, index) => (
                        <Link href={'/blog/tag/' + item.slug} key={index}>
                            <a className="text-xs py-1 px-2 bg-blue-50 text-blue-600 rounded-sm mr-2">{ item.name }</a>
                        </Link>
                    )) }
                </div>
                <Link href={'/blog/' + item.slug}>
                    <a>
                        <h3 className="font-semibold tracking-tight leading-tight text-xl">{ item.title }</h3>
                        <p className="mt-2 text-gray-400"> { item.description } </p>
                    </a>
                </Link>
                <div className="flex mt-4 items-center">
                    <div className="rounded-full w-8 h-8 overflow-hidden relative bg-whitesmoke">
                        <Image objectFit="cover" sizes="100%" layout="fill" src="https://avatars.githubusercontent.com/u/59217768?v=4" alt="author" />
                    </div>
                    <div className="text-xs flex flex-col ml-4 uppercase">
                        <a href="#" className="font-medium">Ardha Yudhatama</a>
                        <span className="text-gray-500 mt-1">10 Jan 2022 • 10 Min Read</span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default function BlogPosts({ posts }){
    return(
        <div className="container py-10">
            <ul className="px-5 mb-8 flex text-sm">
                <li className="px-3 py-2 bg-gray-100 hover:bg-gray-200 mr-3 cursor-pointer">Databases</li>
                <li className="px-3 py-2 bg-gray-100 hover:bg-gray-200 mr-3 cursor-pointer">React</li>
                <li className="px-3 py-2 bg-gray-100 hover:bg-gray-200 mr-3 cursor-pointer">Web Development</li>
                <li className="px-3 py-2 bg-gray-100 hover:bg-gray-200 mr-3 cursor-pointer">UI/UX</li>
                <li className="px-3 py-2 bg-gray-100 hover:bg-gray-200 mr-3 cursor-pointer">Dev Diary</li>
            </ul>
            <ul className="flex flex-wrap">
                { posts.map((item, index) => (
                    <Post item={item} key={index}/>
                )) }
            </ul>
        </div>
    )
}