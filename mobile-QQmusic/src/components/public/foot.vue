<template>
    <footer id="footer">
        <div class="playPic"></div>
        <div class="playCon">
            <p>{{musicList.length?musicList[musicPlace].singer:'QQ音乐'}}  {{musicList.length?musicList[musicPlace].name:''}}</p>
            <div class="playBtns">
                <span class="prev icon-backward" @click='prevMusic'></span>
                <span  :class=" playState?'icon-pause':'icon-play'" @click='playStateBtn'></span>
                <span class="next icon-forward" @click='nextMusic'></span>
                <span class="playList icon-list" @click='playList'></span>
            </div>
        </div>
        <audio :src="src" id="play" autoplay='autoplay' ref='audios'></audio>
        <div class="play-list" v-show="isPlayList">
            <h3 class="play-list-top">歌曲列表共{{musicList.length}}首</h3>
            <ul>
                <li v-if="musicList" v-for="val,i in musicList" :class="{color:musicPlace==i}"> 
                    <p @click='playMusic(i)'> 
                        <span>{{i+1}}</span>.
                        <span>{{val.singer}}</span> -
                        <span>{{val.name}}</span>
                    </p>
                    <i class="icon-remove-circle" @click='deleteList(i)'></i>
                </li>
            </ul>
            <div class="close" @click='close'>关闭</div>
        </div>
    </footer>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    export default{
        data(){
            return {
                isPlayList:false
            }
        },
        mounted(){
            this.$store.dispatch('sendAudio',this.$refs.audios)
        },
        computed: mapGetters(["musicList","src","musicPlace","playState","dom"]),
        methods:{
                close(){
                    this.isPlayList=false
                },
                playList(){
                    this.isPlayList=true
                },
            ...mapActions(["deleteList","playStateBtn","prevMusic","nextMusic","playMusic","sendAudio"])
        }
    }
</script>
<style lang="less">
    @rem:24rem;
    #footer{
        position: fixed;
        width:100%;
        height:70/@rem;
        bottom:0;
        left:0;
        display: flex;
        z-index:1;
        .playPic{
            width:70/@rem;
            height:100%;
        }
        .playCon{
            width:calc(100% - 60/@rem);
            height:100%;
            background:rgba(255,255,255,0.8);
            color:#00e09e;
            flex:1;
            p{
                width:100%;
                height:28/@rem;
                line-height: 28/@rem;
                font-size:20/@rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                text-align: center;
            }
            .playBtns{
                width:100%;
                height:42/@rem;
                display: flex;
                align-items:center;
                justify-content: space-around;
                text-align: center;
                span:before{
                    line-height: 30/@rem;
                }
                span{
                    width:30/@rem;
                    height:30/@rem;
                }
            }
        }
        .play-list{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 280/@rem;
            z-index: 20;
            background-color: rgba(0,0,0,.7);
            color: #fff;
            h3{
                text-align: center;
                border-bottom: 1px solid #000;
                font-size:20/@rem;
                height:30/@rem;
                line-height:30/@rem;
            }
            ul{
                height: 210/@rem;
                overflow-y: auto;
                border-bottom: 1px solid #000;
                li{
                    border-bottom: 1px solid #000;
                    height:30/@rem;
                    font-size:16/@rem;
                    line-height: 30/@rem;
                    p{
                        float: left;
                        width: 85%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    i{
                        float: right;
                        color: #000;
                    }
                }
                li.color{
                    color: #00e09e;
                }
            }
            .close{
                width: 100%;
                height: 40/@rem;
                line-height: 40/@rem;
                text-align: center;
                color:#fff;
                font-size:30/@rem;
            }
        }
    }

    
</style>