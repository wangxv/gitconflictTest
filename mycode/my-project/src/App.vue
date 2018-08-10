<template>
  <div id="app">
    <index-vue></index-vue>
  </div>
</template>

<script>
import indexVue from './components/wcomponents/index.vue';
export default {
  name: 'App',
  data () {
  return {
    msg: 'Welcome to Your Vue.js App'
  }
},
components:{
  indexVue
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
