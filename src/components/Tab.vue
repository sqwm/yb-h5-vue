<template>
	<div class="tabar">
		<router-link :to="tab.url" v-for="(tab, index) in tabNames" :key="index" >
			<div class="tab-item">
				<img class="tab-icon" :src="navIndex === index ? tab.iconActive : tab.icon"/>
				<div class="tabName" :class="{ textActive: navIndex === index }">{{tab.name}}</div>
			</div>
		</router-link>
	</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class Tab extends Vue {
  @Prop() private tabNames!: any[];

  get navIndex() {
    const CurRouteArray = this.$route.path.split('/');
    switch (CurRouteArray[1]) {
      case 'home':
        return 0;
      case 'mine':
        return 1;
      default:
        return 0;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/common";

.tabar {
	// position: fixed;
	// left: 0;
	// bottom: 0;
	z-index: 999;
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: px2rem(120px);
	background: $bgfff;
	box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);

	.tab-item{
		@include flexbox;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 5px;

		.tab-icon{
			width: 27px;
			height:27px;
		}

		.tabName {
			margin-top: 5px;
			color: #2c2c2c;
		}
		.textActive {
			color: $bgblue;
		}
	}
}
</style>
