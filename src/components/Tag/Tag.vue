<template>
  <span class="tag" @click="change">{{name}}
    <slot></slot>
  </span>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
        default: ''
      }
    },
    name: "Tag",
    methods:{
      change(){
        this.$emit('tag')
      }
    }
  }
</script>

<style scoped lang="less">
  .tag{
    padding: 0.03rem 0.05rem;
    border: 1px solid #eee;
  }
</style>
