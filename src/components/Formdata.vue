<template>
  <div id="form-d">
    {{msg}}
   <div class="form-group">
     <input type="text">
     <button @click="increment">+</button>{{addUnit}}
    <button @click="asyAdd">延迟添加</button>
   </div>
    <div class="form-group">
      <input type="text"  v-model="student">
      <button @click="addStudent">添加</button>
    </div>
        <ul v-for="todo in doneTodos">
          <li>{{todo.done}}</li>
        </ul>
    <StudentList></StudentList>
  </div>
</template>
<script>
  import StudentList from '@/components/List'
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default{
    name: 'form-d',
    data () {
      return {
        msg: '请输入：',
        student:''
      }

    },
    components: {
      StudentList
    },
    computed: {
      ...mapState(['count','students']),
      ...mapGetters(['doneTodos','addUnit'])
    },
    methods:{
      increment () {
        this.$store.commit('increment')
        },
      addStudent () {
          this.$store.commit('addStudent', this.student);
          this.student=''
      },
      ...mapActions(['asyAdd'])
    }
  }
</script>
<style>
  .form-group{
    margin-top:10px
  }
</style>

