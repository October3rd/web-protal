<!--
 * @Author: lhj
 * @Date: 2020-10-12 15:09:13
 * @LastEditTime: 2020-10-31 17:36:38
 * @LastEditors: Please set LastEditors
 * @Description: 漂浮广告
 * @FilePath: \ls-web\src\views\home\components\AdvertsBar.vue
-->
<template>
  <div>
    <dynamic-advert :url="dynamicLinkPath" :file-name="dynamicFileName" />
    <static-advert :url="staticLinkPath" :file-name="staticFileName" />
    <static-advert :direction="'right'" :url="staticLinkPath" :file-name="staticFileName" />
  </div>
</template>

<script>
import DynamicAdvert from 'components/common/suspendAdvert/DynamicAdvert'
import StaticAdvert from 'components/common/suspendAdvert/StaticAdvert'

// api
import { getStaticAdvertImage } from '@/api/images/advertImages.js'
import { getDynamicAdvertImage } from '@/api/images/advertImages.js'

export default {
  name: 'AdvertsBar',
  components: {
    DynamicAdvert,
    StaticAdvert
  },
  data () {
   return {
     dynamicFileName: '',
     dynamicFilePath: '',
     dynamicLinkPath: {},
     staticFileName: '',
     staticFilePath: '',
     staticLinkPath: {},
   }
  },
  created () {
    getDynamicAdvertImage()
      .then(res => {
        this.dynamicFileName = res.data.imageInfo.fileName
        this.dynamicLinkPath = { 'path': res.data.linkPath }
        // console.log('created ---getDynamicAdvertImage>>', this.dynamicFileName)
        // console.log('created ---getDynamicAdvertImage>>', this.dynamicLinkPath)

      })
    getStaticAdvertImage()
      .then(res => {
        // console.log('staticAdvertImage>>>>>', res.data)
        this.staticFileName = res.data.imageInfo.fileName
        this.staticLinkPath = { 'path': res.data.linkPath }
      })
  }
}
</script>

<style lang="scss" scoped>

 
</style>
