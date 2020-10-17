/*
 * @Author: oct3rd
 * @Date: 2020-09-27 15:42:39
 * @LastEditTime: 2020-10-17 09:56:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\router\index.js
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import moduleRouters from './modules' // 引入业务模块
import commonRouters from './common'


const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 1.安装路由
Vue.use(VueRouter)

// const Page404 = () => import("views/404");
// console.log('commonRouters::: ', commonRouters)
console.log('moduleRouters::: ', moduleRouters)
// 2.使用路由
const routes = [
  ...commonRouters,
  ...moduleRouters,
]

console.log('routes::: ', routes)
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//     children: [
//       { path: 'index', component: HomeView },
//       { path: 'sitemap', component: SiteMap },
      
//       { path: '', redirect: 'index' }
      
//     ]
//   },
//   { path: '/test', name: 'Test', component: Test }
//   // {
//   //   path: "/about",
//   //   name: "About",
//   //   // route level code-splitting
//   //   // this generates a separate chunk (about.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
//   //   component: () =>
//   //     import(/* webpackChunkName: "about" */ "../views/About.vue")
//   // }
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
