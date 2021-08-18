import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import styles from '../lib/prism/styles'

export default function RenderMarkdown({ content }){
    return(
        <>
        <ReactMarkdown
            className="content"
            components={{
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                        style={ styles }
                        language={ match[1] }
                        PreTag="div"
                        { ...props }
                    >{ String(children).replace(/\n$/, '') }</SyntaxHighlighter>
                ) : (
                <code className={className} { ...props }>
                    { children }
                </code>
                )
            }
            }}
        >{ content }</ReactMarkdown>
        <style dangerouslySetInnerHTML={{__html: `
            .language-bash::before{
                content: "$";
                margin-right: 10px;
                text-align: right;
                user-select: none;
                display: inline-block;
            }

            .content p {
                margin-bottom: 22px;
                line-height: 1.7;
            }

            .content ul {
                list-style: disc;
                padding-left: 2.5rem;
                margin-bottom: 1.7rem;
            }

            .content ul li {
                margin-bottom: 0.8rem;
            }

            .content h2 {
                margin-top: 30px;
                margin-bottom: 10px;
                color: #323232;
                font-size: 26px;
                font-weight: 500;
                letter-spacing: -0.5px;
            }

            .content img {
                border-radius: 0.25rem;
            }

            .content a {
                color: #60a5fa;
            }
        `}}/>
        </>
    )
}