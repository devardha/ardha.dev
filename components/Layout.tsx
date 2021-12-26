import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Navbar from './Navbar'
import PreviewBar from './PreviewBar';

interface Props {
    children: ReactNode
    metaTitle?: string
    metaDescription?: string
    shareImage?: string
    metaType?: string
    publishedTime?: string
    preview?: Boolean
}

export default function Layout({ children, preview, metaTitle, metaDescription, metaType, shareImage, publishedTime }: Props){
    const asPath = useRouter().asPath;

    return (
        <>
            <Head>
                <title>{ metaTitle || 'Ardha Developer Blog' }</title>
                <link rel="shortcut icon" href="/favicon.ico" />

                <meta name="robots" content="follow, index" />
                <meta name="description" content={ metaDescription } />
                <link rel="canonical" href={`https://ardha.dev${ asPath }`} />
                { publishedTime && <meta property="article:published_time" content={ publishedTime }/> }

                {/* Open Graph */}
                <meta property="og:url" content={ 'https://ardha.dev' + asPath } key="ogurl" />
                <meta property="og:image" content={ shareImage } key="ogimage" />
                <meta property="og:site_name" content={ 'Devardha Blog' } key="ogsitename" />
                <meta property="og:title" content={ metaTitle } key="ogtitle" />
                <meta property="og:description" content={ metaDescription } key="ogdesc" />
                <meta property="og:type" content={ metaType || 'website' } />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ardhaydhtm" />
                <meta name="twitter:title" content={ metaTitle } />
                <meta name="twitter:description" content={ metaDescription } />
                <meta name="twitter:image" content={ shareImage } />
            </Head>
            {preview && <PreviewBar/>}
            {!preview && <Navbar/>}
            <main className="mt-20">
                { children }
            </main>
        </>
    )
}