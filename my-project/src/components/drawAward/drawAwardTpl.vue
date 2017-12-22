<template>
  <div class="banner">
    <div class="turnplate" style="">

    </div>
    <div class="pointer">抽奖次数</div>
  </div>
</template>
<script>
  import '@/css/media-min.css';
  import './award.css';

  import RouletteWheel from './award';
  export default {
    data(){
      return {

      }
    },
    mounted(){
      const options={
        turnBody:$('.turnplate'),  //旋转主体
        awardsItems: [ "谢谢参与","5闪币",  "20闪币 ", "30M免费流量包", "100M免费流量包", "2闪币"],				//大转盘奖品名称
        startAngle: 0,				//开始角度
        bRotate: false,				//false:停止;ture:旋转
        turnsNum: 6,        //旋转次数
        turnTime: 8000,        //旋转时间
        getWin:[4,3,1], //指定每次中奖的奖品,
      };
    const rd= new RouletteWheel(options);
    rd.init();
    }
  }
</script>
