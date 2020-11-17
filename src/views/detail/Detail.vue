<!--
 * @Author: your name
 * @Date: 2020-10-19 15:13:36
 * @LastEditTime: 2020-11-02 20:13:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\views\detail\Detail.vue
-->
<template>
  <div class="detail">
    <bread-crumb-bar :bread-crumb-info="breadCrumbInfo" />
    <el-container>
      <el-aside v-if="false" width="256px">
        <el-menu>
          <el-row type="flex" justify="center">
            <b style="line-height: 56px; font-size:18px;"></b>
          </el-row>
          <menu-item v-for="(menuItem, index) in menus" :key="index" :menu-data="menuItem"></menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import BreadCrumbBar from 'components/common/breadcrumb/BreadCrumbBar'
import menuItem from 'components/content/menu/MenuItem'
export default {
  name: 'Detail',
  components: {
    BreadCrumbBar,
    menuItem
  },
  data () {
   return {
     mode: 'vertical',
     breadCrumbInfo: [{ navPath: { path: '/' }, navTitle: '首页' }, { navPath: '', navTitle: '部门主页' }],
     menus: []
   }
  },
}
</script>

<style lang="scss" scoped>
.detail {
  margin: 10px;
}
 
</style>
