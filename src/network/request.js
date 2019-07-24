import axios from "axios";
import api from "./api";

const request = (config)=>{

  var instance = axios.create({
    baseURL:api.ApiRootUrl
  })
  //不论什么请求都带上token.
  instance.defaults.headers.common['X-NIDESHOP-TOKEN'] = localStorage.getItem('token');
  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    var res = response.data;
    if(res.errno!==0){
      console.log(res.errmsg)
    }
    //如果未登录或者token不对.把错误的token删除即可(可选项)
    if(res.errno===401){
      localStorage.removeItem('token')
    }

    return res;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  return instance(config)
}


export default request;
