import request from '@/utils/request'

// 高频链接
export function getFrenquenceLink(data) {
  return request({
    url: '/links/frequenceLink',
    method: 'post',
    // data
  })
}

// 常用导航
export function getCityBranch(data) {
  return request({
    url: '/links/cityBranch',
    method: 'post',
    data
  })
}

export function getBroCityBranch(data) {
  return request({
    url: '/links/broCityBranch',
    method: 'post',
    data
  })
}

export function getProvBranch(data) {
  return request({
    url: '/links/provBranch/',
    method: 'post',
    data
  })
}

export function getHeadOffice(data) {
  return request({
    url: '/links/headOffice',
    method: 'post',
    data
  })
}

export function getSoftware(data) {
  return request({
    url: '/links/software',
    method: 'post',
    data
  })
}

export function getHotTopic(data) {
  return request({
    url: '/links/hotTopic',
    method: 'post',
    data
  })
}
