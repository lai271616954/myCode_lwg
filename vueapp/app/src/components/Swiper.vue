<template>
  <div class="banner">
    <van-swipe class="my-swipe" indicator-color="black" :autoplay="3000" :loop="true" height="215">
      <van-swipe-item v-for="(data, index) in banner" :key="index">
        <img :src="data.bannerImgSrc" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue"
import { Swipe, SwipeItem } from "vant"
import {mapState , mapActions} from 'vuex'
Vue.use(Swipe).use(SwipeItem)
export default {
    props:['banner']
}
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  img{
      width: 100%;
  }
}
.van-swipe__indicators{
    background-color: rgba(255, 255, 255, 0.7)!important;
    border-radius: 3px;
    .van-swipe__indicator{
        background-color: #fff!important;
    }
}
</style>