<template>
    <div class="list" ref="wrapper">
        <div class="content">
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper"><div class="button">衡水</div></div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hot" :key="item.id"><div class="button">{{item.name}}</div></div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key">
                <div class="title border-topbottom" :ref="key">{{key}}</div>
                <ul class="item-list">
                    <li class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'CityList',
        props: {
            hot: Array,
            cities: Object,
            letter: String
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.wrapper)
        },
        watch: {
            letter(){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before,&:after
            border-color #ccc 
    .border-bottom
        &:after
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.58rem 
        left 0
        right 0
        bottom 0
        .title
            padding 0 0 0 .2rem
            background #eee
            color #666
            font-size .26rem
            line-height .54rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                float left 
                width 33.33%
                .button    
                    margin .1rem
                    padding .1rem 0
                    border .02rem solid #ccc
                    border-radius .06rem
                    font-size .26rem
                    text-align center
        .item-list
            .item
                line-height .72rem
                padding 0 0 0 .2rem
                font-size .26rem
</style>