//工具接口为了方便构建全局state自定义方法
// export const msg = state => state.msg;
export default {
    dom(state){
        return state.dom
    },
    musicList(state){
        console.log(state)
        return state.musicList
    },
    src(state){
        return state.src
    },
    playState(state){
        return state.playState
    },
    musicPlace(state){
        return state.musicPlace
    }
}