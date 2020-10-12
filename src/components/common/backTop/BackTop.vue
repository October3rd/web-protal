<!--
 * @Author: your name
 * @Date: 2020-10-08 15:21:16
 * @LastEditTime: 2020-10-08 16:25:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\components\common\backTop\BackTop.vue
-->
<template>
 <div>
  <el-backtop :bottom=90>
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa; 
      }"
    >
      UP
    </div>
  </el-backtop>
  <el-backtop style="background-color: #f2f5f6;"></el-backtop>
 </div>
</template>

<script>
 export default {
  name: 'BackTop',
  components: {

  },
  data () {
   return {

   }
  },
 }
</script>

<style lang="scss" scoped>

 
</style>
