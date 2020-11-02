<!--
 * @Author: your name
 * @Date: 2020-10-15 09:06:23
 * @LastEditTime: 2020-10-31 13:16:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\views\home\components\HotColumn.vue
-->

<template>
  <el-card shadow="hover">
    <div slot="header" class="clearfix">
      <b>热点专栏</b>
      <el-button style="float: right; padding: 3px 0" type="text" @click="gotoMore()">MORE>></el-button>
    </div>
    <el-row type="flex" >
      <el-col :span="12">
        <table style="width: 100%">
          <tr v-for="(item, index) in oddArr" :key="index">
            <td :class="{ hot: item.isHot }" @click="gotoDetail(item.hotURL)">● {{ item.title }}</td>
          </tr>
        </table>
      </el-col>
      <el-col :span="12">
        <table style="width: 100%">
          <tr v-for="(item, index) in evenArr" :key="index">
            <td :class="{ hot: item.isHot }" @click="gotoDetail(item.hotURL)">● {{ item.title }}</td>
          </tr>
        </table>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { getHotNews } from '@/api/cards/homeCards.js'

export default {
  name: 'HotColumn',
  components: {

  },
  data () {
   return {
     oddArr: [],
     evenArr: []
   }
  },
  created () {
    getHotNews().then(res => {
      const originArr = res.data.hotInfos
       this.oddArr = originArr.filter((item, index) => {
        if (index % 2 === 0) {
          return item
        }
      })
      this.evenArr = originArr.filter((item, index) => {
        if (index % 2 === 1) {
          return item
        }
      })
      
    })
  },
  computed: {
   
  },
  methods: {
    gotoDetail(url) {
      console.log('gotoDetail>>url::: ', url)
    },

    gotoMore(url) {
      console.log('gotoMore>>url::: ', url)
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

    td {
      // width: 75%;
      word-break:keep-all;  /* 不换行 */
      white-space:nowrap; /* 不换行 */
      overflow:hidden;  /* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow:ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    }
    td:link {
      color: #303133;
    }
    td:hover {
      cursor: pointer;
      text-decoration: underline;
      color: #72B6FC
    }
    .hot {
      color: red
    }
    .hot:hover {
      color: red;
    }
    // color:#72B6FC;
  }
 
}
 
</style>
