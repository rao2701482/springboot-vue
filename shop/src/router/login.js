export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      showHeader: false,
      title:"登录"
    },
    // 使用的组件为此处定义的: 即登录页面
    component: () => import('@/views/login/login')
  }
];
