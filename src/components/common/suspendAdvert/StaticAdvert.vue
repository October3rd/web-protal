<!--
 * @Author: your name
 * @Date: 2020-10-05 12:40:28
 * @LastEditTime: 2020-10-12 15:37:14
 * @LastEditors: Please set LastEditors
 * @Description: 静态广告
 * @FilePath: \ls-web\src\components\common\suspendAdvert\StaticAdvert.vue
-->
<template>
  <div class="static-advert" ref="staticAdvert">
      <a class="close-btn" href="javascript:;" style="font-size: 12px" @click.stop="closeView">关闭</a>
      <router-link :to="url" target="_blank"><img class="static-image" :src="src" alt=""></router-link>
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
    src: {
      type: String,
      default: function() {
          return require('@/assets/images/staticAdvert.jpg')
      } 
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
     clientW: ''
   }
  },
  watch: {
    clientW(newVal, oldVal) {
      if (this.direction === 'right') {
        this.getPosX()
      }
    }
  },
  mounted () {
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
  width: 180px;
  left: 0px;
  top: 30%;
  
  .static-image {
    width: 100%;
    height: 256px;
  }
}
 
</style>
