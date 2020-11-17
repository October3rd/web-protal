/*
 * @Author: your name
 * @Date: 2020-09-27 16:01:51
 * @LastEditTime: 2020-11-02 19:43:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\vue.config.js
 */
const path = require('path')

// 将路径片段使用\连接起来形成路径，并规范化生成的路径
// function resolve(dir) {
//   return path.join(__dirname, dir)  
// }

const name = 'XXXXX门户'
// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 8080
const port = process.env.port || process.env.npm_config_port || 8080 // dev-port

const pubPath = process.env.NODE_ENV === 'production' ? '/ls/' : '/' 
// console.log('path::: ', process.env.NODE_ENV)
// console.log('process.env.VUE_APP_BASE_API::: ', process.env.VUE_APP_BASE_API)
// console.log('process.env.VUE_APP_BASE_HOST::: ', process.env.VUE_APP_BASE_HOST)

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  // 基本路径，打包时加上 
  /** 部署应用包时的基本URL,默认假设应用是部署在一个域名的根路径下则使用/，
   * 若是部署在一个子路径下，如www.baidu.com/my-app/则使用/my-app/
  */
  publicPath: pubPath,
  // 输出文件目录
  /** 
   * 运行vue-cli-service build时生成的生产环境构建文件的目录，
   * 默认目标目录在构建之前会被清除，传入--no-clean则不会被清除
  */
  outputDir: process.env.outputDir || 'dist',
  // 放置生成的静态资源(相对于outputDir)的目录
  assetsDir: 'static',
  // eslint-loader 是否在保存时候检查
  lintOnSave: false,
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境是否生产sourceMap文件
  // 通过devServer,可以在Node.js架设起临时的服务器用于项目的运行和调试
  devServer: {
    port: port,
    open: true, // 是否自动打开浏览器 
    overlay: { // 让浏览器overlay同时显示警告和错误
      warings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        /**
         * 在开发环境中 如果你的请求是localhost:8001/api/，
         * 则将localhost:8001/api/代理访问到http://127.0.0.1:8001/mock
         */
        target: process.env.VUE_APP_BASE_HOST, // 代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          /**
           * 请求登录接口/login,就会请求ocalhost:8001/api/login,即省略/api
           */
          ['^' + process.env.VUE_APP_BASE_API]: ''
          // '^/api': ''
        }
      }
    }
    
  },
  
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
  },
  //  方法二、修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = name
        return args
      })
  }
}

// console.log('module.exports::: ', module.exports.proxy)
