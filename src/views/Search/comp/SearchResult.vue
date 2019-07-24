<template>
  <div class="list" >
    <scroll :data="result" @pullup="more">
      <div class="list-group">
        <Good  @good="jump(item.id)" class="shadow" v-for="(item,index) in result" :item="item" :key="item.id"></Good>
      </div>
    </scroll>
  </div>
</template>


<script>
  /*obj = {
  id: 0,
  list_pic_url: '',
  name: '',
  retail_price: 0
}*/
  import Good from "../../../components/Good/Good";
  import SearchMixin from "./SearchMixin";
  import Scroll from "../../../components/Scroll/Scroll";

  export default {
    mixins: [SearchMixin],
    name: "SearchResult",
    components: {Scroll, Good},
    methods:{
      async more(){
        this.page++;
        await this.getResultList()
      },
      jump(id){
        this.$router.push('/detail/'+id)
      }
    }
  }
</script>

<style scoped lang="less">
  .list{
    position: absolute;
    left: 0;
    top: 44px;
    right: 0;
    bottom: 0;
    overflow:hidden;
    align-items: center;
    background: #fff;
  }
  .list-group{
    padding: 0.1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .shadow{
    width: 1.72rem;
    height: 2.2rem;
    margin-bottom: 0.1rem;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
  }
</style>
