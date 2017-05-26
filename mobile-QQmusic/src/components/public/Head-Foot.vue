<template>
    <section id="wrap">
        <header>
            <h1>
                <img src="../../assets/img/logo.png" alt="">
            </h1>
        </header>
        <section id="content">
            <nav>
                <router-link to="/recommend" class="active">推荐</router-link>
                <router-link to="/rankingList">排行榜</router-link>
                <router-link to="/search">搜索</router-link>
            </nav>
        </section>
    </section>
</template>
<script>
    export default{

    }
</script>
<style lang="less" scoped>
    @rem:24rem;
    #wrap{
       width:100%;
       height:100%;
       background:#00bbff;
       position: relative;
       overflow: hidden;
       header{
           position: absolute;
           top:0;
           left:0;
           width: 100%;
           height:44/@rem;
           background:#31c27c;
           h1{
               width: 90/@rem;
               height:25/@rem;
               margin:9/@rem 0 0 10/@rem;
               img{
                   width:100%;
                   height:100%;
               }
           }
       }
       #content{
           width: 100%;
           margin-top:44/@rem;
           height:calc(100% - 44/@rem);
           background:pink;
           nav{
               width:100%;
               height:40/@rem;
               display: flex;
               a{
                   width:33.333333%;
                   line-height: 40/@rem;
                   font-size:18/@rem;
                   position: relative;
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
                //    height:2/@rem;
                   background:#31c27c; 
               }
               a.active:after{
                   height:2/@rem;
               }
           }
       }
      
    }
</style>