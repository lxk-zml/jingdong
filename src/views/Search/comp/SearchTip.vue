<template>
  <ul class="tip-list">
    <li @click="addHistorylist(item)" v-for="(item,index) in tiplist" :key="item">{{item}}</li>
  </ul>
</template>

<script>
  import SearchMixin from "./SearchMixin";

  export default {
    mixins: [SearchMixin],
    name: "SearchTip",
  }
</script>

<style scoped lang="less">
  .tip-list {
    background: #fff;
    padding: 0 0.15rem;

    li {
      height: 0.30rem;
      line-height: 0.30rem;
      border-bottom: 1px solid #eee;
    }
  }
</style>
