/*
 * @Author: your name
 * @Date: 2020-10-16 14:55:15
 * @LastEditTime: 2020-11-02 19:45:33
 * @LastEditors: Please set LastEditors
 * @Description: 网址导航路由
 * @FilePath: \ls-web\src\router\modules\sitemap.js
 */

const Home = () => import('views/home/Home')

const SiteMap = () => import('views/sitemap/SiteMap')

const sitemapRouters = 
[
  {
    path: '/sitemap',
    component: Home,
    name: 'sitemap',
    children: [
      {
        path: '',
        name: 'SiteMap',
        component: SiteMap
      }
    ]
  }
]

export default sitemapRouters
