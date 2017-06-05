<template>
    <div id="Inlist">
        <div id="listContant">
            <header id="topFocus" :style="backgroundUrl">
                <div id="topText">
                    <h2>{{topList.listTitle}}</h2>
                    <p>{{topList.time}} 更新</p>
                </div>
            </header>
            <ol id="topInfoList">
                <li v-for="(val,i) in topList.list" :key='i' @click='musicList({id:val.songid,singer:val.singer,name:val.name})'>
                    <div id="topInfoListNum"><img :src="val.img"></div>
                    <div id="topInfoListInfo">
                        <h3 class="abbreviation">{{val.name}}</h3>
                        <p class="abbreviation">{{val.singer}}</p>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>
<script>
    import BetterScroll from "better-scroll"
    import {mapGetters, mapActions} from 'vuex'
    export default{
        data(){
            return {
                topList:{img:'',list:[],listTitle:'',time:''}
            }
        },
        mounted(){
            this.scrollRefresh()

            let id = this.$route.params.id
            let url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=" + id + "&_=1492910996732";
            this.$http.jsonp(url,{ jsonp: 'jsonpCallback' }).then(d=>{
            this.topList.img=d.body.topinfo.pic_album   
            this.topList.listTitle = d.body.topinfo.ListName
            this.topList.time = d.body.update_time  
            console.log(this.topList)
            
            d.body.songlist.forEach(val => {
                this.topList.list.push({
                    name:val.data.songname,
                    img:"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+val.data.albummid+".jpg?max_age=2592000",
                    songid:val.data.songid,
                    singer:val.data.singer[0].name})
                });
            })
        },
        computed:{
            backgroundUrl(){
                console.log(this.topList.img)
                return  "background:url("+this.topList.img+") no-repeat 0 0 /100%;"
            }
        },
        updated(){
           this.scrollRefresh()
        },
        methods:{
            scrollRefresh(){
                let scroll=null;
                this.$nextTick( ()=>{
                    let wrapBox=document.getElementById('Inlist');
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
    #Inlist{
        height:100%;
        #listContant{
            
            padding-bottom:70/@rem;
            #topFocus{
                position: relative;
                overflow: hidden;
                height:360/@rem;
                #topText{
                    color:#fff;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 20%;
                    padding-top: 40%;
                    background-image: -webkit-linear-gradient(top,transparent,rgb(0, 0, 0) 80%);
                    h2{
                        font-size: 24/@rem;
                        line-height: 27/@rem;
                        height: 27/@rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        padding-left: 10/@rem;
                        margin-bottom:8/@rem;
                    }
                    p{
                        font-size: 16/@rem;
                        line-height: 21/rem;
                        height: 21/@rem;
                        padding-left: 10/@rem;
                    }
                }
            }
            #topInfoList{
                background-color: rgb(0, 0, 0);
                border-top: 1px solid rgba(255,255,255,.4);
                li{
                    display: flex;
                    height:60/@rem;
                    #topInfoListNum{
                        width: 50/@rem;
                        color:#fff;
                        text-align: center;
                        line-height: 60/@rem;
                        font-size:20/@rem;
                    }
                    #topInfoListInfo{
                        color:#fff;
                        flex:1;
                        height:100%;
                        box-sizing: border-box;
                        padding:10/@rem 0 10/@rem 10/@rem;
                        border-bottom: 1px solid rgba(255,255,255,.4);
                        overflow: hidden;  
                        padding-right: 15/@rem;
                        h3{
                            font-size:18/@rem;
                            height:22/@rem;
                            line-height: 22/@rem;
                            width:100%;
                        }
                        p{
                            font-size:14/@rem;
                            height:21/@rem;
                            line-height: 21/@rem;
                            color: rgba(255,255,255,.6);
                            width:100%;
                        }
                    }
                }
            }
        }
    }
</style>