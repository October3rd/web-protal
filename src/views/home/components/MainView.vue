<!--
 * @Author: lhj
 * @Date: 2020-10-12 20:11:35
 * @LastEditTime: 2020-10-15 16:31:16
 * @LastEditors: Please set LastEditors
 * @Description: 卡片信息模块
 * @FilePath: \ls-web\src\views\home\components\MainView.vue
-->
<template>
  <div>
    <el-row type="flex" justify="start" style="height: 310px">
      <el-card class="card-carousel" shadow="hover">
        <el-carousel :autoplay="false">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-card>
      <card-list style="width: 37%">
        <card-list-item v-for="(cardInfo, index) in cardInfosR1" :key="index" :card-info="cardInfo" />
      </card-list>
      <el-card class="card-carousel" style="width: 23%" shadow="hover">
        <div slot="header" class="clearfix">
          <b>快讯</b>
          <el-button style="float: right; padding: 3px 0" type="text" @click="gotoMore()">MORE>></el-button>
        </div>
        <marquee-y style="font-size: 16px" :send-val="sendVal" />
      </el-card>
    </el-row>
    <el-row type="flex" justify="start" style="height: 310px">
      <card-list>
        <hot-column style="width: 80%" :table-data="hotData" />
        <card-list-item v-for="(cardInfo, index) in cardInfosR2" :key="index" :card-info="cardInfo"/>
      </card-list>
    </el-row> 
    <el-row type="flex" justify="center" style="padding: 5px">
      <el-image style="height: 100px; width: 100%" :src="getImage('ls.jpg')" lazy></el-image>
    </el-row>
    <el-row type="flex" justify="center" >
      <el-image style="height: 100px; width: 100%; padding: 0 5px 5px" v-for="(item, index) in images" :key="index" :src="getImage(item.fileName)" lazy></el-image>
    </el-row>
    <el-row type="flex" justify="start">
      <card-list>
        <card-list-item v-for="(cardInfo, index) in cardInfosR3" :key="index" :card-info="cardInfo" />
      </card-list>
    </el-row>
    <el-row type="flex" justify="start">
      <card-list>
        <card-list-item v-for="(cardInfo, index) in cardInfosR4" :key="index" :card-info="cardInfo" />
      </card-list>
    </el-row>
    <el-row type="flex" justify="center" style="padding: 5px">
      <el-image style="height: 120px; width: 100%" :src="getImage('ls.jpg')" lazy></el-image>
    </el-row>
    <el-row type="flex" justify="start">
      <card-list style="width: 40%">
        <card-list-item :card-info="cardInfosR51" />
      </card-list>
      <card-list style="width: 60%">
        <card-list-item v-for="(cardInfo, index) in cardInfosR5" :key="index" :card-info="cardInfo" />
      </card-list>
    </el-row>
    <el-row type="flex" justify="center" style="height: 400px;">
      <el-card class="main-card" style="width: 99%; margin: 5px 5px" >
        <div slot="header" class="clearfix">
          <b>业务数据</b>
          <el-button style="float: right; padding: 3px 0" type="text" @click="gotoMore()">MORE>></el-button>
        </div>
      </el-card>
    </el-row>
    <el-row type="flex" justify="center" >
      <el-image style="height: 100px; width: 100%; padding: 0 5px 5px" v-for="(item, index) in images" :key="index" :src="getImage(item.fileName)" lazy></el-image>
    </el-row>
  </div>
</template>

