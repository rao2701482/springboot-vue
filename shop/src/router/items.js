const Tabbar = () => import('@/components/Tabbar/');

export default [
  {
    path: '/items',
    name: 'class',
    meta: {
      keepAlive: true,
      showHeader: false
    },
    components: {
      // 这里在干什么
      default:  () => import('@/views/items/tabbar-catalog'),
      tabbar: Tabbar
    }
  },
];
