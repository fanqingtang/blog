import React from 'react'
import styles from './index.module.less'
import Avator from '@/assets/images/1.jpg'
const Right = () => {
  return (
    <div className={styles.right_wrap}>
      <div className={styles.avator}>
        <img src={Avator} alt='头像' />
      </div>
      <h2 className={styles.name_h2}>樊辉</h2>
      <p className={styles.description}>专注于WEB和移动前端开发</p>
      <div className={`${styles.tag_inner}`}>
        <ul>
          <li>
            <a>javascript</a>
          </li>
          <li>
            <a>css</a>
          </li>
          <li>
            <a>html</a>
          </li>
          <li>
            <a>node</a>
          </li>
          <li>
            <a>typescript</a>
          </li>
          <li>
            <a>php</a>
          </li>
          <li>
            <a>java</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Right
