<template>
    <div class="title">
      <h3>
        <slot></slot>
      </h3>
    </div>
</template>

<script>
    export default {
        name: "YxTitle"
    }
</script>

<style scoped lang="less">
  .title{
    height: 0.65rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.16rem;
    h3{
      font-weight: normal;
      color: #666;
    }
  }

</style>
