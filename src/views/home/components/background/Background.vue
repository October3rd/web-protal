<!--
 * @Author: lhj
 * @Date: 2020-10-12 14:43:45
 * @LastEditTime: 2020-10-26 14:25:55
 * @LastEditors: Please set LastEditors
 * @Description: 背景图
 * @FilePath: \ls-web\src\views\home\components\BackgroundView.vue
-->
<template>
   <div class="background">
      <img :src="getImage(backgroundImage)" width="100%" height="100%" alt="" />
    </div>
</template>

<script>
 export default {
  name: 'Background',
  components: {

  },
  data () {
   return {
      // 背景图
      backgroundImage: 'background1.jpg',
   }
  },
  computed: {
    // 获取图片资源
    getImage() {
      return function(name) {
        return name ? require('assets/images/' + name) : ''
      }
    }
  }
 }
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}

</style>
