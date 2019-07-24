<template>
  <div>
    <swiper :list="banner">
      <template slot-scope="slotProps">
        <a href="#"><img :src="slotProps.data.img_url" alt=""></a>
      </template>
    </swiper>
  </div>
</template>

<script>
  import Swiper from "components/Swiper/Swiper";
  import DetailMixin from "./DetailMixin";

  export default {
    mixins:[DetailMixin],
    name: "DetailSwiper",
    components: {Swiper}
  }
</script>

<style scoped lang="less">

</style>
