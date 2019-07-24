<template>
  <div class="layout">
    <yx-title>
      <slot name="title"></slot>
    </yx-title>
    <div class="main">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
  import YxTitle from "components/YxTitle/YxTitle";

  export default {
    name: "HomeLayout",
    components: {YxTitle}
  }
</script>

<style scoped lang="less">
  .layout {
    background: #fff;
  }
</style>
