
<template>
    <div id="layout">
        <head-bar></head-bar>
        <router-view></router-view>
        <foot-bar></foot-bar>
    </div>
</template>
<script>
    import HeadBar from "./public/head.vue"
    import FootBar from "./public/foot.vue"
    import BetterScroll from "better-scroll"
    export default{
        components:{
            HeadBar,
            FootBar
        },
        mounted(){
            this.scrollRefresh()
        },
        updated(){
           this.scrollRefresh()
        },
        methods:{
            scrollRefresh(){
                let scroll=null;
                // this.$nextTick( ()=>{
                //     scroll.refresh();
                // })
                
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
            }
        }

    }
</script>
<style lang="less">
@rem:24rem;
     #layout{
         width:100%;
         height:100%;
        #wrapBox{
            position: fixed;
            top:0;
            left:0;
            width:100%;
            height:100%;
            overflow:hidden;

            .pageContant{
                background: #f4f4f4;
                margin-top:84/@rem;
                margin-bottom:70/@rem;
                width:100%;
                // height:100%;
            }
        }
     }

</style>