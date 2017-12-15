const ele = "";

class Slide {
  constructor(ele, options) {
    this.ele = $(ele),
      this.options = Object.assign({
        speed: 1000,
        delay: 3000
      }, options);
    this.states = [
      {'z-index': 1, bottom: 25, left: 40, $opacity: 0.5, transform: 'rotate(-21deg)', transition: 'left 0s'},
      {'z-index': 2, bottom: 80, left: 217, $opacity: 0.6, transform: 'rotate(-14deg)', transition: 'all .5s'},
      {'z-index': 3, bottom: 114, left: 401, $opacity: 0.7, transform: 'rotate(-7deg)', transition: 'all .5s'},
      {'z-index': 4, bottom: 126, left: 585, $opacity: 1, transform: 'rotate(0deg)', transition: 'all .5s'},
      {'z-index': 3, bottom: 114, left: 770, $opacity: 0.7, transform: 'rotate(7deg)', transition: 'all .5s'},
      {'z-index': 2, bottom: 80, left: 951, $opacity: 0.6, transform: 'rotate(14deg)', transition: 'all .5s'},
      {'z-index': 1, bottom: 25, left: 1129, $opacity: 0.5, transform: 'rotate(21deg)', transition: 'left 0s'}
    ];
    this.lis = this.ele.find('li');

    // 点击切换到下一张
    this.ele.find('section:nth-child(2)').on('click', function () {
      this.stop()
      this.next()
      // this.play()
    }.bind(this))
    // 点击切换到上一张
    this.ele.find('section:nth-child(1)').on('click', function () {
      this.stop()
      this.prev()
      // this.play()
    }.bind(this))

    // 让轮播图开始自动播放
    //this.play()
    //鼠标向左滑动 换到下一

  }
  move() {
    this.lis.each(function (i, el) {
      $(el)
        .finish().css(this.states[i])
        .find('img').css('opacity', this.states[i].$opacity)
    }.bind(this));
  }
  mouseEvent(){
    const hasTouch = 'ontouchstart' in window;
    const startEvent = hasTouch ? 'touchstart' : 'mousedown';
    const moveEvent = hasTouch ? 'touchmove' : 'mousemove';
    const endEvent = hasTouch ? 'touchend' : 'mouseup';
    const cancelEvent = hasTouch ? 'touchcancel' : 'mouseup';
    const sliderEvent={startEvent,moveEvent,endEvent,cancelEvent};
    this.li=this.ele.find('li');

    this.startX=0;
    this.endX=0;
    this.li.on(startEvent,(e)=>{
      e=e || window.event;
      console.log(startEvent,e.clientX)
    }).on(endEvent,(e)=>{
      e=e || window.event
      console.log(endEvent,e.clientX)
    });

//阻止事件冒泡
//不仅仅要stopPropagation，还要preventDefault
    function pauseEvent(e){
      if(e.stopPropagation) e.stopPropagation();
      if(e.preventDefault) e.preventDefault();
      e.cancelBubble=true;
      e.returnValue=false;
      return false;
    }
  }
  next() {
    this.states.unshift(this.states.pop());
    this.move()
  }

  // 让轮播图滚动到上一张
  prev() {
    this.states.push(this.states.shift());
    this.move()
  }

  play() {
    this.interval = setInterval(function () {//这个this指window
      this.next()
    }.bind(this), this.options.delay)
  }

  // 停止自动播放
  stop() {
    // var _this = this
    clearInterval(this.interval)
  }
}
export default Slide;
