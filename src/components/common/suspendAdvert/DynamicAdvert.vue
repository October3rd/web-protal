<!--
 * @Author: lhj
 * @Date: 2020-10-05 12:39:32
 * @LastEditTime: 2020-10-31 17:37:23
 * @LastEditors: Please set LastEditors
 * @Description: 动态悬浮碰撞广告效果
 * @FilePath: \ls-web\src\components\common\suspendAdvert\DynamicAdvert.vue
-->

<template>
  <div v-if="pic" class="dynamic-advert" ref="dynamicAdvert" @mouseenter="mouseOver" @mouseleave="mouseLeave">
      <router-link :to="url" target="_blank"><img class="dynamic-image" :src="getImage(pic)" alt="" /></router-link>
      <a class="close-btn" href="javascript:;" @click.stop="closeView">☒</a>
  </div>
</template>

<script>
export default {
  name: 'DynamicAdvert',
  components: {},
  props: {
    fileName: {
      type: String,
      default: ''
    },
    stepx: {
      type: Number,
      default: 1
    },
    stepy: {
      type: Number,
      default: 1
    },
    speed: {
      type: Number,
      default: 20
    },
    url: {
      type: Object,
      default: function() {
        return { path: '/' }
      }
    }
  },
  data() {
    return {
      image: '',
      width: '',
      height: '',
      posX: '',
      posY: '',
      clientW: '',
      clientH: '',
      stepX: this.stepx,
      stepY: this.stepy,
      interval: null,
      pic: ''
    }
  },
  watch: {
    clientW(newVal, oldVal) {
      this.clientW = newVal
    },
    clientH(newVal, oldVal) {
      this.clientH = newVal
    },
    fileName(val) {
      this.pic = val
    }
  },
  computed: {
    getImage() {
      return function(name) {
        return require('assets/images/' + name)
      }
    }
  },
  updated () {
    this.clientW = document.documentElement.clientWidth
    this.clientH = document.documentElement.clientHeight
    const that = this
    // 重新计算浏览器窗口宽高
    window.addEventListener('resize', function() {
      return (() => {
        that.clientW = document.documentElement.clientWidth
        that.clientH = document.documentElement.clientHeight
      })()
    })
    this.imageInfo()
    this.interval = setInterval(() => {
      this.move()
    }, this.speed)
  },
  beforeDestroy () {
    // 页面关闭清除定时器
    clearInterval(this.interval)
    // 清除定时器标识
    this.nowTime = null
  },
  methods: {
    // 图片基本信息
    imageInfo() {
      this.image = this.$refs.dynamicAdvert
      this.width = this.image.offsetWidth
      this.height = this.image.offsetHeight
      
      this.posX = parseInt(this.image.getBoundingClientRect().left)
      this.posY = parseInt(this.image.getBoundingClientRect().top)
    },
    // 图片移动轨迹计算
    move() {
      if (this.posX + this.width > this.clientW) {
        this.posX = this.clientW - this.width
        this.stepX = -this.stepX
      }
      if (this.posX < 0) {
        this.posX = 0
        this.stepX = -this.stepX
      }

      if (this.posY + this.height > this.clientH) {
        this.posY = this.clientH - this.height
        this.stepY = -this.stepY
      }
      if (this.posY < 0) {
        this.posY = 0
        this.stepY = -this.stepY
      }
      this.posX += this.stepX
      this.posY += this.stepY
      this.changePos(this.image, this.posX, this.posY)
    },
    // 改变图片位置
    changePos(img, x, y) {
        img.style.left = x + 'px'
        img.style.top = y + 'px'
    },
    // 关闭图片
    closeView() {
      const advertObj = this.$refs.dynamicAdvert
      advertObj.style.display = 'none'
    },
    // 鼠标放在图片上，图片停止移动
    mouseOver() {
      clearInterval(this.interval)
    },
    // 鼠标移出图片范围,图片继续移动
    mouseLeave() {
      this.interval = setInterval(() => {
        this.move()
      }, this.speed)
    }
  }


}
</script>

<style lang="scss" scoped>
.dynamic-advert {
    position: fixed;
    left: 0px;
    top: 60px;
    width: 220px;
    height: 120px;
    z-index: 2001;
    .dynamic-image {
      width: 100%;
      height: 100%;
    }
    .close-btn {
      position: absolute;
      right: 0px;
      top: -3px;

      text-decoration:none;
    }
   }
</style>
