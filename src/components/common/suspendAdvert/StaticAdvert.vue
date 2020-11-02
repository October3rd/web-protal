<!--
 * @Author: your name
 * @Date: 2020-10-05 12:40:28
 * @LastEditTime: 2020-10-30 12:16:28
 * @LastEditors: Please set LastEditors
 * @Description: 静态广告
 * @FilePath: \ls-web\src\components\common\suspendAdvert\StaticAdvert.vue
-->
<template>
  <div v-if="pic" class="static-advert" ref="staticAdvert">
      <a class="close-btn" href="javascript:;" style="font-size: 12px" @click.stop="closeView">关闭</a>
      <router-link :to="url" target="_blank"><img class="static-image" :src="getImage(pic)" alt=""></router-link>
  </div>
</template>

<script>
export default {
  name: 'StaticAdvert',
  components: {},
  props: {
    direction: {
      type: String,
      default: 'left'
    },
    fileName: {
      type: String,
      default: ''
    },
    url: {
        type: Object,
        default: function() {
          return { path: '/' }
      }
    }
  },
  data () {
    return {
      clientW: '',
      pic: ''
    }
  },
  updated () {
      this.clientW = document.documentElement.clientWidth
      const that = this
      // 重新计算浏览器窗口宽高
      window.addEventListener('resize', function() {
        return (() => {
          that.clientW = document.documentElement.clientWidth
        })()
      })
    if (this.direction === 'right'){
      this.getPosX()
    }
  },
  computed: {
    getImage() {
      return function(name) {
        return require('assets/images/' + name)
      }
    }
  },
  watch: {
    clientW(newVal, oldVal) {
      if (this.direction === 'right') {
        this.getPosX()
      }
    },
    fileName(val) {
      this.pic = val
    }
  },
  
  methods: {
    getPosX() {
      const advertObj = this.$refs.staticAdvert

      const width = advertObj.offsetWidth
      const posX = this.clientW - width
      advertObj.style.left = posX + 'px'
    },
    
    closeView() {
      const advertObj = this.$refs.staticAdvert
      advertObj.style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
.static-advert {
  position: fixed;
  width: 150px;
  left: 0px;
  top: 30%;
  z-index: 2000;
  
  .static-image {
    width: 100%;
    height: 200px;
  }
}
 
</style>
