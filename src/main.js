/*
 * @Author: oct3rd
 * @Date: 2020-09-27 15:42:39
 * @LastEditTime: 2020-11-02 21:36:28
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

import axios from '@/utils/request.js'

// mock
import '@/mock'

Vue.use(ElementUI)
Vue.config.productionTip = false

// prototype 属性使您有能力向对象添加属性和方法
Vue.prototype.$http = axios

console.log('process.env::: ', process.env.outputDir)

// console.log('router::: ', router)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
