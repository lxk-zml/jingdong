<template>
  <home-layout>
    <template slot="title">
      周一周四·新品首发
    </template>
    <template slot="default">
      <div class="list">
        <router-link :to="'/detail/'+item.id"  v-for="(item,index) in newgoods">
          <good
            :item="item"
            :key="item.id">
          </good>
        </router-link>
      </div>

    </template>
  </home-layout>
</template>

<script>
  import HomeLayout from "./HomeLayout";
  import Good from "components/Good/Good";
  import HomeMixin from "./HomeMixin";

  export default {
    mixins: [HomeMixin],
    name: "HomeNew",
    components: {Good, HomeLayout}
  }
</script>

<style scoped lang="less">
  .list {
    padding: 0 0.2rem 0.2rem;
    text-align: center;
    flex-wrap: wrap;
    display: flex;
    margin-bottom: 0.1rem;
  }
  .list a{
    width: 50%;
  }
  .list /deep/ .goods-item{
    width: 100%;
  }
</style>
