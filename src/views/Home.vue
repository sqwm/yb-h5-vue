<template>
  <div class="home">
    首页
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'; 

@Component({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
