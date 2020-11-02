import request from '@/utils/request'

// 轮播广告
export function getMarqueeXAdvertNews(data){
  return request({
    url: '/marquee/marqueeX/advertNews',
    method: 'post',
    data
  })
}
