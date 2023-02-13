
<template>
  <div class="wrap">
    <!-- 这里 visible 解释下：主要是控制菜单栏的显示与隐藏-->
    <!-- <app-header class="app-header" :visible="visible"/> -->
    <!-- 这里 isCollapse 解释下：主要是 element UI 里的控制 侧边栏 缩放的
          使用动态样式 :class="adaptation.nav" 去改变布局
    -->
    <app-nav :class="adaptation.nav" :isCollapse="isCollapse" :direction="visible"/>
    <app-main :class="adaptation.main"/>
  </div>
</template>

<script>
// 引入三个主要 `积木` 
// import AppHeader from './AppHeader'
import AppMain from './views/AboutView'
import AppNav from './views/hello'

export default {
  components: { AppMain, AppNav },
  created() {
    // 这里用了 箭头函数 其实可以不用 that 了，但是由于写 Es5 的习惯我就没改
    const that = this
    // 核心方法，主要 根据窗口的变化 来控制布局
    window.onresize = () => {
      window.screenWidth = document.body.clientWidth
      // 第二步
      that.screenWidth = window.screenWidth
      window.screenWidth >= 1200 ? that.isCollapse = false : that.isCollapse = true
      that.changeWidth(window.screenWidth)
    }
    window.onresize()
  },
  data() {
    return {
      adaptation: {
        nav: 'app-nav-lg',
        main: 'app-main-lg',
        class: ''
      },
      // 第一步
      screenWidth: document.body.clientWidth,
      visible: null,
      isCollapse: false
    }
  },
  methods: {
    // 第三步
    changeWidth(clientWidth) {
      this.visible = true
      // 主要根据 窗口变化 到一定位置时，变换样式
      if (clientWidth >= 1200) {
        // el-menu-vertical-demo el-menu-demo
        this.adaptation.nav = 'app-nav-lg'
        this.adaptation.main = 'app-main-lg'
      } else if (clientWidth >= 992) {
        this.adaptation.nav = 'app-nav-md'
        this.adaptation.main = 'app-main-md'
      } else if (clientWidth >= 768) {
        this.adaptation.nav = 'app-nav-sm'
        this.adaptation.main = 'app-main-sm'
      } else if (clientWidth < 768) {
        this.adaptation.nav = 'hidden-xs-only app-nav-xs'
        this.adaptation.main = 'app-main-xs'
        this.visible = false
      } else this.$message.warning({ message: '未知像素错误' })
      // console.log('当前窗口大小', clientWidth)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    height: 100%;
    overflow: hidden;

    .app-header {
      position: fixed;
      height: 60px;
      left: 0;
      top: 0;
      right: 0;
      z-index: 99;
      background: rgb(5, 32, 60);
    }

    .app-nav-lg, .app-nav-md, .app-nav-sm, .app-nav-xs {
      background: rgb(45, 56, 89);
      min-width: 60px;
      height: calc(100% - 0px);
      float: left;
      /*margin-top: 60px;*/
      overflow: hidden;
      user-select: none;
    }

    .app-nav-xs {
      width: 0;
      min-width: 0;
    }

    .app-main-lg::-webkit-scrollbar, .app-main-md::-webkit-scrollbar,
    .app-main-sm::-webkit-scrollbar, .app-main-xs::-webkit-scrollbar{
      display: none;
    }
    .app-main-lg, .app-main-md, .app-main-sm, .app-main-xs {
      padding: 80px 15px 0 15px;
      width: calc(100% - 230px);
      height: calc(100% - 0px);
      overflow: auto;
      scrollbar-width: none;
      float: right;
    }

    .app-main-md {
      width: calc(100% - 95px);
    }

    .app-main-sm {
      width: calc(100% - 95px);
    }

    .app-main-xs {
      width: calc(100% - 30px);
    }
  }
</style>