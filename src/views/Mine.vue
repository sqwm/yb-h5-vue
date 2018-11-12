<template>
  <div class="mine">
    <profile-item :profileInfo="profileInfo"></profile-item>
    <form-items :formConfigs="baseConfigs" style="margin-top: 15px"></form-items>
  </div>
</template>

<script lang="ts">
import { State, Action } from 'vuex-class';
import { Component, Provide, Vue } from 'vue-property-decorator';
import ProfileItem from '@/components/ProfileItem.vue';
import formItems from '@/components/inputs/index.vue';

@Component({
  components: {
    ProfileItem,
    formItems,
  },
})
export default class Mine extends Vue {
  @State('userInfo') private userInfo!: object;
  @Action('setSignOut') private setSignOut: any;

  @Provide() private profileInfo: object = {
    profilePhoto: '', name: '用户名', mobile: '手机',
  };

  @Provide() private baseConfigs: any[];

  private created() {
    this.profileInfo = this.userInfo;
    this.baseConfigs = [{
      type: 'route',
      leftText: '修改密码',
      rightValue: 'setting',
      onClick: () => this.goPage('updatePassword'),
    },
    {
      type: 'route',
      leftText: '退出登录',
      rightValue: '',
      id: '',
      onClick: () => this.logout(),
    }];
  }
  private logout() {
    this.setSignOut();
    this.$router.replace({ name: 'login' });
  }
  private goPage(pageName: string) {
    this.$router.push({ name: pageName });
  }
}
</script>

<style lang="scss">
  .mine {
    display: flex;
    flex-direction: column;
  }
</style>