<!--
 * @Author: lhj
 * @Date: 2020-10-12 15:40:36
 * @LastEditTime: 2020-10-15 15:42:33
 * @LastEditors: Please set LastEditors
 * @Description: 卡片单元
 * @FilePath: \ls-web\src\components\content\home\card\CardListItem.vue
-->
<template>
  <el-card ref="card" shadow="hover" >
    <div slot="header" class="clearfix">
      <b>{{ cardInfo.title }}</b>
      <el-button style="float: right; padding: 3px 0" type="text" @click="gotoMore()">MORE>></el-button>
    </div>
    <table ref="table" style="width: 100%">
      <tr v-for="(msgInfo, index) in cardInfo.msgInfos" :key="index">
        <td class="content" @click="gotoDetail()">
          ·
          <span v-if="msgInfo.deptName" style="padding-right: 5px">[{{msgInfo.deptName}}]</span>
          {{ msgInfo.title }}
        </td>
        <td style="width: 25%; text-align:right; padding-right: 10px">
          <span class="editor">
            {{ msgInfo.editDate }}
          </span>
        </td>
      </tr>
    </table>
  </el-card>
</template>

<script>
export default {
  name: 'CardBar',
  components: {},
  props: {
    cardInfo: {
      type: Object,
      default: function() {
        return {}
      }
    },
  },
  data() {
    return {}
  },
  computed: {
    // 设置样式宽度
    // getStyleWidth: function() {
    //   return function(param) {
    //     const width = `${param}%`
    //     return { width: width }
    //   }
    // }
  },
  methods: {
    gotoMore() {
      console.log('this.cardInifo.msgInfo.path::: ', this.cardInifo.msgInfo.path)
    },
    gotoDetail() {
      const param = { path: '/' }
      this.openTabs(param)

      // console.log('this.cardInfo.msgInfo.detailPath::: ', this.cardInfo.msgInfo.detailPath)
    },
    openTabs(to) {
      const routeURL = this.$router.resolve({ path: to.path, query: to.query })
      window.open(routeURL.href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  width: 100%;
  height: 100%;
  margin: 0 5px;

  ::v-deep .el-card__header {
    padding: 15px;
  }

  ::v-deep .el-card__body {
    padding: 5px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }
  .clearfix:after {
    clear: both;
  }
  table {
    width: 100%;
    table-layout:fixed;
    line-height: 26px;

    .content {
      width: 75%;
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
    // color:#72B6FC;
  }
}
</style>
