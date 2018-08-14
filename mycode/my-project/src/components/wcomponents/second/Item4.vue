<template>
  <div class="hello">
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(item,index) in 6" :key="index">
         <!-- <img :src="item.url" alt=""> -->
         <span>{{item}}</span>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "Item4",
  data() {
    return {
    //  imgs:[{url:'../../../../static/imgs/img1.png'},{url:'../../../../static/imgs/img2.png'},
    //  {url:'../../../../static/imgs/img3.jpg'},{url:'../../../../static/imgs/img4.jpg'},
    //  {url:'../../../../static/imgs/img5.jpg'},{url:'../../../../static/imgs/img6.jpg'}
    //  ]
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
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
