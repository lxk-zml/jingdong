<template>
  <div class="back">
    <i class="iconfont icon-back" @click="back()"></i>
  </div>
</template>

<script>
  export default {
    name: "Back",
    methods: {
      back() {
        this.$router.back();
      }
    }

  }
</script>
<style scoped lang="less">
  .back{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont{
      font-size: 0.28rem;
    }
  }
</style>
