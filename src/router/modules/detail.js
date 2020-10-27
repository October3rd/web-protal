/*
 * @Author: lhj
 * @Date: 2020-10-16 14:55:15
 * @LastEditTime: 2020-10-19 16:24:54
 * @LastEditors: Please set LastEditors
 * @Description: 详情页信息
 * @FilePath: \ls-web\src\router\modules\sitemap.js
 */

const Home = () => import('views/home/Home')

const Detail = () => import('views/detail/Detail')
const BaseInfo = () => import('views/detail/components/DetailBaseInfo')
const News = () => import('views/detail/components/DetailNews')
const Content = () => import('views/detail/components/DetailContent')

const detailRouters = [
  {
    path: '/detail',
    name: 'detail',
    component: Home,
    children: [
      {
        path: '/detail',
        name: 'Detail',
        component: Detail,
        children: [
          { path: 'baseInfo', name: 'DetailBaseInfo', component: BaseInfo },
          { path: 'news', name: 'DetailNews', component: News },
          { path: 'content', name: 'DetailContent', component: Content }
        ]
      }
    ]
  }
]

export default detailRouters
