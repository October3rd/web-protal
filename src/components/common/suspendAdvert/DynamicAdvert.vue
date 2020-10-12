<!--
 * @Author: lhj
 * @Date: 2020-10-05 12:39:32
 * @LastEditTime: 2020-10-12 15:37:04
 * @LastEditors: Please set LastEditors
 * @Description: 动态悬浮碰撞广告效果
 * @FilePath: \ls-web\src\components\common\suspendAdvert\DynamicAdvert.vue
-->
<template>
  <div class="dynamic-advert" ref="dynamicAdvert" @mouseenter="mouseOver" @mouseleave="mouseLeave">
      <router-link :to="url" target="_blank"><img class="dynamic-image" :src="src" alt="" /></router-link>
      <a class="close-btn" href="javascript:;" @click.stop="closeView">☒</a>
  </div>
</template>

<script>
  export default {
    name: 'DynamicAdvert',
    components: {},
    props: {
      src: {
        type: String,
        default: function() {
          return require('@/assets/images/dynamicAdvert.jpg')
        } 
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
        interval: null
      }
    },
     watch: {
      clientW(newVal, oldVal) {
        this.clientW = newVal
      },
      clientH(newVal, oldVal) {
        this.clientH = newVal
      }
    },
    computed: {
      // getImage() {
      //   return require('/')
      // }
    },
    mounted() {
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
    /*
     ****** 元素视图属性
     * offsetWidth 水平方向 width + 左右padding + 左右border-width
     * offsetHeight 垂直方向 height + 上下padding + 上下border-width
     * 
     * clientWidth 水平方向 width + 左右padding
     * clientHeight 垂直方向 height + 上下padding
     * 
     * offsetTop 获取当前元素到 定位父节点 的top方向的距离
     * offsetLeft 获取当前元素到 定位父节点 的left方向的距离
     * 
     * scrollWidth 元素内容真实的宽度，内容不超出盒子高度时为盒子的clientWidth
     * scrollHeight 元素内容真实的高度，内容不超出盒子高度时为盒子的clientHeight
     * 
     ****** 元素视图属性结束
     * 
     ****** Window视图属性（低版本IE浏览器[<IE9]不支持） 【自测包含滚动条，但网络教程都说不包含？？？】
     * innerWidth 浏览器窗口可视区宽度（不包括浏览器控制台、菜单栏、工具栏） 
     * innerHeight 浏览器窗口可视区高度（不包括浏览器控制台、菜单栏、工具栏）
     * ***** Window视图属性结束
     * 
     ****** Document文档视图
     * （低版本IE的innerWidth、innerHeight的代替方案）
     * document.documentElement.clientWidth 浏览器窗口可视区宽度（不包括浏览器控制台、菜单栏、工具栏、滚动条）
     * document.documentElement.clientHeight 浏览器窗口可视区高度（不包括浏览器控制台、菜单栏、工具栏、滚动条）
     * 
     * document.documentElement.offsetHeight 获取整个文档的高度（包含body的margin）
     * document.body.offsetHeight 获取整个文档的高度（不包含body的margin）
     * 
     * document.documentElement.scrollTop 返回文档的滚动top方向的距离（当窗口发生滚动时值改变）
     * document.documentElement.scrollLeft 返回文档的滚动left方向的距离（当窗口发生滚动时值改变）
     ****** Document文档视图结束
     * 
     ****** 元素方法
     * 1. getBoundingClientRect() 获取元素到body
     *  bottom: 元素底边（包括border）到可视区最顶部的距离
     *  left: 元素最左边（不包括border）到可视区最左边的距离
     *  right: 元素最右边（包括border）到可视区最左边的距离
     *  top: 元素顶边（不包括border）到可视区最顶部的距离
     *  height: 元素的offsetHeight
     *  width: 元素的offsetWidth
     *  x: 元素左上角的x坐标 
     *  y: 元素左上角的y坐标 
     * 
     * 2. scrollIntoView() 让元素滚动到可视区
     * 
     * ***** 元素方法结束
     * 
     */
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
    top: 50px;
    width: 220px;
    height: 120px;
    z-index: 2000;
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
