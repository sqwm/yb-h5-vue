<template>
  <div class="header-container">
    <div v-show="isShowBack" class="img-wrap" @click="goBack">
      <img class="back-icon" src="../../public/img/back.png"/>
    </div>
    <div class="title-wrap">{{title}}</div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private title!: string;
  @Prop() private isShowBack!: boolean;

  private goBack() {
    window.history.back();
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/common";

.header-container {
  height: px2rem(100px);
  width: 100%;
  background: $bgblue;
  color: $fontfff;
  display: flex;
  align-items: center;
  justify-content: center;

  .img-wrap {
    position: fixed;
    left: 10px;
    .back-icon {
      width: px2rem(40px);
      height: px2rem(44px);
    }
  }

  .title-wrap {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: px2rem(36px);
   }
 }
</style>
