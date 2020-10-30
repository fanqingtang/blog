import React from 'react'
import styles from './index.module.less';
import Article from '@/view/content/components/Article';
import Right from '@/view/content/components/Right';
const Content = () => {
  return (
    <div className={styles.content_wrap}>
      <div className={styles.content_wrap_left}>
        <Article />
      </div>
      <div className={styles.content_wrap_right}>
        <Right/>
      </div>
    </div>
  )
}

export default Content
