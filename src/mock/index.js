/*
 * @Author: your name
 * @Date: 2020-10-23 15:37:21
 * @LastEditTime: 2020-10-31 22:24:18
 * @LastEditors: Please set LastEditors
 * @Description: 模拟数据
 * @FilePath: \ls-web\src\mock\index.js
 */
/**
 * 定义本地测试接口，最好与正式接口一致，尽可能减少联调阶段修改的工作量
 */

import Mock from 'mockjs'
import links from './modules/links'
import marquee from './modules/marquee'
import images from './modules/images'
import menus from './modules/menus'
import cards from './modules/cards'

const { mock } = Mock

// 使用拦截规则拦截命中的请求
// mock( url, post/get, 返回的数据);
mock(/\/dev-api\/links\/frequenceLink/, 'post', links.frequenceLink) // 正则匹配
mock(/\/dev-api\/marquee\/marqueeX\/advertNews/, 'post', marquee.marqueeXAdvertNews)
mock(/\/dev-api\/marquee\/marqueeY\/dailyNews/, 'post', marquee.marqueeYDailyNews)
// mock('/dev-api/links/frequenceLink', 'post', links.frequenceLink)
mock(/\/dev-api\/images\/background/, 'post', images.backgroundImage)
mock(/\/dev-api\/images\/dynamicAdvert/, 'post', images.dynamicAdvertImage)
mock(/\/dev-api\/images\/staticAdvert/, 'post', images.staticAdvertImage)
mock(/\/dev-api\/images\/carouselnews/, 'post', images.carouselnews)
mock(/\/dev-api\/menus\/homeMenu/, 'post', menus.homeMenu)
mock(/\/dev-api\/cards\/hotNews/, 'post', cards.hotNews)
mock(/\/dev-api\/cards\/branchNews/, 'post', cards.branchNews)
mock(/\/dev-api\/cards\/notice/, 'post', cards.notice)
mock(/\/dev-api\/cards\/consoult/, 'post', cards.consoult)
mock(/\/dev-api\/cards\/deptNews/, 'post', cards.deptNews)
mock(/\/dev-api\/cards\/subranchNews/, 'post', cards.subranchNews)
mock(/\/dev-api\/cards\/weekReport/, 'post', cards.weekReport)
mock(/\/dev-api\/cards\/moneyLaundy/, 'post', cards.moneyLaundy)
mock(/\/dev-api\/cards\/compliance/, 'post', cards.compliance)
mock(/\/dev-api\/cards\/safeWarn/, 'post', cards.safeWarn)
mock(/\/dev-api\/cards\/leaderSpeech/, 'post', cards.leaderSpeech)
mock(/\/dev-api\/cards\/advise/, 'post', cards.advise)
mock(/\/dev-api\/cards\/outNews/, 'post', cards.outNews)
mock(/\/dev-api\/images\/theme\/partyTheme/, 'post', images.partyTheme)
mock(/\/dev-api\/images\/theme\/busiTheme/, 'post', images.busiTheme)
mock(/\/dev-api\/images\/theme\/familyTheme/, 'post', images.familyTheme)
mock(/\/dev-api\/images\/theme\/tradeUnionTheme/, 'post', images.tradeUnionTheme)
