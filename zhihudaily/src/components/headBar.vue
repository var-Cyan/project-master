<template>
    <header>
        <div class="header">
            <span>列表</span>
            <span>首页</span>
        </div>
        <div class="header">
            <span>登陆</span>
            <span>模式</span>
        </div>
    </header>
</template>
<script>
export default{

}
</script>
<style lang="less">
    @rem:48rem;
    header{
        width:100%;
        position: fixed;
        left:0;
        top:0;
        z-index: 999;
        background:#00a2ed;
        height:112/@rem;
        display: flex;
        justify-content: space-between;
        .header{
            span{
                display: inline-block;
                padding:0 25/@rem;
                line-height:112/@rem;
                font-size:40/@rem;
            }
        }
    }
</style>