import Layout from "../components/Layout";
import RenderMarkdown from "../components/RenderMarkdown";

export default function About() {
    return (
        <Layout title={ 'About' }>
            <div className="container py-10 px-5">
                <header>
                    <div className="max-w-screen-md m-auto mb-10">
                        <h1 className="text-6xl font-bold leading-tight tracking-tight">{ 'About' }</h1>
                    </div>
                </header>
                <div className="max-w-screen-md m-auto">
                    <RenderMarkdown content={ "" }/>
                </div>
            </div>
        </Layout>
    )
}