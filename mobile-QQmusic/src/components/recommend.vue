<template>
    <div id="wrapBox">
        <div class="pageContant">
            <swipe :auto="4000" id="swipe-wrap">
                <swipe-item v-for="(item,index) in data" :key="index">
                    <img :src="item" alt="">
                </swipe-item>
            </swipe>
            <div id="radioStation">
                <h2>电台</h2>
                <ul>
                    <li>
                        <a href="javascript:;">
                            <span class="stationPic">
                                <img src="../../static/img/radioStation1.jpg">
                                <span class="stationIcon iconPlay"></span>
                            </span>
                            <span class="stationText">
                                    一人一首招牌歌
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="stationPic">
                                <img src="../../static/img/radioStation2.jpg">
                                <span class="iconPlay"></span>
                            </span>
                            <span class="stationText">
                                    热歌
                            </span>
                        </a>
                    </li>
                      <li>
                        <a href="javascript:;">
                            <span class="stationPic">
                                <img src="../../static/img/radioStation2.jpg">
                                <span class="iconPlay"></span>
                            </span>
                            <span class="stationText">
                                    热歌
                            </span>
                        </a>
                    </li>
                      <li>
                        <a href="javascript:;">
                            <span class="stationPic">
                                <img src="../../static/img/radioStation2.jpg">
                                <span class="iconPlay"></span>
                            </span>
                            <span class="stationText">
                                    热歌
                            </span>
                        </a>
                    </li>
                      <li>
                        <a href="javascript:;">
                            <span class="stationPic">
                                <img src="../../static/img/radioStation2.jpg">
                                <span class="iconPlay"></span>
                            </span>
                            <span class="stationText">
                                    热歌
                            </span>
                        </a>
                    </li>
                      <li>
                        <a href="javascript:;">
                            <span class="stationPic">
                                <img src="../../static/img/radioStation2.jpg">
                                <span class="iconPlay"></span>
                            </span>
                            <span class="stationText">
                                    热歌
                            </span>
                        </a>
                    </li>
                      <li>
                        <a href="javascript:;">
                            <span class="stationPic">
                                <img src="../../static/img/radioStation2.jpg">
                                <span class="iconPlay"></span>
                            </span>
                            <span class="stationText">
                                    热歌
                            </span>
                        </a>
                    </li>
                      <li>
                        <a href="javascript:;">
                            <span class="stationPic">
                                <img src="../../static/img/radioStation2.jpg">
                                <span class="iconPlay"></span>
                            </span>
                            <span class="stationText">
                                    热歌
                            </span>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
       
       
    </div>
</template>
<script>
    import {Swipe,SwipeItem} from 'mint-ui'

    let data=[
        '/static/img/banner1.jpg',
        '/static/img/banner2.jpg',
        '/static/img/banner3.jpg',
        '/static/img/banner4.jpg',
        '/static/img/banner5.jpg'
    ]

    export default{
        data(){
            return {
                data:data
            }
        },
        components:{
            Swipe,
            SwipeItem
        }
    }
</script>
<style lang="less">
     @rem:24rem;
         img{
             width:100%;
             height:100%;
         }
         #swipe-wrap{
             position: relative;
             height:144/@rem;
             margin-bottom:14/@rem;
            .mint-swipe-items-wrap{
                .mint-swipe-item{
                    height:144/@rem;
                }
            }
            .mint-swipe-indicators{
                .mint-swipe-indicator{
                    width: 6/@rem;
                    height:6/@rem;
                    margin:0 4/@rem;
                }
                .mint-swipe-indicator.is-active{
                    background: #fff;
                    opacity: 1;
                }
            }
         }
         #radioStation{
             margin:0 10/@rem 7/@rem 10/@rem;
             h2{
                height:24/@rem;
                margin-bottom:14/@rem;
                font-size:16/@rem;
                line-height: 24/@rem;
             }
             ul{
                 display: flex;
                 justify-content: space-between;
                 flex-wrap: wrap;
                 li{
                     width: 166/@rem;
                     height:212/@rem;
                     background: #fff;
                     a{
                         display: flex;
                         flex-direction: column;
                         height:100%;
                         .stationPic{
                             width:100%;
                             height:166/@rem;
                             margin-bottom:5/@rem;
                             position: relative;
                             img{
                                 width:100%;
                                 height:100%;
                             }
                             .iconPlay{
                                position: absolute;
                                z-index: 10;
                                height: 24/@rem;
                                bottom: 5/@rem;
                                right: 5/@rem;
                                width: 24/@rem;
                                background-position: 0 0;
                                background-image: url(../../static/img/list.png);
                                background-repeat: no-repeat;
                                background-size: 24/@rem 60/@rem;
                             }
                         }
                         .stationText{
                             text-align: center;
                            padding:0 7/@rem 5/@rem;
                            height:36/@rem;
                            width:152/@rem;
                            line-height: 18/@rem;
                            font-size:14/@rem;
                            color:#000;
                         }
                     }
                 }
             }
         }



</style>