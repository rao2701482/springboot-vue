<template>
  <div class="box">
      <div>1</div><div>1</div><div>1</div><div>1</div><div>1</div>
      <el-button type="primary" @click="display = true">打开抽屉</el-button>
      <DrawerUnit title="我是一个抽屉组件" :display.sync="display"
              :inner="true" :width="drawerWidth" :mask="true">
          1. Hello, world!
          2. Do you like it?
          <!-- <button class="btn try" @click="changeWidth">点我试试?</button> -->
      </DrawerUnit>
  </div>
</template>

<script>
import DrawerUnit from '@/components/drawer.vue'
export default {
  components: { DrawerUnit },
  data () {
      return {
          display: false,
          drawerWidth: '300px'
      }       
  },
  // 次级按钮使用的
  methods: {
    changeWidth () {
      this.drawerWidth = (this.drawerWidth === '500px') ? '800px' : '500px'
    }
  }
}
</script>



<style lang="scss">
#app {
  // margin: 60px;
}
.btn { 
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  letter-spacing: 3px;
  &:hover {
    opacity: .8;
  }
  &.open {
    width: 200px;
    height: 80px;
    font-size: 18px;
    background-color: orange;
    color: #fff;
  }
  &.try {
    width: 100px;
    height: 40px;
    background-color: green;
    color: #fff;
    margin-top: 50px;
  }
}
</style>
