<!--
 * @Author: your name
 * @Date: 2020-10-19 15:18:49
 * @LastEditTime: 2020-11-04 14:16:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\views\detail\components\DetailNews.vue
-->
<template>
  <div>
    <el-row type="flex" justify="center">
      <el-table :data="tableData"  ref="singleTable" highlight-current-row  @row-click="getRowInfo" >
      <el-table-column prop="title" label="文章标题" header-align="center" min-width="47%">
        <template slot-scope="scope">
          <el-link :underline="false" :prop="'tableData.' + scope.$index + '.title'">
            {{ scope.row.title }}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column prop="editor" label="作者" align="center" min-width="15%">
      </el-table-column>
      <el-table-column prop="deptName" label="部门" align="center" min-width="20%">
      </el-table-column>
      <el-table-column prop="viewCount" label="阅读" align="center" min-width="8%">
      </el-table-column>
      <el-table-column prop="editDate" label="创建日期" align="center" min-width="10%">
      </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-col :span="24" class="pageBar">
        <el-pagination
          layout="total, prev, pager, next, jumper"
          :page-size="pageSize"
          :total="total"
          style="float: right;"
          @current-change="handleCurrentPage" />
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'DetailNews',
  components: {

  },
  data () {
    return {
      pageSize: 20,
      total: 100,
      tableData: [{
          title: '来看待甲方了空间生的类科多斯拉克废旧塑料的看法接待室里看风景施蒂利克副驾驶的发技是的',
          editor: '张三是的发的',
          deptName: 'XXXX部',
          viewCount: '123',
          editDate: '2020-01-01'
        }, {
          
          title: '来看待甲方了空间生的类科技是的',
          editor: '张三',
          deptName: 'XXXX部',
          viewCount: '123',
          editDate: '2020-01-01'
        }, {
         
          title: '来看待甲方了空间生的类科技是的',
          editor: '张三',
          deptName: 'XXXX部',
          viewCount: '123',
          editDate: '2020-01-01'
        }, {
         
          title: '来看待甲方了空间生的类科技是的',
          editor: '张三',
          deptName: 'XXXX部',
          viewCount: '123',
          editDate: '2020-01-01'
        }]
    }
  },
  methods: {
    gotoDetail() {
      console.log('detailNews.......::: ')
    },
    handleCurrentPage() {
      console.log('handleCurrentPage>>>>>>>>>>>>>>>>>>>')
    },
    getRowInfo(row) {
      console.log('getSelectInsfo>>>>>>>>>row>>', row)
    },
    requestHTTP(name, pageSize, currentPage) {
      const url = `/detail/news/${name}?pageSize=${pageSize}&pageNum=${currentPage}`
      return this.$http({
        url: url,
        method: 'post',
        data: {}
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.el-table {
  ::v-deep td {
      padding: 8px 0;
  }
}
// .content {
//   width: 90%;
//   word-break:keep-all;  /* 不换行 */
//   white-space:nowrap; /* 不换行 */
//   overflow:hidden;  /* 内容超出宽度时隐藏超出部分的内容 */
//   text-overflow:ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
// }
// .content:link {
//   color: #303133;
// }
// .content:hover {
//   cursor: pointer;
//   text-decoration: underline;
//   color: #72B6FC
// }
 
</style>
