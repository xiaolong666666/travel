<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="banner">
            <div class="banner-info">
                <div class="banner-title">大连圣亚海洋公园(AAAA景区)</div>
                <div class="banner-number"><span class="iconfont">&#xe60b;</span>39</div>
            </div>
        </div>
        <common-gallary :imgs='imgs' v-show='gallary' @close='handleGallaryClick'></common-gallary>
    </div>
</template>

<script>
    import CommonGallary from 'common/gallary/Gallary.vue'
    export default {
        name: 'DetialBanner',
        components: { CommonGallary },
        data () {
            return {
                gallary: false,
                imgs: ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"]
            }
        },
        methods: {
            handleBannerClick () {
                this.gallary = true
            },
            handleGallaryClick () {
                this.gallary = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            color #fff 
            line-height .6rem
            background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))
            .banner-title
                flex 1
                padding 0 .2rem
                font-size .32rem
            .banner-number
                display flex
                height .36rem
                margin .12rem .2rem
                padding 0 .28rem
                border-radius .12rem
                background #222
                font-size .24rem
                line-height .36rem
                .iconfont
                    margin-right .04rem
                    font-size .36rem
</style>