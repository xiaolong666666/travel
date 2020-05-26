<template>
    <div>
        <div v-for="(item,index) in categoryList" :key="index">
            <div class="item-title border-bottom">
                <div class="item-title-icon"></div>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :categoryList="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailList',
        props: {
            categoryList: Array
        }
    }
</script>

<style lang="stylus" scoped>
    .border-bottom
        &:before,&:after
            border-color #09f
    .item-title
        padding 0 .2rem
        font-size .32rem
        line-height .8rem
        .item-title-icon
            display inline-block
            position relative
            left .06rem
            top .08rem
            width .36rem
            height .36rem
            background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
            background-size .4rem
    .item-children
        padding 0 .2rem
</style>