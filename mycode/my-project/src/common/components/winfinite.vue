<template>
  <div class="content infinite-scroll infinite-scroll-bottom" @infinite="infinite" :data-distance="distance" :style="{height:height,top:top}">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default{
  data(){
    return {
      loading:false,
      isEnd:this.end,
      noData:this.nodata
    }
  },
  //传进来的属性和值
  props:{
    distance:{
      type:Number,
      default: 50
    },
    endmsg: {
      type: String,
      default: '没有更多内容...'
    },
    end:{
      type:Boolean,
      default:false
    },
    nodata:{
      type:Boolean,
      default:false
    },
    height:{
      type:String,
      default:'100%'
    },
    top:String,
    default:'0'

  },
  mounted:function(){


  },
  destroyed: function(){

  },
  watch:{
    nodata(val,oldVal){
      this.noData = val
    },
    end(val,oldVal){
      this.isEnd = val
    }
  },
  methods: {
    infinite: function(ev){
      //如果是正在加载或者已结束则不再执行任何代码
      if(this.loading || this.isEnd){
        return
      }
      /**
       * Vue.nextTick([callback,context])
       * 在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM
       * 如果没有提供回调且在支持Promise的环境中，则返回一个Promise
       */
      Vue.nextTick(() => {
        //如果页面有滚动
        if(this.$el.scrollTop >0){
          //将正在加载设为true
          this.loading = true

          //处理加载事件
          let gresolve = null;
          let greject = null;
          const promise = new Promise((resolve,reject) => {
            gresolve = resolve
            greject = reject
          })

          this.$emit('oninfinite',ev,gresolve,greject)
          promise.then(() => {
            this.loading = false

          }).catch(() => {
            this.loading = true
          })
        }
      })
    }
  }
}

</script>

<style scoped>
.content{
  overflow:auto;
  position:absolute;
  width:100%;
  left:0;
  bottom:0;
}


</style>
