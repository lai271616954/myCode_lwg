<template>
    <lazy-component>
     <div class="coop">
        <div class="cooplist">
            <img v-for="data in cooplist" :key="data.id" v-lazy="data.bannerImgSrc">
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
export default {
    props:['cooplist']
}
</script>
<style lang="scss" scoped>
    .coop{
        width: 100%;
        height: 70px;
        background: #fff;
        margin-bottom: 18px;
        .cooplist{
            width: 100%;
            height: 50px;
            padding: 5px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width: 33.3333%;
                height: 100%;
            }
        }
    }
</style>