<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #app {
    max-width: 960px;
    margin: 0 auto;
  }
</style>



<!-- <template>
  <HelloPc v-if="pc"/>
  <HelloMobile v-else/>
</template>

<script>~

import HelloPc from './zh/HelloPc.vue'
import HelloMobile from './zh/HelloMobile.vue'


console.log('hello1')
console.log('hello2')
export default {

  data() {
    return {
         pc: true
    }
  },
  components: {
    HelloMobile, HelloPc
  },

  methods: {
    // 添加判断方法
    isMobile() {
      let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  mounted() {
    if (this.isMobile()) {
      alert("移动端");
      // this.pc = false
      // this.$router.replace('/pc_index');
    } else {
      alert("pc端");
      // this.$router.replace('/m_index');
      // this.pc = true
    }
    // 每一次挂载完， 数据的修改会刷新页面 
    window.myData = this
  }
}

</script> -->
