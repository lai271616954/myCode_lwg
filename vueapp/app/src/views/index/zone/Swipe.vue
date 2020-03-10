<template>
 <lazy-component>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="data in swipelist" :key="data.productId">
          <img :src="data.productImg">
          <p>{{data.productTitle}}</p>
          <div class="price">
              <span class="sprice">{{data.sellPrice | changeprice}}</span>
              <span class="oprice" v-if="data.sellPrice===data.originalPrice?false:true"><del>{{data.originalPrice | changeprice}}</del></span>
          </div>
      </div>
    </div>
  </div>
 </lazy-component>
</template>
<script>
import Swiper from "swiper"
import Vue from 'vue'
Vue.filter('changeprice',(data)=>{
    return `¥ ${data}`
})
import { Lazyload } from 'vant'
Vue.use(Lazyload,{
    lazyComponent: true,
    loading:'app/src/assets/img/tihuan.gif',
    error:'app/src/assets/img/error.jpeg',
    preload:1.3,
})
export default {
  props:['swipelist'],
  mounted() {
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: true,
      touchRatio:1,
      simulateTouch:true,
      freeModeMomentum:false,
      freeModeSticky:true
    })
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 140px;
  background: #fff;
}
.swiper-slide {
  width: 80px;
  box-sizing: border-box;
  img{
      width: 100%;
      height: 77px;
  }
  p{
      color: #808080;
      font-size: 12px;
      padding: 0 13px;
      box-sizing: border-box;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
  }
   .price{
                padding: 0 10px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                .sprice{
                    vertical-align: middle;
                    font-size: 13px;
                }
                .oprice{
                    vertical-align: middle;
                    color: #ccc;
                    font-size: 12px;
                }
            }
}
</style>