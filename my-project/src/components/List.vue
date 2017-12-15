<template>
  <div>
    <SwiperTemplate />
    <ul>
      <li v-for="(item ,i) in dataList" :key="item.id">{{i}}-{{item.name}}-{{item.age}}  <h6>{{ text }}</h6></li>
    </ul>
    <SliderTemplate/>
  </div>
</template>
<script>
  import SwiperTemplate from '@/components/swiper';
  import SliderTemplate from '@/components/slider';

  export default {
    props: ['text'],
    components:{SwiperTemplate,SliderTemplate},
    data() {
      return {
        dataList: [{name: 'lili', age: 10}, {name: 'sda', age: 30}]

      }
    }
  }
</script>


