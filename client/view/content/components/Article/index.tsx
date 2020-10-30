import React from 'react'
import styles from './index.module.less'
const Article = () => {
  return (
    <div className={styles.list_container}>
      <ul className={styles.note_list}>
        <li className={styles.note_list_li}>
          <div className={styles.article_inner}>
            <h2 className={styles.title}>快乐玩耍</h2>
            <p className={styles.desc}>青岛的天气好给力:昨天溜溜下了一夜的大雨，天亮了雨还没停下的意思。原计划的崂山计划只能改变，毕竟雨中爬山不安全。下雨天，更适合室内的活动，那么，...</p>
            <div>1111111 </div>
          </div>
          <a className={styles.images_inner}>
            <img src="https://upload-images.jianshu.io/upload_images/16647262-573128897f54d29d.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="图片"/>
          </a>
        </li>
        <li className={styles.note_list_li}>
          <div className={styles.article_inner}>
            <h2 className={styles.title}>快乐玩耍</h2>
            <p className={styles.desc}>青岛的天气好给力:昨天溜溜下了一夜的大雨，天亮了雨还没停下的意思。原计划的崂山计划只能改变，毕竟雨中爬山不安全。下雨天，更适合室内的活动，那么，...</p>
            <div>1111111 </div>
          </div>
          <a className={styles.images_inner}>
            <img src="https://upload-images.jianshu.io/upload_images/16647262-573128897f54d29d.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="图片"/>
          </a>
        </li>
        <li className={styles.note_list_li}>
          <div className={styles.article_inner}>
            <h2 className={styles.title}>快乐玩耍</h2>
            <p className={styles.desc}>青岛的天气好给力:昨天溜溜下了一夜的大雨，天亮了雨还没停下的意思。原计划的崂山计划只能改变，毕竟雨中爬山不安全。下雨天，更适合室内的活动，那么，...</p>
            <div>1111111 </div>
          </div>
          <a className={styles.images_inner}>
            <img src="https://upload-images.jianshu.io/upload_images/16647262-573128897f54d29d.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="图片"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Article
