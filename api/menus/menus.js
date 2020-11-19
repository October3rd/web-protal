import request from '@/utils/request'

export function getHomeMenu(data) {
  return request({
    url: '/menus/homeMenu',
    method: 'post',
    data
  })
}