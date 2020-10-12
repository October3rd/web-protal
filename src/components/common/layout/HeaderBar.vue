<!--
 * @Author: your name
 * @Date: 2020-09-28 16:10:13
 * @LastEditTime: 2020-10-09 15:35:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\components\common\layout\HeaderBar.vue
-->

<template>
  <div>
    <!-- <slot name="image"></slot>
    <slot name="nav"></slot> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
