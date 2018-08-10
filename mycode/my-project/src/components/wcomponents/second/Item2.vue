<template>
  <div class="hello">
   <el-rate
    v-model="value3"
    show-text>
    </el-rate>
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type">
      {{tag.name}}
    </el-tag>
  </div>
</template>
<script>
export default {
  name: "Item2",
  data() {
    return {
     activeNames:['1'],
     value3: null,
     tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
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
