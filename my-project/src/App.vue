<template>
  <div id="app">
    <!--<HelloWorld />-->
    <!--<List text="list-component"></List>-->
    <div v-for="data in navList">
      <router-link :to="{ path: data.path }">{{data.name}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
//  import List from '@/components/List';
//  import HelloWorld from '@/components/HelloWorld';
  export default {
    name: 'app',
//    components: { List,HelloWorld },
    data() {
      return {
        subList:[{name:'vue',age:10},{name:'react',age:2},{name:'vChat',age:20}],
        navList: [
          {path: '/', icon: '&#xe6bb;', name: '主页'},
          {path: '/lee', icon: '&#xe664;', name: '排行榜'},
          {path: '/search', icon: '&#xe65c;', name: '发现'},
          {path: '/my', icon: '&#xe735;', name: '我的'}
        ]
      }

    }
  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top:.6rem;
    font-size:.24rem
  }
  #app{
    li{
      background:red
    }
  }
</style>
