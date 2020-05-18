<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="请输入城市名或拼音">
    </div>
</template>

<script>
    export default {
        name: 'CitySearch'
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        .search-input
            width 100%
            height .6rem
            padding 0 .2rem
            border-radius .06rem
            box-sizing border-box
            color #969696
            text-align center
        input::-webkit-input-placeholder {
            color: #969696;
            font-family Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif
        }
</style>