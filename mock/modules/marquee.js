import { Random } from 'mockjs'

function marqueeXAdvertNews(request) {
  // req是一个请求对象，包含: url，type和body属性
  const newsLen = Random.integer(1, 15)
  const newsInfo = []
  for (let i = 0; i <= newsLen; i++) {
    const content = Random.cword(5, 10)
    const url = Random.url()
    newsInfo.push({ content, url })
  }

  return {
    code: 200,
    data: newsInfo
  }
}


function marqueeYDailyNews(request) {
  // req是一个请求对象，包含: url，type和body属性
  const newsLen = Random.integer(1, 20)
  const dailyNewsInfo = []
  for (let i = 0; i <= newsLen; i++) {
    const content = Random.cword(5, 50)
    const url = 'http://www.baidu.com'
    const editor = Random.cname()
    const deptName = Random.cword(2, 5)
    dailyNewsInfo.push({ content, url, editor, deptName })
  }

  return {
    code: 200,
    data: dailyNewsInfo
  }
}

export default {
  marqueeXAdvertNews,
  marqueeYDailyNews
}
