<template>
    <div class="header">
      <div class="left">
        <slot name="left"></slot>
      </div>

      <div class="center">
        <slot></slot>
      </div>

      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderTop"
    }
</script>

<style scoped lang="less">
  .header{
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    .left,.right{
      width: 50px;
      height: 100%;
    }
    .center{
      flex:1;
    }
  }
</style>
