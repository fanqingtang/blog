import React from 'react'
import styles from './index.module.less'
const Article = () => {
  return (
    <div className={styles.list_container}>
      <ul className={styles.note_list}>
        <li>
          <div>
            <h2>快乐玩耍</h2>
            <p>青岛的天气好给力:昨天溜溜下了一夜的大雨，天亮了雨还没停下的意思。原计划的崂山计划只能改变，毕竟雨中爬山不安全。下雨天，更适合室内的活动，那么，...</p>
            <div>1111111 </div>
          </div>
          <a>图片</a>
        </li>
      </ul>
    </div>
  )
}

export default Article
