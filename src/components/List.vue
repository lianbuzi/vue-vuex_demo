<template>
<div  id="studentList">
  {{title}}
  当前金钱：{{count}}
  <ul v-for=" student in students">
    <li>{{student}}</li>
  </ul>
</div>

</template>

<script>
  import { mapState } from 'vuex'
  export default {
      name:'studentList',
      data () {
          return {
              title:'输入内容如下'
          }
      },
      computed: {
        ...mapState(['count','students'])
      }
  }
</script>
