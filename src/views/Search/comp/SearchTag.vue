<template>
  <tag-box>
    <template slot="header">
      <TagHeader :visible="visible" @tagheader="func">
        <slot></slot>
      </TagHeader>
    </template>
    <template slot="list" v-if="list.length">
      <tag
        @tag="addHistorylist(item.keyword)"
        :class="{active:item.is_hot===1}" v-for="(item,index) in list" :key="item.id||index" :name="item.keyword"></tag>
    </template>
  </tag-box>
</template>

<script>
  import TagBox from "components/Tag/TagBox";
  import TagHeader from "components/Tag/TagHeader";
  import Tag from "components/Tag/Tag";
  import SearchMixin from "./SearchMixin";

  export default {
    mixins:[SearchMixin],
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      list:{
        type:Array,
        default:[],
        required:true
      },
      func:{
        type:Function,
        default:()=>{}
      }
    },
    name: "SearchTag",
    components: {Tag, TagHeader, TagBox}
  }
</script>

<style scoped lang="less">
  .active{
    border-color: red;
    color: red;
  }
</style>
