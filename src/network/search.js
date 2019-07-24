import request from "./request";
import api from "./api";

export const getSearchIndex = () => {
  return request({
    url: api.SearchIndex
  })
}


export const getSearchTip = (options) => {
  return request({
    url: api.SearchHelper,
    params: options
  })
}


export const getSearchResult = (options) => {
  var res = Object.assign({}, {
    order: 'desc',
    categoryId: 0,
    size: 10
  }, options, true);


  return request({
    url: api.GoodsList,
    params: res
  })
}
