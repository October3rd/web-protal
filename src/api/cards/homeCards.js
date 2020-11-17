import request from '@/utils/request'


export function getCarouselNews(data) {
  return request({
    url: '/images/carouselnews',
    method: 'post',
    data
  })
}

export function getHotNews(data) {
  return request({
    url: '/cards/hotNews',
    method: 'post',
    data
  })
}

export function getBranchNews(data) {
  return request({
    url: '/cards/branchNews',
    method: 'post',
    data
  })
}

export function getNotice(data) {
  return request({
    url: '/cards/notice',
    method: 'post',
    data
  })
}

export function getConsoult(data) {
  return request({
    url: '/cards/consoult',
    method: 'post',
    data
  })
}

export function getDeptNews(data) {
  return request({
    url: '/cards/deptNews',
    method: 'post',
    data
  })
}

export function getSubranchNews(data) {
  return request({
    url: '/cards/subranchNews',
    method: 'post',
    data
  })
}

export function getWeekReport(data) {
  return request({
    url: '/cards/weekReport',
    method: 'post',
    data
  })
}

export function getMoneyLaundy(data) {
  return request({
    url: '/cards/moneyLaundy',
    method: 'post',
    data
  })
}

export function getCompliance(data) {
  return request({
    url: '/cards/compliance',
    method: 'post',
    data
  })
}

export function getSafeWarn(data) {
  return request({
    url: '/cards/safeWarn',
    method: 'post',
    data
  })
}

export function getLeaderSpeech(data) {
  return request({
    url: '/cards/leaderSpeech',
    method: 'post',
    data
  })
}

export function getAdvise(data) {
  return request({
    url: '/cards/advise',
    method: 'post',
    data
  })
}

export function getOutNews(data) {
  return request({
    url: '/cards/outNews',
    method: 'post',
    data
  })
}
