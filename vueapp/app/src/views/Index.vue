<template>
  <div>
    <div class="title">
      <span>尖叫设计</span>
      <van-search shape="round" placeholder="搜索我的尖叫好物" />
    </div>
    <div class="link">
        <router-link tag="span" to="/index/rec" activeClass="active">推荐</router-link>
        <router-link tag="span" to="/index/zone" activeClass="active">品质空间</router-link>
        <router-link tag="span" to="/index/home" activeClass="active">居家好物</router-link>
    </div>
    <router-view></router-view>
     <vueToTop right="20" bottom="70" size="22" type="9"></vueToTop>
  </div>
</template>
<script>
import Vue from "vue"
import home from '@/views/index/Home'
import rec from '@/views/index/Recommend'
import zone from '@/views/index/Zone'
import { Tab, Tabs ,Search } from "vant"
Vue.use(Tab).use(Tabs).use(Search)
import vueToTop from 'vue-totop'
Vue.use(vueToTop)
export default {
    data() {
    return {
      activeName: 'a'
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  padding: 0 12px;
  box-sizing: border-box;
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  span {
    flex: 2;
    font-size: 14px;
    font-weight: bold;
    display: inline-block;
    text-align: center;
  }
  .van-search{
     flex-grow: 1;
     padding: 0;
     height: 25px;
     border-radius: 17px;
     .van-search__content{
         height: 100%;
     }
     .van-cell{
         padding: 2px 0;
         box-sizing: border-box;
     }
  }
}
 .link{
      height: 34px;
      line-height: 34px;
      padding: 0 12px;
      box-sizing: border-box;
      display: flex;
      background-color: #fff;
      span{
          display: inline-block;
          font-size: 13px;
          color: #808080;
          padding: 0 12px;
          margin: 0 15px;
      }
  }
  .active{
      border-bottom: 3px solid black;
      color: black!important;
      box-sizing: border-box;
  }
  .v-top{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid gray;
    text-align: center;
    line-height: 35px;
    z-index: 10;
  }
</style>