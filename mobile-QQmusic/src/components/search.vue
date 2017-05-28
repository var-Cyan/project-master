<template>
    <div id="wrapBox">
        <div class="pageContant">
            <div id="searchBar">
                <div id="inputWrap">
                    <from id="searchFrom"  method="get">
                        <input type="search" placeholder="搜索歌曲、歌单、专辑" class="searhInput">
                        <span class="iconSearch">搜索</span>
                        <span class="iconDel">删除</span>
                    </from>
                </div>
                <div class="searchCancel">取消</div>
            </div>
            <div id="hotKey">
                <h3>热门搜索</h3>
                <nav>
                    <a href="javascript:;" class="hot">薛之谦</a>
                    <a href="javascript:;">音乐带我解脱 邓伦 </a>
                    <a href="javascript:;">爱的可能 </a>
                    <a href="javascript:;">THERE FOR YOU </a>
                    <a href="javascript:;">我的一个道姑朋友 </a>
                    <a href="javascript:;">皇朝中我指鹿为马 </a>
                    <a href="javascript:;">你就不要想起我 </a>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
    export default{

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
                    left: 10/@rem;
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
        nav{
            display: flex;
            flex-wrap:wrap;
                a{
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
                }
                a.hot{
                    color: #fc4524;
                    border-color: #fc4524;
                }
        }
    }

</style>