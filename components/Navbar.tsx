import { BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/router'

export default function Navbar(){
    const pathname= useRouter().pathname;

    return(
        <nav className="container">
            <div className="px-5 py-6 w-full flex items-center">
                <h1>ardha.dev</h1>
                <ul className="flex flex-1 justify-center">
                    { data.map((item, index) => (
                        <li className={`mx-5 ${ pathname === item.url ? 'text-blue-600' : '' }`} key={index}>{ item.title }</li>
                    )) }
                </ul>
                <BiSearch className="text-2xl"/>
            </div>
        </nav>
    )
}

const data = [
    { title: 'Blog', url: '/' },
    { title: 'Works', url: '/works' },
    { title: 'Contact', url: '/contact' }
]