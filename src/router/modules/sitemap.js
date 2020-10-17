/*
 * @Author: your name
 * @Date: 2020-10-16 14:55:15
 * @LastEditTime: 2020-10-17 10:16:30
 * @LastEditors: Please set LastEditors
 * @Description: 网址导航路由
 * @FilePath: \ls-web\src\router\modules\sitemap.js
 */

const Home = () => import('views/home/Home')

const SiteMap = () => import('views/sitemap/SiteMap')

const sitemapRouters = {
  path: '/sitemap',
  name: 'sitemap',
  component: Home,
  children: [
    {
      path: '/sitemap',
      name: 'SiteMap',
      component: SiteMap
    }
  ]
}

export default sitemapRouters
