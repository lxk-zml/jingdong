import {getSearchIndex, getSearchResult, getSearchTip} from "../../../network/search";
import _ from 'lodash'

var obj = {
  placeholder: '',
  hotlist: [],
  historylist: [],//数据类型长啥样 和hotlist一样即可
  tiplist: [],//根据搜索去显示tiplist数据
  status: 0,//如果status值为1 提示列表显示，历史 记录和热门搜索搜索隐藏。 0 历史记录和搜索 显示    提示列表隐藏  2
  user: '',//搜索页面输入框的内容
  timer:0,//防抖
  result:[],//搜索结果列表
  page:1,
  totalpage:1
};

var SearchMixin = {
  data() {
    return obj
  },
  methods: {
    async getdata() {
      let res = await getSearchIndex()
      console.log(res)
      this.placeholder = res.data.defaultKeyword.keyword;
      this.hotlist = res.data.hotKeywordList;
      this.editHistorylist();
    },
    editHistorylist() {
      this.historylist = JSON.parse(localStorage.getItem('historylist')) || []
    },
    deleteHistory() {
      this.historylist = [];
    },
    addHistorylist(value) {
      if(value!==''){
        var arr = this.historylist
        arr.unshift({is_hot: 0, keyword: value})
        let res = _.uniqBy(arr, 'keyword');
        this.historylist = res;
      }

      this.user = value;//把单击的内容放到输入框
      this.status = 2;//只显示搜索结果
      this.getResultList();//获取搜索结果
    },
    async getResultList(){
      if(this.page>this.totalpage){
        console.log('没有更多数据')
        return ;
      }
      let res = await getSearchResult({
        keyword:this.user,
        page:this.page
      })
      this.result = this.result.concat(res.data.data);
      this.totalpage = res.data.totalPages
    },
    async getTipList() {
      let res = await getSearchTip({
        keyword: this.user
      })
      console.log(res);
      this.tiplist = res.data;
    },
    changeUser(newval) {
      this.user = newval;
    },
    //做两件事情  1修改user内容  2.修改status 3.发起请求
    //做了防抖
    change(newval, status = 1) {
      clearTimeout(this.timer);
      this.timer = setTimeout(()=>{
        this.changeUser(newval)
        this.status = status;
        this.getTipList()
      },300)
    }
  }
}

export default SearchMixin;
