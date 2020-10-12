<template>
  <el-card class="card-bar">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
    </div>
    <div class="card-body">
      <!-- <marquee-x /> -->
      <marquee-y :send-val="sendVal" />
    </div>
  </el-card>
</template>

<script>
import MarqueeY from 'components/common/marquee/MarqueeY'
 export default {
  name: 'CardBar',
  components: {
    MarqueeY,
  },
  data () {
   return {
      // 滚动字幕
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
            { content: '来自杭州市的', url: 'http://www.baidu.com' }]
   }
  },
 }
</script>

<style lang="scss" scoped>
.card-bar {
  border: 1px solid;
  width: 100px;
  // height: 100px;
  
  .card-body {
    height: 400px;
  }
}

.clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

 
</style>
