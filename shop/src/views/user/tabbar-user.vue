<template>
  <!-- 这里是登录完毕后的个人页面 -->
  <div class="tabbar-user">
    <user-header :isLogin="isLogin"/>
    <order-group/>
    <coupon-group/>
    <user-module/>
  </div>
</template>

<script>


export default {
  data() {
    return {
      isLogin: false
    };
  }
};
</script>


<style scoped lang="scss">
.tabbar-user {
  > div {
    margin-bottom: 10px;
  }
  &__quit {
    border: 0;
    border-radius: 0;
  }
}
</style>
