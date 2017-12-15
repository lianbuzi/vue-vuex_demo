<template>
  <div>
    <SwiperTemplate />
    <ul>
      <li v-for="(item ,i) in dataList" :key="item.id">{{i}}-{{item.name}}-{{item.age}}  <h6>{{ text }}</h6></li>
    </ul>
  </div>
</template>
<script>
  import SwiperTemplate from '@/components/swiper';
  import $ from 'jquery';
  export default {
    props: ['text'],
    components:{SwiperTemplate},
    data() {
      return {
        dataList: [{name: 'lili', age: 10}, {name: 'sda', age: 30}]

      }
    }
  }
</script>


