import Vue from 'vue'
import Router from 'vue-router'
import HeadFoot from '../components/public/Head-Foot.vue'
import Recommend from '../components/recommend.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      component:HeadFoot,
      path:'/',
      name:'HeadFoot'
    },
    {
      component:Recommend,
      path:'/recommend',
      name:'Recommend'
    }
  ]
})
