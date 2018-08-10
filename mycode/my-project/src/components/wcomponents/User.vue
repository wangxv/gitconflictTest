<template>
  <div class="hello">
  <el-table
            :data="tableData"
            border
            style="width: 100%;">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
            <el-table-column
              label="操作">
             <template slot-scope="scope">
                <el-button
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
             </template>
            </el-table-column>
          </el-table>
    </div>
</template>
<script>
export default {
  name:'UserList',
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      wtime: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      rowData: {}
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(row);
      let _row = { address: row.address, data: row.data, name: row.name };
      this.rowData = _row;
      const h = this.$createElement;
      console.log(this.$host);
      this.$axios
        .post(this.$host + "/ActivitySetting/Activity/SaveImgageLinkProducts")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      this.$axios
        .get("/api")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleDelete(row) {
      console.log(row);
      this.$confirm("此操作将永久删除该条信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
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
