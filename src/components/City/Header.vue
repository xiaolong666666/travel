<template>
    <header class="header">
        城市选择
        <router-link to="/">
            <div class="header-back"><div class="iconfont">&#xe624;</div></div>
        </router-link>
    </header>
</template>

<script>
    export default {
        name: 'CityHeader'
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        position relative
        height $headerHeight
        line-height $headerHeight
        background $bgColor
        color #fff
        font-size .32rem
        text-align center
        .header-back
            position absolute
            top 0
            left 0
            width .64rem
            color #fff
            text-align center
</style>