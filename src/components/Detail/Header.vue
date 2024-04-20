<template>
    <div>
        <router-link to='/' tag="div" class="header-abs" v-show="showAbs">
            <div class="iconfont">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <router-link to="/">
                <div class="header-back"><div class="iconfont">&#xe624;</div></div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailHeader',
        data () {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity: 0
                },
                timer: null
            }
        },
        methods: {
            handleScroll () {
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    let top = document.documentElement.scrollTop;
                    if( top > 60 ){
                        let opacity = top / 140
                        opacity = opacity > 1 ? 1 : opacity
                        this.showAbs = false
                        this.opacityStyle = { opacity }
                    }else{
                        this.showAbs = true
                    }
                },8)
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header-abs
        position absolute 
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        border-radius .4rem
        background rgba(0,0,0,.8)
        color #fff
        text-align center
        line-height .8rem
    .header-fixed
        position fixed
        left 0
        right 0
        top 0
        height $headerHeight
        line-height $headerHeight
        background $bgColor
        color #fff
        font-size .32rem
        text-align center
        z-index 2
        .header-back
            position absolute
            top 0
            left 0
            width .64rem
            color #fff
            text-align center
        
</style>