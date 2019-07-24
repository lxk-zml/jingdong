import request from "./request";
import api from "./api";

export const getHome = ()=> {
  return request({
    url:api.IndexUrl
  })
}


