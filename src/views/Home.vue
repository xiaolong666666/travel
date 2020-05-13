<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
  import HomeHeader from './../components/Home/Header'
  import HomeSwiper from './../components/Home/Swiper'
  import HomeIcons from './../components/Home/Icons'
  export default {
    name: 'Home',
    components: { HomeHeader, HomeSwiper, HomeIcons }
  }
</script>

<style scoped>

</style>
