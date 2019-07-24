<template>
  <transition
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight">
    <div class="main">
      <search-header></search-header>
      <search-history v-show="status===0&&historylist.length"></search-history>
      <search-hot v-show="status===0"></search-hot>
      <!--搜索列表提示-->
      <search-tip v-show="status===1"></search-tip>
      <!--搜索结果页面-->
      <search-result v-show="status===2"></search-result>
    </div>
  </transition>
</template>

<script>
  import SearchHeader from "./comp/SearchHeader";
  import SearchTag from "./comp/SearchTag";
  import SearchHistory from "./comp/SearchHistory";
  import SearchHot from "./comp/SearchHot";
  import SearchMixin from "./comp/SearchMixin";
  import SearchTip from "./comp/SearchTip";
  import SearchResult from "./comp/SearchResult";

  export default {
    name: "Search",
    mixins: [SearchMixin],
    components: {SearchResult, SearchTip, SearchHot, SearchHistory, SearchTag, SearchHeader},
    async created() {
      await this.getdata()
    },
    beforeDestroy() {
      this.status = 0;//只显示 tag信息
      this.user = '';//把搜索框 内容清掉
      this.result = []//搜索结果列表
      this.page = 1
      this.totalpage = 1

    }
  }
</script>

<style scoped lang="less">
  .main {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #eee;
    overflow: hidden;
    z-index: 999;
  }


</style>
