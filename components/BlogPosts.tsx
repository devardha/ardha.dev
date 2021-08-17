import { DirectiveLocation } from 'graphql'
import Image from 'next/image'
import Link from 'next/link'

function FeaturedPost({ item }){
    return(
        <li className="post px-5 mb-10 flex flex-full max-w-none" key={item.id}>
            <Link href={'/blog/' + item.slug}>
                <a className="flex-auto relative block rounded overflow-hidden h-96 mr-4 bg-whitesmoke">
                    { item.image.url ? <Image objectFit="cover" sizes="100%" layout="fill" placeholder="blur" blurDataURL={ item.image.url } src={ item.image.url } alt={ item.title } /> : '' }
                </a>
            </Link>
            <div className="mt-4 post flex flex-col justify-center pl-8">
                <div className="mb-2 flex">
                    { item.categories.map((item, index) => (
                        <Link href={'/blog/tag/' + item.slug} key={index}>
                            <a className="text-xs py-1 px-2 bg-blue-50 text-blue-600 rounded-sm mr-2">{ item.name }</a>
                        </Link>
                    )) }
                </div>
                <Link href={'/blog/' + item.slug}>
                    <a>
                        <h3 className="font-semibold tracking-tight leading-tight text-3xl">{ item.title }</h3>
                        <p className="mt-2 text-bluishigrey"> { item.description } </p>
                    </a>
                </Link>
                <div className="flex mt-4 items-center">
                    <div className="rounded-full w-8 h-8 overflow-hidden">
                        <img src="https://avatars.githubusercontent.com/u/59217768?v=4" alt="author" />
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

function Post({ item }){
    return(
        <li className="post px-5 mb-10" key={item.id}>
            <Link href={'/blog/' + item.slug}>
                <a className="w-full relative block rounded overflow-hidden h-52 bg-whitesmoke">
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
                        <p className="mt-2 text-bluishigrey"> { item.description } </p>
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
        <div className="container">
            <ul className="flex flex-wrap py-10">
                { posts.map((item, index) => {
                    if(index === 0){
                        return <FeaturedPost item={item} key={index}/>
                    }else{
                        return <Post item={item} key={index}/>
                    }
                }) }
            </ul>
        </div>
    )
}

const data = [
    {
        id: 1,
        title: 'Controll Tuya Smart Bulb using Python',
        slug: '/',
        image: {
            url: 'https://ardha-dev.s3.ap-southeast-1.amazonaws.com/Internet_Connection_e49196f850.webp?2028563.5'
        },
        description: 'How to controll Tuya smart bulb using Tuya API and Python',
        categories: [
            { name: 'IoT' },
            { name: 'Python' }
        ]
    },
    {
        id: 2,
        title: 'When to Use NoSQL Rather than SQL Database',
        slug: '/',
        image: {
            url: 'https://ardha-dev.s3.ap-southeast-1.amazonaws.com/Databases_b5979cf57b.png?1637910.1999999955'
        },
        description: 'What is NoSQL and SQl database & how to choose the right database for your project!',
        categories: [
            { name: 'Databases' }
        ]
    },
    {
        id: 3,
        title: 'Error Tracking in Node.js using Sentry',
        slug: '/',
        image: {
            url: 'https://ardha-dev.s3.ap-southeast-1.amazonaws.com/Server_Error_c70074ec4d.jpg?925884.599999994'
        },
        description: 'How to track errors in Nodejs applications that appear unexpectedly',
        categories: [
            { name: 'Web Development' }
        ]
    },
    {
        id: 4,
        title: 'How I Landed My First Web Developer Job: An Unexpected Story',
        slug: '/',
        image: {
            url: 'https://ardha-dev.s3.ap-southeast-1.amazonaws.com/Work_From_Home_ed34cf34d3.jpg?300633.19999999553'
        },
        description: 'An unexpected story about how I landed my first web developer job after 6 months learning React',
        categories: [
            { name: 'Dev Diary' }
        ]
    },
]