<template>
    <footer id="footer">
        <div class="playPic"></div>
        <div class="playCon">
            <p>QQ音乐</p>
            <div class="playBtns">
                <span class="prev"></span>
                <span class="play"></span>
                <span class="next"></span>
                <span class="playList"></span>
            </div>
        </div>
    </footer>
</template>
<script>
    export default{

    }
</script>
<style lang="less" scoped>
    @rem:24rem;
    #footer{
        position: absolute;
        width:100%;
        height:70/@rem;
        background:#f00056;
        bottom:0;
        left:0;
        display: flex;
        z-index:1;
        .playPic{
            width:60/@rem;
            height:100%;
        }
        .playCon{
            width:calc(100% - 60/@rem);
            height:100%;

            p{
                width:100%;
                height:28/@rem;
                line-height: 28/@rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                text-indent: 1em;
            }
            .playBtns{
                width:100%;
                height:42/@rem;
                display: flex;
                align-items:center;
                justify-content: space-around;

                span{
                    width:30/@rem;
                    height:30/@rem;
                    background:#666666;
                }
            }
        }
    }

    
</style>