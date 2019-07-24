<template>
  <div class="home-header">
    <header-top>
      <div class="box" @click="jump">
        <i class="iconfont icon-search"></i> 商品搜索，共xxx款好物
      </div>
    </header-top>
  </div>
</template>

<script>
  import HeaderTop from "components/Header/HeaderTop";

  export default {
    name: "HomeHeader",
    components: {HeaderTop},
    methods:{
      jump(){
        this.$router.push({name:'search'})
      }
    }
  }
</script>

<style scoped lang="less">
  .home-header{
    background: #fff;
  }
  .box {
    background: #dddddd;
    height: 30px;
    border-radius:5px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 14px;
  }
  .iconfont{
    font-size: 18px;
    margin-right: 5px;
  }
  

  .home-header /deep/ .left, .home-header /deep/ .right {
    width: 20px;
  }
</style>

























