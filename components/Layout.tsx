import Head from 'next/head'
import { ReactNode } from 'react'
import Navbar from './Navbar'

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
            <Navbar/>
            { children }
        </main>
    )
}