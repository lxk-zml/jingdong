<template>
    <div class="form-group">
        <div class="form-box">
            <div class="form-item">
                <input type="text" v-model.trim="username" placeholder="用户名">
            </div>
            <div class="form-item">
                <input type="password" v-model.trim="password" placeholder="密码">
            </div>
            <div class="form-item">
                <input type="password" v-model.trim="repassword" placeholder="确认密码">
            </div>
            <p class="info" v-show="info">两次密码不一致，请重新输入</p>
            <div class="form-btn">
                <input @click="submit()" :disabled="disable" type="button" value="注册">
            </div>
        </div>
        <div class="other">
            <router-link :to="{name:'login'}">登录</router-link>
            <span>忘记密码</span>
        </div>
    </div>
</template>

<script>
  import {registerByName} from "../../network/login";
  export default {
    name: "Register",
    data(){
      return {
        username:'',
        password:'',
        repassword:'',
        disable:true,
        info:false
      }
    },
    watch:{
      password(){
        this.recheck();
      },
      repassword(){
        this.recheck();
      },
      username(){
        this.recheck();
      }
    },
    methods:{
      recheck(){
        //验证密码和重复密码是否相同
        if(this.password===this.repassword){
          this.info = false
        }else{
          this.info=true
        }
        //用户名必须值和空false   密码必须书写长度和0比较   密码和确认密码必须相同两个密码比较   才可以去让注册能够单击 三项有一项都不可以都不行
        if(this.username===''||this.password.length===0||this.password!==this.repassword){
          this.disable= true//true表示不能点击 按钮
          console.log('xxx')
        }else{
          console.log('yyyy')
          this.disable = false
        }
      },
      async submit(){
        //   密码有值                 密码相同              用户名有值  缺一项不可所以用并且关系
        if(this.password.length>0&&this.info==false&&this.username.length>0){
          //发起请求
          let res = await registerByName({
            username:this.username,
            password:this.password
          })
          console.log()
          if(res.errno===0){
            //弹出注册成功
          }else{
            //弹出注册失败的原因
            console.log(res.errmsg);
          }
        }else{
          console.log('提示输入帐号密码')

        }
      }
    }
  }
</script>

<style scoped lang="less">
    .info{
        color:red;
    }
    .form-group{
        font-size: 0.16rem;
    }
    .form-box{
        padding: 0 0.2rem;

        margin-top: 0.3rem;
    input{
        font-size: inherit;
        flex: 1;
        line-height: 0.3rem;
        height: 0.3rem;
        text-indent: 0.05rem;
    }
    }
    .form-btn{
        display: flex;
        height:0.8rem;
        align-items: center;
    input{
        flex: 1;
        height: 0.4rem;
        background: #f8f8f8;
        border: 1px solid #eee;
        border-radius:0.05rem;
    }
    }
    .form-item{
        height: 0.5rem;
        display: flex;
        align-items: center;
        position: relative;
    &:after{
         content: '';
         height: 1px;
         width: 100%;
         display: block;
         position: absolute;
         bottom: 0;
         left: 0;
         border-bottom: 1px solid #eee;
         transform:scale(1,0.5);
     }
    }
    .other{
        padding: 0 0.2rem;
        display: flex;
        justify-content: space-between;
        font-size: 0.14rem;
        color:#666;
    }
</style>
