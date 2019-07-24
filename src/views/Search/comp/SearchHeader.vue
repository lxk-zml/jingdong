<template>
  <header-top class="white-bg">
    <template slot="left">
      <back></back>
    </template>
    <template>
      <div class="input">
        <i class="iconfont icon-search"></i>
        <input type="text" @focus="change(myuser,1)"
               v-model="myuser"
               :placeholder="placeholder">
      </div>
    </template>
    <template slot="right">
      <div class="search" @click="addHistorylist(myuser)">
        搜索
      </div>
    </template>
  </header-top>
</template>

<script>
    import HeaderTop from "../../../components/Header/HeaderTop";
    import Back from "../../../components/Back/Back";
    import SearchMixin from "./SearchMixin";
    export default {
      mixins:[SearchMixin],
        name: "SearchHeader",
      computed:{
        myuser:{
          get(){
            return this.user;
          },
          set(newval){
            this.change(newval,1)
          }
        }
      },
      components: {Back, HeaderTop}
    }
</script>

<style scoped lang="less">
  .white-bg{
    background: #fff;
  }
  .search{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    font-size: 0.14rem;
  }
  .input{
    border-radius:3px;
    overflow: hidden;
    height: 30px;
    width: 100%;
    background:#eee;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont{
      font-size: 0.18rem;
      padding: 0 0.05rem;
    }
    input{
      font-size: 0.14rem;
      flex: 1;
      vertical-align: top;
      height: 100%;
      background: transparent;
    }
  }
</style>
