<template>
  <tabbar :list="tabbarConfig"></tabbar>
</template>

<script>
  import Tabbar from "./components/Tabbar/Tabbar";
  import tabbarConfig from "config/tabbarConfig";

  export default {
    name: "YmTabbar",
    data() {
      return {
        tabbarConfig
      }
    },
    components: {Tabbar},
  }
</script>

<style scoped lang="less">

</style>
