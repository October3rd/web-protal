<!--
 * @Author: your name
 * @Date: 2020-10-12 14:55:39
 * @LastEditTime: 2020-10-30 14:01:19
 * @LastEditors: Please set LastEditors
 * @Description: 顶部导航条
 * @FilePath: \ls-web\src\views\home\components\TopBar.vue
-->
<template>
  <nav-bar class="top-bar">
    <template #left>
      <el-row type="flex"
              align="middle">
        <el-link type="warning"
                 :underline="false"
                 @click="gotoSiteMap()"
                 style="margin: 0 20px; font-size:16px">网址导航:</el-link>
        <!-- <router-link to="/sitemap">网址导航:</router-link> -->
        <div v-for="(item, i) in linkInfos"
             :key="i">
          <el-link class="rlink-left"
                   type="primary"
                   :href="item.href" target="_blank">
            <img class="logo-left"
                 :src="getImage(item.icon)" />{{item.name}}
          </el-link>
          <el-divider direction="vertical"></el-divider>
        </div>
      </el-row>
    </template>
    <template #center>
      <el-row type="flex"
              justify="end">
        <!-- <marquee-x :send-val="sendVal" :hyper-link="true"/> -->
        <marquee-x :send-val="sendVal" />
        <single-search />
      </el-row>
      <!-- </el-row> -->
    </template>
    <template #right>
      <el-row type="flex"
              align="middle">
        <login />
      </el-row>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import Login from 'components/common/login/Login'
import SingleSearch from 'components/common/search/SingleSearch'
import MarqueeX from 'components/common/marquee/MarqueeX'

// api
import { getFrenquenceLink } from '@/api/links/links.js'
import { getMarqueeXAdvertNews } from '@/api/marquee/marqueeX.js'

export default {
  name: 'TopBar',
  components: {
    NavBar,
    Login,
    SingleSearch,
    MarqueeX
  },
  data() {
    return {
      // 常用导航
      linkInfos: [],
       // 滚动字幕
      sendVal: [],
      // [{ content: '来自东莞市的', url: 'http://www.baidu.com' },]
      //       { content: '来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的', url: 'http://www.baidu.com' },
      //       { content: '来自常州市的', url: 'http://www.baidu.com' },
      //       { content: '来自金华市的', url: 'http://www.baidu.com' }, 
      //       { content: '来自济南市的', url: 'http://www.baidu.com' },
      //       { content: '来自杭州市的', url: 'http://www.baidu.com' }]
    }
  },
  created () {
    
    // 导航链接
    getFrenquenceLink().then(res => {
      // console.log('res::: ', res.data)
      this.linkInfos = res.data
    })
    // 横向滚动条
    getMarqueeXAdvertNews().then(res => {
      this.sendVal = res.data
    })
  },
  mounted () {
    console.log('top-bar mouted')
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
    gotoSiteMap() {
      // const param = { name: 'SiteMap' }
      const param = { path: '/sitemap' }
      // console.log('this.$router.push(param)::: ', this.$router.push(param))
      this.$router.push(param)
      // this.$emit('goto', this.$router.push(param))
    },
  }
}
</script>

<style lang="scss" scoped>
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
          font-size: 16px;
        }
      }
    }
</style>
