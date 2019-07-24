<template>
  <div class="form-group">
    <div class="form-box">
      <div class="form-item">
        <input type="text" placeholder="帐号" v-model.trim="username">
      </div>
      <div class="form-item">
        <input type="password" placeholder="密码" v-model.trim="password">
      </div>
      <div class="form-btn">
        <input type="button" @click="login" value="登录">
      </div>
    </div>
    <div class="other">
      <router-link :to="{name:'register'}">注册帐号</router-link>
      <span>忘记密码</span>
    </div>
    <!--<toast :body="body" :visible="visible"></toast>-->
  </div>
</template>

<script>

  import {setLogin} from "../../network/login";

  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      async login() {
        if (this.username.length === 0 || this.password.length === 0) {
          console.log('请输入帐号密码xxx')
          //弹出帐号登录成功
          //this.toast({body:'abc',visible:true})
          this.$toast({body:'请输入帐号密码'},)
          return;
        }
        let res = await setLogin({
          username: this.username,
          password: this.password
        })
        if (res.errno === 0) {
          localStorage.setItem('token',res.data.token)
          sessionStorage.setItem('token',res.data.token)
          //弹出帐号登录成功
          this.$toast({body:'帐号登录成功'},()=>{
            this.$router.push({name:'home'})
          })
        }else{
          //弹出帐号登录失败或者失败信息
          this.$toast({body:res.errmsg})
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .form-group {
    font-size: 0.16rem;
  }

  .form-box {
    padding: 0 0.2rem;

    margin-top: 0.3rem;

    input {
      font-size: inherit;
      flex: 1;
      line-height: 0.3rem;
      height: 0.3rem;
      text-indent: 0.05rem;
    }
  }

  .form-btn {
    display: flex;
    height: 0.8rem;
    align-items: center;

    input {
      flex: 1;
      height: 0.4rem;
      background: #f8f8f8;
      border: 1px solid #eee;
      border-radius: 0.05rem;
    }
  }

  .form-item {
    height: 0.5rem;
    display: flex;
    align-items: center;
    position: relative;

    &:after {
      content: '';
      height: 1px;
      width: 100%;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #eee;
      transform: scale(1, 0.5);
    }
  }

  .other {
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.14rem;
    color: #666;
  }
</style>
