import React, { useState } from 'react'
import styles from './index.module.less'
// import Avator from '@/assets/images/1.jpg'
import { Link } from 'react-router-dom'
import { ArtcleList } from '@service/article.js'

const Article = () => {
  const [Article, setArticle] = useState(ArtcleList)
  return (
    <div className={styles.list_container}>
      <ul className={styles.note_list}>
        {
          Article.map(list => (
            <li className={styles.note_list_li} key={list.id}>
              <div className={styles.article_inner}>
                <Link to={`detail/${list.id}`}>
                  <h2 className={styles.title}>{list.title}</h2>
                </Link>
                <p className={styles.desc}>{list.desc}</p>
                <div className={styles.comment}>
                  <span><i className='icon-attention_light iconfont'></i>查看<em>20</em></span>
                  <span><i className='icon-edit iconfont'></i>评论<em>50</em></span>
                  <span><i className='icon-appreciate iconfont'></i>赞<em>1</em></span>
                  <span><i className='icon-time iconfont'></i>2020-11-01 10:04:00</span>
                </div>
              </div>
              <a className={styles.images_inner}>
                <img src={list.images} alt='图片' />
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Article
