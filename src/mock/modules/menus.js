import { Random } from 'mockjs'

function homeMenu(request) {
  // const menuCode = Random.increment(0)
    const menuData = [
      {
          id: '001',
          parent: '000',
          title: '网站首页',
          path: '/index', 
          flag: 0
      },
      {
          id: '002',
          parent: '000',
          title: '公文系统',
          path: 'http://www.baidu.com',
          flag: 1
      },
      {
        id: '003',
        title: '综合服务平台', 
        path: 'http://www.baidu.com',
        flag: 1,
        parent: '000' 
      },
      {
          id: '004',
          title: '部门主页',
          flag: 0,
          parent: '000',
          children: [
              { id: '004001', title: '选项1', path: '/xxx/xx/xx', parent: '004', flag: 0 },
              { id: '004002', title: '选项2', path: '/xxx/xx/xx', parent: '004', flag: 0 },
              { id: '004003', title: '选项3', path: '/xxx/xx/xx', parent: '004', flag: 0 },
              {
                  id: '004004',
                  title: '选项4',
                  parent: '004',
                  children: [
                      { id: '004004001', title: '选项41', path: '/xxx/xx/xx', parent: '004004', flag: 0 },
                      { id: '004004002', title: '选项42', path: '/xxx/xx/xx', parent: '004004', flag: 0 }
                  ]
              }
          ]
      },
      {
          id: '005',
          title: '数据平台', 
          path: 'http://www.baidu.com',
          flag: 1,
          parent: '000' 
      },
      {
          id: '006',
          title: '省行系统', 
          path: 'http://www.baidu.com',
          flag: 1,
          parent: '000' 
      },
      {
          id: '007',
          title: '总行系统',
          path: 'http://www.baidu.com',
          flag: 1,
          parent: '000' 
      },
      {
          id: '008',
          title: '通讯录',
          path: 'http://www.baidu.com',
          flag: 1,
          parent: '000' 
      }
    ]
  
  return {
    code: 200,
    data: {
      menus: menuData
    }
  }
}


export default {
  homeMenu
}
