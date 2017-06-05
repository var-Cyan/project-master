<template>
    <div id="wrapBox">
        <div class="pageContant">
            <div id="searchBar">
                <div id="inputWrap" onsubmit="ruturn false">
                    <form id="searchFrom"  method="get">
                        <input type="text" placeholder="搜索歌曲、歌单、专辑" class="searhInput" v-model="text" @keyup.13="hotSearch(text)">
                        <span class="iconSearch" @click='hotSearch()'></span>
                        <!--<span class="iconDel">删除</span>-->
                    </form>
                </div>
                <div class="searchCancel">取消</div>
            </div>
            <div id="hotKey" v-show="!searchList.length">
                <h3>热门搜索</h3>
                <ul v-if='date'>
                    <li class="hot"><a :href="date.special_url">{{date.special_key}}</a></li>
                    <li v-for="val,i in date.hotkey" v-if="i < 9" @click='hotSearch(val.k)'>{{val.k}}</li>
                </ul>
            </div>
            <ul id="searchResult" v-show="searchList.length">
                <li v-for="val,i in searchList" @click='musicList({id:val.songid,singer:val.singer,name:val.name})'>
                    <span>
                        <img :src="val.img" alt="">
                    </span>
                    <h3>
                        {{val.name}}
                    </h3>
                    <p>
                        {{val.singer}}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import BetterScroll from "better-scroll"
    import {mapGetters, mapActions} from 'vuex'
    export default{
        data(){
            return {
                //获取的所有数据
                date:null,
                text:'',
                searchList:[]
            }
        },
        mounted(){
            this.scrollRefresh()

            let url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?format=jsonp'
            this.$http.jsonp(url,{jsonp:"jsonpCallback"}).then(res => {
            this.date = res.body.data
            })
        },
        updated(){
           this.scrollRefresh()
        },
        methods:{
            hotSearch(val){
                this.searchList = [];
                // val?this.text = val:''
                let url = `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?format=jsonp&n=20&w=${val}`
                this.$http.jsonp(url,{jsonp:"jsonpCallback"}).then(res => {
                    res.body.data.song.list.forEach(val => {
                        this.searchList.push({name:val.songname,
                            img:"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+val.albummid+".jpg?max_age=2592000",
                            songid:val.songid,
                            singer:val.singer[0].name})
                    });
                })
            },
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
            },
            ...mapActions(["musicList"])
        }
    }
</script>
<style lang="less">
    @rem:24rem;
    #searchBar{
        background: #f4f4f4;
        padding: 10/@rem;
        width:340/@rem;
        height:36/@rem;
        display: flex;
        #inputWrap{
            position: relative;
            border-radius: 3/@rem;
            background: #fff;
            height: 20/@rem;
            padding: 8/@rem 12/@rem 8/@rem 35/@rem;
            flex: 1;
            #searchFrom{
                display: block;
                .searhInput{
                    height: 20/@rem;
                    line-height: 20/@rem;
                    width: 100%;
                    color: rgba(0,0,0,.3);
                    border: none;
                    font-size: 14/@rem;
                    vertical-align: top;
                    outline: none;
                }
                .iconSearch{
                    position: absolute;
                    top: 9/@rem;
                    right: 10/@rem;
                    width: 18/@rem;
                    height: 18/@rem;
                    background-image: url(../../static/img/search.png);
                    background-repeat: no-repeat;
                    background-size: cover;
                    text-indent: -999px;
                }
                .iconDel{
                    position: absolute;
                    top: 9/@rem;
                    right: 12/@rem;
                    width: 18/@rem;
                    height: 18/@rem;
                    background: #b1b1b1;
                    text-indent: -9999/@rem;
                    border-radius: 99/@rem;
                    display: none;
                    .iconDel:after,.iconDel:before{
                        content: "";
                        display: block;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        border-radius: 8/@rem;
                        background: #fff;
                        -webkit-transform: rotate(45deg);
                    }
                    .iconDel:before{
                        width: 10/@rem;
                        height: 2/@rem;
                        margin-left: -5/@rem;
                        margin-top: -1/@rem;
                    }
                    .iconDel:after{
                        width: 2/@rem;
                        height: 10/@rem;
                        margin-left: -1/@rem;
                        margin-top: -5/@rem;
                    }

                }
                
            }
        }
        .searchCancel{
            padding-right: 10/@rem;
            padding-left: 10/@rem;
            font-size: 14/@rem;
            height: 36/@rem;
            line-height: 36/@rem;
            display: none;
        }
        .active{
            display: block;
        }


    }
    #hotKey{
        background: #fff;
        padding: 15/@rem 15/@rem 10/@rem 15/@rem;
        h3{
            color: rgba(0,0,0,.6);
            margin-bottom: 8/@rem;
            font-size:14/@rem;
            height:21/@rem;
            line-height: 21/@rem;
            font-weight: bold;
        }
        ul{
            display: flex;
            flex-wrap:wrap;
                li{
                    font-size: 14/@rem;
                    padding: 0 10/@rem;
                    height: 30/@rem;
                    line-height: 30/@rem;
                    color: #000;
                    border: 1/@rem solid rgba(0,0,0,.6);
                    border-radius: 99/@rem;
                    word-break: keep-all;
                    margin-bottom: 10/@rem;
                    margin-right: 14/@rem;
                    a{  
                        color: #fc4524;
                    }
                }
                li.hot{
                    border-color: #fc4524;
                }
        }
    }
    #searchResult{
        // background: #00bbff;
        li{
            position: relative;
            height: 55/@rem;
            padding-left: 56/@rem;
            overflow: hidden;
            span{
                    position: absolute;
                    top: 8/@rem;
                    left: 8/@rem;
                    width: 40/@rem;
                    height: 40/@rem;
                    img{
                        width: 100%;
                    }
            }
            h3{
                margin: 10/@rem 0 2/@rem;
                line-height: 18/@rem;
                font-size: 16/@rem;
                font-weight: normal;
                color: #000;
            }
            p{
                color: #808080;
                height:18/@rem;
                line-height: 18/@rem;
                font-size: 12/@rem;
            }

        }
    }


</style>