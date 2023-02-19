<template>
  <div class="login">

    <!-- 头像框区域 -->
    <!-- <div class="login"> -->
      <div class="store_header">
        <div class="store_avatar">
          <img src="../../assets/images/avatar_default.png" alt="头像" width="55" height="55">
        </div>
        <div class="store_name">Lori</div>
      </div>
    <!-- </div> -->

    <!-- <van-icon name="clear-full" /> -->

    <!-- icon传入的username给vant的name属性, 从而使用对应的用户头像标签, clear-full是关闭的 X 图标 -->

    <md-field-group>

      <!-- 账号框:  V-model會忽略所有表單元素的value、checked、selected的初始值  -->
      <md-field v-model="account" icon="username" placeholder="请输入测试账号 user123" right-icon="clear-full" name="user"
        data-vv-as="帐号" @right-click="clearText" />

      <!-- 密码框 -->
      <md-field v-model="password" icon="lock" placeholder="请输入测试密码 user123" :type="visiblePass ? 'text' : 'password'"
        :right-icon="visiblePass ? 'eye-open' : 'eye-close'" data-vv-as="密码" name="password"
        @right-click="visiblePass = !visiblePass" />

      <div class="clearfix">
        <div class="float-l">
          <router-link to="/login/registerGetCode">免费注册</router-link>
        </div>
        <div class="float-r">
          <router-link to="/login/forget">忘记密码</router-link>
        </div>
      </div>


      <van-button size="large" type="danger" :loading="isLogining" @click="loginSubmit">登录</van-button>
    
      
      
    </md-field-group>

    <div class="text-desc text-center bottom_positon">技术支持: Lori </div>
    

  </div>
</template>

<script>

import field from '@/components/field/';
import fieldGroup from '@/components/field-group/';

import { authLoginByAccount } from '@/api/api';
import { setLocalStorage } from '@/utils/local-storage';
import { emailReg, mobileReg } from '@/utils/validate';

import { Toast } from 'vant';

export default {
  name: 'login-request',
  components: {
    [field.name]: field,
    [fieldGroup.name]: fieldGroup,
  },
  data() {
    return {
      account: '',
      password: '',
      visiblePass: false,
      isLogining: false, // 当前是否点击登录按钮
      userInfo: {}
    };
  },
  methods: {
    clearText() {
      this.account = '';
    },

    validate() {

    },

    login() {
      let loginData = this.getLoginData();
      authLoginByAccount(loginData).then(res => {
        this.userInfo = res.data.data.userInfo;
        setLocalStorage({
          Authorization: res.data.data.token,
          avatar: this.userInfo.avatarUrl,
          nickName: this.userInfo.nickName
        });

        this.routerRedirect();
      }).catch(error => {
        Toast.fail(error.data.errmsg);
      });
    },

    loginSubmit() {
      this.isLogining = true;
      try {
        this.validate();
        this.login();
        this.isLogining = false;
      } catch (err) {
        console.log(err.message);
        this.isLogining = false;
      }
    },

    routerRedirect() {
      // const { query } = this.$route;
      // this.$router.replace({
      //   name: query.redirect || 'home',
      //   query: query
      // });
      window.location = '#/user/';
    },

    getLoginData() {
      const password = this.password;
      const account = this.getUserType(this.account); // 返回值: 'mobile'
      return {
        [account]: this.account,
        password: password
      };
    },

    getUserType(account) {
      const accountType = mobileReg.test(account)
        ? 'mobile'
        : emailReg.test(account)
          ? 'email'
          : 'username';
      return accountType;
    }
  }
};

</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin';



.login {
  // border-style:dashed;
  position: relative;
  height: 100vh; 
  background-color: #fff;
}

// 头像框区域 - start
.store_header {
  text-align: center;
  padding: 30px 0;

  .store_avatar img {
    border-radius: 50%;
  }

  .store_name {
    padding-top: 5px;
    font-size: 16px;
  }
}

// 头像框区域 - end

.register {
  padding-top: 40px;
  color: $font-color-gray;

  a {
    color: $font-color-gray;
  }

  >div {
    width: 50%;
    box-sizing: border-box;
    padding: 0 20px;
  }

  .connect {
    @include one-border(right);
    text-align: right;
  }
}

.bottom_positon {
  position: absolute;
  bottom: 30px;
  width: 100%;
  // border-style: dashed;
}
</style>