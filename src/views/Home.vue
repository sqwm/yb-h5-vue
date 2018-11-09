<template>
  <div class="home">
    <cube-slide ref="slide" :data="items" class="slide-wrap">
      <cube-slide-item v-for="(item, index) in items" :key="index">
        <a>
          <img :src="item.image" style="width: 100%">
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  @Provide() private items: Array = [
    { url: '', image: 'http://img.yibiankeji.com/ybkj/slide01.png' },
    { url: '', image: 'http://img.yibiankeji.com/ybkj/slide02.png' },
  ];
}
</script>

<style lang="scss">
  .home {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .slide-wrap {
      height: 42%;
    }
  }
</style>
