<template>
  <div class="register">
    <form-items :formConfigs="formConfigs"></form-items>
    <foot-button @onClick="submit" btnText="点击注册"></foot-button>
  </div>
</template>

<script lang="ts">
import { Action } from 'vuex-class';
import { Provide, Component, Vue } from 'vue-property-decorator';
import FootButton from '@/components/FootButton.vue';
import formItems from '@/components/inputs/index.vue';

import api from '@/api';

@Component({
  components: {
    formItems,
    FootButton,
  },
})
export default class Register extends Vue {
  @Action('setToken') private setToken: any;
  @Action('setUserInfo') private setUserInfo: any;

  @Provide() private formConfigs: any[] = [
    { itemName: 'name', type: 'text', leftText: '昵称', rightValue: '', placeholder: '请输入' },
    { itemName: 'realname', type: 'text', leftText: '真实姓名', rightValue: '', placeholder: '请输入' },
    { itemName: 'mobile', type: 'text', leftText: '登录手机', rightValue: '', placeholder: '请输入' },
    { itemName: 'password', type: 'password', leftText: '登录密码', rightValue: '', placeholder: '请输入' },
    { itemName: 'confirmPass', type: 'password', leftText: '确认密码', rightValue: '', placeholder: '请确认' },
  ];

  private submit() {
    const params: any = {};
    for (const config of this.formConfigs) {
      params[config.itemName] = config.rightValue;
    }
    const { name, realname, mobile, password, confirmPass } = params;
    if (!/^\d{11}$/.test(mobile) || !mobile) {
      this.toast('手机号码有误，请重填');
      return;
    }
    if (!/^.{6,}$/.test(password) || !password) {
      this.toast('密码不足6位，请重填');
      return;
    }
    if (password !== confirmPass) {
      this.toast('两次密码不一致，请重填');
      return;
    }
    if (!name) {
      this.toast('请输入昵称！');
      return;
    }
    if (!realname) {
      this.toast('请输入真实姓名！');
      return;
    }

    delete params[confirmPass];
    api.register(params).then((res) => {
      if (res.data.code === 0) {
        const fomatToken = `Bearer ${res.data.data.token}`;
        this.setToken(fomatToken);
        this.setUserInfo(res.data.data.userInfo);
        this.$router.replace({ name: 'home' });
      } else {
        this.toast(res.data.msg);
      }
    });
  }
  private toast(str: string) {
    this.$createToast({
      time: 1000,
      txt: str,
    }).show();
  }
}
</script>
