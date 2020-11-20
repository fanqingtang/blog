/*
 * @Description: 路由菜单
 * @Autor: fqt
 * @Date: 2020-11-20 10:02:09
 * @LastEditors: fqt
 * @LastEditTime: 2020-11-20 10:13:13
 */
import Home from '@/view/home'
import HappyLive from '@/view/happyLive'
import Instroduction from '@/view/Instroduction'
import ArticleDetail from '@/view/home/articleDetail'
const routeMenu = [
  {
    path: '/',
    title: '博客首页',
    exact: true,
    component: Home
  },
  {
    path: '/happyLive',
    title: '快乐生活',
    exact: false,
    component: HappyLive
  },
  {
    path: '/instroduction',
    title: '个人介绍',
    exact: false,
    component: Instroduction
  },
  {
    path: '/ArticleDetail/:id',
    title: '首页详情',
    exact: false,
    component: ArticleDetail
  },
  {
    path: '/ArticleDetail/:id',
    title: '首页详情',
    exact: false,
    component: ArticleDetail
  }
]

export default routeMenu
