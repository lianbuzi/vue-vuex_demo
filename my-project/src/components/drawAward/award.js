import './awardRotate';
class RouletteWheel{
  constructor(options){
    this.turnplate = {
      turnBody:null,  //旋转主体
      awardsItems: [],				//大转盘奖品名称
      startAngle: 0,				//开始角度
      bRotate: false,				//false:停止;ture:旋转
      turnsNum: 6,        //旋转次数
      turnTime: 8000,        //旋转时间
      getWin:[], //指定每次中奖的奖品,
      drawTimes:0,//存储获奖状态
    };
    Object.assign(this, this.turnplate,options);
  }
  init(){
    const awardsItems = this.awardsItems;
    var self= this;
    $('.pointer').click((e)=> {
      if (self.bRotate) return;
      self.bRotate = !self.bRotate;

      let item=null;
      //判断当前摇奖次数
      if(self.drawTimes<self.getWin.length){
        item=self.getWin[self.drawTimes];
        self.drawTimes++;
        //奖品数量等于10,指针落在对应奖品区域的中心角度[252, 216, 180, 144, 108, 72, 36, 360, 324, 288]
        self.rotateFn(item, awardsItems[item - 1]);
        console.log(awardsItems[item-1]);
        $('.pointer').text(`剩余${self.getWin.length-self.drawTimes}次`)
      }else{
        alert('次数已用尽！')
      }

    });
  }
  /***
   *     旋转转盘 item:奖品位置; txt：提示语;
   */
  rotateFn (item, txt, callback) {
    const awardsItems = this.awardsItems;
    let angles = item * (360 / awardsItems.length) - (360 / (awardsItems.length * 2));
    if (angles < 270) {
      angles = 270 - angles;
    } else {
      angles = 360 - angles + 270;
    }
    this.turnBody.stopRotate();
    this.turnBody.rotate({
      angle: 0,
      animateTo: angles + 1800,
      duration: 8000,
      callback:()=> {
        (typeof callback == 'function') ? callback() : alert(txt);
        this.bRotate = !this.bRotate;
      }
    });
  }
}
export default RouletteWheel;
