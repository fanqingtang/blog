import React, { useEffect } from 'react'
import styles from './index.module.less'
import Article from '@/view/content/components/Article'
import Right from '@/view/content/components/Right'
const Content = () => {
  return (
    <main className='main_container'>
      <div className={styles.content_inner}>
        <div className={styles.content_inner_left}>
          <Article />
        </div>
        <div className={styles.content_inner_right}>
          <Right />
        </div>
      </div>
    </main>
  )
}

export default Content
