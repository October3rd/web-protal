<!--
 * @Author: lhj
 * @Date: 2020-09-28 16:20:03
 * @LastEditTime: 2020-10-19 20:02:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\components\common\layout\home\MenuBar.vue
-->

<template>
    <el-menu mode="horizontal" :background-color="bgColor" 
      :text-color="textColor" 
      :active-text-color="activeTextColor" 
      @select="handleSelect">
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
    bgColor: {
      type: String,
      default: '#B6A587'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    activeTextColor: {
      type: String,
      default: '#F56C6C'
    },
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
