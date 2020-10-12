/*
 * @Author: oct3rd
 * @Date: 2020-09-27 15:42:39
 * @LastEditTime: 2020-10-07 11:21:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\router\index.js
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装路由
Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Test = () => import('views/test/Test')
// const Page404 = () => import("views/404");
// 配置项目中没有涉及到权限的公共路由
export const constantRoutes = [
  {
    path: '/',
    redirect: '/home'
  }
  // {
  //   path: "/login",
  //   components: Login,
  //   hidden: true
  // },
  // {
  //   path: "/404",
  //   compontent: Page404,
  //   hidden: true
  // }
]

// 2.使用路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/test', name: 'Test', component: Test }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
