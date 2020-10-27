<!--
 * @Author: lhj
 * @Date: 2020-10-12 15:09:13
 * @LastEditTime: 2020-10-12 15:12:29
 * @LastEditors: Please set LastEditors
 * @Description: 漂浮广告
 * @FilePath: \ls-web\src\views\home\components\AdvertsBar.vue
-->
<template>
 <div>
    <dynamic-advert />
    <static-advert :url="{ path: '/test' }" />
    <static-advert :direction="'right'"/>
 </div>
</template>

<script>
import DynamicAdvert from 'components/common/suspendAdvert/DynamicAdvert'
import StaticAdvert from 'components/common/suspendAdvert/StaticAdvert'
 export default {
  name: 'AdvertsBar',
  components: {
    DynamicAdvert,
    StaticAdvert
  },
  data () {
   return {

   }
  },
 }
</script>

<style lang="scss" scoped>

 
</style>
