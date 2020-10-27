import { Random } from 'mockjs'

function frequenceLink(request) {
  // req是一个请求对象，包含: url，type和body属性
  const href = Random.url()
  const name = Random.cname()
  const icon = Random.string('lower', 3, 6) + '.png'
  
  return {
    code: 200,
    data: {
      'linkInfos|2-4': [
        {
          href,
          name,
          icon
        }
      ]
    }
  }
}


export default {
  frequenceLink
}
