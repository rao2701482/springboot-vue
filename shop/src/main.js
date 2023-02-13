import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 发http请求的组件
Vue.prototype.$axios = axios

import Element from 'element-ui'
Vue.use(Element)

import "element-ui/lib/theme-chalk/index.css"

// 导入想要使用的element-ui组件
// import './plugins/element.js'

//导入Mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 下拉加载
import VueLoadmore from 'vuejs-loadmore';
Vue.use(VueLoadmore);

//引入Mint-ui组件
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(Mint)

import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

// swiper
// main.js
import VueAwesomeSwiper from 'vue-awesome-swiper'
/* 在node_modules里面找到swiper文件夹里面的css文件 */
import 'swiper/css/swiper.css'
/* 使用Vue.use来注册一个轮播图插件 */
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

import store from './store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')