/*
 * @Author: your name
 * @Date: 2020-10-23 15:37:21
 * @LastEditTime: 2020-10-27 10:22:32
 * @LastEditors: Please set LastEditors
 * @Description: 模拟数据
 * @FilePath: \ls-web\src\mock\index.js
 */
/**
 * 定义本地测试接口，最好与正式接口一致，尽可能减少联调阶段修改的工作量
 */

import Mock from 'mockjs'
import links from './modules/links'

const { mock } = Mock


mock(/\/api)