<template>
  <div class="main">
    <home-header></home-header>
    <home-new></home-new>
    <home-swiper></home-swiper>
    <home-channel></home-channel>
    <home-brand></home-brand>
    <home-new></home-new>
  </div>
</template>

<script>
  import HomeHeader from "./Comp/HomeHeader";
  import HomeSwiper from "./Comp/HomeSwiper";
  import HomeMixin from "./Comp/HomeMixin";
  import HomeChannel from "./Comp/HomeChannel";
  import HomeLayout from "./Comp/HomeLayout";
  import HomeBrand from "./Comp/HomeBrand";
  import HomeNew from "./Comp/HomeNew";

  export default {
    mixins:[HomeMixin],
    name: "Home",
    components: {HomeNew, HomeBrand, HomeLayout, HomeChannel, HomeSwiper, HomeHeader},
    async created() {
      await this.getdata()
    }
  }
</script>

<style scoped lang="less">
  .main {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 44px;
    background:#eee;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
