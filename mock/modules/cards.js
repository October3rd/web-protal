import { Random } from 'mockjs'

function hotNews() {
  const array = []
  const length = Math.floor(Math.random() * 16)
  for (let index = 0; index < length; index++) {
    const title = Random.cword(5, 20)
    const hotURL = Random.url()
    const isHot = Random.boolean()
    array.push({ title, hotURL, isHot })
  }
  return {
    code: 200,
    data: {
      hotInfos: array
    }
  }
}

function branchNews() {
  const branchNewsInfos = []
  const msgInfos = []
  const title = '分行动态'
  const linkMore = '/detail/news'
  const msgLen = Math.floor(Math.random() * 8) + 1
  for (let index = 0; index < msgLen; index++) {
    const title = Random.cword(5, 30)
    const editor = Random.cname()
    const editDate = Random.date('yy-MM-dd')
    const deptName = Random.cword(3, 8)
    const linkDetail = {
      path: '/detail/content',
      query: { articleID: '01' }
    }
    const msgInfo = { title, editor, editDate, deptName, linkDetail }
    msgInfos.push(msgInfo)
  }
  branchNewsInfos.push({ title, msgInfos, linkMore })

  return {
    code: 200, 
    data: {
      branchNewsInfos
    }
  }
}

function notice() {
  const noticeInfos = []
  const msgInfos = []
  const title = '行内公告'
  const linkMore = '/index'
  const msgLen = Math.floor(Math.random() * 8) + 1
  for (let index = 0; index < msgLen; index++) {
    const title = Random.cword(5, 30)
    const editor = Random.cname()
    const editDate = Random.date('yy-MM-dd')
    const deptName = Random.cword(3, 8)
    const linkDetail = Random.url()
    const msgInfo = { title, editor, editDate, deptName, linkDetail }
    msgInfos.push(msgInfo)
  }
  noticeInfos.push({ title, msgInfos, linkMore })

  return {
    code: 200, 
    data: {
      noticeInfos
    }
  }
}

function consoult() {
  const consoultInfos = []
  const msgInfos = []
  const title = '部门咨询'
  const linkMore = '/index'
  const msgLen = Math.floor(Math.random() * 8) + 1
  for (let index = 0; index < msgLen; index++) {
    const title = Random.cword(5, 30)
    const editor = Random.cname()
    const editDate = Random.date('yy-MM-dd')
    const deptName = Random.cword(3, 8)
    const linkDetail = Random.url()
    const msgInfo = { title, editor, editDate, deptName, linkDetail }
    msgInfos.push(msgInfo)
  }
  consoultInfos.push({ title, msgInfos, linkMore })

  return {
    code: 200, 
    data: {
      consoultInfos
    }
  }
}

function deptNews() {
  const deptNewsInfos = []
  const msgInfos = []
  const title = '部门动态'
  const linkMore = '/index'
  const msgLen = Math.floor(Math.random() * 8) + 1
  for (let index = 0; index < msgLen; index++) {
    const title = Random.cword(5, 30)
    const editor = Random.cname()
    const editDate = Random.date('yy-MM-dd')
    const deptName = Random.cword(3, 8)
    const linkDetail = Random.url()
    const msgInfo = { title, editor, editDate, deptName, linkDetail }
    msgInfos.push(msgInfo)
  }
  deptNewsInfos.push({ title, msgInfos, linkMore })

  return {
    code: 200, 
    data: {
      deptNewsInfos
    }
  }
}

function subranchNews() {
  const subranchNewsInfos = []
  const msgInfos = []
  const title = '支行动态'
  const linkMore = '/index'
  const msgLen = Math.floor(Math.random() * 8) + 1
  for (let index = 0; index < msgLen; index++) {
    const title = Random.cword(5, 30)
    const editor = Random.cname()
    const editDate = Random.date('yy-MM-dd')
    const deptName = Random.cword(3, 8)
    const linkDetail = Random.url()
    const msgInfo = { title, editor, editDate, deptName, linkDetail }
    msgInfos.push(msgInfo)
  }
  subranchNewsInfos.push({ title, msgInfos, linkMore })

  return {
    code: 200, 
    data: {
      subranchNewsInfos
    }
  }
}

function weekReport() {
  const reportInfos = []
  const msgInfos = []
  const title = '工作周报'
  const linkMore = '/index'
  const msgLen = Math.floor(Math.random() * 8) + 1
  for (let index = 0; index < msgLen; index++) {
    const title = Random.cword(5, 30)
    const editor = Random.cname()
    const editDate = Random.date('yy-MM-dd')
    const deptName = Random.cword(3, 8)
    const linkDetail = Random.url()
    const msgInfo = { title, editor, editDate, deptName, linkDetail }
    msgInfos.push(msgInfo)
  }
  reportInfos.push({ title, msgInfos, linkMore })

  return {
    code: 200, 
    data: {
      reportInfos
    }
  }
}

