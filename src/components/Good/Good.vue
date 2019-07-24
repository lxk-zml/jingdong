<template>
  <div class="goods-item" @click="change()">
    <div class="img">
      <img :src="item.list_pic_url" alt="">
    </div>
    <div class="desc">
      <h4>{{item.name}}</h4>
      <p>¥{{item.retail_price}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Good",
    props: {
      item: {
        type: Object,
        required: true,
        default: {
          id: 0,
          list_pic_url: '',
          name: '',
          retail_price: 0
        }
      }
    },
    methods:{
      change(){
        this.$emit('good')
      }
    }
  }
</script>

<style scoped lang="less">
  .goods-item{
    width: 50%;
    text-align: center;
    h4{
      font-weight: normal;
      font-size: 0.14rem;
      color: #333;
    }
    p{
      font-size: 0.12rem;
      color: #b4282d;
    }
  }
</style>
