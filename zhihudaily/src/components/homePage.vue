<template>
    <div>
        <head-bar></head-bar>
        <div id="wrapBox">
            <div>
                <carousel :topData='topData'></carousel>
                <newsBox :data='data'></newsBox>
            </div>

        </div>
    </div>

</template>

<script>
import HeadBar from './headBar';
import Carousel from './carousel';
import NewsBox from './newsBox';
import BetterScroll from "better-scroll";
export default {
    data(){
        return{
            data:[],
            topData:[],
            date:[]
        }
    },
    mounted(){
        let scroll=null;
        this.$http.get('/api/4/news/latest').then((d)=>{
            this.topData=d.data.top_stories
            this.data.push(d.data)
            this.date=d.data.date
            
            this.$nextTick(function(){
                scroll.refresh()
            })
        })

        
        this.$nextTick( ()=>{
            let wrapBox=document.getElementById('wrapBox');
            scroll = new BetterScroll(wrapBox,{
                startX:0,
                startY:0,
                click:true,//
                momentum:true,//惯性效果
                bounce:true,//回弹效果
                deceleration:0.003//加速度效果
            })
        })
    },
    components:{
        HeadBar,
        Carousel,
        NewsBox
    }
}
</script>

<style lang="less">
    @rem:48rem;
    #wrapBox{
        position: absolute;
        top:0;
        left:0;
        height:100%;
        // box-sizing:border-box;
        padding-top:112/@rem;
    }
</style>
