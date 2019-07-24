<template>
  <div class="tag-header">
    <div class="title">
      <slot>历史记录</slot>
    </div>
    <i v-show="visible" class="iconfont icon-delete" @click="change()"></i>
  </div>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false,
        required: true
      }
    },
    name: "TagHeader",
    methods:{
      change(){
        this.$emit('tagheader')
      }
    }
  }
</script>

<style scoped lang="less">
.tag-header{
  height: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title{
    font-size: 0.14rem;
  }
  .iconfont{
    font-size: 0.18rem;
  }
}
</style>
