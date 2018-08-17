// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import dateSelector from './common/dateSelector'
import router from './router'
import axios from 'axios'
import $ from 'zepto'
import ElementUI from './../node_modules/element-ui'
import './../node_modules/element-ui/lib/theme-chalk/index.css'
import '../static/js/sm'



Vue.use(ElementUI)


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$host = '/activity'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// new Vue({
//   el: '#app',
//   router,
//   components: { dateSelector },
//   template: '<dateSelector/>'
// })
