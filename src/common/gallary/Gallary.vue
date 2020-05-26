<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key='index'>
                    <img class="gallary-img" :src="item" alt="图片加载错误">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CommonGallary',
        props: {
            imgs: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data () {
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observer: true,
                    observeParents: true
                }
            }
        },
        methods: {
            handleGallaryClick () {
                this.$emit('close')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    /deep/ .swiper-container
        overflow inherit 
    .container
        display flex
        flex-direction column
        justify-content center
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000
        .wrapper
            width 100%
            height 0
            padding-bottom 100%
            .gallary-img
                width 100%
                height 100%
            .swiper-pagination
                bottom -1rem
                color #fff
</style>