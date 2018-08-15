<template>
  <div class="_wrap">
    <div class="item-input">
      <slot name="content"></slot>
    </div>
   </div>
</template>
<script>
let $ = this.$;
(($) => {
  $.fn.dataPicker = function(params,type){
    const {defaultval,untilnow} = params
    const {year,month,day} = defaultval

    //获取当前时间
    let today = new Date()
    //如何有传入则使用传入的年份，否则使用当前年份
    let currentYear = year || today.getFullYear;
    //月份需要加1  是从0-12
    let currentMonth = month || today.getMonth()+1


    //时间区间
    //Object.assign对象连接，即合并对象
    params.dateRange = Object.assign({
      maxYear:2050,
      minYear:1950,
      maxMonth:12,
      minMonth:1
    },params.dateRange)

    const {maxYear,maxMonth,minYear,minMonth} = parms.dateRange

    //如果是至今为止，则最大年份为当前年份
    if(untilnow){
      params.dateRange.maxYear = today.getFullYear()
      params.dateRange.maxMonth = today.getMonth() + 1
    }

   //将dateRange中的数据数值化
    for(let k in params.dateRange){
      params.dateRange[k] = params.dateRange[k]-0;
    }

    //获取每月的天数数组，并将数值格式化，小于10的数值前面加0
    let getDays = (max) =>{
      let days = []
       for(let i=1;i<(max || 31); i++){
        days.push(i<10 ? '0'+i : i)
      }
      return days;
    }

    //输入月份和年份，
    let getDaysByMonthAndYear =((month,year) =>{
      let numd = new Date(year,parseInt(month)+1-1,1)
      let d =new Date(numd-1)
      return getDays(d.getDate())
    })

    //格式化数值
    let formatNumber = (n) =>{
      return n<10 ? '0'+n : n
    }

    const dateValue = (() => {
      //有输入
      if(year && month){
        return {
          3: [year, formatNumber(month),formatNumber(day)],
          2: [year, formatNumber(month)]
        }
      }else{
        return {
          3: [today.getFullYear(), formatNumber(today.getMonth() +1),formatNumber(today.getDate())],
          2: [today.getFullYear(), formatNumber(today.getMonth() +1)]
        }
      }
    })()[type]

    let initMinMonthes = minMonth ? months.filters((v) => {
      return v-0 >=minMonth
    }) : null

    let initMaxMonthes = maxMonth ? months.filters((v) => {
      return v-0 >=maxMonth
    }) : null

    let initMonthes
    if(maxYear === dateValue[0]) {
      initMonthes = initMaxMonthes
    } else if (minYear === dateValue[0]){
      initMonthes = initMinMonthes
    }else{
      initMonthes = months
    }
      let rangeControlTimer = null

    let rangeControl = (picker) => {
      let nowCurrentYear = picker.cols[0].value - 0
      let nowCurrentMonth = picker.cols[1].value - 0
      if (picker.cols[0].value === '至今') {
        currentYear = picker.cols[0].value
        currentMonth = picker.cols[1].value
        picker.cols[1].replaceValues(['至今'])
        picker.cols[2] && picker.cols[2].replaceValues(['至今'])
        return
      }
      if (currentYear !== nowCurrentYear) {
        if (nowCurrentYear === minYear && initMinMonthes) {
          picker.cols[1].replaceValues(initMinMonthes)
        } else if (nowCurrentYear === maxYear && initMaxMonthes) {
          picker.cols[1].replaceValues(initMaxMonthes)
        } else if (picker.cols[1].values.length < 12) {
          picker.cols[1].replaceValues(months)
        }
        currentYear = nowCurrentYear
      }
      if (currentMonth !== nowCurrentMonth) {
        if (nowCurrentYear === maxYear && nowCurrentMonth === maxMonth && untilnow) {
          rangeControlTimer && clearTimeout(rangeControlTimer)
          picker.cols[2].replaceValues(getDays(dateValue[2]))
        } else {
          rangeControlTimer && clearTimeout(rangeControlTimer)
          rangeControlTimer = setTimeout(() => {
            picker.cols[2].replaceValues(getDays())
          }, 200)
        }
        currentMonth = nowCurrentMonth
      }
    }

    let initYears = (() => {
      let arr = []
      for (let i = minYear; i <= maxYear; i++) { arr.push(i) }
      if (untilnow) {
        arr.push('至今')
      }
      return arr
    })()

    let defaults
    if (type === 3) {
      defaults = {
        value: dateValue,
        onChange: (picker, values, displayValues) => {
          rangeControl(picker)

          let days = getDaysByMonthAndYear(picker.cols[1].value, picker.cols[0].value)
          let currentValue = picker.cols[2].value
          if (currentValue > days.length) {
            currentValue = days.length
          }
          picker.cols[2].setValue(currentValue)
        },
        cols: [
                // Years
          {
            values: initYears
          },
            // Months
          {
            values: initMonthes
          },
            // Days
          {
            values: untilnow && maxYear === dateValue[0] - 0 && maxMonth === dateValue[1] - 0 ? getDays(dateValue[2]) : getDays()
          }
        ]
      }
    } else if (type === 2) {
      defaults = {
        value: dateValue,
        onChange: (picker, values, displayValues) => {
          rangeControl(picker)
        },
        cols: [
                // Years
          {
            values: initYears
          },
            // Months
          {
            values: initMonthes
          }
        ]
      }
    }
    return this.each(function() {
      if (!this) return
      let p = $.extend(defaults, params)
      $(this).picker(p)
    })

  }

})(this.$)

/**
 * datePicker 为日期选择
 * dateRange:{
 *   minYear: 最小年份
 *   maxYear: 最大年份
 *   minMonth: 最小月份
 *   maxMonth: 最大月份
 * }
 *
 * formatvalue:格式化数据，每次数据变化时都会执行
 * onopen: 自定义picker打开时的触发动作
 * onclose: 自定义picker关闭时的触发动作
 *
 */
export default {
  name:'TimeSelector',
  data() {
    return {
      wtime: "",

    };
  },
  props: {
    datePicker:{
      type: Number,
      default:3
    },
    successBtn: {
      type: String,
      default: '取消'
    },
    title: {
      type: String,
      default: ''
    },
    formatvalue: {
      type:Function,
      default:function(picker,value,displayValue){
        return displayValue.join(' ')
      }
    },
    dateRange: {
      type:Object,
      default(){
        return {}
      }
    },
    rotateeffect: {
      type:Boolean,
      default:false
    },
    onopen: {
      type: Function
    },
    onclose: {
      type:Function
    },
    defaultval: {
      type: Object,
      default(){
        return {}
      }
    },
    untilnow: {
      type: Boolean,
      default:false
    }
  },
  beforDestroy(){
    this.$(this.$el).find('input').picker('close')
  },
  mounted(){
    this.$(this.$el).find('input').datePicker({
      toolbarTemplate: `<header class="bar bar-nav"
                          <button class="button button-link pull-right close-picker">${this.successBtn}</button>
                          <span class="subtitle">${this.title}</span>
                          <h1 class="title close-picker">${this.cancelBtn}</h1>
                        </header>`,
      formatValue: this.formatvalue,
      rotateEffect: this.rotateeffect,
      onOpen: this.onopen,
      onClose: this.onclose,
      defaultval: this.defaultval,
      untilnow: this.untilnow,
      dateRange: this.dateRange
    }, this.datePicker)
  }
}
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
