import Image from 'next/image'

function FeaturedPost({ item }){
    return(
        <li className="post px-5 mb-10 flex flex-full max-w-none" key={item.id}>
            <a href={item.slug} className="flex-auto relative block rounded overflow-hidden h-96 mr-4 bg-whitesmoke">
                { item.image.src ? <Image objectFit="cover" sizes="100%" layout="fill" src={ item.image.url } alt={ item.title } /> : '' }
            </a>
            <div className="mt-4 post flex flex-col justify-center pl-8">
                <ul className="mb-2 flex">
                    <li className="text-xs py-1 px-2 bg-whitesmoke rounded-sm">Web Development</li>
                </ul>
                <a href={item.slug}>
                    <h3 className="font-semibold tracking-tight leading-tight text-3xl">{ item.title }</h3>
                    <p className="mt-2 text-bluishigrey"> { item.description } </p>
                </a>
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
            <a href={item.slug} className="w-full relative block rounded overflow-hidden h-52 bg-whitesmoke">
                { item.image.src ? <Image objectFit="cover" sizes="100%" layout="fill" src={ item.image.url } alt={ item.title } /> : '' }
            </a>
            <div className="mt-4">
                <ul className="mb-2 flex">
                    <li className="text-xs py-1 px-2 bg-whitesmoke rounded-sm">Web Development</li>
                </ul>
                <a href={item.slug}>
                    <h3 className="font-semibold tracking-tight leading-tight text-xl">{ item.title }</h3>
                    <p className="mt-2 text-bluishigrey"> { item.description } </p>
                </a>
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

export default function BlogPosts(){
    return(
        <div className="container">
            <ul className="flex flex-wrap py-10">
                { data.map((item, index) => {
                    if(index === 0){
                        return <FeaturedPost item={item}/>
                    }else{
                        return <Post item={item}/>
                    }
                }) }
            </ul>
        </div>
    )
}

const data = [
    {
        id: 1,
        title: 'Why choose MongoDB as your next database?',
        slug: '/',
        image: {
            url: ''
        },
        description: 'What is Mongo Database & why should you be leveraging this powerful database for your next development project?'
    },
    {
        id: 2,
        title: 'Become a Full Stack Developer - The Complete Roadmap',
        slug: '/',
        image: {
            url: ''
        },
        description: 'How to become a full stack developer - top full stack developer skills. Discover the best way to learn full stack development. Get started today!'
    },
    {
        id: 3,
        title: 'Top 5 JavaScript Projects for React Developers',
        slug: '/',
        image: {
            url: ''
        },
        description: 'Best Javascript projects for beginners, intermediate, and advanced web developers. Perfect for React JS developers.'
    },
    {
        id: 4,
        title: 'What is Redis and Why is it used by leading industries?',
        slug: '/',
        image: {
            url: ''
        },
        description: 'What is Redis? Reasons to use Redis for caching. Advantages & Features of Redis. Industry applications of Redis.'
    },
]