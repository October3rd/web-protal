<template>
  <div class="home">
    <!-- 背景图 -->
    <background-view />
    <!-- 导航 -->
    <top-bar @goto="gotoSiteMap"/>
    <div class="main">
      <!-- 主页 -->
      <container-bar class="container">
        <!-- header -->
        <template #header>
          <header-bar class="header">
            <!-- 门户大图片 -->
            <el-image :src="getImage('ls.jpg')" lazy></el-image>
            <!-- 菜单选择 -->
            <nav-bar>
              <template #center>
                <menu-bar :menus="menus" />
              </template>
            </nav-bar>
          </header-bar>
        </template>
        <!-- main -->
        <template #main>
          <!-- <div style="height: 1500px;"> -->
            <!-- <slot></slot>
            <main-view /> -->
            <router-view></router-view>
          <!-- </div> -->
          <!-- <card-list /> -->
        </template>
        <!-- footer -->
        <template #footer>
          <!-- 页脚 -->
          <el-row type="flex" justify="center">
            <div class="footer">
              <div >
                本网站所有信息发布均须有信息发布主管部门进行保密审查(sdflkj 东风路科技分类考试的缴费单),大立科技是地方第三方了坚实的离开
              </div>
              <div>
                本网站所有信息发布均须有信息发布主管部门进行保密审查(sdflkj 东风路科技分类考试的缴费单),大立科技是地方第三方了坚实的离开
              </div>
              <div>
                本网站所有信息发布均须有信息发布主管部门进行保密审查(sdflkj 东风路科技分类考试的缴费单),大立科技是地方第三方了坚实的离开
              </div>
              <div>
                本网站所有信息发布均须有信息发布主管部门进行保密审查(sdflkj 东风路科技分类考试的缴费单),大立科技是地方第三方了坚实的离开
              </div>
              
            </div>
          </el-row>
          <!-- <el-image :src="require('@/assets/ls.jpg')" lazy fit="fill"></el-image> -->
        </template>
      </container-bar>
    <!-- 广告 -->
    <adverts-bar />
    <!-- 返回顶部 -->
    <back-top />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ContainerBar from 'components/common/layout/ContainerBar'
import HeaderBar from 'components/common/layout/HeaderBar'
import NavBar from 'components/common/navBar/NavBar'
import BackTop from 'components/common/backTop/BackTop'

import MenuBar from 'components/content/menu/MenuBar'
import BackgroundView from 'views/home/components/BackgroundView'
import TopBar from 'views/home/components/TopBar'
// import HomeView from 'views/home/components/HomeView'
import AdvertsBar from 'views/home/components/AdvertsBar'

export default {
  name: 'Home',
  components: {
    ContainerBar,
    HeaderBar,
    NavBar,
    BackTop,

    MenuBar,
    BackgroundView,
    TopBar,
    // HomeView,
    AdvertsBar
  },
  data() {
    return {
      input: '',
      // staticAdURL: { path: '/test' },
      // 通过API调用获取菜单树
      menus: [
        {
          menuCode: '01',
          menuName: '网站首页',
          children: [
            { menuCode: '11', menuName: '选项1' },
            { menuCode: '12', menuName: '选项2' },
            { menuCode: '13', menuName: '选项3' }
          ],
          level: '1'
        },
        {
          menuCode: '2',
          menuName: '公文系统',
          children: [
            { menuCode: '21', menuName: '选项1' },
            { menuCode: '22', menuName: '选项2' },
            { menuCode: '23', menuName: '选项3' }
          ]
        },
        {
          menuCode: '3',
          menuName: '部门链接',
          children: [
            { menuCode: '31', menuName: '选项1' },
            { menuCode: '32', menuName: '选项2' },
            { menuCode: '33', menuName: '选项3' },
            {
              menuCode: '34',
              menuName: '选项4',
              children: [
                { menuCode: '341', menuName: '选项41' },
                { menuCode: '342', menuName: '选项42' }
              ]
            }
          ]
        },
        {
          menuCode: '4',
          menuName: '特色系统'
        },
        {
          menuCode: '5',
          menuName: '省行链接'
        },
        {
          menuCode: '6',
          menuName: '总行链接'
        },
        {
          menuCode: '7',
          menuName: '数据通报'
        },
        {
          menuCode: '8',
          menuName: '通讯录'
        }
      ],
    }
  },
  computed: {
    // 获取图片资源
    getImage() {
      return function(name) {
        return require('assets/images/' + name)
      }
    }
  },
  methods: {
    gotoSiteMap(value) {
      console.log("value::: ", value)
    }
  }
  
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  
  .main {
    .container {
      background-color: rgba(255,255,255,1);

      .header {
        padding: 0;
        margin-top: 60px;
        font-size: 0;
        .el-image {
          width: 100%;
          height: 140px;
        }
      }

      .footer {
        margin: 10px;
        font-size: 0.9rem;
        line-height: 26px;
        // color: ;
      }
    }
    
  }
}
</style>
