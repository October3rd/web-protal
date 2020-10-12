/*
 * @Author: oct3rd
 * @Date: 2020-09-27 15:42:39
 * @LastEditTime: 2020-10-08 19:08:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\main.js
 */

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 默认主题

import 'normalize.css/normalize.css' // 现代 Web 开发必备的 CSS resets
import './icons/iconfont/iconfont.css'


Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
