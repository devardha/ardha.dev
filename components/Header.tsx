export default function Header({ title, count }) {
    return (
        <div className="container">
            <div className="px-5 mb-16 flex text-sm">
                <div className="w-full flex flex-col">
                    <h2 className="text-6xl font-bold leading-tight tracking-tight">{ title }</h2>
                    <p className="text-gray-400 text-xl mt-4">{ `Showing ${ count } results for blog posts with category "${ title }"` }</p>
                </div>
            </div>
        </div>
    )
}