<!--
 * @Author: your name
 * @Date: 2020-09-28 15:51:13
 * @LastEditTime: 2020-10-09 15:35:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\components\common\layout\ContainerBar.vue
-->

<template>
  <el-container>
    <el-header>
      <slot name="header"></slot>
    </el-header>
    <el-main>
      <slot name="main"></slot>
    </el-main>
    <el-footer>
      <slot name="footer"></slot>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Container',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  // 注意：calc函数中计算符号前后必须有空格
  margin-left: calc(50% - 550px);
  width: 1100px;
  .el-header {
    height: auto !important;
    // background-color: rgba(232,242,246,0.5);
  }
  // .el-main {
  //   background-color: rgb(248, 226, 226);
  // }
  .el-footer {
    height: auto !important;
    background-color: #b3c0d1;
  }
}
</style>
