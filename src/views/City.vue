<template>
    <div>
        <!-- 头部 -->
        <city-header></city-header>
        <!-- 搜索 -->
        <city-search :cities="cities"></city-search>
        <!-- 城市列表 -->
        <city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
        <!-- 字母表 -->
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from './../components/City/Header.vue'
    import CitySearch from './../components/City/Search.vue'
    import CityList from './../components/City/List.vue'
    import CityAlphabet from './../components/City/Alphabet.vue'
    export default {
        name: 'City',
        components: { CityHeader, CitySearch, CityList, CityAlphabet },
        data(){
            return {
                hotCities: [],
                cities: {},
                letter: ''
            }
        },
        methods: {
            getCityInfo(){
                axios.get('/api/city.json')
                .then(this.getCityInfoSucc)
            },
            getCityInfoSucc(res){
                console.log("City data",res.data);
                res = res.data
                if(res.ret && res.data){
                    res = res.data;
                    // 热门城市数据
                    this.hotCities = res.hotCities;
                    // 全部城市数据
                    this.cities = res.cities;
                }
            },
            // 接收城市数据
            handleLetterChange(letter){
                this.letter = letter
            }
        },
        mounted(){
            this.getCityInfo();
        }
    }
</script>

<style lang="stylus" scoped>
    
</style>