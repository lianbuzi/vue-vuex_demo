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
      this.stop();
      this.next()
      // this.play()
    }.bind(this));
    // 点击切换到上一张
    this.ele.find('section:nth-child(1)').on('click', function () {
      this.stop();
      this.prev()
      // this.play()
    }.bind(this));
    var self = this;
    $('li').on('click', function () {
      var index = $(this).attr('id');
      self.go(index)
    })
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

  go(index) {
    var self= this;
    index=Number(index);
    const partSide = parseInt(this.states.length / 2);
    const middle = partSide + 1;
    const touchLeft = () => {
      let subindex = index + partSide + 1;
      const removeHow=self.states.length-subindex;
      for(var i=0;i<removeHow;i++){
        // self.states.unshift( self.states.pop());
        self.states.push(self.states.shift());
      }
      self.move()
    };
    const touchRight = () => {
      let startIndex = Number(index) - partSide - 1;
      const removeHow=self.states.length-startIndex;
      for(var i=0;i<removeHow;i++){
        self.states.unshift( self.states.pop());
      }
      self.move()
    };
   if(index < middle){
      touchLeft();
    }else{
      touchRight();
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
