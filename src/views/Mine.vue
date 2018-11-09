<template>
  <div class="mine">
    <profile-item :profileInfo="profileInfo"></profile-item>
  </div>
</template>

<script lang="ts">
import { State } from 'vuex-class';
import { Component, Provide, Vue } from 'vue-property-decorator';
import profileItem from '@/components/profile-item.vue';

@Component({
  components: {
    profileItem,
  },
})
export default class Mine extends Vue {
  @State('userInfo') private userInfo!: object;
  @Provide() private profileInfo: object = {
    profilePhoto: '', name: '用户名', mobile: '手机',
  };

  private created() {
    this.profileInfo = this.userInfo;
  }
}
</script>

<style lang="scss">
  .mine {
    display: flex;
    justify-content: center;
  }
</style>