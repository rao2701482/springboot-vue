import Vue from 'vue'
import VueRouter from 'vue-router'
import { getLocalStorage } from '@/utils/local-storage';

// import HomePageZhMobile from '../zh/HomePageMobile.vue'
// import HomePageZhPc from '../zh/HomePagePc.vue'

// import HomePageEnMobile from '../en/HomePageMobile.vue'
// import HomePageEnPc from '../en/HomePagePc.vue'

import home from './home';
import items from './items';
import order from './order';
import user from './user';
import login from './login';
import store from '../store/index';

// console.log('log: route/index.js  ....')

Vue.use(VueRouter)

const RouterModel = new VueRouter({
  routes: [...home, ...items, ...order, ...user, ...login]
});

RouterModel.beforeEach((to, from, next) => {

console.log("1. 计划跳转的页面是：" , to)

  // 从本地获取用户的登录信息
  const { Authorization } = getLocalStorage(
    'Authorization'
  );
  console.log("2. 当前是否已经完成认证 is :" + Authorization);

// 如果未登录, 则需要跳转登录页面
  if (!Authorization && to.name !== 'login') {
    console.log("3. 当前未状态为未登录");

    if (to.meta.login) {
      console.log("4. 当前页面需要登录, 重定向跳转登陆页面");
      next({ name: 'login', query: { redirect: to.name } });
      return;
    }
  }


  console.log("5. 当前状态为已登陆或不需要登录状态");
  //页面顶部菜单拦截
  let emptyObj = JSON.stringify(to.meta) == "{}";
  let undefinedObj = typeof (to.meta.showHeader) == "undefined";
  if (!emptyObj && !undefinedObj) {
    store.commit("CHANGE_HEADER", to.meta);
  } else {
    store.commit("CHANGE_HEADER", { showHeader: true, title: "" });
  }

  console.log("6. 正常跳转页面", to);
  next();

});


export default RouterModel;




// const routes = [

//     // 根路径 => 跳转中文/英文主页面
//     {
//       path: '/',
//       name: 'Index',
//       redirect: {name: "HomePageZhMobile"}
//     },
//     {
//       path: '/zh/mobile/home',
//       name: 'HomePageZhMobile',
//       component: HomePageZhMobile
//     },
//     {
//       path: '/zh/pc/home',
//       name: 'HomePageZhPc',
//       component: HomePageZhPc
//     },
//     {
//       path: '/en/mobile/home',
//       name: 'HomePageEnMobile',
//       component: HomePageEnMobile
//     },
//     {
//       path: '/en/pc/home',
//       name: 'HomePageEnPc',
//       component: HomePageEnPc
//     }
  
//   ]

// // 创建进行路由的组件 然后对外暴露使用
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// // permission.js 中就导入了这个router去限定访问权限
// export default router
  