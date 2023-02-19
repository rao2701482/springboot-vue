import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存当前页面的header是否展示, 每一次router跳转, 会根据每个页面设置的meta进行判断是否展示
  state: {
    showHeader:true,
    title:'' 
    // token: '20',
    // userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
  },
  mutations: {
    // set method, 在Login.vue等地方可以调用, 保存前端的共享数据
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem("token", token)
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
    },
    REMOVE_INFO: (state) => {
      state.token = ''
      state.userInfo = {}
      localStorage.setItem("token", '')
      sessionStorage.setItem("userInfo", JSON.stringify(''))
    },
    // 改变是否展示header的变量
    CHANGE_HEADER: (state, payload) => {
      state.showHeader=payload.showHeader;
      state.title=payload.title;
    }

  },
  getters: {
    // get
    getUser: state => {
      return state.userInfo
    },
    showHeader: state => state.showHeader,
    titleHeader: state => state.title
  },
  actions: {
  },
  modules: {
  }
})
