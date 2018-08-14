<template>
  <div class="hello">
  <el-container style="height: 500px;">
    <el-aside width="200px">
        <el-menu
          default-active="defaultActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#000"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span><router-link to='/goodsConfig'> 商品配置</router-link></span>
            </template>
            <el-menu-item-group>
              <template slot="title">商品配置</template>
              <el-menu-item index="1-1"><router-link to='/goodsConfig/Item1'> 选项1</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to='/goodsConfig/Item2'> 选项2</router-link></el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">活动配置</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title"><router-link to='/goodsConfig/Item3'> 选项4</router-link></template>
              <el-menu-item index="1-4-1"><router-link to='/goodsConfig/Item4'> 选项1</router-link></el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">
             <router-link to='/activityList'> 活动列表</router-link>
              </span>
          </el-menu-item>
          <el-menu-item index="3" >
            <i class="el-icon-document"></i>
            <span slot="title"><router-link to='/goodsList'> 商品列表</router-link></span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title" ><router-link to='/userList'> 用户列表</router-link></span>
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
       <router-view></router-view>
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
      rowData: {},
      defaultActive:'1'
    };
  },
  methods: {
    handleOpen(e) {
      console.log(e);
    },
    handleClose(e) {
      console.log(e);
    },
    tapClick(e) {
      console.log(e);
    },
    handleEdit(index,row) {
      console.log(row);
      let _row = {'address':row.address,'data':row.data,'name':row.name}
      this.rowData = _row;
      const h = this.$createElement;
      console.log(this.$host);
      this.$axios.post(this.$host+'/ActivitySetting/Activity/SaveImgageLinkProducts',
     ).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
       this.$axios.get('/api').then((res) => {
                console.log(res);
            }).catch((err) => {
               console.log(err);
            })
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
