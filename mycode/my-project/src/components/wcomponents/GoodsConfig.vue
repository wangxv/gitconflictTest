<template>
  <div class="hello">
    <el-alert
      title="成功提示的文案"
      type="success">
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info">
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning">
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error">
    </el-alert>
    <el-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <el-button slot="reference">hover 激活</el-button>
    </el-popover>

  <el-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button slot="reference">click 激活</el-button>
  </el-popover>

  <el-popover
    ref="popover"
    placement="right"
    title="标题"
    width="200"
    trigger="focus"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
  </el-popover>
  <el-button v-popover:popover>focus 激活</el-button>
  </div>
</template>
<script>
export default {
  name: "GoodsConfig",
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
