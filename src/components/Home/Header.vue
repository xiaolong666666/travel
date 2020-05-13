<template>
    <div class="header">
        <div class="header-back">
            <div class="iconfont">&#xe624;</div>
        </div>
        <div class="header-search">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-city">
            {{city}}
            <span class="iconfont">&#xe72e;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
        props: {
            city: String
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    // 头部代码
    .header
        display flex
        line-height .86rem
        background $bgColor
        color: #fff
        // 头部返回
        .header-back
            width .64rem
            text-align center
        // 头部搜索
        .header-search
            flex 1
            margin .12rem .2rem .12rem 0
            padding-left .2rem
            border-radius .1rem
            background-color #fff;
            color #ccc
            line-height .62rem
        // 头部城市
        .header-city
            display flex
            width 1.24rem
            .iconfont
                align-self center
                display inline-block
                height .48rem
                line-height .48rem
                margin-top -.1rem
                font-size .48rem
</style>