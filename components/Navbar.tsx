import { BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar(){
    const path = useRouter().asPath;

    return(
        <nav className="w-full fixed top-0 left-0 right-0 z-10 border-b border-gray-200" style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'saturate(180%) blur(20px)' }}>
            <div className="container w-full">
                <div className="px-5 py-6 w-full flex items-center">
                    <ul className="flex-1 justify-start hidden lg:flex">
                        { data.map((item, index) => (
                            <Link href={item.url} key={index}>
                                <a><li className={`mx-4 text-sm hover:font-semibold ${ path === item.url ? 'font-semibold' : '' } ${ index === 0? 'ml-0' : '' }`}>{ item.title }</li></a>
                            </Link>
                        )) }
                    </ul>
                    <div className="absolute left-0 right-0 flex justify-center w-full pointer-events-none select-none">
                        <h1 className="bg-black px-4 py-1 text-white" style={{ fontFamily: 'Consolas' }}>devardha</h1>
                    </div>
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
    { title: 'My Gear', url: '/my-gear' },
]