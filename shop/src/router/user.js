const tab_user = () => import('@/views/user/tabbar-user');
const Tabbar = () => import('@/components/Tabbar/');

export default [
  {
    path: '/user',
    name: 'user',
    meta: {
      keepAlive: true,
      login: true,
      showHeader:false,
      title:"用户界面"
    },
    components: { default: tab_user, tabbar: Tabbar }
  },
];
