<template>
  <div>
    <detail-swiper></detail-swiper>
    <detail-select></detail-select>
    <detail-bar></detail-bar>
  </div>
</template>

<script>
  import DetailMixin from "./comp/DetailMixin";
  import DetailSwiper from "./comp/DetailSwiper";
  import DetailBar from "./comp/DetailBar";
  import DetailSelect from "./comp/DetailSelect";

  export default {
    components: {DetailSelect, DetailBar, DetailSwiper},
    mixins:[DetailMixin],
    props: {
      id: {
        type: String,
        required:true
      }
    },
    name: "Detail",
    async created() {
      await this.getdata();
    }
  }
</script>

<style scoped lang="less">

</style>
