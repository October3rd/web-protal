<!--
 * @Author: your name
 * @Date: 2020-09-29 16:50:40
 * @LastEditTime: 2020-10-09 12:34:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\components\common\home\NavBar.vue
-->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
  background-color: #F3F3F3;
    
  .center {
    flex: 1;
  } 
}

</style>
