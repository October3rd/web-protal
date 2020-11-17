/*
 * @Author: lhj
 * @Date: 2020-10-16 14:54:37
 * @LastEditTime: 2020-11-02 18:51:48
 * @LastEditors: Please set LastEditors
 * @Description: 自动化处理文件：自动引入路由核心文件
 * @FilePath: \ls-web\src\router\modules\index.js
 */

 const files = require.context('.', true, /\.js$/)

let configRouters = []

// console.log('自动化处理文件：自动引入路由核心文件files>>> ', files.keys())
// 添加路由
files.keys().forEach(key => {
  if (key === './index.js') return 
  // 读取出文件中的default模块
  // console.log('files(key).default::: ', files(key).default)
  configRouters = configRouters.concat(files(key).default) 
})
console.log('configRouters::: ', configRouters)
export default configRouters
