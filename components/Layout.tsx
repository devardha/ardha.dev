import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Navbar from './Navbar'

interface Props {
    children: ReactNode
    metaTitle?: string
    metaDescription?: string
    shareImage?: string
}

export default function Layout({ children, metaTitle, metaDescription, shareImage }: Props){
    const asPath = useRouter().asPath;

    return (
        <>
            <Head>
                <title>{ metaTitle || 'Ardha Developer Blog' }</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="description" content={ metaDescription } />

                {/* Open Graph */}
                <meta property="og:url" content={ 'https://ardha.dev' + asPath } key="ogurl" />
                <meta property="og:image" content={ shareImage } key="ogimage" />
                <meta property="og:site_name" content={ 'Devardha Blog' } key="ogsitename" />
                <meta property="og:title" content={ metaTitle } key="ogtitle" />
                <meta property="og:description" content={ metaDescription } key="ogdesc" />
            </Head>
            <Navbar/>
            <main className="mt-20">
                { children }
            </main>
        </>
    )
}