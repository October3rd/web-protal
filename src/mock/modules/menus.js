import { Random } from 'mockjs'

function homeMenu(request) {
  // const menuCode = Random.increment(0)
    const menuData = [
      {
          id: '001',
          parent: '000',
          title: '网站首页',
          path: '/xxx/xx/001', 
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
          title: '部门链接',
          flag: 0,
          parent: '000',
          children: [
              { id: '003001', title: '选项1', path: '/xxx/xx/xx', parent: '003', flag: 0 },
              { id: '003002', title: '选项2', path: '/xxx/xx/xx', parent: '003', flag: 0 },
              { id: '003003', title: '选项3', path: '/xxx/xx/xx', parent: '003', flag: 0 },
              {
                  id: '003004',
                  title: '选项4',
                  parent: '003',
                  children: [
                      { id: '003004001', title: '选项41', path: '/xxx/xx/xx', parent: '003004', flag: 0 },
                      { id: '003004002', title: '选项42', path: '/xxx/xx/xx', parent: '003004', flag: 0 }
                  ]
              }
          ]
      },
      {
          id: '004',
          title: '特色系统', 
          path: 'http://www.baidu.com',
          flag: 1,
          parent: '000' 
      },
      {
          id: '005',
          title: '省行链接', 
          path: 'http://www.baidu.com',
          flag: 1,
          parent: '000' 
      },
      {
          id: '006',
          title: '总行链接',
          path: 'http://www.baidu.com',
          flag: 1,
          parent: '000' 
      },
      {
          id: '007',
          title: '数据通报', 
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