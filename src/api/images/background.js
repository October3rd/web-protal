import request from '@/utils/request'

export function getBackground(data) {
  return request({
    url: '/images/background',
    method: 'post',
    data
  })
}
