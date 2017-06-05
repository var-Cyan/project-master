<template>
    <div id="wrapBox">
        <div class="pageContant">
            <swipe :auto="4000" id="swipe-wrap">
                <swipe-item v-for="(item,index) in slider" :key="item.id">
                    <a :href="item.linkUrl"><img :src="item.picUrl" alt=""></a>
                </swipe-item>
            </swipe>
            <div id="radioStation" class="common">
                <h2>电台</h2>
                <ul>
                    <li v-for="(item,index) in radioList" :key="item.id">
                        <a href="javascript:;">
                            <span class="stationPic">
                                <img :src="item.picUrl">
                                <span class="stationIcon iconPlay"></span>
                            </span>
                            <span class="stationText">
                                    {{item.Ftitle}}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div id="hotSong" class="common" v-show="hotSong.length">
                <h2>热门歌曲</h2>
                <ul>
                    <li v-for="(item,index) in hotSong" :key="item.id">
                        <a href="javascript:;">
                            <span class="stationPic">
                                <img :src="item.picUrl">
                                <span class="stationIcon iconPlay"></span>
                            </span>
                            <span class="stationText">
                                {{item.songListDesc}}
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
    import BetterScroll from "better-scroll"
    export default{
        data(){
            return {
                //轮播图
                slider:[],
                //电台列表
                radioList:[],
                //热门歌曲
                hotSong:[]
            }
        },
        components:{
            Swipe,
            SwipeItem
        },
        mounted(){

            let url="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492177982521"
            this.$http.jsonp(url,{jsonp:'jsonpCallback'}).then(d=>{
                this.slider=d.body.data.slider;
                this.radioList=d.body.data.radioList;
                this.hotSong=d.body.data.songList;
            })
            this.scrollRefresh()
        },
        updated(){
           this.scrollRefresh()
        },
        methods:{
            scrollRefresh(){
                let scroll=null;
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
         .common{
             margin:0 10/@rem 10/@rem 10/@rem;
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
         #hotSong{

         }
</style>