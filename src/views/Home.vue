<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './../components/Home/Header'
  import HomeSwiper from './../components/Home/Swiper'
  import HomeIcons from './../components/Home/Icons'
  import HomeRecommend from './../components/Home/Recommend'
  import HomeWeekend from './../components/Home/Weekend'
  import axios from 'axios'
  export default {
    name: 'Home',
    components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
    data(){
      return {
        city: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      getHomeInfo(){
        axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        console.log(res.data);
        res = res.data;
        if(res.ret && res.data){
          res = res.data;
          this.city = res.city;
          this.swiperList = res.swiperList;
          this.iconList = res.iconList;
          this.recommendList = res.recommendList;
          this.weekendList = res.weekendList;
        }
      }
    },
    mounted(){
      this.getHomeInfo();
    }
  }
</script>

<style scoped>

</style>
