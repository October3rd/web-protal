import request from '@/utils/request'

export function getDynamicAdvertImage(data) {
  return request({
    url: '/images/dynamicAdvert',
    method: 'post',
    data
  })
}

export function getStaticAdvertImage(data) {
  return request({
    url: '/images/staticAdvert',
    method: 'post',
    data
  })
}
