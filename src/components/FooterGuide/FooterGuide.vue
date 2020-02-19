<template>
  <div id="footerContainer">
        <div :class="{active:$route.path === '/home'}" @click="goPath('/home')" class="guideItem">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </div>
        <div :class="{active:$route.path === '/class'}" @click="goPath('/class')" class="guideItem">
            <i class="iconfont icon-leimu"></i>
            <span>分类</span>
        </div>
        <div :class="{active:$route.path === '/only'}" @click="goPath('/only')" class="guideItem">
            <i class="iconfont icon-jingxuan"></i>
            <span>值得买</span>
        </div>
        <div :class="{active:$route.path === '/shopcar'}" @click="goPath('/shopcar')" class="guideItem">
            <i class="iconfont icon-gouwuche"></i>
            <span>购物车</span>
        </div>
        <div :class="{active:$route.path === '/profile'}" @click="goPath('/profile')" class="guideItem">
            <i class="iconfont icon-wode"></i>
            <span>个人</span>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
        goPath(path){
            //跳转至指定路由路径
            this.$router.push(path)
        }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
    @import "../../common/stylus/mixins.styl"
    #footerContainer
        display flex
        top-border-1px(#eee)
        position fixed
        left 0
        bottom 0
        width 100%
        height 50px
        box-sizing border-box
        .guideItem
            width  25%
            height 50px
            text-align center
            display flex
            flex-direction column
            &.active
                color $red
            .iconfont
                font-size 22px
                line-height  30px

</style>
