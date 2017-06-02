<template>
    <section id="head">
        <header>
            <h1>
                <img src="/static/img/logo.png" alt="">
            </h1>
        </header>
            <nav>
                <router-link to="/recommend" :class="$route.path==='/'? 'active':'' " active-class="active">推荐</router-link>
                <router-link to="/rankingList" active-class="active">排行榜</router-link>
                <router-link to="/search" active-class="active">搜索</router-link>
            </nav>
    </section>
</template>
<script>
    export default{
    }
</script>
<style lang="less" scoped>
    @rem:24rem;
    #head{
        position: absolute;
        top:0;
        left:0;
       width:100%;
       height:84/@rem;
       z-index: 1;
       header{
           width: 100%;
           height:44/@rem;
           background:#31c27c;
           overflow: hidden;
           h1{
               width: 90/@rem;
               height:24/@rem;
               margin:9/@rem 0 0 10/@rem;
               img{
                   width:100%;
                   height:100%;
               }
           }
       }
           nav{
               width:100%;
               height:40/@rem;
               display: flex;
               background: #fff;
               a{
                   width:33.333333%;
                   line-height: 40/@rem;
                   font-size:16/@rem;
                   position: relative;
                   text-align: center;
               }
               a.active{
                   color:#31c27c;
               }
               a:after{
                   content:"";
                   width:100%;
                   position: absolute;
                   left: 0;
                   bottom:0;
                   background:#31c27c; 
               }
               a.active:after{
                   height:2/@rem;
               }
           }
      
    }
</style>