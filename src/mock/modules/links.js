/*
 * @Author: your name
 * @Date: 2020-10-26 20:33:49
 * @LastEditTime: 2020-10-28 15:58:00
 * @LastEditors: Please set LastEditors
 * @Description: 快捷链接模拟
 * @FilePath: \ls-web\src\mock\modules\links.js
 */
import { Random } from 'mockjs'

function frequenceLink(request) {
  // req是一个请求对象，包含: url，type和body属性
  
  const length = Random.natural(1, 5)
  const linkinfos = []
  for (let i = 0; i < length; i++) {
    // const href = Random.url()
    const href = 'http://www.baidu.com'
    const name = Random.province()
    // const icon = Random.string('lower', 3, 6) + '.png'
    const icon = 'logo.png'
    linkinfos.push({ href, name, icon })
  }

  return {
    code: 200,
    data: linkinfos
  }
}


export default {
  frequenceLink
}
