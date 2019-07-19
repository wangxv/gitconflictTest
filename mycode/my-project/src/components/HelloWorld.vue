<template>
  <div class="hello">
    <index-vue></index-vue>
  </div>
</template>

<script>
import indexVue from './wcomponents/index.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your99999999'
    }
  },
  components:{
    indexVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
