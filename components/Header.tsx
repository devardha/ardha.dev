export default function Categories({ title }){
    return(
        <div className="container">
            <div className="px-5 mb-8 flex text-sm">
                <div className="px-3 py-2 bg-gray-100 hover:bg-gray-200 mr-3 cursor-pointer">{ title }</div>
            </div>
        </div>
    )
}