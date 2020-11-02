import request from '@/utils/request'

export function getPartyTheme(data) {
  return request({
    url: '/images/theme/partyTheme',
    method: 'post',
    data
  })
}

export function getFamilyTheme(data) {
  return request({
    url: '/images/theme/familyTheme',
    method: 'post',
    data
  })
}

export function getBusiTheme(data) {
  return request({
    url: '/images/theme/busiTheme',
    method: 'post',
    data
  })
}

export function getTradeUnionTheme(data) {
  return request({
    url: '/images/theme/tradeUnionTheme',
    method: 'post',
    data
  })
}
