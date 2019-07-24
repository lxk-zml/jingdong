<template>
  <div class="swiper-container" v-if="list.length">
    <div class="swiper-wrapper"
         ref="owrapper"
         @transitionend="transitionEnd"
         @touchstart="touchStart($event)"
         @touchend='touchEnd($event)'
    >
      <div class="swiper-slide" v-for="(item,index) in newlist" :key="index">
        <slot :data="item"></slot>
      </div>
    </div>
    <div class="swiper-pagination">
      <span :class="{active:index == num}" v-for="(item,index) in list"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props:{
      list:{
        type:Array,
        required:true
      }
    },
    data() {
      return {
       /* list: [
          'http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg',
          'http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg',
          'http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg',
        ],*/
        num: 0,//角标
        timer: 0,//定时器名称
        loop: 1,//图片的位置
        starX: 0,
        endX: 0,
        statTime: 0,
        endTime: 0,
        time: 3000
      }
    },
    computed: {
      newlist() {
        var first = this.list[0];
        var last = this.list[this.list.length - 1];
        return [last].concat(this.list, first);
      },
      oldimglen() {
        return this.list.length//原图的个数
      }
    },
    methods: {
      autoplay() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          this.num++;//角标生效
          this.loop++;
          this.point();
          this.play(true);
        }, this.time);
      },
      point() {
        if (this.num > this.oldimglen - 1) {
          this.num = 0;
        }
        if (this.num < 0) {
          this.num = this.oldimglen - 1;
        }
      },
      play(btn) {
        var owrapper = this.$refs.owrapper;
        if (btn) {
          owrapper.style.transition = 'transform 0.3s';
        } else {
          owrapper.style.transition = 'transform 0s';
        }
        owrapper.style.transform = 'translate3d(' + -this.loop * 100 + '%,0,0)';
      },
      transitionEnd() {
        if (this.loop > this.oldimglen) {
          this.loop = 1;
          this.play(false);
        }
        if (this.loop == 0) {
          this.loop = this.oldimglen;
          this.play(false);
        }
      },
      touchStart(e) {
        clearInterval(this.timer);
        this.startX = e.changedTouches[0].pageX;
        //按下时的事件戳
        this.startTime = e.timeStamp;
      },
      touchEnd(e) {
        this.autoplay();
        this.endX = e.changedTouches[0].pageX;
        var delx = this.endX - this.startX;
        //抬起时的时间戳
        this.endTime = e.timeStamp;
        //距离大于100才执行或者时间差小于100毫秒
        if ((Math.abs(delx) >= 100) || (this.endTime - this.startTime < 100)) {
          //到底 是向左还是向右
          if (delx > 0) {
            //向右滑
            this.loop--;
            this.play(true);
            this.num--;
            this.point();
          } else {
            //向左滑
            this.loop++;
            this.play(true);
            this.num++;
            this.point();
          }
        }
      }
    },
    mounted() {
      this.autoplay();
    },
    activated() {
      this.autoplay();
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
    deactivated() {
      clearInterval(this.timer);
    }
  }
</script>

<style scoped lang="less">
  .swiper-container {
    width: 100%;
    position: relative;
    overflow: hidden;

    .swiper-wrapper {
      transform: translate3d(-100%, 0, 0);
      display: flex;
      width: 100%;

      .swiper-slide {
        flex-shrink: 0;
        width: 100%;
      }
    }

    img {
      width: 100%;
      height: auto;
    }

    .swiper-pagination {
      position: absolute;
      bottom: 0.1rem;
      left: 0;
      width: 100%;
      height: 0.08rem;
      display: flex;
      justify-content: center;

      span {
        margin: 0 0.05rem;
        border-radius: 50%;
        width: 0.08rem;
        height: 0.08rem;
        border: 0.01rem solid #fff;

        &.active {
          background: #fff;
        }
      }
    }
  }
</style>
