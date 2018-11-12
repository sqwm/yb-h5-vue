<template>
  <div class="login">
    <section class="input-wrap">
      <label>手机：</label><input type="text" v-model="mobile" placeholder="请输入手机号码" />
    </section>
    <section class="input-wrap">
      <label>密码：</label><input type="password" v-model="password" placeholder="请输入登录密码" />
    </section>
    <cube-button class="button-wrapper" @click="login">登录</cube-button>
    <div class="register-wrapper" @click="goRegister">还没账号，点击去注册吧！</div>
  </div>
</template>

<script lang="ts">
import { Action } from 'vuex-class';
import { Component, Provide, Vue } from 'vue-property-decorator';

import api from '@/api';

@Component
export default class Login extends Vue {
  @Action('setToken') private setToken: any;
  @Action('setUserInfo') private setUserInfo: any;
  @Provide() private mobile: string = '';
  @Provide() private password: string = '';

  private login() {
    if (!/^\d{11}$/.test(this.mobile) || !this.mobile) {
      this.toast('手机号码有误，请重填');
      return;
    }
    if (!/^.{6,}$/.test(this.password) || !this.password) {
      this.toast('密码不足6位，请重填');
      return;
    }
    const params = { mobile: this.mobile, password: this.password };
    api.login(params).then((res) => {
      if (res.data.code === 0) {
        const fomatToken = `Bearer ${res.data.data.token}`;
        this.setToken(fomatToken);
        this.setUserInfo(res.data.data.userInfo);
        this.$router.replace({ name: 'home' });
      }
    });
  }

  private goRegister() {
    this.$router.push({ name: 'register' });
  }

  private toast(str: string) {
    this.$createToast({
      time: 1000,
      txt: str,
    }).show();
  }
}
</script>

<style lang="scss">
  @import "../assets/css/common";

  .login {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    .input-wrap {
      width: 75%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e0e6ed;
      margin: 10px 0;
      font-size: px2rem(36px);

      input {
        padding: 10px;
      }
    }

    .button-wrapper {
      width: 75%;
      margin-top: px2rem(100px);
      background: $bgblue;
    }

    .register-wrapper {
      margin-top: px2rem(50px);
      color: red;
      text-align: center;
      text-decoration: underline;
    }
  }
</style>
