<template>
 <lazy-component>
    <div class="hot">
        <p>热门分类</p>
        <div class="imglist">
            <img v-for="data in imglist" :src="data.bannerImgSrc" :key="data.id">
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
    props:['imglist']
}
</script>
<style lang="scss" scoped>
    .hot{
        width: 100%;
        height: 160px;
        background-color: #fff;
        p{
            font-size: 16px;
            color: #333;
            font-weight: bold;
            text-align: center;
            position: relative;
            top: 20px;
        }
        .imglist{
            width: 100%;
            height: 75px;
            display: flex;
            justify-content: space-evenly;
            position: relative;
            top: 40px;
            img{
                display: inline-block;
                width: 20%;
                height: 100%;
            }
        }
    }
</style>