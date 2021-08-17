import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from '../lib/prism/styles/dracula'
import style from '../styles/content.module.css';

export default function RenderMarkdown({ content }){
    return(
        <ReactMarkdown
            className={ style.content }
            components={{
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                        style={ dracula }
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
    )
}