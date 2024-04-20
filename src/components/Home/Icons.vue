<template>
    <div class="icons">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="Loading...">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        props: {
            list: Array
        },
        data(){
            return {
                swiperOptions: {
                    autoplay: false
                }
            }
        },
        computed: {
            // 将数据存为二维数据展现
            pages(){
                const pages = [];
                this.list.forEach((item,index)=>{
                    const page = Math.floor(index/8);
                    if(!pages[page]){
                        pages[page] = [];
                    }
                    pages[page].push(item);
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    /deep/ .swiper-container
        height 0
        padding-bottom 50%
    .icons
        margin-top .1rem
        .icon
            position relative
            float left
            width 25%
            height 0
            padding-bottom 25%
            .icon-img
                position absolute
                let 0
                right 0
                top 0
                bottom .44rem
                width 100%
                padding .1rem
                box-sizing border-box
                .icon-img-content
                    display block
                    height 100%
                    margin 0 auto
            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0
                height .44rem
                color $darkTextColor
                line-height .44rem
                text-align center
                ellipsis()
</style>