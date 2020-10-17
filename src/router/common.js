/*
 * @Author: lhj
 * @Date: 2020-10-16 14:53:34
 * @LastEditTime: 2020-10-17 10:16:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\router\common.js
 */

const Home = () => import('views/home/Home')
const HomeView = () => import('views/home/components/HomeView')


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
    ]
  },
]

export default commonRouters
