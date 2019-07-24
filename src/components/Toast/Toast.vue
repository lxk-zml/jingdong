<template>
  <transition enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              @afterLeave="leave()">
    <!--@afterLeave动画完成时再执行   再删除元素-->
    <div v-show="visible" class="toast" >
      <div class="toast-header" v-show="title">{{title}}</div>
      <div class="toast-body">{{body}}</div>
      <div class="toast-footer">
        <button class="confirm" @click="confirmFn">确认</button>
        <button class="cancle" v-show="cancle" @click="cancleFn">关闭</button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '提示'
      },
      body: {
        type: String,
        default: '',
      },
      cancle: {
        type: Boolean,
        default: false
      },
      time: {
        type: Number,
        default: 3000
      },
      callback:{
        type:Function,
        default:()=>{}
      }
    },
    data(){
      return {
        timer:0
      }
    },
    methods: {
      confirmFn() {
        this.hide()
        this.callback();
        return true;
      },
      cancleFn() {
        this.hide();
        return false;
      },
      hide(){
        this.visible = false;
        clearTimeout(this.timer)
      },
      leave(){
        this.$emit('del')
      }
    },

    mounted() {
      this.timer = setTimeout(()=>{
        this.visible = false;
      },this.time)
    }
  }
</script>

<style scoped lang="less">
  .toast {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    width: 75%;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, .5);
    text-align: center;
    padding: 0.1rem 0 0;

    .toast-header {
      font-size: 0.18rem;
      color: #333;
    }

    .toast-body {
      padding: 0.05rem;
      margin-bottom: 0.05rem;
      color: #999;
      font-size: 0.14rem;
    }

    .toast-footer {
      border-top: 1px solid #eee;
      height: 0.4rem;
      display: flex;
      padding: 0.05rem 0;
      justify-content: center;

      button {
        color: #6495ED;
        background: transparent;
        width: 50%;
        font-size: 0.18rem;
      }
    }
  }
</style>
