import { Random } from 'mockjs'

function backgroundImage(request) {
  // req是一个请求对象，包含: url，type和body属性
  const filePath = Random.url()
  const fileName = Random.first() + '.jpg'
  const flag = Random.integer(0, 2)
  return {
    code: 200,
    data: {
      filePath,
      fileName,
      flag
    }
  }
}

function dynamicAdvertImage(request) {
  const imgArray = ['background.jpg', 'background1.jpg', 'bg.jpg', 
  'dynamicAdvert.jpg', 'loading.png', 'logo.png', 'ls.jpg', 'staticAdvert.jpg']
  const len = imgArray.length
  const fileName = imgArray[Math.floor(Math.random() * len)]
  const filePath = Random.url()
  const flag = Random.integer(0, 2)
  const linkPath = Random.url()
  return {
    code: 200,
    data: {
      imageInfo: {
        filePath,
        fileName,
        flag
      },
      linkPath
    }
  }
}

function staticAdvertImage(request) {
  const imgArray = ['background.jpg', 'background1.jpg', 'bg.jpg', 
  'dynamicAdvert.jpg', 'loading.png', 'logo.png', 'ls.jpg', 'staticAdvert.jpg']
  const len = imgArray.length
  const fileName = imgArray[Math.floor(Math.random() * len)]
  const filePath = Random.url()
  const flag = Random.integer(0, 2)
  const linkPath = Random.url()
  return {
    code: 200,
    data: {
      imageInfo: {
        filePath,
        fileName,
        flag
      },
      linkPath
    }
  }
}
// Math.floor(Math.random(0,1)*10)
function carouselnews(request) {
  const imgArray = ['background.jpg', 'background1.jpg', 'bg.jpg', 
  'dynamicAdvert.jpg', 'loading.png', 'logo.png', 'ls.jpg', 'staticAdvert.jpg']
  const arrLen = imgArray.length
  const len = Math.floor(Math.random() * arrLen) + 1
  const carouselInfos = []
  for (let index = 0; index < len; index++) {
    const fileName = imgArray[Math.floor(Math.random() * len)]
    const filePath = Random.url()
    const flag = 0
    const linkPath = Random.url()
    const content = Random.cword(5, 40)
    const imageInfo = {
      fileName,
      filePath,
      flag
    }
    carouselInfos.push({ imageInfo, linkPath, content })
  }
  return {
    code: 200,
    data: carouselInfos
  }
}

function partyTheme(request) {
  const imgArray = ['background.jpg', 'background1.jpg', 'bg.jpg', 
  'dynamicAdvert.jpg', 'loading.png', 'logo.png', 'ls.jpg', 'staticAdvert.jpg']
  const arrLen = imgArray.length
  const len = Math.floor(Math.random() * arrLen) + 1
  const partyPicInfos = []
  for (let index = 0; index < len; index++) {
    const fileName = imgArray[Math.floor(Math.random() * len)]
    const filePath = Random.url()
    const flag = 0
    const linkPath = Random.url()
    const imageInfo = {
      fileName,
      filePath,
      flag
    }
    partyPicInfos.push({ imageInfo, linkPath })
  }
  return {
    code: 200,
    data: partyPicInfos
  }
}

function busiTheme(request) {
  const imgArray = ['background.jpg', 'background1.jpg', 'bg.jpg', 
  'dynamicAdvert.jpg', 'loading.png', 'logo.png', 'ls.jpg', 'staticAdvert.jpg']
  const arrLen = imgArray.length
  const len = Math.floor(Math.random() * arrLen) + 1
  const busiPicInfos = []
  for (let index = 0; index < len; index++) {
    const fileName = imgArray[Math.floor(Math.random() * len)]
    const filePath = Random.url()
    const flag = 0
    const linkPath = Random.url()
    const imageInfo = {
      fileName,
      filePath,
      flag
    }
    busiPicInfos.push({ imageInfo, linkPath })
  }
  return {
    code: 200,
    data: busiPicInfos
  }
}

function familyTheme(request) {
  const imgArray = ['background.jpg', 'background1.jpg', 'bg.jpg', 
  'dynamicAdvert.jpg', 'loading.png', 'logo.png', 'ls.jpg', 'staticAdvert.jpg']
  const arrLen = imgArray.length
  const len = Math.floor(Math.random() * arrLen) + 1
  const fimilyPicInfos = []
  for (let index = 0; index < len; index++) {
    const fileName = imgArray[Math.floor(Math.random() * len)]
    const filePath = Random.url()
    const flag = 0
    const linkPath = Random.url()
    const imageInfo = {
      fileName,
      filePath,
      flag
    }
    fimilyPicInfos.push({ imageInfo, linkPath })
  }
  return {
    code: 200,
    data: fimilyPicInfos
  }
}

function tradeUnionTheme(request) {
  const imgArray = ['background.jpg', 'background1.jpg', 'bg.jpg', 
  'dynamicAdvert.jpg', 'loading.png', 'logo.png', 'ls.jpg', 'staticAdvert.jpg']
  const arrLen = imgArray.length
  const len = Math.floor(Math.random() * arrLen) + 1
  const tradePicInfos = []
  for (let index = 0; index < len; index++) {
    const fileName = imgArray[Math.floor(Math.random() * len)]
    const filePath = Random.url()
    const flag = 0
    const linkPath = Random.url()
    const imageInfo = {
      fileName,
      filePath,
      flag
    }
    tradePicInfos.push({ imageInfo, linkPath })
  }
  return {
    code: 200,
    data: tradePicInfos
  }
}

export default {
  backgroundImage,
  dynamicAdvertImage,
  staticAdvertImage,
  carouselnews,
  partyTheme,
  busiTheme,
  familyTheme,
  tradeUnionTheme
}
