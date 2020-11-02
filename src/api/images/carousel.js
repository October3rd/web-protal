import request from '@/utils/request'

export function getCarouselNews(data) {
  return request({
    url: '/images/carouselnews',
    method: 'post',
    data
  })
}
