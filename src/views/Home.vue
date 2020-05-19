<template>
  <div>
    <!-- 头部 -->
    <home-header></home-header>
    <!-- 轮播图 -->
    <home-swiper :list="swiperList"></home-swiper>
    <!-- icons图标 -->
    <home-icons :list="iconList"></home-icons>
    <!-- 推荐 -->
    <home-recommend :list="recommendList"></home-recommend>
    <!-- 周末去哪 -->
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'
  import HomeHeader from './../components/Home/Header'
  import HomeSwiper from './../components/Home/Swiper'
  import HomeIcons from './../components/Home/Icons'
  import HomeRecommend from './../components/Home/Recommend'
  import HomeWeekend from './../components/Home/Weekend'
  export default {
    name: 'Home',
    components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
    data(){
      return {
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      // 请求首页数据
      getHomeInfo(){
        axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
      },
      // 请求首页数据成功
      getHomeInfoSucc(res){
        console.log("Home data",res.data);
        res = res.data;
        if(res.ret && res.data){
          res = res.data;
          // 轮播图数据
          this.swiperList = res.swiperList;
          // icons图标数据
          this.iconList = res.iconList;
          // 推荐数据
          this.recommendList = res.recommendList;
          // 周末去哪数据
          this.weekendList = res.weekendList;
        }
      }
    },
    mounted(){
      this.lastCity = this.city
      this.getHomeInfo()
    },
    // 使用keep-alive后新增的生命周期方法,如果城市发生改变请求不同内容
    activated(){
      if(this.lastCity !== this.city){
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
