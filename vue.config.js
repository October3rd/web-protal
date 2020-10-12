/*
 * @Author: your name
 * @Date: 2020-09-27 16:01:51
 * @LastEditTime: 2020-10-07 21:57:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\vue.config.js
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 配置文件路径的别名，默认已经有'@'为src
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views'
      }
    }
  },
  // 以下是pwa配置 配置导航icon
  pwa: {
    iconPaths: {
        favicon32: 'favicon.png',
        favicon16: 'favicon.png',
        appleTouchIcon: 'favicon.png',
        maskIcon: 'favicon.png',
        msTileImage: 'favicon.png'
    }
  }
  // //  方法二、修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
  // chainWebpack: config => {
  //   config.plugin('html')
  //     .tap(args => {
  //       args[0].title = 'XX门户'
  //       return args
  //     })
  // },

}
