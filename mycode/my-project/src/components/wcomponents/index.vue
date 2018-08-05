<template>
  <div class="hello">
  <el-container style="height: 500px;">
    <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#000"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>配置列表</span>
            </template>
            <el-menu-item-group>
              <template slot="title">商品配置</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">活动配置</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">活动列表</span>
          </el-menu-item>
          <el-menu-item index="3" >
            <i class="el-icon-document"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">用户列表</span>
          </el-menu-item>
        </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
         <el-row>
           <el-col :span="6">
             <el-date-picker
                v-model="wtime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
           </el-col>
           <el-col :span="16">
              <el-button icon="el-icon-search" circle></el-button>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="success" icon="el-icon-check" circle></el-button>
              <el-button type="info" icon="el-icon-message" circle></el-button>
              <el-button type="warning" icon="el-icon-star-off" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
           </el-col>
        </el-row>
         
      </el-header>
      <el-main>
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
      </el-main>
    </el-container>
  </el-container>
 
  
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      wtime: '',
      tableData:  [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        rowData: {}
    };
  },
  methods: {
    handleOpen(e) {
      console.log(e);
    },
    handleClose(e) {
      console.log(e);
    },
    handleEdit(index,row) {
      console.log(row);
      let _row = {'address':row.address,'data':row.data,'name':row.name}
      this.rowData = _row;
      const h = this.$createElement;
       this.$prompt('编辑信息', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          message:`<el-table
            :data="rowData"
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
            </el-table>`
        }).then(({ value }) => {
          this.tableData[index] = _row;
          this.$message({
            type: 'success',
            message: '保存成功' 
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    },
    handleDelete(row) {
      console.log(row);
      this.$confirm('此操作将永久删除该条信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
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
