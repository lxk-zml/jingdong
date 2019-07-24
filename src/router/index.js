import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home/Home";
import YxTabbar from "../YxTabbar";
import {checkAuth} from "../network/login";

Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', name: "home", components: {default: Home, tabbar: YxTabbar}},
    {
      path: '/topic',
      name: "topic",
      components: {default: () => import(/* webpackChunkName: "topic" */ '../views/Topic/Topic'), tabbar: YxTabbar}
    },
    {
      path: '/category',
      name: "category",
      components: {
        default: () => import(/* webpackChunkName: "category" */ '../views/Category/Category'),
        tabbar: YxTabbar
      }
    },
    {
      path: '/cart',
      name: "cart",
      components: {default: () => import(/* webpackChunkName: "cart" */'../views/Cart/Cart'), tabbar: YxTabbar},
      // meta: {isauth: true}
    },
    {
      path: '/user',
      name: "user",
      components: {default: () => import(/* webpackChunkName: "user" */'../views/User/User'), tabbar: YxTabbar}
    },
    {
      path: '/search',
      name: "search",
      component: () => import(/* webpackChunkName: "search" */'../views/Search/Search')
    },
    {
      path: '/detail/:id',
      name: "detail",
      component: () => import(/* webpackChunkName: "detail" */'../views/Detail/Detail'),
      props: true
    },
    {
      path: '/login', name: "login", component: () => import(/* webpackChunkName: "login" */'../views/Login/Login'),
      beforeEnter(to, from, next) {
        lR(to, from, next)
      }
    },
    {
      path: '/register',
      name: "register",
      component: () => import(/* webpackChunkName: "register" */'../views/Register/Register'),
      beforeEnter(to, from, next) {
        lR(to, from, next)
      }
    },{
      path:'*',
      name:'404',
      component:()=>import(/* webpackChunkName: "register" */'../views/layout/Error404')
    }
  ],
  linkExactActiveClass: 'exact-active',
  linkActiveClass: 'active'
});

//封装 登录和注册　的拦截
async function lR(to, from, next){
  let res = await check();
  if (res) {
    next({name:'home'});
  } else {
    next()
  }
}

// 检查token有效性
async function check(){
  let res = await checkAuth()
  console.log(res)
  if(res.errno=== 401){
    return false
  }else{
    return true
  }
}

//验证 所有需要拉截有页面。
router.beforeEach(async (to, from, next) => {
  if (to.meta.isauth) {
    let res = await check();
    if (res) {
      next();
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next();
  }
})


export default router;