function moneyLaundy() {
  const moneyLaundyInfos = []
  const msgInfos = []
  const title = '反洗钱'
  const linkMore = '/index'
  const msgLen = Math.floor(Math.random() * 8) + 1
  for (let index = 0; index < msgLen; index++) {
    const title = Random.cword(5, 30)
    const editor = Random.cname()
    const editDate = Random.date('yy-MM-dd')
    const deptName = Random.cword(3, 8)
    const linkDetail = Random.url()
    const msgInfo = { title, editor, editDate, deptName, linkDetail }
    msgInfos.push(msgInfo)
  }
  moneyLaundyInfos.push({ title, msgInfos, linkMore })

  return {
    code: 200, 
    data: {
      moneyLaundyInfos
    }
  }
}

function compliance() {
  const complianceInfos = []
  const msgInfos = []
  const title = '合规管理'
  const linkMore = '/index'
  const msgLen = Math.floor(Math.random() * 8) + 1
  for (let index = 0; index < msgLen; index++) {
    const title = Random.cword(5, 30)
    const editor = Random.cname()
    const editDate = Random.date('yy-MM-dd')
    const deptName = Random.cword(3, 8)
    const linkDetail = Random.url()
    const msgInfo = { title, editor, editDate, deptName, linkDetail }
    msgInfos.push(msgInfo)
  }
  complianceInfos.push({ title, msgInfos, linkMore })

  return {
    code: 200, 
    data: {
      complianceInfos
    }
  }
}

function safeWarn() {
  const safeWarnInfos = []
  const msgInfos = []
  const title = '安全警示'
  const linkMore = '/index'
  const msgLen = Math.floor(Math.random() * 8) + 1
  for (let index = 0; index < msgLen; index++) {
    const title = Random.cword(5, 30)
    const editor = Random.cname()
    const editDate = Random.date('yy-MM-dd')
    const deptName = Random.cword(3, 8)
    const linkDetail = Random.url()
    const msgInfo = { title, editor, editDate, deptName, linkDetail }
    msgInfos.push(msgInfo)
  }
  safeWarnInfos.push({ title, msgInfos, linkMore })

  return {
    code: 200, 
    data: {
      safeWarnInfos
    }
  }
}

function leaderSpeech() {
  const speechInfos = []
  const msgInfos = []
  const title = '行长讲话'
  const linkMore = '/index'
  const msgLen = Math.floor(Math.random() * 8) + 1
  for (let index = 0; index < msgLen; index++) {
    const title = Random.cword(5, 30)
    const editor = Random.cname()
    const editDate = Random.date('yy-MM-dd')
    const deptName = Random.cword(3, 8)
    const linkDetail = Random.url()
    const msgInfo = { title, editor, editDate, deptName, linkDetail }
    msgInfos.push(msgInfo)
  }
  speechInfos.push({ title, msgInfos, linkMore })

  return {
    code: 200, 
    data: {
      speechInfos
    }
  }
}

function advise() {
  const adviseInfos = []
  const msgInfos = []
  const title = '工作建议'
  const linkMore = '/index'
  const msgLen = Math.floor(Math.random() * 8) + 1
  for (let index = 0; index < msgLen; index++) {
    const title = Random.cword(5, 30)
    const editor = Random.cname()
    const editDate = Random.date('yy-MM-dd')
    const deptName = Random.cword(3, 8)
    const linkDetail = Random.url()
    const msgInfo = { title, editor, editDate, deptName, linkDetail }
    msgInfos.push(msgInfo)
  }
  adviseInfos.push({ title, msgInfos, linkMore })

  return {
    code: 200, 
    data: {
      adviseInfos
    }
  }
}

function outNews() {
  const outNewsInfos = []
  const msgInfos = []
  const title = '外部动态'
  const linkMore = '/index'
  const msgLen = Math.floor(Math.random() * 8) + 1
  for (let index = 0; index < msgLen; index++) {
    const title = Random.cword(5, 30)
    const editor = Random.cname()
    const editDate = Random.date('yy-MM-dd')
    const deptName = Random.cword(3, 8)
    const linkDetail = Random.url()
    const msgInfo = { title, editor, editDate, deptName, linkDetail }
    msgInfos.push(msgInfo)
  }
  outNewsInfos.push({ title, msgInfos, linkMore })

  return {
    code: 200, 
    data: {
      outNewsInfos
    }
  }
}


export default {
  hotNews,
  branchNews,
  notice,
  consoult,
  deptNews,
  subranchNews,
  weekReport,
  moneyLaundy,
  compliance,
  safeWarn,
  leaderSpeech,
  advise,
  outNews
}