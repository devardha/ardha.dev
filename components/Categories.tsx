import Link from "next/link";

export default function Categories({ categories }){
    return(
        <div className="container">
            <ul className="px-5 mb-8 flex text-sm flex-wrap lg:flex-nowrap">
                { categories.map((category, index) => (
                    <Link href={'/blog/tag/' + category.slug} key={ index }>
                        <a><li className="px-3 py-2 bg-gray-100 hover:bg-gray-200 mr-3 cursor-pointer mb-3 lg:mb-0">{ category.name }</li></a>
                    </Link>
                )) }
            </ul>
        </div>
    )
}