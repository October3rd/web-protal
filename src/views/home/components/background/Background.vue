<!--
 * @Author: lhj
 * @Date: 2020-10-12 14:43:45
 * @LastEditTime: 2020-10-28 15:09:23
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
import { getBackground } from '@/api/images/background.js'
export default {
  name: 'Background',
  components: {

  },
  data () {
    return {
      // 背景图 background1.jpg
      backgroundImage: 'bg.jpg',
    }
  },
  created () {
    getBackground().then(res => {
      // console.log('getBackgroundImage', res)
      this.backgroundImage = res.data.fileName
      this.backgroundImage = this.backgroundImage === 'bg.jpg' ? this.backgroundImage : 'bg.jpg'
    })
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
  background-color: #F3F3F3;
}

</style>
