import Head from 'next/head'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode,
    title?: string
}

export default function Layout({ children, title }: Props){
    return (
        <main>
            <Head>
                <title>{ title || 'Ardha Developer Blog' }</title>
            </Head>
            { children }
        </main>
    )
}