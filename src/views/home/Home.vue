<template>
  <div class="home">
    <div class="background">
      <img :src="backgroundImage" width="100%" height="100%" alt="" />
    </div>
    <div class="main">
      <nav-bar class="top-bar">
        <template #left>
          <el-row type="flex" align="middle">
            <el-link type="warning" :underline="false" style="margin: 0 0 0 20px; font-size:16px" >常用网址:</el-link>
            <el-link class="rlink-left" type="primary" v-for="(item, i) in linkInfos" :key="i" :href="item.href">
              <img class="logo-left" :src="getImage(item.icon)" />{{item.name}}
            </el-link>
          </el-row>
        </template>
        <template #center>
          <!-- <el-row type="flex" justify="end"> -->
          <el-row type="flex" justify="end">
            <!-- <marquee-x :send-val="sendVal" :hyper-link="true"/> -->
            <marquee-x :send-val="sendVal" />
            <single-search />
          </el-row>
          <!-- </el-row> -->
        </template>
        <template #right>
          <el-row type="flex" align="middle">
            <login />
          </el-row>
        </template> 
      </nav-bar>
      <container-bar class="container">
        <template #header>
          <header-bar class="header">
            <el-image :src="getImage('ls.jpg')" lazy></el-image>
            <nav-bar>
              <template #center>
                <menu-bar :menus="menus" />
              </template>
            </nav-bar>
          </header-bar>
        </template>
        <template #main>
          <dynamic-advert />
          正文
          <el-row type="flex" justify="start" style="height: 100px">
              <el-card style="width: 200px;">
                <marquee-y :send-val="sendVal" />
              </el-card>
          </el-row>
        </template>
        <template #footer>
          <!-- 页脚 -->
          <!-- <el-image :src="require('@/assets/ls.jpg')" lazy fit="fill"></el-image> -->
        </template>
      </container-bar>
    <static-advert :url="{ path: '/test' }" />
    <static-advert :direction="'right'"/>
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
import DynamicAdvert from 'components/common/suspendAdvert/DynamicAdvert'
import StaticAdvert from 'components/common/suspendAdvert/StaticAdvert'
import Login from 'components/common/login/Login'
import SingleSearch from 'components/common/search/SingleSearch'
import MarqueeX from 'components/common/marquee/MarqueeX'
import MarqueeY from 'components/common/marquee/MarqueeY'

import MenuBar from 'components/content/home/menu/MenuBar'
// import CardBar from 'components/content/home/card/CardBar'

export default {
  name: 'Home',
  components: {
    ContainerBar,
    HeaderBar,
    NavBar,
    BackTop,
    DynamicAdvert,
    StaticAdvert,
    Login,
    SingleSearch,
    MarqueeX,

    MarqueeY,
    MenuBar,
    // CardBar
  },
  data() {
    return {
      // 背景图
      backgroundImage: require('assets/images/background1.jpg'),
      input: '',
      // staticAdURL: { path: '/test' },
      // 常用导航
      linkInfos: [{ href: 'http://www.baidu.com', name: '总行', icon: 'logo.png' }, 
      { href: 'http://www.baidu.com', name: '省行', icon: 'logo.png' }],
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
      // 滚动字幕
      sendVal: [{ content: '来自东莞市的', url: 'http://www.baidu.com' },
            { content: '来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的', url: 'http://www.baidu.com' },
            { content: '来自常州市的', url: 'http://www.baidu.com' },
            { content: '来自金华市的', url: 'http://www.baidu.com' },
            { content: '来自贵阳市的', url: 'http://www.baidu.com' },
            { content: '来自长春市的', url: 'http://www.baidu.com' },
            { content: '来自泉州市的', url: 'http://www.baidu.com' },
            { content: '来自南昌市的', url: 'http://www.baidu.com' },
            { content: '来自南京市的', url: 'http://www.baidu.com' },
            { content: '来自天津市的', url: 'http://www.baidu.com' },
            { content: '来自宁波市的', url: 'http://www.baidu.com' },
            { content: '来自嘉兴市的', url: 'http://www.baidu.com' },
            { content: '来自长沙市的', url: 'http://www.baidu.com' },
            { content: '来自济南市的', url: 'http://www.baidu.com' },
            { content: '来自杭州市的', url: 'http://www.baidu.com' }]
    }
  },
  computed: {
    // 获取图片资源
    getImage() {
      return function(name) {
        return require('assets/images/' + name)
      }
    }
  }
  
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  
  .background {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  .main {
    .top-bar {
      position: fixed;
      width: 100%;
      height: 60px;
      line-height: 60px;
      z-index: 2000;

      .el-row {
        height: 60px;
        
        .logo-left {
          vertical-align: middle;
          width: 16px;
          height: 16px;
        }
        .rlink-left {
          margin-left: 10px;
          font-size: 16px;
        }
      }
    }
    .header {
      margin-top: 60px;
      font-size: 0;
      .el-image {
        width: 100%;
        height: 140px;
      }
    }
    
  }
}
</style>
