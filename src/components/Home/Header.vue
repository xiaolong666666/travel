<template>
    <div class="header">
        <!-- 返回 -->
        <div class="header-back">
            <div class="iconfont">&#xe624;</div>
        </div>
        <!-- 搜索框 -->
        <div class="header-search">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <!-- 城市定位 -->
        <router-link to='/city'>
            <div class="header-city">
                {{this.city}}
                <span class="iconfont">&#xe72e;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'HomeHeader',
        computed: {
            ...mapState(['city'])
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    // 头部代码
    .header
        display flex
        line-height $headerHeight
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
            margin-right .1rem
            color #fff
            .iconfont
                align-self center
                display inline-block
                height .48rem
                line-height .48rem
                margin-top -.08rem
                font-size .48rem
</style>