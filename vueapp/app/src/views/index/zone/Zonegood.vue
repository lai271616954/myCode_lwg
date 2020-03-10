<template>
 <lazy-component>
    <div class="zonebody">
        <div class="zbody" v-for="data in products" :key="data.id">
            <img :src="data.productImg">
            <p>{{data.productName}}</p>
            <div class="price">
                <span class="sprice">{{data.sellPrice | sellprice}}</span>
                <span class="oprice" v-if="data.sellPrice===data.originalPrice?false:true"><del>{{data.originalPrice | sellprice}}</del></span>
            </div>
        </div>
    </div>
 </lazy-component>
</template>
<script>
import Vue from 'vue'
Vue.filter('sellprice',(data)=>{
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
    props:['products']
}
</script>
<style lang="scss" scoped>
    .zonebody{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        .zbody{
            width: 50%;
            height: 251px;
            border: 1px solid #F5F5F5;
            box-sizing: border-box;
            &:nth-child(odd){
                border-right: none;
            }
            img{
                width: 100%;
                height: 159px;
            }
            p{
                color: #808080;
                font-size: 13px;
                padding: 0 13px;
                box-sizing: border-box;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            .price{
                padding: 0 13px;
                box-sizing: border-box;
                .sprice{
                    vertical-align: middle;
                    font-size: 13px;
                }
                .oprice{
                    vertical-align: middle;
                    color: #ccc;
                    font-size: 12px;
                    margin-left: 3px;
                }
            }
        }
    }
</style>