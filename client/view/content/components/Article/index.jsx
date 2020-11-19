import React from 'react'
import styles from './index.module.less'
import Avator from '@/assets/images/1.jpg'
const Article = () => {
  return (
    <div className={styles.list_container}>
      <ul className={styles.note_list}>
        <li className={styles.note_list_li}>
          <div className={styles.article_inner}>
            <h2 className={styles.title}>快乐玩耍</h2>
            <p className={styles.desc}>青岛的天气好给力:昨天溜溜下了一夜的大雨，天亮了雨还没停下的意思。原计划的崂山计划只能改变，毕竟雨中爬山不安全。下雨天，更适合室内的活动，那么，...</p>
            <div className={styles.comment}>
              <span><i className='time'></i>查看<em>20</em></span>
              <span>评论<em>50</em></span>
              <span>赞<em>1</em></span>
              <span>2020-11-01 10:04:00</span>
            </div>
          </div>
          <a className={styles.images_inner}>
            <img src={Avator} alt='图片' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Article
