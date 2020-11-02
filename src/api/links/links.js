import request from '@/utils/request'

// 高频链接
export function getFrenquenceLink(data) {
  return request({
    url: '/links/frequenceLink',
    method: 'post',
    // data
  })
}