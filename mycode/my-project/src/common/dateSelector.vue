<template>
  <div class="_wrap">
    <div class="item-input">
      <!-- <slot name="content"></slot> -->
      <div class="select-year">
        <span>请选择年份：</span>
        <span>
          <select @change="selectYear"  v-model="selectyear">
            <option v-for="(year,yindex) in years" :key="yindex" :value="year" >{{year}}</option>
          </select>
        </span>
      </div>
      <div><input class="_input" type="text" v-model="curTime"></div>
      <div class="_content">
        <ul v-for="(month,mindex) in data" :key="mindex">
          <div style="display:flex;width:280px;justify-content: center;color:#A0C1F0;" @click="PagTurning(month.index)">
            <span>{{month.id}}</span>
            <span style="display:flex;font-size:40px; margin-top:-28px;padding:0 5px;">.</span>
            <span>{{month.name}}</span>
           </div>
          <li v-for="(item,index) in month.day" :key="index" @click="selectDay(month,item)">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
   </div>
</template>
<script>
import {getMonthDay,getYears} from './config/dateSelector'
// function date(year,month){
//   let _date = new Date();
//   let _year = year || _date.getFullYear();
//   let _month = month || _date.getMonth() + 1;
// }

export default {
  name:'dateSelector',
  data() {
    return {
      wtime: "",
      data:getMonthDay(),
      years:getYears(1995,2020),
      curTime:null,
      selectyear:1995,
    }
  },
  created(){

  },
  methods:{
    selectYear(){
       let year = this.selectyear
      //闰年2月29天
      if(this.judgYear(year)){
        this.data[1].day.push('29');
      }
    },
    PagTurning(index) {
      let _index = index;
      if(_index == 12){
        _index = 1
      }else{
        _index = _index+1
      }
      $($('._content').find('ul')[_index-1]).css({
        'z-index':1000
      })
    },
    selectDay(month,item){
      let str =this.selectyear+'年'+ month.index +'月'+ item+'日'
      this.curTime = str;
    },
    judgYear(year){
      //判断闰年，可以整除4，（并且可以整出100但不可以整除400的不为闰年）
       if(year%4 ==0){
      if(year%100==0 && year%400 !=0){
        return false;
      }
        return true;
      }
      return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  list-style:none;
  padding:0;
  margin:0;
  /* box-sizing:border-box; */
}
.select-year{
  display:flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  width:280px;
  height:50px;
}
.select-year select{
  width:80px;
  height:30px;
  border-radius: 5px;

}
.item-input{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
}
._input{
  background:#1F3BF7;
  box-shadow:2px 2px 5px #1F3BF7;
  display:flex;
  width:280px;
  height:50px;
  outline:none;
  font-size:16px;
  border:none;
  color:#fff;
  border-radius:15px;
  text-align:center;
}
._content{
  margin-top:10px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:280px;
  height:280px;
  position:relative;

}
._content ul{
  position:absolute;
  margin-top:15px;
  width:280px;
  height:280px;
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  background:#1F3BF7;
  box-shadow:2px 2px 5px #1F3BF7;
  border-radius:15px;
}

._content li{
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width:40px;
  height:40px;
  font-size:14px;

}
._content li:hover{
   color:#fff;
}

</style>
