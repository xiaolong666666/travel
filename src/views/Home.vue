<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
  import HomeHeader from './../components/Home/Header'
  import HomeSwiper from './../components/Home/Swiper'
  import HomeIcons from './../components/Home/Icons'
  import HomeRecommend from './../components/Home/Recommend'
  export default {
    name: 'Home',
    components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend }
  }
</script>

<style scoped>

</style>
