<template>
  <search-tag :list="hotlist">热门搜索</search-tag>
</template>

<script>
  import SearchTag from "./SearchTag";
  import SearchMixin from "./SearchMixin";

  export default {
    mixins:[SearchMixin],
    name: "SearchHot",
    components: {SearchTag}
  }
</script>

<style scoped lang="less">

</style>
