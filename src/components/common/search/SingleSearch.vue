<!--
 * @Author: lhj
 * @Date: 2020-10-09 14:24:43
 * @LastEditTime: 2020-10-09 15:08:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\components\common\search\SingleSearch.vue
-->
<template>
   <el-row class="search" type="flex" align="middle">
     <el-input v-model="searchVal" placeholder="搜索内容"></el-input>
     <el-button type="primary" icon="el-icon-search" round @click=" searchClick()">搜索</el-button>
   </el-row>
</template>

<script>
 export default {
  name: 'SingleSearch',
  components: {

  },
  data () {
   return {
      searchVal: ''
   }
  },
  methods: {
    searchClick() {
      alert(`搜索内容:${this.searchVal}`)
    }
  }
 }
</script>

<style lang="scss" scoped>
.search {
  margin-right: 10px;

  .el-input {
    margin-right: 10px;
    width: 300px;
  }
}
</style>
