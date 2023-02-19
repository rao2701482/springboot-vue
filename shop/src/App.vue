<template>
  <div id="app">


    <v-header class="header"></v-header>


    <!-- //加了动画 要放到transition标签内部 -->
    <!-- <transition name="app">
      <router-view></router-view>
    </transition> -->
    <router-view></router-view>
    <router-view name="tabbar"></router-view>

  </div>
</template>

<script>

import header from "@/components/Header/header.vue"


export default {
  name: 'App',
  components: {
    "v-header": header
  }
}
</script>

<style lang="less">


//  让搜索框展示在更高的层级
.header {
  z-index: 5;
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


</style>
