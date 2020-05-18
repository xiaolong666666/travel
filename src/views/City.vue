<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
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
                    this.hotCities = res.hotCities;
                    this.cities = res.cities;
                }
            },
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