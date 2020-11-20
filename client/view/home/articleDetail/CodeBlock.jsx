import React, { useEffect } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// 设置高亮样式
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
// 设置高亮的语言
import { jsx, javascript, less, css } from 'react-syntax-highlighter/dist/esm/languages/prism'
import language from 'react-syntax-highlighter/dist/esm/languages/hljs/1c'
const CodeBlock = (props) => {
  const { value } = props
  useEffect(() => {
    SyntaxHighlighter.registerLanguage('jsx', jsx)
    SyntaxHighlighter.registerLanguage('javascript', javascript)
    SyntaxHighlighter.registerLanguage('css', css)
    SyntaxHighlighter.registerLanguage('less', less)
  }, [])
  return (
    <figure className='highlight'>
      <SyntaxHighlighter language={language} style={a11yDark}>
        { value }
      </SyntaxHighlighter>
    </figure>

  )
}

export default CodeBlock
