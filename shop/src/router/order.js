const Tabbar = () => import('@/components/Tabbar/');

export default [
  {
    path: '/order',
    name: 'cart',
    meta: {
      login: true,
      showHeader:false,
      title:"购物车"
    },
    components: { 
      // default: () => import('@/views/order/tabbar-cart'), 
      tabbar: Tabbar 
    }
  }
];
