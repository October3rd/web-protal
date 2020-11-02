<!--
 * @Author: lhj
 * @Date: 2020-09-28 16:20:03
 * @LastEditTime: 2020-10-30 10:46:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\components\common\layout\home\MenuBar.vue
-->

<template>
    <el-menu mode="horizontal" :background-color="bgColor" 
      :text-color="textColor" 
      :active-text-color="activeTextColor" 
      @select="handleSelect"
     >
      <el-row type="flex" justify="center">
        <menu-item v-for="(menuItem, index) in menuData" :key="index" :menu-data="menuItem"></menu-item>
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
    return {
      menuData: this.menus
    }
  },
  computed: {
    menuSpan() {
      return 24 / this.menus.length
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('key:', key, 'keyPath', keyPath)
      const keyList = [...keyPath]
      const array = this.findURL(keyList, this.menuData)
      console.log('url>>>', array[0].url)
      const path = array[0].path
      const flag = array[0].flag
      const to = {
        'path': path,
        'query': ''
      }
      if (flag) {
        // console.log('flag=1,', to)
        // window.location.href = 'http://www.baidu.com'
        this.openTabs(to)
      } else {
        // console.log('flag=0,', to)
        this.$router.push(to)
      }
    },
    gotoLinks() {
      // alert('gotoLinks')
      console.log('goto_links>>>>')
    },
    
    findURL(keyList, array) {
      const key = keyList.shift()
      const newArray = array.filter(item => {
        return key === item.id
      })
      if (newArray[0].children) {
        return this.findURL(keyList, newArray[0].children)
      } else {
        return newArray
      }
    },
    openTabs(to) {
      const windowsObj = window.open('_blank')
      windowsObj.location = to.path
      // const routeURL = this.$router.resolve({ path: to.path, query: to.query })
      // window.open(routeURL.href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
