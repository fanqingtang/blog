import React from 'react'
import Header from '@/view/header'
import Footer from '@/components/Footer'
import ReactMarkdown from 'react-markdown'
import styles from './index.module.less'
import apiMd from '@service/markDown/article.md'
import CodeBlock from './CodeBlock'
const DetailContent = () => {
  return (
    <>
      <Header></Header>
      <div className='main_container'>
        <section className={styles.detail_list}>
          <ReactMarkdown
            source={apiMd}
            escapeHtml={false}
            renderers={{
              code: CodeBlock
            }}
          />
        </section>
      </div>
      <Footer></Footer>
    </>
  )
}

export default DetailContent
