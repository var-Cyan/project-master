<template>
  <div id="app">

    <router-view></router-view>
    <foot-bar></foot-bar> 
  </div>
</template>

<script>
import FootBar from "./components/public/foot.vue"
export default {
  name: 'app',
  components:{
      FootBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
</style>
