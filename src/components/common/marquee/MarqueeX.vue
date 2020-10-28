<!--
 * @Author: lhj
 * @Date: 2020-10-09 15:59:54
 * @LastEditTime: 2020-10-28 14:25:06
 * @LastEditors: Please set LastEditors
 * @Description: 左右文字跑马灯（marquee）
 * @FilePath: \ls-web\src\components\common\marquee\MarqueeX.vue
-->

<template>
  <div ref="outBox" class="out-box">
    <div ref="inBox" class="in-box"  @mouseenter="mouseOver" @mouseleave="mouseLeave">
      <div class="show-list" v-for="(item,index) in sendVal" :key='index' ref='showList'>
        <el-link v-if="hyperLink" class="content" :underline="false" :href="item.url">{{index+1}}.{{item.content}}</el-link>
        <span v-else class="content">{{index+1}}.{{item.content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarqueeX',
  props: {
    sendVal: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 偏移量
    step: {
      type: Number,
      default: 0.5
    },
    // 定时器速度
    speed: {
      type: Number,
      default: 20
    },
    // 超链接
    hyperLink: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 定时器标识
      nowTime: null,
      startDis: 0,
      endDis: 0,
      inBox: null,
      outBox: null,
      // 每一个内容的宽度
      disArr: [],
      showVal: []
    }
  },
  mounted () {
    // 获取样式对象（内容列表数组）
    this.$nextTick(() => {
      const items = this.$refs.showList
      const arr = []
      // 因为设置的margin值一样，所以取第一个就行。
      const margin = this.getMargin(items[0])
      items.forEach(item => {
        // 把宽度和 margin 加起来就是每一个元素需要移动的距离
        arr.push(item.clientWidth + margin)
      })
      this.disArr = arr
      this.initMove()
    })
  },
  beforeDestroy () {
    // 页面关闭清除定时器
    clearInterval(this.nowTime)
    // 清除定时器标识
    this.nowTime = null
  },
  methods: {
    // 获取margin属性
    getMargin (obj) {
      var marg = window.getComputedStyle(obj, null)['margin-right']
      marg = marg.replace('px', '')
      return Number(marg) // 强制转化成数字
    },
    
    initMove() {
      // 获取对象及设置宽度
      this.outBox = this.$refs.outBox
      this.inBox = this.$refs.inBox
      const outBoxWidth = this.outBox.getBoundingClientRect().width
      // 获取总长度
      const contentWidth = this.disArr.reduce((pre, cur) => {
        return pre + cur
      }, 0)
      this.inBox.style.width = `${outBoxWidth + contentWidth}px`
      // 设置元素初始进入位置
      this.inBox.style.left = `${outBoxWidth}px`
      // 初始化文字开始、结束
      this.startDis = Number(outBoxWidth)
      this.endDis = Number(contentWidth)
      
      this.nowTime = setInterval(() => {
        this.moveLeft()
      }, this.speed)
    },

    // 移动动画效果方法
    moveLeft () {
        const newOutBoxWidth = Number(this.outBox.getBoundingClientRect().width)
        this.startDis = this.startDis > newOutBoxWidth ? newOutBoxWidth : this.startDis -= this.step
        if (this.startDis <= -this.endDis) {
          this.startDis = newOutBoxWidth
        }
        this.inBox.style = `transform: translateX(${this.startDis}px)`
    },

    // 鼠标放在图片上，图片停止移动
    mouseOver() {
      clearInterval(this.nowTime)
    },
    
    // 鼠标移出图片范围,图片继续移动
    mouseLeave() {
      this.nowTime = setInterval(() => {
        this.moveLeft()
      }, this.speed)
    }

    // loop(args) {
    //   if (args > 0) return true
    // }
  }
}
</script>

<style lang="scss" scoped>
.out-box{
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 10px;
  overflow: hidden;
  .in-box{
    position: absolute;
    white-space: nowrap;
    text-align: start;
    .show-list{
      margin-right: 25px;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      .content{
        color: #FF8900;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
