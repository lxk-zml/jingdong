import {getDetail, postCart} from "../../../network/detail";

var data = {
  banner:[],
  selectTxt:'请选择规格和数量',
  goodinfo:{},
  specs:[],//规格
  selectlist:{},//对象 选中的 //对于selectelist 这个对象只能通过普通的方法来调用。
  specid:'',
  postprams:{
    goodsId: 0,
    number: 1,
    productId: 0
  },
  prolist:[]
  //1 item1
  //2 item1
//  selectTxt  [item1.value,item1.value]
};

var DetailMixin = {
  data(){
    return data
  },
  watch:{
    specid(){
      this.prolist.map(item=>{
        if(item.goods_specification_ids === this.specid){
          this.postprams.productId = item.id;
          this.postprams.goodsId = item.goods_id
        }
      })
      console.log(this.postprams.productId)
    }
  },
  //[{valuelist:[item1,item2]},{valuelist:[item1,item2]}]
  methods:{
    async getdata(){
      let res = await getDetail({id:this.id})
      console.log(res)
      this.banner = res.data.gallery
      this.goodinfo = new GoodsInfo(res.data.info)
      this.specs  = res.data.specificationList;
      console.log(this.specs)
      this.changeSelectlist( this.specs );
      this.prolist = res.data.productList;
    },
    changeSelectlist(data){
      //我们要取出第一项数据
      var temp = data.map(item=>{
        return item.valueList[0]
      })

      console.log(temp)
      var obj = {}
      data.forEach((item,index)=>{
        obj[index] = temp[index]
      })

      this.selectlist = obj;
      var newarr = temp.map(item=>{
        return item.value;
      })
      this.selectTxt=newarr.join('-')

      this.specid = temp.map(item=>{
        return item.id
      }).join('_')
    },
    editSelect(obj,index){
      this.selectlist[index] = obj;

      var arr = [];
      var ids =[]
      for(var key in this.selectlist){
        arr.push(this.selectlist[key].value)
        ids.push(this.selectlist[key].id)
      }
      this.selectTxt = arr.join('-')
      this.specid = ids.join('_')
    },
    async addcart(){
      let res = await postCart(this.postprams);
      console.log(res);
      if(res.errno===0){
        this.$toast({body:'终于加入购物车了'})
      }else if(res.errno==401){
        this.$toast({body:res.errmsg},()=>{
          this.$router.push({name:'login'})
        })
      }
    }
  }
}

export default DetailMixin;

//对象内容很多的时候通过class来过滤
class GoodsInfo {
  constructor(data){
    this.price=data.retail_price;
    this.title=data.name;
    this.subtitle = data.goods_brief;
    this.id = data.id;
  }
}
