const Tabbar = () => import('@/components/Tabbar/');

// 这里展示的应该就是默认页的内容, 默认展示首页
export default [
  {
    path: '/',
    name: 'home',
    components: {
      // 这里跳的是首页左下角精选的页面, 我打算展示
      default: () => import('@/zh/HomePageMobile'),
      tabbar: Tabbar
    },
    meta: {
      keepAlive: true,
      showHeader: true
    },
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
];
