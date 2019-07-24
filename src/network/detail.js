import request from "./request";
import api from "./api";

export const getDetail = (options) => {
  return request({
    url: api.GoodsDetail,
    params:options
  })
}
export const postCart = (options) => {
  return request({
    url: api.CartAdd,
    data:options,
    method:'post'
  })
}
