<template>
  <div class="wrap">
1
  </div>
</template>

<script>

document.write("用户代理：" + navigator.userAgent)

export default {

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
    // 添加判断方法
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      return flag;
    }
  },
  mounted() {
    if (this.isMobile) {
      alert("移动端");
      this.$router.replace('/pc_index');
    } else {
      alert("pc端");
      this.$router.replace('/m_index');
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

  .app-nav-lg,
  .app-nav-md,
  .app-nav-sm,
  .app-nav-xs {
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

  .app-main-lg::-webkit-scrollbar,
  .app-main-md::-webkit-scrollbar,
  .app-main-sm::-webkit-scrollbar,
  .app-main-xs::-webkit-scrollbar {
    display: none;
  }

  .app-main-lg,
  .app-main-md,
  .app-main-sm,
  .app-main-xs {
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