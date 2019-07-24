<template>
    <div class="tag-box">
      <!--插槽放头部-->
      <slot name="header"></slot>
      <!--插槽放列表-->
      <div class="list">
        <slot name="list"></slot>
      </div>
    </div>
</template>

<script>
    import TagHeader from "./TagHeader";
    export default {
      name: "TagBox",
      components: {TagHeader}
    }
</script>

<style scoped lang="less">
.tag-box{
  background: #fff;
  padding: 0 0.15rem 0.15rem;
  margin-bottom: 0.2rem;
}
  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &:after{
      content:'';
      flex:1;
    }
  }
  .list /deep/ .tag{
    margin: 0 0.052rem  0.05rem 0;
  }
</style>
