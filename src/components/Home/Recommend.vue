<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link tag="li" class="item border-bottom" v-for="item in list" :key="item.id" :to="'/detial/' + item.id">
                <img class="item-img" :src="item.imgUrl" alt="Loading...">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-detail">查看详情</button>
                </div>
            </router-link>
        </ul>
        <p class="all">查看所有产品</p>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommend',
        props: {
            list: Array
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            hieght 1.7rem
            padding .1rem
        .item-info
            flex 1
            min-width 0 
            padding .1rem
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                margin-top .12rem
                line-height .4rem
                color #ccc
                ellipsis()
            .item-detail
                margin-top .16rem
                padding 0 .2rem
                border-radius .06rem
                background #ff9300
                color #fff
                line-height .44rem
    .all
        line-height .8rem
        color #36d3f0
        text-align center
</style>