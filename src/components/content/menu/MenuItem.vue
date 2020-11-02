<!--
 * @Author: lhj
 * @Date: 2020-10-05 08:50:32
 * @LastEditTime: 2020-10-29 11:08:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\components\content\home\MenuItem.vue
-->
<template>
  <div class="menu-item">
    <el-menu-item v-if="!hasChild" :index="menuData.id">{{ menuData.title }}</el-menu-item>
    <el-submenu v-if="hasChild" :index="menuData.id" >
      <template slot="title">{{ menuData.title }}</template>
      <menu-item v-for="(item, index) in menuData.children" :key="index" :menuData="item"></menu-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  components: {},
  props: {
    menuData: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    // 判断是否存在子目录
    hasChild() {
      return this.menuData.children && this.menuData.children.length
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-item {
  /* 导航条均分 */
  width: 100%;
}
</style>
