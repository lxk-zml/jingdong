<template>
  <home-layout class="mt10">
    <template slot="title">
      品牌制品商直供
    </template>
    <template slot="default">
      <div class="list">
        <div class="item" v-for="(item,index) in brand">
          <img :src="item.new_pic_url" alt="">
          <div class="desc">
            <h4>{{item.name}}</h4>
            <p>{{item.floor_price}}元起</p>
          </div>
        </div>
      </div>
    </template>
  </home-layout>
</template>

<script>
  import HomeLayout from "./HomeLayout";
  import HomeMixin from "./HomeMixin";

  export default {
    mixins: [HomeMixin],
    name: "HomeBrand",
    components: {HomeLayout}
  }
</script>

<style scoped lang="less">
  .mt10{
    margin-top: 0.1rem;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .item {
    width: 50%;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      right: -1px;
      top: 0;
      height: 100%;
      width: 1px;
      background: #fff;
      transform: scaleX(0.5);
      z-index: 10;
    }

    &:before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 1px;
      width: 100%;
      background: #fff;
      transform: scaleY(0.5);
      z-index: 10;
    }
  }

  .desc {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.15rem;

    h4 {
      font-weight: normal;
      font-size: 0.15rem;
      color: #666;
    }

    p {
      font-size: 0.14rem;
      color: #999;
    }
  }
</style>
