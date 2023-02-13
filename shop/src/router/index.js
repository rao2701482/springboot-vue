import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePageZhMobile from '../zh/HomePageMobile.vue'
import HomePageZhPc from '../zh/HomePagePc.vue'

import HomePageEnMobile from '../en/HomePageMobile.vue'
import HomePageEnPc from '../en/HomePagePc.vue'

// console.log('log: route/index.js  ....')

Vue.use(VueRouter)

const routes = [

    // 根路径 => 跳转中文/英文主页面
    {
      path: '/',
      name: 'Index',
      redirect: {name: "HomePageZhMobile"}
    },
    {
      path: '/zh/mobile/home',
      name: 'HomePageZhMobile',
      component: HomePageZhMobile
    },
    {
      path: '/zh/pc/home',
      name: 'HomePageZhPc',
      component: HomePageZhPc
    },
    {
      path: '/en/mobile/home',
      name: 'HomePageEnMobile',
      component: HomePageEnMobile
    },
    {
      path: '/en/pc/home',
      name: 'HomePageEnPc',
      component: HomePageEnPc
    }
  
  ]

// 创建进行路由的组件 然后对外暴露使用
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// permission.js 中就导入了这个router去限定访问权限
export default router
  