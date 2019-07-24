<template>
  <search-tag :func="deleteHistory"  :list="historylist" :visible="true">历史记录</search-tag>
</template>

<script>
  import SearchTag from "./SearchTag";
  import SearchMixin from "./SearchMixin";
  export default {
    mixins: [SearchMixin],
    name: "SearchHistory",
    components: {SearchTag},
    watch:{
      historylist:{
        handler() {
          localStorage.setItem('historylist',JSON.stringify(this.historylist));
        },
        deep:true
      }
    }
  }
</script>

<style scoped lang="less">

</style>
