<template>
    <swipe id="carouselBox" :auto='4000'>
        <swipe-item class="carousel" v-for="(item,index) in topData" :key="index">
            <div class="carouselContant" :style="{'background-image':`url(${item.image})`}">
                <p class="title">{{item.title}}</p>
                <span class="mask"></span>
            </div>
        </swipe-item>
    </swipe>
</template>
<script>
import {Swipe,SwipeItem} from 'mint-ui'
export default{
    props:['topData'],
    components:{
        Swipe,
        SwipeItem
    }
}
</script>
<style lang="less">
    @rem:48rem;
    #carouselBox{
        height:450/@rem;
        .mint-swipe-items-wrap{
            height:100%;
        }
        .carousel{
            height:100%;
            background:#00bbff;
            .carouselContant{
                height:100%;
                position: relative;
                background-size:cover;
                background-position:center;
                background-repeat: no-repeat;
                .title{
                    position: absolute;
                    bottom:60/@rem;
                    left:30/@rem;
                    width:660/@rem;
                    text-align: center;
                    color:#fff;
                    z-index: 1;
                }
                .mask{
                    position: absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    background:-webkit-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0.2) 60%,rgba(0,0,0,0.6) 100%)
                }
            }
        }
    }
</style>