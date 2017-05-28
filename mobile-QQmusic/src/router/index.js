import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/layout.vue'
import Recommend from '../components/recommend.vue'
import RankingList from '../components/rankingList.vue'
import Search from '../components/search.vue'


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
          name:'Recommend'
        },
        {
          component:Recommend,
          path:'/',
          name:'Recommend'
        },
        {
          component:RankingList,
          path:'/rankingList',
          name:'rankingList'
        },
        {
          component:Search,
          path:'/search',
          name:'search'
        },
      ]
    }
    
  ]
})
