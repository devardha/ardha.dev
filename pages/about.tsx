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
                    <RenderMarkdown content={ "Hey, I’m Ardha 👋. I'm a developer from Indonesia. I work at Hybrid as a Full Stack Web Developer. I usually work with React and Node.js. And yes, I love javascript so much! Javascript has become my third language after Indonesian and English. I'm also interested in learning other programming languages such as Python, Go, and also Ruby." }/>
                </div>
            </div>
        </Layout>
    )
}