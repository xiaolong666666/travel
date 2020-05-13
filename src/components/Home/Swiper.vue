<template>
    <div class="wrapper">
        <swiper :options="swiperOptions" v-if="showSwiper">
            <swiper-slide v-for="item in list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="图片加载错误">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data() {
      return {
        swiperOptions: {
            pagination: '.swiper-pagination',
            loop: true
        }
      }
    },
    computed: {
        showSwiper(){
            return this.list.length
        }
    }
  }
</script>

<style lang="stylus" scoped>
    // 样式穿透
    /deep/ .swiper-pagination-bullet-active
        background #fff 
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 31%
        background #eee
    .swiper-img
        width 100%
</style>