<script>
import MarqueeY from 'components/common/marquee/MarqueeY'
import CardList from 'components/content/home/card/CardList'
import CardListItem from 'components/content/home/card/CardListItem'
import HotColumn from 'views/home/components/HotColumn'
 export default {
  name: 'MainView',
  components: {
    CardList,
    CardListItem,
    MarqueeY,
    HotColumn
    },
  data () {
   return {
     activeName: 'first',
     hotData: [{ col_1: { title: '三大战dfsdfsfsfsdsdfsdfsdfsdfsdf略', isHot: true }, col_2: { title: 'ETsdfsdfsdfsdfsdfsdCdsfsfssdfsfsfsdf' }}],
     // 滚动字幕Y
      sendVal: [{ content: '来自东莞市的', url: 'http://www.baidu.com', 'deptName': '龙泉支行', 'editor': '一二三' },
            { content: '来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的来自太原市的', url: 'http://www.baidu.com' },
            { content: '来自常州市的', url: 'http://www.baidu.com' },
            { content: '来自金华市的', url: 'http://www.baidu.com' },
            { content: '来自贵阳市的', url: 'http://www.baidu.com' },
            { content: '来自长春市的', url: 'http://www.baidu.com' },
            { content: '来自泉州市的', url: 'http://www.baidu.com' },
            { content: '来自南昌市的', url: 'http://www.baidu.com' },
            { content: '来自南京市的', url: 'http://www.baidu.com' },
            { content: '来自天津市的', url: 'http://www.baidu.com' },
            { content: '来自宁波市的', url: 'http://www.baidu.com' },
            { content: '来自嘉兴市的', url: 'http://www.baidu.com' },
            { content: '来自长沙市的', url: 'http://www.baidu.com' },
            { content: '来自济南市的', url: 'http://www.baidu.com' },
            { content: '来自杭州市的', url: 'http://www.baidu.com' }],
     
      cardInfosR1: [
      { 
        title: '分行动态', 
        msgInfos: [{
          title: '弄好呀第三方链接生的类科技生的呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '网络金融部',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        }
        ],
        morePath: ''
        // style: { width: '60%' }
      }
      // {
      //   title: '快讯',
      //   msgInfos: [{
      //     title: '弄好呀',
      //     editor: '张三',
      //     editDate: '10-11',
      //     deptName: '',
      //     detailPath: '',
      //   },
      //   {
      //     title: '弄好呀',
      //     editor: '张三',
      //     editDate: '10-11',
      //     deptName: '',
      //     detailPath: '',
      //   },
      //   {
      //     title: '弄好呀',
      //     editor: '张三',
      //     editDate: '10-11',
      //     deptName: '',
      //     detailPath: '',
      //   },
      //   ],
      //   morePath: '',
      //   style: { width: '40%' }
      // }
     ],
      cardInfosR2: [
      { 
        title: '行内公告', 
        msgInfos: [{
          title: '弄好呀第三方链接生的类科技生的呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '网络金融部',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        }
        ],
        morePath: ''
        // style: { width: '60%' }
      },
      {
        title: '部门咨询',
        msgInfos: [{
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        }
        ],
        morePath: ''
        // style: { width: '40%' }
      }
     ],
      cardInfosR3: [
      { 
        title: '部门动态', 
        msgInfos: [{
          title: '弄好呀第三方链接生的类科技生的呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '网络金融部',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        }
        ],
        morePath: ''
        // style: { width: '60%' }
      },
      {
        title: '支行动态',
        msgInfos: [{
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        }
        ],
        morePath: ''
        // style: { width: '40%' }
      },
      { 
        title: '工作周报', 
        msgInfos: [{
          title: '弄好呀第三方链接生的类科技生的呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '网络金融部',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        }
        ],
        morePath: ''
        // style: { width: '60%' }
      }
     ],
      cardInfosR4: [
        { 
          title: '反洗钱', 
          msgInfos: [{
            title: '弄好呀第三方链接生的类科技生的呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '网络金融部',
            detailPath: ''
          },
          {
            title: '弄好呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '',
            detailPath: ''
          },
          {
            title: '弄好呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '',
            detailPath: ''
          },
          {
            title: '弄好呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '',
            detailPath: ''
          },
          {
            title: '弄好呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '',
            detailPath: ''
          }
          ],
          morePath: ''
          // style: { width: '60%' }
        },
        {
          title: '合规管理',
          msgInfos: [{
            title: '弄好呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '',
            detailPath: ''
          },
          {
            title: '弄好呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '',
            detailPath: ''
          },
          {
            title: '弄好呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '',
            detailPath: ''
          }
          ],
          morePath: ''
          // style: { width: '40%' }
        },
        { 
          title: '安全警示', 
          msgInfos: [{
            title: '弄好呀第三方链接生的类科技生的呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '网络金融部',
            detailPath: ''
          },
          {
            title: '弄好呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '',
            detailPath: ''
          },
          {
            title: '弄好呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '',
            detailPath: ''
          },
          {
            title: '弄好呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '',
            detailPath: ''
          },
          {
            title: '弄好呀',
            editor: '张三',
            editDate: '10-11',
            deptName: '',
            detailPath: ''
          }
          ],
          morePath: ''
          // style: { width: '60%' }
        }
      ],
      cardInfosR5: [
      { 
        title: '工作建议', 
        msgInfos: [{
          title: '弄好呀第三方链接生的类科技生的呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '网络金融部',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        }
        ],
        morePath: ''
        // style: { width: '60%' }
      },
      {
        title: '外部动态',
        msgInfos: [{
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        }
        ],
        morePath: ''
        // style: { width: '40%' }
      },
      ], 
      cardInfosR51: { 
        title: '行长讲话', 
        msgInfos: [{
          title: '弄好呀第三方链接生的类科技生的呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '网络金融部',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        },
        {
          title: '弄好呀',
          editor: '张三',
          editDate: '10-11',
          deptName: '',
          detailPath: ''
        }
        ],
        morePath: ''
        // style: { width: '60%' }
      },
      images: [{ fileName: 'ls.jpg', filePath: '', flag: '' }, { fileName: 'ls.jpg', filePath: '', flag: '' },
       { fileName: 'ls.jpg', filePath: '', flag: '' }, { fileName: 'ls.jpg', filePath: '', flag: '' }]
   }
  },
  computed: {
    // 获取图片资源
    getImage() {
      return function(name) {
        return require('assets/images/' + name)
      }
    }
  },
  methods: {
    gotoMore() {
      
    }
  }
 }
</script>

<style lang="scss" scoped>
.el-row {
  width: 100%;
  height: 100%;
}

.card-carousel {
  width: 40%;
  height: calc(100% - 10px);
  // height: 325px;
  margin: 5px;
  
  ::v-deep .el-card__body {
    height: calc(100% - 10px);
    // height: 325px;
    padding: 5px
  }

  .clearfix:before,

  .clearfix:after {
    display: table;
    content: "";
  }
  
  .clearfix:after {
    clear: both
  }

  .el-carousel {
    height: 100%;
    ::v-deep .el-carousel__container {
      height: 100%
    }
    
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
  }
}
</style>
