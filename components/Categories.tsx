export default function Categories({ categories }){
    return(
        <div className="container">
            <ul className="px-5 mb-8 flex text-sm">
                { categories.map((category, index) => (
                    <li className="px-3 py-2 bg-gray-100 hover:bg-gray-200 mr-3 cursor-pointer" key={index}>{ category.name }</li>
                )) }
            </ul>
        </div>
    )
}