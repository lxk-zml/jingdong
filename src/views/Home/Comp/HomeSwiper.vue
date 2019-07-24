<template>
  <div>
    <swiper :list="banner">
      <template slot-scope="slotProps">
        <a href="#"><img :src="slotProps.data.image_url" alt=""></a>
      </template>
    </swiper>
  </div>
</template>

<script>
  import Swiper from "components/Swiper/Swiper";
  import HomeMixin from "./HomeMixin";
  export default {
    mixins:[HomeMixin],
    name: "HomeSwiper",
    components: {Swiper}
  }
</script>

<style scoped lang="less">

</style>
