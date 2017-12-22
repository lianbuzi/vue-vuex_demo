<template>
  <div id="Slide1" class="zy-Slide">
    <!--prev:元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。-->
    <section>前一张</section>
    <section>后一张</section>
    <ul>
      <!--alt + shift : 可以创建一个矩形选择区域-->
      <li v-for="(item,index) in images" :id="index"><img :src='item'/></li>
    </ul>
  </div>
</template>
<script>
  import '@/css/slider.css';
  import Slide from '@/js/sliderPlugin.js'
  import $ from 'jquery';
  export default {
    data() {
      return {
        images:[
          require("@/assets/1.jpg"),
          require("@/assets/2.jpg"),
          require("@/assets/3.jpg"),
          require("@/assets/4.jpg"),
          require("@/assets/5.jpg"),
          require("@/assets/6.jpg"),
          require("@/assets/7.jpg")
        ]
      }
    },
    mounted() {
      this.slider()
    },
    methods: {
      slider() {
       let sliders= new Slide('.zy-Slide',{speed: 500});
        sliders.move();
      }
    }
  }
</script>
