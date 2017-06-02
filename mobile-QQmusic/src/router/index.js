import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/layout.vue'
import Recommend from '../components/recommend.vue'
import RankingList from '../components/rankingList.vue'
import Search from '../components/search.vue'
import TopList from '../components/inList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      component:Layout,
      path:'/',
      children:[
        {
          component:Recommend,
          path:'/recommend',
          name:'recommend'
        },
        {
          component:Recommend,
          path:'/',
          name:'home'
        },
        {
          component:RankingList,
          path:'/rankingList',
          name:'RankingList'
        },
        {
          component:Search,
          path:'/search',
          name:'Search'
        },
      ]
    },
    {
      component:TopList,
      path:'/topList/:id?',
      name:'topList'
    }
    
  ]
})
