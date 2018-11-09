<template>
  <div class="mine">
    我的
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
export default class Mine extends Vue {}
</script>

<style lang="scss">
.mine {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>