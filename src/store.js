import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',//测试化境关闭严格模式
  state: {
    count: 0,
    students:[],
    todos:[{id:'111',done:'work'},{id:'222',done:'study'}]
  },
  mutations: {
    increment (state) {
      alert(1);
      state.count++

    },
    addStudent (state , name){
      state.students.push(name)
    }
  },
  getters:{
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    addUnit: state => {
      return state.count + '个'
    }
  },
  actions : {//功能类似 mutaions 区别在于可以异步加载
    asyAdd ({commit}) {
      window.setTimeout(() => {
        commit('increment')
      },1000)
    }
  }
});


export default  store
