import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import List from '@/components/List';
import Wellcome from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: App
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
