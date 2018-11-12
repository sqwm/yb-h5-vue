<template>
  <div class="mine-container">
    <form-items :formConfigs="formConfigs"></form-items>
    <foot-button @onClick="submit" btnText="提交更新"></foot-button>
  </div>
</template>

<script lang="ts">
import { State, Action } from 'vuex-class';
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
  @State('userInfo') private userInfo!: object;
  @State('options') private options!: object;
  @Action('setUserInfo') private setUserInfo: any;

  @Provide() private formConfigs: any[] = [
    { itemName: 'profilePhoto', type: 'photo', photoName: '', leftText: '头像', rightValue: '' },
    { itemName: 'name', type: 'text', leftText: '昵称', rightValue: '' },
    { itemName: 'mobile', type: 'show', leftText: '手机', rightValue: '' },
    { itemName: 'birthday', type: 'birth', leftText: '生日', rightValue: '' },
    { itemName: 'sex', type: 'select', leftText: '性别', rightValue: '请选择', rightText: '请选择', options: [] },
    { itemName: 'address', type: 'text', leftText: '住址', rightValue: '', placeholder: '请输入住址' },
  ];

  private created() {
    this.prepareInfo();
  }

  private prepareInfo() {
    const { id, name, mobile, address, birthday, sex, profilePhoto } = this.userInfo;
    this.formConfigs[0].photoName = id ? `p-${id}` : 'p-n'; // 用于上传文件时重命名，便于后端区分存储
    this.formConfigs[0].rightValue = profilePhoto;
    this.formConfigs[1].rightValue = name;
    this.formConfigs[2].rightValue = mobile;
    this.formConfigs[3].rightValue = birthday || '请选择';
    this.formConfigs[4].rightValue = sex;
    this.formConfigs[4].options = this.options.sexOpts;
    if (sex !== null) {
      this.formConfigs[4].rightText = this.options.sexOpts[sex].text;
    }
    this.formConfigs[5].rightValue = address;
  }

  private submit() {
    const { id, role } = this.userInfo;
    const params = {};
    for (const config of this.formConfigs) {
      params[config.itemName] = config.rightValue;
    }

    const { birthday, sex, address } = params;
    if (!birthday || sex === null || !address) {
      this.$createToast({
        time: 1000,
        txt: '有信息数为空，请填写完毕再提交！',
      }).show();
      return;
    }
    api.updateUser(id, params).then((res) => {
      if (res.data.code === 0) {
        params.id = id;
        params.role = role;
        this.setUserInfo(params);
        this.$router.go(-1);
      }
    });
  }
}
</script>
