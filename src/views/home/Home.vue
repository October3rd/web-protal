<template>
  <div class="home">
    <!-- 背景图 -->
    <background />
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
            <router-view :key="key"></router-view>
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
import Background from 'views/home/components/background/Background'
import TopBar from 'views/home/components/topbar/TopBar'
// import HomeView from 'views/home/components/HomeView'
import AdvertsBar from 'views/home/components/advertbar/AdvertsBar'

// api
import { getHomeMenu } from '@/api/menus/menus.js'

export default {
  name: 'Home',
  components: {
    ContainerBar,
    HeaderBar,
    NavBar,
    BackTop,

    MenuBar,
    Background,
    TopBar,
    // HomeView,
    AdvertsBar
  },
  data() {
    return {
      input: '',
      // staticAdURL: { path: '/test' },
      // 通过API调用获取菜单树
      menus: []
      // menus: 
    }
  },
  created () {
    getHomeMenu().then(res => {
      this.menus = res.data.menus
    })
  },
  computed: {
    // 获取图片资源
    getImage() {
      return function(name) {
        return require('assets/images/' + name)
      }
    },
     key() {
      return this.$route.path
    }
  },
  methods: {
    gotoSiteMap(value) {
      console.log('value::: ', value)
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
