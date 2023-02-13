import axios from 'axios'
// import Element from 'element-ui'
// import router from './router'
// import store from './store'


axios.defaults.baseURL = "http://localhost:8081"

// 前置拦截
axios.interceptors.request.use(config => {

  console.log("前置拦截")
  // 可以统一设置请求头

  return config
})

// 响应的后置拦截
axios.interceptors.response.use(response => {
    let res = response.data;

    console.log("=================")
    console.log(res)
    console.log("=================")

    // if (res.code === 200) {
    //   return response
    // } else {

    //   Element.Message.error('错了哦，这是一条错误消息', {duration: 3 * 1000})

    //   // 直接拒绝往下面返回结果信息
    //   return Promise.reject(response.data.msg)
    // }
  },
  error => {
    console.log(error)
    // 应该是数据非空, 则获取数据 data对象里的msg, 并留存展示
    // if(error.response.data) {
    //   error.message = error.response.data.msg
    // }

    // if(error.response.status === 401) {
    //   store.commit("REMOVE_INFO")
    //   router.push("/login")
    // }

    // Element.Message.error(error.message, {duration: 3 * 1000})
    // return Promise.reject(error)
  }
)