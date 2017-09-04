import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Formdata from '@/components/Formdata'
import Datalist from '@/components/List'

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Formdata',
      component:  Formdata,

    }
  ]
})
