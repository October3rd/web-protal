<!--
 * @Author: lhj
 * @Date: 2020-10-19 09:10:54
 * @LastEditTime: 2020-10-19 16:41:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\components\common\breadcrumb\BreadCrumbBar.vue
-->
<template>
  <el-row type="flex" justify="start">
    <b style="font-size: 14px; line-height: 20px">您的位置：</b>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in breadCrumbInfo" :key="index" :to="item.navPath">{{ item.navTitle }}</el-breadcrumb-item>
    </el-breadcrumb>
  </el-row>
</template>

<script>
 export default {
  name: 'BreadCrumbBar',
  components: {

  },
  props: {
    breadCrumbInfo: {
      type: Array,
      default: function() {
        return [{ navPath: { path: '/' }, navTitle: '首页' }]
      }
    }
  },
  data () {
   return {

   }
  },
 }
</script>

<style lang="scss" scoped>

  .el-breadcrumb {
    line-height: 20px;
  }
 
</style>
