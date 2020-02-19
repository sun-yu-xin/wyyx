<template>
  <div id="appContainer">
    <router-view></router-view>
    <HeaderGuide/>
    <FooterGuide/>
  </div>
  

</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import HeaderGuide from './components/HeaderGuide/HeaderGuide'
export default {
  name: 'app',
  components: {
    FooterGuide,
    HeaderGuide
  }
}
</script>

<style lang="stylus">

</style>