import React from 'react'
import styles from './index.module.less'
import Article from '@/view/content/components/Article/index.tsx'
const Content = () => {
  return (
    <div className={styles.content_wrap}>
      <div className={styles.content_wrap_left}>
        <Article />
      </div>
      <div className={styles.content_wrap_right}>right</div>
    </div>
  )
}

export default Content
