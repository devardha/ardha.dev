import { BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar(){
    const pathname= useRouter().pathname;

    return(
        <nav className="w-full fixed top-0 left-0 right-0 z-10" style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'saturate(180%) blur(20px)' }}>
            <div className="container w-full">
                <div className="px-5 py-6 w-full flex items-center">
                    <ul className="flex flex-1 justify-start">
                        { data.map((item, index) => (
                            <Link href={item.url} key={index}>
                                <a><li className={`mx-5 hover:text-blue-600 ${ pathname === item.url ? 'text-blue-600' : '' } ${ index === 0? 'ml-0' : '' }`}>{ item.title }</li></a>
                            </Link>
                        )) }
                    </ul>
                    <BiSearch className="text-2xl"/>
                </div>
            </div>
        </nav>
    )
}

const data = [
    { title: 'Blog', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Works', url: 'https://github.com/devardha' },
    { title: 'My Gears', url: '/my-gear' },
]