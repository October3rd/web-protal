/*
 * @Author: lhj
 * @Date: 2020-10-16 14:53:34
 * @LastEditTime: 2020-10-17 09:53:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\router\common.js
 */

const Home = () => import('views/home/Home')
const HomeView = () => import('views/home/components/HomeView')

const SiteMap = () => import('views/sitemap/SiteMap')

// const Test = () => import('views/test/Test')

const commonRouters = [
  {
    path: '/',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'HomeView',
        component: HomeView
      },
      // {
      //   path: '/sitemap',
      //   name: 'SiteMap',
      //   component: SiteMap
      // }
    ]
  },
  // {
  //   path: '/',
  //   //  name: 'SiteMap',
  //   component: Home,
  //   // redirect: '/sitemap',
  //   childern: [
  //     {
  //       path: '/sitemap',
  //       name: 'SiteMap',
  //       component: SiteMap
  //     }
    // ]
  // }
  // {
  //   path: '/',
  //   name: 'Test',
  //   componpent: HomeView
  // }
]

export default commonRouters
