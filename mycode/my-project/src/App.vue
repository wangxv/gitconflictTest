<template>
  <div id="app">
   <indexVue1></indexVue1>
  </div>
</template>

<script>
import indexVue1 from './components/wcomponents/three/index.vue';
export default {
  name: 'App',
  data () {
  return {
    msg: 'Welcome to Your Vue.js App'
  }
},
components:{
  indexVue1
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
