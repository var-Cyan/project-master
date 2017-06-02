
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
        }
    }
</script>
<style lang="less">
@rem:24rem;
     #layout{
         width:100%;
         height:100%;
        #wrapBox{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            height:486/@rem;
            overflow:hidden;
            margin-top:84/@rem;
            margin-bottom:70/@rem;    
            .pageContant{
                background: #f4f4f4;
                width:100%;
                overflow: hidden;
            }
        }
     }

</style>