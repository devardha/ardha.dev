import { BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar(){
    const pathname= useRouter().pathname;

    return(
        <nav className="container w-full fixed top-0 left-0 right-0 z-10" style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'saturate(180%) blur(20px)' }}>
            <div className="px-5 py-6 w-full flex items-center">
                <h1 className="nav-brand"><span className="text-blue-600">dev</span>ardha</h1>
                <ul className="flex flex-1 justify-center">
                    { data.map((item, index) => (
                        <Link href={item.url} key={index}>
                            <a><li className={`mx-5 font-medium hover:text-blue-600 ${ pathname === item.url ? 'text-blue-600' : '' }`}>{ item.title }</li></a>
                        </Link>
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