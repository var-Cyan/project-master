import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage'
import Detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path:'/detail/:id?',
      name:'detail',
      component:Detail
    }
  ]
})
