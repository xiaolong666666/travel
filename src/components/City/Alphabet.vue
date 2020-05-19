<template>
    <div class="list">
        <ul class="item-list">
            <li class="item" v-for="item of letters" :key="item" :ref="item" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
        </ul>
    </div>
</template>
 
<script>
    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object
        },
        data(){
            return {
                touchStatus: false,
                startY: 0,
                timer: null
            }
        },
        computed: {
            // letter转换为数组
            letters(){
                const letters = [];
                for(let i in this.cities){
                    letters.push(i)
                }
                return letters;
            }
        },
        updated(){
            // A到当前范围顶部距离
            this.startY = this.$refs['A'][0].offsetTop
        },
        methods: {
            // 事件监听
            handleLetterClick(e){
                this.$emit('change',e.target.innerText)
            },
            // 手指滑动过程
            handleTouchStart(){
                this.touchStatus = true
            },
            handleTouchMove(e){
                // 节流、计算手指位置同时数据监听
                if(this.touchStatus){
                    if(this.timer){
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(()=>{
                        const touchY = e.touches[0].clientY - 79
                        const index = Math.floor((touchY - this.startY) / 20)
                        if(index >= 0 && index < this.letters.length ){
                            this.$emit('change',this.letters[index])
                        }
                    },16)
                }
            },
            handleTouchEnd(){
                this.touchStatus = false                
            },
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