<template>
  <div class="swiper-container" id="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in images">
        <figure class="wp-avatar banner">
          <img v-cloak :src="item.img"/>
        </figure>
      </div>

    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import '@/css/swiper.css';
  export default {
    data() {
      return {
        images: [
          {img:require('@/assets/1.jpg') },
          {img: require('@/assets/2.jpg') },
          {img: require('@/assets/3.jpg') },
          {img: require('@/assets/4.jpg') },
          {img:require('@/assets/5.jpg') }
        ]
      }
    },
    mounted() {
      this.slider()
    },
    methods: {
      slider() {
        const swiperObj = new Swiper('#swiper', {
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          effect: 'coverflow',
          slidesPerView: 3,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 10,
            stretch: 90,
            depth: 270,
            modifier: 1,
            slideShadows: false
          },


        })
      }

    }
  }
</script>
