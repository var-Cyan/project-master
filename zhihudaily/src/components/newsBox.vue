<template>
<div class="newsBox">   
     <div class="news" >
        <div v-for="item,index in data" :key="index">
            <h2>今日新闻</h2>
            <router-link tag="div" v-for="ite,ind in item.stories" :to="{name:'detail',params:{id:ite.id}}" :key="ind"> 
                <p>{{ite.title}}</p>
                <img :src="ite.images" alt="">
            </router-link>
        </div>
    </div>
</div>
   
</template>

<script>
export default{
    props:['data']
}
</script>

<style lang="less">
@rem:48rem;
.newsBox{
    .news{
        padding:0 15/@rem;
        background:#f1f1f1;
        div{
            h2{
                padding-left:18/@rem;
                height:96/@rem;
                margin-bottom:7/@rem;
                color:#c1c1c1;
                font-size:30/@rem;
                line-height: 96/@rem;
            }
            div{
                padding:24/@rem 22/@rem 37/@rem 34/@rem;
                box-sizing: border-box;
                border:1px solid #dadada;
                width:100%;
                height:205/@rem;
                background: #fff;
                display: flex;
                margin-bottom:16/@rem;
                font-weight:bold;
                p{
                    flex:1;
                    height:144/@rem;
                    font-size:38/@rem;
                    line-height: 48/@rem;
                    color:#000;
                }
                img{
                    width:164/@rem;
                    height:144/@rem;
                    background:gold;
                }
            
            }
        }
}
}
</style>