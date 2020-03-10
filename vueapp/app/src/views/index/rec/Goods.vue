<template>
 <lazy-component>
  <div class="blocklist">
    <div class="block" v-for="data in datalist" :key="data.parentProductId">
      <img v-lazy="data.productImg" />
      <p class="title">{{data.productTitle}}</p>
      <p class="price">
        <span class="xprice">{{data.sellPrice | priceFilter}}</span>
        <span class="oprice" v-if="data.sellPrice===data.originalPrice?false:true">
          <del>{{data.originalPrice | priceFilter}}</del>
        </span>
      </p>
    </div>
  </div>
 </lazy-component>
</template>
<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
Vue.use(Lazyload,{
    lazyComponent: true,
    loading:'app/src/assets/img/tihuan.gif',
    error:'app/src/assets/img/error.jpeg',
    preload:1.3,
})
Vue.filter('priceFilter',(data)=>{
    return `¥ ${data}`
})
export default {
    props:{
      datalist:Array
    }
}
</script>
<style lang="scss"scoped>
    .blocklist{
        width:100%;
        height: 150px;
        box-sizing: border-box;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        .block{
            width: 33%;
            height: 150px;
            display: flex;
            flex-direction: column;
            align-content: space-between;
            img{
                width: 100%;
                display: inline-block;
            }
            .title{
                font-size: 12px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                text-align: center;
            }
            .price{
                font-size: 10px;
                text-align: center;
                .oprice{
                   color: lightgray;
                   margin-left: 2px;
                }
                .xprice{
                    margin-right: 2px;
                }
            }
        } 
    }
</style>