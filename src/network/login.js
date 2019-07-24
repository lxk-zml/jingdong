import request from "./request";
import api from "./api";

export const setLogin = (options) => {
  return request({
    url: api.AuthLoginByUserName,
    method:'post',
    data:options
  })
}


export const registerByName=(options)=> {
  return request({
    url:api.registerByUserName,
    data:options,
    method:'post'
  })
}


export const loginOut=()=> {
  return request({
    url:api.AuthLoginOuth
  })
}

export const checkAuth=()=>{
  return request({
    url:api.CollectList,
    params:{
      typeId:0
    }
  })
}
