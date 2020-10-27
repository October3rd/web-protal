import originAxios from 'axios' // 引入axios
import QS from 'qs' // 引入qs模块，用来序列化post类型的数据，后面会提到


// 1.创建axios实例
const service = originAxios.create({
  // url = base url + request url
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: '/api',
  timeout: 10000
  // headers: ''
})

// 添加请求拦截器
service.interceptors.request.use(config => {
    // 在发送之前做点什么
    /**
     * 1.当发送网络请求是，在二面中添加loading组件，作为动画
     * 2.某些请求要求用户必须登录，判断用户是否有token，若没有token跳转到login页面
     * 3.对请求的参数进行序列化
     * 4.等等
     */
    console.log('来到request拦截sucess中')
    // 参数序列化
    config.data = QS.stringify(config.data)
    console.log('request config::: ', config)
    return config
  }, 
  error => {
    // 在这里做点什么
    // return Promise.reject(error)
    return error
  }
)

// 添加响应拦截器
service.interceptors.response.use(res => {
    // 在发送之前做点什么
    console.log('来到了response拦截sucess中')
    console.log('response res::: ', res)
    return res.data
  },
  error => {
    // 在这里做点什么
    console.log('来到了response拦截failure中::: ')
    // return Promise.reject(error)
    return error
  }
)


export default service
