<!--
 * @Author: lhj
 * @Date: 10-12 15:39:55
 * @LastEditTime: 2020-10-15 16:38:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\components\content\home\card\CardList.vue
-->
<template>
  <div class="card-list">
    <slot></slot>
  </div>
</template>

<script>
 export default {
  name: 'CardsList',
  components: {},
  props: {
    cardInfos: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data () {
   return {
   }
  }
 }
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  width: 100%;
  margin: 5px 0;
}
</style>
