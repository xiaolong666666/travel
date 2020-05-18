<template>
    <div class="list">
        <ul class="item-list">
            <li class="item" v-for="(item,key) of cities" :key="key" @click="handleLetterClick">{{key}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object
        },
        methods: {
            handleLetterClick(e){
                this.$emit('change',e.target.innerText)
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .list
        position fixed
        width .6rem
        top 1.58rem
        right 0
        bottom 0
        display flex
        flex-direction column
        justify-content center
        align-items center
        .item
            color $bgColor
            line-height .4rem
            text-align center
</style>