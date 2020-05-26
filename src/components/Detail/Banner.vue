<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="banner">
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-number"><span class="iconfont">&#xe60b;</span>{{this.gallaryImgs.length}}</div>
            </div>
        </div>
        <common-fade>
            <common-gallary :imgs='gallaryImgs' v-show='gallary' @close='handleGallaryClick'></common-gallary>
        </common-fade>
    </div>
</template>

<script>
    import CommonGallary from 'common/gallary/Gallary.vue'
    import CommonFade from 'common/fade/FadeAnimation.vue'
    export default {
        name: 'DetailBanner',
        components: { CommonGallary, CommonFade },
        props: {
            sightName: String,
            bannerImg: String,
            gallaryImgs: Array
        },
        data () {
            return {
                gallary: false
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