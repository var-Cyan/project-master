//改变store中各种状态的地方
export default{
    musicList(state,payload){//添加歌曲
        let falg = true //判断点击个歌曲是否重复
        
        for(let i = 0;i<state.musicList.length;i++){
            if(state.musicList[i].id==payload.obj.id){
                falg = false;
                state.src = `http://ws.stream.qqmusic.qq.com/${state.musicList[i].id}.m4a?fromtag=46`;
                state.musicPlace = i
                break
            }
        }
        if(falg){
            state.musicList.push(payload.obj)
            state.musicPlace = state.musicList.length-1
            state.src = `http://ws.stream.qqmusic.qq.com/${state.musicList[state.musicPlace].id}.m4a?fromtag=46`
        }
        state.playState = true;
    },
    deleteList(state,payload){//删除歌曲
        let len = state.musicList.length
        
        if(!(len-1)){
            console.log(payload.n,1)
            state.playState = false
            state.musicPlace=-1
            state.src=''
            state.musicList.splice(payload.n,1) //删除选中的歌曲
        }else{
             console.log(payload.n,2)
            if(len-1==state.musicPlace || state.musicPlace == payload.n && payload.n!=0){
                state.musicPlace--
                state.musicList.splice(payload.n,1) //删除选中的歌曲
                state.src = `http://ws.stream.qqmusic.qq.com/${state.musicList[state.musicPlace].id}.m4a?fromtag=46`
            }else if(payload.n == 0){
                console.log('asd')
                state.musicList.splice(payload.n,1)
                state.musicPlace=0
                state.src = `http://ws.stream.qqmusic.qq.com/${state.musicList[state.musicPlace].id}.m4a?fromtag=46`
            }else{
                 state.musicList.splice(payload.n,1) //删除选中的歌曲
            }
        }
    },
    playStateBtn(state){ //判断是否播放
        if(state.musicList.length){
            state.playState =!state.playState

            if(state.playState){//播放
                state.dom.play()
            }else{              //暂停
                state.dom.pause()
            }
        }
        
    },
    nextMusic(state){//下一首
        if(state.musicList.length>1){
            if(state.musicPlace < state.musicList.length-1){
                state.musicPlace++
            }else{
                state.musicPlace = 0
            }
             state.src = `http://ws.stream.qqmusic.qq.com/${state.musicList[state.musicPlace].id}.m4a?fromtag=46`
        }
    },
    prevMusic(state){//上一首
        if(state.musicList.length>1){
            if(state.musicPlace <= 0 ){
                state.musicPlace = state.musicList.length-1
            }else{
                state.musicPlace--
            }
             state.src = `http://ws.stream.qqmusic.qq.com/${state.musicList[state.musicPlace].id}.m4a?fromtag=46`
        }
    },
    playMusic(state,payload){
        state.musicPlace = payload.n
        state.src = `http://ws.stream.qqmusic.qq.com/${state.musicList[state.musicPlace].id}.m4a?fromtag=46`
    },
    sendAudio(state,payload){
        state.dom = payload.obj
    }
}