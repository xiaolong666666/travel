<template>
    <div>
        <!-- Banner -->
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <!-- Header -->
        <detail-header></detail-header>
        <div class="test">
            <detail-list :categoryList='categoryList'></detail-list>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import DetailBanner from './../components/Detail/Banner.vue'
  import DetailHeader from './../components/Detail/Header.vue'
  import DetailList from './../components/Detail/List.vue'
  export default {
      name: 'Detail',
      components: { DetailBanner, DetailHeader, DetailList },
      data () {
          return {
              sightName: '',
              bannerImg: '',
              gallaryImgs: [],
              categoryList: []
          }
      },
      methods: {
        getDetailInfo () {
          axios.get('/api/detail.json',{
            params: {
              id: this.$route.params.id
            }
          })
          .then(this.getDetailSucc)
        },
        getDetailSucc (res) {
          console.log('Detail data',res.data)
          res = res.data
          if(res.ret && res.data){
            res = res.data
            this.sightName = res.sightName
            this.bannerImg = res.bannerImg
            this.gallaryImgs = res.gallaryImgs
            this.categoryList = res.categoryList
          }
        }
      },
      mounted () {
        this.getDetailInfo()
      }
  }
</script>

<style lang="stylus" scoped>
    .test
        height: 20rem
</style>