<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" class="search-input" placeholder="请输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item in list" :key="item.id">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
    export default {
        name: 'CitySearch',
        props: {
            cities: Object
        },
        data(){
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        computed: {
            hasNoData(){
                return !this.list.length
            }
        },
        watch: {
            keyword(){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyword){
                    return this.list = []
                }
                this.timer = setTimeout(()=>{
                    const result = []
                    for(let i in this.cities){
                        this.cities[i].map(value=>{
                            if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                },100)
            }
        },
        mounted(){
            this.scroll = new Bscroll(this.$refs.search)
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        .search-input
            width 100%
            height .6rem
            padding 0 .2rem
            border-radius .06rem
            box-sizing border-box
            color #969696
            text-align center
        input::-webkit-input-placeholder {
            color: #969696;
            font-family Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif
        }
    .search-content
        position fixed 
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #eee
        z-index 1
        .search-item
            padding 0 0 0 .2rem
            line-height .62rem
            background #fff
            color #666
</style>