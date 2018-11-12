<template>
  <div class="adduser-container">
    <form-items :formConfigs="formConfigs"></form-items>
    <foot-button @onClick="submit" btnText="提交"></foot-button>
  </div>
</template>

<script lang="ts">
import { State } from 'vuex-class';
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
export default class UpdatePassword extends Vue {
  @State('userInfo') private userInfo!: object;

  @Provide() private formConfigs: any[] = [
    { itemName: 'oldPass', type: 'password', leftText: '原密码', rightValue: '', placeholder: '请输入原密码' },
    { itemName: 'password', type: 'password', leftText: '新密码', rightValue: '', placeholder: '请输入新密码' },
    { itemName: 'confirmPass', type: 'password', leftText: '确认密码', rightValue: '', placeholder: '请确认密码' },
  ];

  private submit() {
    const password = this.formConfigs[1].rightValue;
    if (!/^.{6,}$/.test(password) || !password) {
      this.$toast('密码不足6位，请重填');
      return;
    }
    const confirmPass = this.formConfigs[2].rightValue;
    if (password !== confirmPass) {
      this.$toast('两次密码不一致，请重填');
      return;
    }
    const id = this.userInfo.id;
    const params = {
      oldPassword: this.formConfigs[0].rightValue,
      password,
    };
    api.updatePassword(id, params).then((res) => {
      if (res.data.code === 0) {
        this.$router.replace({ name: 'login' });
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

<style lang="scss" scoped>
  @import "../assets/css/common";

  .adduser-container {
    background: $bgfff;
  }
</style>
