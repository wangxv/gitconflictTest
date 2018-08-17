<template>
  <div id="app">
    <winfinite
    @oninfinite="oninfinite" endmsg="到底了哦" :distance="100"
    >
    <div class="list-block" slot="content">
      <ul class="list-container">
        <li v-for="(value,index) in infiniteItems" :key="index" class="item-content"><div class="item-inner"><div class="item-title">Item {{value}}</div></div></li>
      </ul>
    </div>
    </winfinite>
  </div>
</template>

<script>
import winfinite from "./common/components/winfinite";

export default {
  name: "App",
  data() {
    return {
      nodata: false,
      end: false,
      infiniteItems: [1, 2]
    };
  },
  methods: {
    oninfinite: function(ev, resolve, reject) {
      setTimeout(() => {
        const result = [];
        const len = this.infiniteItems.length;

        for (let i = 0; i < 20; i++) {
          result.push(len + i + 1);
        }
        this.infiniteItems = this.infiniteItems.concat(result);
        resolve();
      }, 1000);
    }
  },
  components: {
    winfinite
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
