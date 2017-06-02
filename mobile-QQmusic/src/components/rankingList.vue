<template>
    <div id="wrapBox">
        <div class="pageContant">
            <ul id="rankingList">
                <router-link tag="li" :to="{ name: 'topList', params: { id: val.id }}" class="ListOfCharts" v-for="(val,index) in topList" :key="val.id">
                    <div class="ListPic">
                        <img :src="val.picUrl">
                        <span class="listenCount">
                            <i class="iconListen"></i>
                            {{(val.listenCount/10000).toFixed(1)}}万
                        </span>
                    </div>
                    <div class="ListName">
                        <div id="rankListTextBox">
                            <h3 class="abbreviation">{{val.topTitle}}</h3>
                            <ol>
                                <li v-for="(value,index) in val.songList"><p class="abbreviation">{{index+1}} <span>{{value.songname}}</span> - {{value.singername}}</p></li>
                            </ol>
                        </div>
                        <i></i>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import BetterScroll from "better-scroll"
    export default{
        data(){
            return {
                //排行榜
                topList:[]
            }
        },
        mounted(){
            let url="https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492853417073"
            this.$http.jsonp(url,{jsonp:'jsonpCallback'}).then(d=>{
                this.topList=d.body.data.topList
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
<style lang="less" scoped>
    @rem:24rem;
    #rankingList{
        margin:10/@rem;
        .ListOfCharts{
            width: 100%;
            height:100/@rem;
            margin-bottom:10/@rem;
            display: flex;
            background: #fff;
            .ListPic{
                width:100/@rem;
                height:100%;
                position: relative;
                .listenCount{   
                    position: absolute;
                    display: block;
                    left: 5/@rem;
                    bottom: 7/@rem;
                    line-height: 12/@rem;
                    color: #fff;
                    opacity: .6;
                    font-size: 12/@rem;
                    z-index: 10;
                    
                    .iconListen{
                        display: inline-block;
                        vertical-align:top;
                        width: 10/@rem;
                        height: 10/@rem;
                        background-position: 0 -50/@rem;
                        margin-right: 3px;
                        background-image: url(../../static/img/list.png);
                        background-repeat: no-repeat;
                        background-size: 24/@rem 60/@rem;
                        z-index: 10;
                    }
                }
            }
            .ListName{
                flex:1;
                position: relative;
                #rankListTextBox{
                    width: 215/@rem;
                    height:92/@rem;
                    margin:4/@rem 10/@rem 4/@rem 15/@rem;
                    h3{
                        height: 24/@rem;
                        margin-bottom:5/@rem;
                        font-size:16/@rem;
                        line-height: 24/@rem; 
                    }
                    ol{
                        height:63/@rem;
                        
                        li{
                            height:33.3333%;
                            
                            p{
                                width:100%;
                                font-size: 14/@rem;
                                color: rgba(0,0,0,.5);
                                span{
                                    color:#000;
                                    margin-left: 8/@rem;
                                    margin-right: 5/@rem;  
                                }
                            }
                        }
                    }
                   
                }
                i{
                    position: absolute;
                    right: 10/@rem;
                    top: 50%;
                    margin-top: -4/@rem;
                    width: 6/@rem;
                    height: 6/@rem;
                    border-right: 1/@rem solid #b2b2b2;
                    border-bottom: 1/@rem solid #b2b2b2;
                    -webkit-transform: rotate(-45deg);
                    
                }

            }
        }
        li:last-of-type{
            margin-bottom:0;
        }
    }
</style>