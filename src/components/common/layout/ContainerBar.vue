<!--
 * @Author: your name
 * @Date: 2020-09-28 15:51:13
 * @LastEditTime: 2020-10-16 08:57:51
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
  margin-left: calc(50% - 600px);
  width: 1200px;
  .el-header {
    padding: 0;
    height: auto !important;
    // background-color: rgba(232,242,246,0.5);
  }
  .el-main {
    padding: 0;
    width: 100%;
    height: 100%;
    // background-color: rgb(248, 226, 226);
  }
  .el-footer {
    padding: 0;
    height: auto !important;
    background-color:#75B9FF;
  }
}
</style>
