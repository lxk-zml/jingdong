<template>
  <div class="scope">
    <keep-alive include="Home,Topic,Category,Cart,User">
      <router-view></router-view>
    </keep-alive>
    <router-view name="tabbar" ></router-view>
  </div>
</template>
<script>

  export default {

  }
</script>
<style lang="less" scoped>
.scope{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
