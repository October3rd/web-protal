<!--
 * @Author: lhj
 * @Date: 2020-10-12 20:11:35
 * @LastEditTime: 2020-10-31 22:29:52
 * @LastEditors: Please set LastEditors
 * @Description: 卡片信息模块
 * @FilePath: \ls-web\src\views\home\components\HomeView.vue
-->
<template>
  <div>
    <el-row type="flex" justify="start" style="height: 310px">
      <el-card class="card-carousel" shadow="hover">
        <el-carousel :autoplay="true" :interval="5000">
          <el-carousel-item v-for="(item, index) in carouselInfos" :key="index">
            <el-link @click="gotoDetail(item.linkPath)">
              <span class="pic-text">{{ item.content }}</span>
              <el-image :src="getImage(item.imageInfo.fileName)"></el-image>
            </el-link>
          </el-carousel-item>
        </el-carousel>
      </el-card>
      <card-list style="width: 37%">
        <card-list-item v-for="(cardInfo, index) in branchNewsInfos" :key="index" :card-info="cardInfo" />
      </card-list>
      <el-card class="card-carousel" style="width: 23%" shadow="hover">
        <div slot="header" class="clearfix">
          <b>每日快讯</b>
          <el-button style="float: right; padding: 3px 0" type="text" @click="gotoMore()">MORE>></el-button>
        </div>
        <marquee-y style="font-size: 16px" :send-val="sendVal" />
      </el-card>
    </el-row>
    <el-row type="flex" justify="start" style="height: 310px">
      <card-list>
        <hot-column style="width: 80%" />
        <card-list-item v-for="(cardInfo, index) in r2CardsInfos" :key="index" :card-info="cardInfo"/>
      </card-list>
    </el-row> 
    <el-row type="flex" justify="center" style="padding-top: 5px">
      <el-image style="height: 100px; width: 100%; padding: 0 5px 5px" 
        v-for="(item, index) in r1ImgInfos" :key="index" 
        :src="getImage(item.imageInfo.fileName)" @click="gotoDetail(item.linkPath)" lazy></el-image>
    </el-row>
    <el-row type="flex" justify="center" >
      <el-image style="height: 100px; width: 100%; padding: 0 5px 5px"
        v-for="(item, index) in r2ImgInfos" :key="index" 
        :src="getImage(item.imageInfo.fileName)" @click="gotoDetail(item.linkPath)" lazy></el-image>
    </el-row>
    <el-row type="flex" justify="start">
      <card-list>
        <card-list-item v-for="(cardInfo, index) in r3CardsInfos" :key="index" :card-info="cardInfo" />
      </card-list>
    </el-row>
    <el-row type="flex" justify="start">
      <card-list>
        <card-list-item v-for="(cardInfo, index) in r4CardsInfos" :key="index" :card-info="cardInfo" />
      </card-list>
    </el-row>
    <el-row type="flex" justify="center"  style="padding-top: 5px">
      <el-image style="height: 120px; width: 100%; padding: 0 5px 5px" 
        v-for="(item, index) in r3ImgInfos" :key="index" 
        :src="getImage(item.imageInfo.fileName)" @click="gotoDetail(item.linkPath)" lazy></el-image>
    </el-row>
    <el-row type="flex" justify="start">
      <card-list style="width: 40%">
        <card-list-item v-for="(cardInfo, index) in speechInfos" :key="index" :card-info="cardInfo" />
      </card-list>
      <card-list style="width: 60%">
        <card-list-item v-for="(cardInfo, index) in r5CardsInfos" :key="index" :card-info="cardInfo" />
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
      <el-image style="height: 100px; width: 100%; padding: 0 5px 5px" 
        v-for="(item, index) in r4ImgInfos" :key="index" 
        :src="getImage(item.imageInfo.fileName)" @click="gotoDetail(item.linkPath)" lazy></el-image>
    </el-row>
  </div>
</template>

<script>
import MarqueeY from 'components/common/marquee/MarqueeY'
import CardList from 'components/content/card/CardList'
import CardListItem from 'components/content/card/CardListItem'
import HotColumn from 'views/home/components/hotcolumn/HotColumn'

// api
import { getCarouselNews } from '@/api/images/carousel.js'
import * as themeImgAPI from '@/api/images/themeImage.js'
import { getMarqueeYDailyNews } from '@/api/marquee/marqueeY.js'
import * as homeCardsAPI from '@/api/cards/homeCards.js'
// import { report } from 'process'

