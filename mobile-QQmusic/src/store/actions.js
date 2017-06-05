//存放vuex的核心处理函数
export default {
   sendAudio({commit},obj){
        commit({type:'sendAudio',obj:obj})
   },
   musicList({commit},obj){
        commit({type:'musicList',obj:obj})
   },
   deleteList({commit},n){
       commit({type:'deleteList',n:n})
   },
   playStateBtn({commit}){ //播放、暂停
       commit({type:'playStateBtn'})
   },
   nextMusic({commit}){//下一首
       commit({type:'nextMusic'})
   },
   prevMusic({commit}){//上一首
       commit({type:'prevMusic'})
   },
   playMusic({commit},n){
       commit({type:'playMusic',n:n})
   },
}