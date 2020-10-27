<!--
 * @Author: your name
 * @Date: 2020-10-19 15:18:49
 * @LastEditTime: 2020-10-20 09:15:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\views\detail\components\DetailNews.vue
-->
<template>
  <div>
    <div style="display: flex; margin: 10px 0" v-for="index in 10" :key="index">
      <div style="width: 62%">
        <span class="content el-icon-document" @click="gotoDetail()">
          东风路科东风路科技戮空间是地方离开家生的类科技水电费来看圣诞节发施蒂利克副驾驶的弗兰克斯京东方
        </span>
      </div> 
      <div style="width: 10%; text-align: center; color: #808080">大手大脚</div>
      <div style="width: 16%; text-align: center; color: #808080">个人电子银行</div>
      <div style="width: 12%; text-align: center; color: #808080">2018-11-11</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailNews',
  components: {

  },
  data () {
    return {

    }
  },
  methods: {
    gotoDetail() {
      console.log('detailNews.......::: ')
    }
  }

}
</script>

<style lang="scss" scoped>
.content {
  width: 90%;
  word-break:keep-all;  /* 不换行 */
  white-space:nowrap; /* 不换行 */
  overflow:hidden;  /* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow:ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
}
.content:link {
  color: #303133;
}
.content:hover {
  cursor: pointer;
  text-decoration: underline;
  color: #72B6FC
}
 
</style>
