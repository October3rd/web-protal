/*
 * @Author: lhj
 * @Date: 2020-10-16 14:53:34
 * @LastEditTime: 2020-10-19 08:42:55
 * @LastEditors: Please set LastEditors
 * @Description: 通用页面
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
  {
    path: '/404',
    components: {
      
    }
  }
]

export default commonRouters
