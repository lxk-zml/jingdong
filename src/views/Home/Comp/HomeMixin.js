import {getHome} from "../../../network/home";

var data = {
  banner:[],
  channel:[],
  brand:[],
  newgoods:[]
};

const HomeMixin = {
  data(){
    return data
  },
  methods:{
    async getdata() {
      let res = await getHome();
      Object.freeze(res);
      this.banner = Object.freeze(res.data.banner);
      this.channel= Object.freeze(res.data.channel);
      this.brand = Object.freeze(res.data.brandList);
      this.newgoods =Object.freeze( res.data.newGoodsList)
    }
  }
}

export default HomeMixin;