export default {
  name: 'HomeView',
  components: {
    CardList,
    CardListItem,
    MarqueeY,
    HotColumn
    },
  data () {
   return {
      carouselInfos: [],
      branchNewsInfos: [],
      r2CardsInfos: [],
      r3CardsInfos: [],
      r4CardsInfos: [],
      speechInfos: [],
      r5CardsInfos: [],
      r1ImgInfos: [],
      r2ImgInfos: [],
      r3ImgInfos: [],
      r4ImgInfos: [],
     // 滚动字幕Y
      sendVal: [],
      images: [{ fileName: 'ls.jpg', filePath: '', flag: '' }, { fileName: 'ls.jpg', filePath: '', flag: '' },
       { fileName: 'ls.jpg', filePath: '', flag: '' }, { fileName: 'ls.jpg', filePath: '', flag: '' }]
   }
  },
  created () {
    // API调用
    getCarouselNews().then(res => {
      this.carouselInfos = res.data
    })
    themeImgAPI.getPartyTheme().then(res => {
      this.r1ImgInfos = res.data
    })
    themeImgAPI.getBusiTheme().then(res => {
      this.r2ImgInfos = res.data
    })
    themeImgAPI.getFamilyTheme().then(res => {
      this.r3ImgInfos = res.data
    })
    themeImgAPI.getTradeUnionTheme().then(res => {
      this.r4ImgInfos = res.data
    })
    getMarqueeYDailyNews().then(res => {
      this.sendVal = res.data
    })
    homeCardsAPI.getBranchNews().then(res => {
      this.branchNewsInfos = res.data.branchNewsInfos
    })
    Promise.all([homeCardsAPI.getNotice(), homeCardsAPI.getConsoult()]).then(resArr => {
      const noticeInfos = resArr[0].data.noticeInfos
      const consoultInfos = resArr[1].data.consoultInfos
      this.r2CardsInfos = [...noticeInfos, ...consoultInfos]
    })
    Promise.all([homeCardsAPI.getDeptNews(),
      homeCardsAPI.getSubranchNews(),
      homeCardsAPI.getWeekReport()]).then(resArr => {
        const deptNewsInfos = resArr[0].data.deptNewsInfos
        const subranchNewsInfos = resArr[1].data.subranchNewsInfos
        const reportInfos = resArr[2].data.reportInfos
        this.r3CardsInfos = [...deptNewsInfos, ...subranchNewsInfos, ...reportInfos]
      })
    Promise.all([homeCardsAPI.getMoneyLaundy(),
      homeCardsAPI.getCompliance(),
      homeCardsAPI.getSafeWarn()]).then(resArr => {
        const moneyLaundyInfos = resArr[0].data.moneyLaundyInfos
        const complianceInfos = resArr[1].data.complianceInfos
        const safeWarnInfos = resArr[2].data.safeWarnInfos
        this.r4CardsInfos = [...moneyLaundyInfos, ...complianceInfos, ...safeWarnInfos]
      })
    homeCardsAPI.getLeaderSpeech().then(res => {
      this.speechInfos = res.data.speechInfos
    })
    Promise.all([homeCardsAPI.getAdvise(), homeCardsAPI.getOutNews()]).then(resArr => {
      const adviseInfos = resArr[0].data.adviseInfos
      const outNewsInfos = resArr[1].data.outNewsInfos
      this.r5CardsInfos = [...adviseInfos, ...outNewsInfos]
    })
    
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
      
    },
    gotoDetail(url) {
      console.log('gotoDetail>>>>>>>>>>>>>>', url)
    },
    
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
    position: relative;
    height: 100%;
    ::v-deep .el-carousel__container {
      height: 100%
    }

    .pic-text {
      position: fixed;
      height: 30px;
      width: 100%;
      bottom: 0%;
      padding: 5px;
      line-height: 30px;
      font-size: 18px;
      color: white;
      z-index: 100;
      
      word-break:keep-all;  /* 不换行 */
      white-space:nowrap; /* 不换行 */
      overflow:hidden;  /* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow:ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
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

    ::v-deep .el-image__inner {
      width: 460px;
      height: 290px;
      // width: 100%;
      // height: 100%;
    }

  }
}
</style>
