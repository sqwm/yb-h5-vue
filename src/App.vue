<template>
  <div id="app">
    <com-header :isShowBack="isShowBack" :title="currentPageTitle"></com-header>
    <div class="content" >
      <transition :name="transitionName">
        <router-view class="child-view" ></router-view>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { State, Action } from 'vuex-class';
import { Component, Prop, Provide, Watch, Vue } from 'vue-property-decorator';
import ComHeader from '@/components/Header.vue'; 

@Component({
  components: {
    ComHeader,
  },
})
export default class App extends Vue {
  @State('currentPageTitle') private currentPageTitle!: string;
  @Action('setCurrentPageTitle') private setCurrentPageTitle: any;

  @Provide() private transitionName: string = 'slide-left';

  @Watch('$route')
  private on$RouteChanged(to: object, from: object) {
    const toLevel = Number(to.meta.level);
    const fromLevel = Number(from.meta.level);
    const toTitle = to.meta.title;

    this.setCurrentPageTitle(toTitle);
    this.setRouteTransiton(toLevel, fromLevel); // 设置路由跳转的动画
  }

  get isShowBack() {
    return this.$route.meta.level > 1;
  }

  private setRouteTransiton(toLevel: number, fromLevel: number) {
    // 如果是切换底部tab或首次打开h5 不加动画
    if (!fromLevel) {
      this.transitionName = '';
    } else if (toLevel === 1 && fromLevel === 1) {
      this.transitionName = '';
    } else {
      // 根据路由 元信息的层级判断 切换的动画
      this.transitionName = toLevel < fromLevel ? 'slide-right' : 'slide-left';
    }
  }
}
</script>

<style lang="scss">
@import "assets/css/common";

* { touch-action: pan-y; } 

html,body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin:0;
  padding:0;
}

input:focus {
  outline: none;
}

#app {
  @include flexbox;
  @include font-dpr(30px);
  flex-direction: column;
  height: 100%;
  background: #f8f8f8;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .content {
     height: calc(100% - 50px);
     overflow-y: auto;
     overflow-x: hidden;

     .child-view {
       height: 100%;
     }
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
}
</style>
