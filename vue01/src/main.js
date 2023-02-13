// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

// 这样就可以复制并使用官网上的代码了
Vue.use(elementUI)

// 可以通过这种方式发送http请求: this.$axios.get()
import axios from 'axios'
Vue.prototype.axios = axios

import qs from 'qs';
Vue.prototype.qs = qs;

Vue.config.productionTip = false


import VueLoadmore, { locale } from '../../packages/index'
Vue.use(VueLoadmore, {
  lang: 'en-US'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
