<template>
  <div id="app" :class="{ 'app-container': true, 'active': drawer }">
    <!-- 头部header -->
    <div class="header">
      <div class="logo">
        <a href="/zh/mobile/home">
          <img src="./assets/Lori.svg" alt="外贸logo" />
        </a>
      </div>

      <div class="search">
        <input style="border-radius: 30px;" class="searchInput" type="text" placeholder="请输入产品名称"
          @keyup.enter="submit" />
        <span class="mui-icon mui-icon-search" @click="submit"></span>
      </div>

      <div class="nav">
        <span class="mui-icon mui-icon-bars" @click="drawer = true"></span>
      </div>
    </div>

    <el-drawer class="drawer" title="我是标题" :visible.sync="drawer" :with-header="true" :modal="true" size="200px" :wrapperClosable=true>
            <span>将来放置一些跳转页面</span>

            <div>

                <router-link class="mui-tab-item1" to='/zh/mobile/home'>
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
            </div>
        </el-drawer>

    <!-- 抽屉放这里可以嘛 -->
    <!-- <DrawerUnit class="drawer" title="我是一个抽屉组件" :display.sync="display" :inner="true" :width="drawerWidth" :mask="true">
      1. Hello, world!
      2. Do you like it?

    </DrawerUnit> -->


    <!-- 底部tabBar -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item1" to='/zh/mobile/home'>
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" to='/zh/pc/home'>
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" to='/en/mobile/home'>
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id='badge'>0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" to='/en/pc/home'>
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

    <!-- 中间区域 -->
    <!-- 占位组件 -->
    <!-- //加了动画 要放到transition标签内部 -->

    <transition name="app">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      input: '',
      drawer: false,
      display: false,
      drawerWidth: '300px'
    }
  },
  methods: {
    submit() {
      console.log("submit....")
      this.$router.push("/zh/pc/home")
    },
    pageScroll() {

      window.scrollTo(-1, 0);

      console.log('xxxxx')
      this.display = true;
    },
  }
}
</script>

<style lang="less">
.header {
  // border-style: dashed;
  position: fixed;
  z-index: 5;
  width: stretch; // 宽度填充整行可得到的空间
  height: 50px;

  // 子元素采用flexBox布局
  display: flex;
  // 背景色透明
  background-color: transparent;

  background-color: #fff; // header整体白底, 悬浮样式
  opacity: 0.8;
  /* 搜索框半透明效果 */
}


.header .logo {
  padding: 0px 10px 0px 10px;
  // border-style: dashed;
  // border-radius: 30px; // 圆角
}

.header .logo img {
  // height: 17px; // 保证logo图片大小显示正常
  width: 70px;
}


.header .search {
  // border-style: dashed;
  flex: 1;
  display: flex;
  padding-top: 4px;
}

.searchInput {
  // border-style: dashed;
  margin-right: 10px;
  flex: 1;
}

.searchInput::placeholder {
  text-align: left; // 行内容左对齐
}

.header .search span {
  // border-style: dashed;
  // border-radius: 30px; // 圆角
  float: left;
  padding-top: 6px;
  margin-right: 10px;
  // background-color: transparent;
}

.header .nav {
  // border-style: dashed;
  width: 40px;
  padding-top: 10px;
}

.app-container {
  // 为了debug的css样式
  // border-style: solid;
  background-color: #ffffff;
  // background: url('./assets/1.jpg');
  background-size: 100%;

  //处理header和轮播图间的空白距离 
  overflow-x: hidden;
  padding-top: 0px; // 
  // padding-bottom: 50px;

}

//  展示抽屉后界面禁止滚动
.app-container.active {
  overflow: hidden;
}


//组件之间互相切换时候的动画效果
.app-enter {
  opacity: 0;
  transform: translateX(100%);
}

.app-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.app-enter-active,
.app-leave-active {
  transition: all .5s ease;
}


.mui-bar-tab .mui-tab-item1.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item1 .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}


.mui-bar-tab .mui-tab-item .mui-icon~.mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
</style>
