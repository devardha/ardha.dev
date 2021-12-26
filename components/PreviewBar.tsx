import { HiOutlineLightningBolt } from 'react-icons/hi'
import { useRouter } from 'next/router'

export default function PreviewBar(){
    const path = useRouter().asPath;

    return(
        <nav className="w-full fixed top-0 left-0 right-0 z-20" style={{ background: '#f2f2f2' }}>
            <div className="container w-full">
                <div className="px-5 py-6 w-full flex items-center justify-center">
                    <HiOutlineLightningBolt className="text-2xl mr-2" color="#555555"/><span>You are in preview mode</span> <span className="mx-1">-</span> <span className="underline">Turn off to safely browse the website again</span>
                </div>
            </div>
        </nav>
    )
}