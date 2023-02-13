import router from "./router";

// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {

  // 判断该路由是否需要登录权限: 有登录要求的接口需要进行检查, 有token才放行
  if (to.matched.some(record => record.meta.requireAuth)) { 

    const token = localStorage.getItem("token")
    console.log("------------" + token)

    if (token) { // 判断当前的token是否存在 ； 登录存入的token
      // 已登录时再访问登录接口, 不做任何操作, 死掉了?
      if (to.path === '/login') {
          console.log('not filter')
        
      } else {
        // 已登录时, 直接放行
        next()
      }
    } else {
      // 未登录时, 直接跳转登录接口
      next({
        path: '/login'
      })
    }

    // 对于不要求登录的接口, 直接放行
  } else {
    next()
  }
})