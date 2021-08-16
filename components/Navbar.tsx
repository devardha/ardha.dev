import { BiSearch } from 'react-icons/bi'

export default function Navbar(){
    return(
        <nav className="container">
            <div className="px-5 py-6 w-full flex items-center">
                <h1>ardha.dev</h1>
                <ul className="flex flex-1 justify-center">
                    <li className="mx-5">Blog</li>
                    <li className="mx-5">Works</li>
                    <li className="mx-5">Contact</li>
                </ul>
                <BiSearch className="text-2xl"/>
            </div>
        </nav>
    )
}