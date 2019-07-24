<template>
  <div class="tabbar">
    <ul>
      <tabbar-item v-for="(item) in list" :key="item.name">
        <router-link :to="item.path">
          <i class="iconfont" :class="[item.icon]"></i>
          <p> {{item.name}}</p>
        </router-link>
      </tabbar-item>
    </ul>
  </div>
</template>

<script>
  import TabbarItem from "./TabbarItem";


  export default {
    name: "Tabbar",
    props:{
      list:{
        type:Array,
        required:true,
        default:[]
      }
    },
    components: {TabbarItem}
  }
</script>

<style scoped lang="less">
  .exact-active {
    color: #b4282d;
  }

  .tabbar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 44px;
    text-align: center;
    background: #fff;

    ul {
      display: flex;
      height: 100%;
    }

    li {
      height: 100%;
      flex: 1;

      a {
        vertical-align: top;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    i {
      width: 20px;
      height: 20px;
      vertical-align: top;
      margin: 0 auto;
      font-size: 0.18rem;
      display: block;
    }

    p {
      line-height: 0.2rem;
      height: 0.2rem;
    }
  }
</style>
