<template>
  <div id="app">
    <div class="content" >
      <transition :name="transitionName">
        <router-view class="child-view" ></router-view>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import Header from '@/components/Header.vue'; 

// @Component({
//   components: {
//     Header,
//   },
// })
export default class App extends Vue {
  @Prop()
  private transitionName: string = 'slide-left';
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .slide-left-enter-active {
    animation: slideLeft .3s;
  }
  .slide-right-enter-active {
    animation: slideRight .3s;
  }
  .fold-enter-active, .fold-leave-active {
    transition: transform .3s ease-in;
  }
  .fold-enter, .fold-leave-active {
    transform: translate3d(0, 100%, 0);
  }

  @keyframes slideLeft {
    from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideRight {
    from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
