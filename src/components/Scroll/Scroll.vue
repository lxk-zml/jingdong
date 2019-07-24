<template>
  <div class="scroll" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "Scroll",
    props:{
      data:{
        type:Array,
        required:true
      }
    },
    data(){
      return {
        scroll:null
      }
    },
    watch:{
      data(){
        this.scroll.refresh()
        this.scroll.finishPullUp();
      }
    },
    mounted: function () {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,//单事件触发默认 是false不触发
        pullUpLoad:true,//上拉加载  默认是false不触发
      })

      this.scroll.on('pullingUp',()=>{
        //作用是发起异步请求ajax
        this.$emit('pullup',scroll)
      })
    }
  }
</script>

<style scoped lang="less">
  .scroll{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
