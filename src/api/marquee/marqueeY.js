import request from '@/utils/request'

// 每日快讯
export function getMarqueeYDailyNews(data){
  return request({
    url: '/marquee/marqueeY/dailyNews',
    method: 'post',
    data
  })
}
