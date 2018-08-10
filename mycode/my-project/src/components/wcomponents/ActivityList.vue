<template>
  <div class="hello">
    <el-steps :active="1" simple>
      <el-step title="步骤 1" icon="el-icon-edit"></el-step>
      <el-step title="步骤 2" icon="el-icon-upload"></el-step>
      <el-step title="步骤 3" icon="el-icon-picture"></el-step>
    </el-steps>

    <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
      <el-step title="步骤 1" ></el-step>
      <el-step title="步骤 2" ></el-step>
      <el-step title="步骤 3" ></el-step>
    </el-steps>
   </div>
</template>
<script>
export default {
  name:'ActivityList',
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      wtime: "",

    };
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
}
h1,
h2 {
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
.el-header {
  background-color: rgb(2, 4, 7);
  color: rgb(255, 255, 255);
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
