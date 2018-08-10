<template>
  <div class="hello">
    <el-row>
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../../../assets/1 (2).jpg" class="image">
      <div style="padding: 14px;">
        <span>风景如画</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>
<script>
export default {
  name: "Item1",
  data() {
    return {
     activeNames:['1']
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
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
