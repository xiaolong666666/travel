<template>
  <!-- 优化路由 -->
  <keep-alive exclude="Detail">
    <router-view></router-view>
  </keep-alive>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>

</style>
