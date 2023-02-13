// import { createApp } from 'vue'

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import App from './App.vue'

import router from './router'
// import store from './store'
// import Element from 'element-ui'
// import axios from 'axios'


// 导入的是同目录的 axios.js文件 =>  进行请求拦截
import "./axios"

// 路由拦截
import "./permission"

console.log("main.js")
// 可以使用已定义的前端组件
// Vue.use(Element)

// Vue.config.productionTip = false
// 发http请求的组件
// Vue.prototype.$axios = axios

new Vue({
    router,
    el: '#app',
    render: h => h(App)
  }).mount('#app');

// createApp(App).use(router).mount('#app')

//  原先的启动方式 
//  createApp(App).mount('#app')
