<template>
  <div id="headerContainer">
      <div class="line">
            <a class="logo" href="/" data-reactid=".0.0.0.1.0.0">网易严选</a>
            <div class="search bar" data-reactid=".0.0.0.1.0.1">
              <i class="icon" data-reactid=".0.0.0.1.0.1.0"></i>
              <span class="placeholder" data-reactid=".0.0.0.1.0.1.1">搜索商品, 共21727款好物</span>
            </div>
      </div>
      <div class="bottombox"></div>
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
    #headerContainer
        display flex
        bottom-border-1px(#eee)
        position fixed
        left 0
        top 0
        width 100%
        height 80px
        box-sizing border-box
        .line
            width 100%
            height 40px
            a 
                width 137px
                height 40px
                display inline-block
                line-height 40px
                text-align center
                background-color red
                font-size 17px
                color  black
            search bar
                width 442px
                height  56px
                background-color #DADADA
                
            
</style>
