/*
 * @Description: 路由菜单
 * @Autor: fqt
 * @Date: 2020-11-20 10:02:09
 * @LastEditors: fqt
 * @LastEditTime: 2020-11-20 11:28:50
 */
import Home from '@/view/home'
import HappyLive from '@/view/happyLive'
import Instroduction from '@/view/instroduction'
import ArticleDetail from '@/view/home/articleDetail'
const routeMenu = [
  {
    path: '/',
    title: '博客首页',
    isShow: true,
    exact: true,
    component: Home
  },
  {
    path: '/happyLive',
    title: '快乐生活',
    isShow: true,
    exact: false,
    component: HappyLive
  },
  {
    path: '/instroduction',
    title: '个人介绍',
    isShow: true,
    exact: false,
    component: Instroduction
  },
  {
    path: '/detail/:id',
    title: '首页详情',
    isShow: false,
    exact: false,
    component: ArticleDetail
  }
]

export default routeMenu
