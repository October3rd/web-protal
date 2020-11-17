<!--
 * @Author: lhj
 * @Date: 2020-10-15 19:42:05
 * @LastEditTime: 2020-11-02 10:19:58
 * @LastEditors: Please set LastEditors
 * @Description: 网址导航
 * @FilePath: \ls-web\src\views\sitemap\SiteMap.vue
-->

<template>
  <div class="sitemap">
    <bread-crumb-bar :bread-crumb-info="breadCrumbInfo" />
    <div>
      <el-divider><b>分行网站</b></el-divider>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-link v-for="(item, index) in cityInfos" :key="index" :underline="false" @click.native="gotoURL(item.path, item.flag)"><li>{{ item.title }}</li></el-link>
        </el-col>
        <el-col :span="8">
          <el-link v-for="(item, index) in broCityInfos" :key="index" :underline="false"><li>{{ item.title }}</li></el-link>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-divider><b>省行网站</b></el-divider>
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <el-link v-for="(item, index) in provInfos" :key="index" :underline="false" @click.native="gotoURL(item.path, item.flag)"><li>{{ item.title }}</li></el-link>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-divider><b>总行网站</b></el-divider>
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <el-link v-for="(item, index) in headOfficeInfos" :key="index" :underline="false" @click.native="gotoURL(item.path, item.flag)"><li>{{ item.title }}</li></el-link>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-divider><b>软件天地</b></el-divider>
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <el-link v-for="(item, index) in softwareInfos" :key="index" :underline="false" @click.native="gotoURL(item.path, item.flag)"><li>{{ item.title }}</li></el-link>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-divider><b>热点专栏</b></el-divider>
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <el-link v-for="(item, index) in hotTopicInfos" :key="index" :underline="false" @click.native="gotoURL(item.path, item.flag)"><li>{{ item.title }}</li></el-link>
        </el-col>
      </el-row>
    </div>
    <!-- <el-row></el-row>
    <el-row></el-row> -->
  </div>
</template>

<script>
import BreadCrumbBar from 'components/common/breadcrumb/BreadCrumbBar'
// api
import * as linksAPI from '@/api/links/links.js'
export default {
  name: 'SiteMap',
  components: {
    BreadCrumbBar,
  },
  data () {
   return {
      breadCrumbInfo: [{ navPath: { path: '/' }, navTitle: '首页' }, { navPath: '', navTitle: '网址导航' }],
      cityInfos: [],
      broCityInfos: [],
      provInfos: [],
      headOfficeInfos: [],
      softwareInfos: [],
      hotTopicInfos: []
   }
  },
  created() {
    linksAPI.getCityBranch().then(res => {
      this.cityInfos = res.data
    })
    linksAPI.getBroCityBranch().then(res => {
      this.broCityInfos = res.data
    })
    linksAPI.getProvBranch().then(res => {
      this.provInfos = res.data
    })
    linksAPI.getHeadOffice().then(res => {
      this.headOfficeInfos = res.data
    })
    linksAPI.getSoftware().then(res => {
      this.softwareInfos = res.data
    })
    linksAPI.getHotTopic().then(res => {
      this.hotTopicInfos = res.data
    })
  },
  methods: {
    gotoURL(path, outerFlag) {
      console.log('gotoURL>>>>>>>', path, outerFlag)
      if (outerFlag) this.openTabs(path)
      this.$router.push({ path: path })
    },
     openTabs(url) {
       const openNewLink = window.open('_blank')
       openNewLink.location = url
     }
    
  }
}
</script>

<style lang="scss" scoped>
.sitemap {
  margin: 10px;

  .el-row {
    width: 100%;
    height: 100%;

    li {
      width: 135px ;
      margin: 10px 30px;
      word-break:keep-all;  /* 不换行 */
      white-space:nowrap; /* 不换行 */
      overflow:hidden;  /* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow:ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    }
  }

  b {
    font-size: 1.2rem; 
    color: #75B9FF
  }
  
}
</style>
