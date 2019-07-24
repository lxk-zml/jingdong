<template>
  <transition enter-active-class=" animated slideInUp"
              leave-active-class="animated slideOutDown">
    <div class="detail-select">
            <span class="close">
                &times;
            </span>
      <div class="header">
        <div class="img" v-if="">
          <img  alt="">
        </div>
        <div class="info">
          <p>价格: ¥10</p>
          <p>已选择:请选择</p>
        </div>
      </div>
      <div class="body">
        <div class="props">
          <h3>规格</h3>
          <div class="props-list">
            <tag></tag>
            <tag name="1.5m床垫+枕头*2"></tag>
          </div>
        </div>
        <div class="props">
          <h3>数量</h3>
          <div class="props-list">
            <div class="price-box">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  import DetailMixin from "./DetailMixin";
  import Tag from "../../../components/Tag/Tag";

  export default {
    name: "DetailSelect",
    components: {Tag},
    mixins: [DetailMixin],
    methods: {

    }
  }
</script>

<style scoped lang="less">
  .detail-select {
    overflow: hidden;
    position: absolute;
    left: 0;
    bottom: 44px;
    width: 100%;
    max-height: 50%;
    padding-bottom: 0.2rem;
    background: #fff;

    .close {
      position: absolute;
      right: 0;
      top: 0;
      color: #666;
      font-family: "黑体";
      padding: 0.1rem;
      line-height: 1em;
      font-size: 0.2rem;
    }

    .header {
      padding: 0.15rem;
      height: 1.3rem;
      display: flex;
      align-items: flex-end;
      font-size: 0.14rem;
      color: #333;

      img {
        margin-right: 0.15rem;
        height: 1rem;
      }
    }

    .body {
      overflow-y: scroll;
      padding: 0 0.15rem;

      h3 {
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.14rem;
        font-weight: normal;
      }

      .price-box {
        display: flex;

        span {
          font-family: "黑体";
          font-weight: bold;
          font-size: 0.16rem;
          border: 1px solid #eee;
          margin-right: -1px;
          padding: 0.08rem 0.2rem;

          &:nth-of-type(2) {
            font-weight: normal;
            font-family: Arial;
            text-align: center;
            min-width: 30%;
          }
        }
      }
    }
  }
</style>
