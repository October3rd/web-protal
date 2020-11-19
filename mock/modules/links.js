/*
 * @Author: your name
 * @Date: 2020-10-26 20:33:49
 * @LastEditTime: 2020-11-02 09:45:44
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

function cityBranch(request) {
  const len = Random.natural(5, 30)
  const cityInfos = []
  for (let index = 0; index < len; index++) {
    const title = Random.cword(3, 10)
    const path = Random.url()
    const flag = Random.boolean()

    cityInfos.push({
      title,
      path,
      flag
    })
  }

  return {
    code: 200,
    data: cityInfos
  }
}

function broCityBranch(request) {
  const len = 10
  const broCityInfos = []
  for (let index = 0; index < len; index++) {
    const title = Random.cword(3, 10)    
    const path = Random.url()
    const flag = Random.boolean()

    broCityInfos.push({
      title, 
      path, 
      flag
    })
  }

  return {
    code: 200, 
    data: broCityInfos
  }
}

function provBranch(request) {
  const len = Random.natural(5, 30)
  const provInfos = []
  for (let index = 0; index < len; index++) {
    const title = Random.cword(3, 10)
    const path = Random.url()
    const flag = Random.boolean()

    provInfos.push({
      title,
      path,
      flag
    })
  }

  return {
    code: 200,
    data: provInfos
  }
}

function headOffice(request) {
  const len = Random.natural(5, 30)
  const headOfficeInfos = []
  for (let index = 0; index < len; index++) {
    const title = Random.cword(3, 10)
    const path = Random.url()
    const flag = Random.boolean()

    headOfficeInfos.push({
      title,
      path,
      flag
    })
  }

  return {
    code: 200,
    data: headOfficeInfos
  }
}

function software(request) {
  const len = Random.natural(5, 30)
  const softwareInfos = []
  for (let index = 0; index < len; index++) {
    const title = Random.cword(3, 10)
    const path = Random.url()
    const flag = Random.boolean()

    softwareInfos.push({
      title,
      path,
      flag
    })
  }

  return {
    code: 200,
    data: softwareInfos
  }
}

function hotTopic(request) {
  const len = Random.natural(5, 30)
  const hotTopicInfos = []
  for (let index = 0; index < len; index++) {
    const title = Random.cword(3, 10)
    const path = Random.url()
    const flag = Random.boolean()

    hotTopicInfos.push({
      title,
      path,
      flag
    })
  }

  return {
    code: 200,
    data: hotTopicInfos
  }
}

export default {
  frequenceLink,
  cityBranch,
  broCityBranch,
  provBranch,
  headOffice,
  software,
  hotTopic
}
