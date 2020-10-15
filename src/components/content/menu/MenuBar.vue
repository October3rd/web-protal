<!--
 * @Author: lhj
 * @Date: 2020-09-28 16:20:03
 * @LastEditTime: 2020-10-09 15:35:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\components\common\layout\home\MenuBar.vue
-->

<template>
    <el-menu mode="horizontal" background-color="#B6A587" text-color="#fff" active-text-color="#F56C6C" @select="handleSelect">
      <el-row type="flex" justify="center">
        <menu-item v-for="(menuItem, index) in menus" :key="index" :menu-data="menuItem"></menu-item>
      </el-row>
    </el-menu>
</template>

<script>
import MenuItem from './MenuItem'
export default {
  name: 'Menu',
  components: {
    MenuItem
  },
  props: {
    menus: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    menuSpan() {
      return 24 / this.menus.length
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('key:', key, 'keyPath', keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
