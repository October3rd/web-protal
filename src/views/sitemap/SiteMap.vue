<!--
 * @Author: lhj
 * @Date: 2020-10-15 19:42:05
 * @LastEditTime: 2020-10-19 11:23:18
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
          <el-link v-for="index in 20" :key="index" :underline="false"><li style="margin: 10px 30px">丽水分行信息站</li></el-link>
        </el-col>
        <el-col :span="8">
          <el-link v-for="index in 10" :key="index" :underline="false"><li style="margin: 10px 30px">丽水分行信息站</li></el-link>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-divider><b>省行网站</b></el-divider>
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <el-link v-for="index in 20" :key="index" :underline="false"><li style="margin: 10px 30px">丽水分行信息站</li></el-link>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-divider><b>总行网站</b></el-divider>
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <el-link v-for="index in 20" :key="index" :underline="false"><li style="margin: 10px 30px">丽水分行信息站</li></el-link>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-divider><b>软件天地</b></el-divider>
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <el-link v-for="index in 20" :key="index" :underline="false"><li style="margin: 10px 30px">丽水分行信息站</li></el-link>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-divider><b>热点专栏</b></el-divider>
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <el-link v-for="index in 20" :key="index" :underline="false"><li style="margin: 10px 30px">丽水分行信息站</li></el-link>
        </el-col>
      </el-row>
    </div>
    <!-- <el-row></el-row>
    <el-row></el-row> -->
  </div>
</template>

<script>
import BreadCrumbBar from 'components/common/breadcrumb/BreadCrumbBar'
 export default {
  name: 'SiteMap',
  components: {
    BreadCrumbBar,
  },
  data () {
   return {
     breadCrumbInfo: [{ navPath: { path: '/' }, navTitle: '首页' }, { navPath: '', navTitle: '网址导航' }]
   }
  },
 }
</script>

<style lang="scss" scoped>
.sitemap {
  margin: 10px;

  .el-row {
    width: 100%;
    height: 100%;
  }

  b {
    font-size: 1.2rem; 
    color: #75B9FF
  }
  
}
</style>
