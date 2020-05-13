<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="图片加载错误">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOptions: {
            pagination: '.swiper-pagination',
            loop: true
        },
        swiperList: [
            {
                "id": "0001",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
            },
            {
                "id": "0002",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
            },
            {
                "id": "0003",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"
            },
            {
                "id": "0004",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"
            }
        ]
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