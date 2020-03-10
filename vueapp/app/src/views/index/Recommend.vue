<template>
    <div>
        <swiper :banner="bannerrec"></swiper>
        <div class="imgSever"><img v-lazy="data.modules[1].moduleContent.bannerImgSrc"></div>
        <div class="bannerLink"><img v-lazy="data.modules[2].moduleContent.bannerImgSrc"></div>
        <div class="linklist">
            <img v-for="data in data.modules[3].moduleContent.banners" v-lazy="data.bannerImgSrc" :key="data.id">
        </div>
         <div class="linklist">
            <img v-for="data in data.modules[4].moduleContent.banners" v-lazy="data.bannerImgSrc" :key="data.id">
        </div>
        <div class="sale">
            <img v-for="data in data.modules[5].moduleContent.banners" v-lazy="data.bannerImgSrc" :key="data.id">
        </div>
        <div class="ins">
            <img v-lazy="data.modules[6].moduleContent.bannerImgSrc">
        </div>
        <div class="insport">
            <img v-lazy="data.modules[7].moduleContent.bannerImgSrc">
        </div>
        <div class="insport">
            <img v-lazy="datamore.modules[0].moduleContent.bannerImgSrc">
        </div>
        <div class="ins">
            <img v-lazy="datamore.modules[1].moduleContent.bannerImgSrc">
        </div>
        <div class="sofa">
            <div class="sofa_img">
                <img v-lazy="datamore.modules[2].moduleContent.banners[0].bannerImgSrc" alt="">
                <div class="sofa_goods">
                   <goods :datalist="datamore.modules[2].moduleContent.products"></goods>
                </div>
            </div>
        </div>
         <div class="sofa">
            <div class="sofa_img">
                <img v-lazy="datamore.modules[3].moduleContent.banners[0].bannerImgSrc" alt="">
                <div class="sofa_goods">
                   <goods :datalist="datamore.modules[3].moduleContent.products"></goods>
                </div>
            </div>
        </div>
        <div class="ins">
            <img v-lazy="datamore.modules[4].moduleContent.bannerImgSrc">
        </div>
        <div class="inspro">
             <img v-lazy="datamore.modules[5].moduleContent.bannerImgSrc">
        </div>
        <sencetitle :sencelist="datamore.modules[6]"></sencetitle>
        <sencetitle :sencelist="datamore.modules[7]"></sencetitle>
        <sencegood :sence="datasence.modules[0]"></sencegood>
        <sencegood :sence="datasence.modules[1]"></sencegood>
        <sencegood :sence="datasence.modules[2]"></sencegood>
        <sencewhite></sencewhite>
         <div class="inspro">
             <img v-lazy="datasence.modules[4].moduleContent.bannerImgSrc">
        </div>
        <sencetitle :sencelist="datasence.modules[5]"></sencetitle>
        <sencetitle :sencelist="datasence.modules[6]"></sencetitle>
         <sencegood :sence="datasence.modules[7]"></sencegood>
         <sencegood :sence="datares.modules[0]"></sencegood>
         <sencegood :sence="datares.modules[1]"></sencegood>
         <sencewhite></sencewhite>
       <div class="inspro">
             <img v-lazy="datares.modules[3].moduleContent.bannerImgSrc">
        </div>
         <sencetitle :sencelist="datares.modules[4]"></sencetitle>
        <sencetitle :sencelist="datares.modules[5]"></sencetitle>
         <sencegood :sence="datares.modules[6]"></sencegood>
         <sencegood :sence="datares.modules[7]"></sencegood>
         <sencegood :sence="databook.modules[0]"></sencegood>
          <sencewhite></sencewhite>
        <div class="inspro">
             <img v-lazy="databook.modules[2].moduleContent.bannerImgSrc">
        </div>
         <sencetitle :sencelist="databook.modules[3]"></sencetitle>
        <sencegood :sence="databook.modules[4]"></sencegood>
         <sencegood :sence="databook.modules[5]"></sencegood>
         <sencegood :sence="databook.modules[6]"></sencegood>
          <sencewhite></sencewhite>
          <div class="inspro">
             <img v-lazy="datasplit.modules[0].moduleContent.bannerImgSrc">
        </div>
         <sencetitle :sencelist="datasplit.modules[1]"></sencetitle>
         <sencetitle :sencelist="datasplit.modules[2]"></sencetitle>
          <sencegood :sence="datasplit.modules[3]"></sencegood>
          <sencegood :sence="datasplit.modules[4]"></sencegood>
          <sencegood :sence="datasplit.modules[5]"></sencegood>
           <sencewhite></sencewhite>
        <div class="inspro">
             <img v-lazy="datasplit.modules[7].moduleContent.bannerImgSrc">
        </div>
         <sencetitle :sencelist="datawe.modules[0]"></sencetitle>
         <sencetitle :sencelist="datawe.modules[1]"></sencetitle>
          <sencegood :sence="datawe.modules[2]"></sencegood>
          <sencegood :sence="datawe.modules[3]"></sencegood>
          <sencegood :sence="datawe.modules[4]"></sencegood>
           <sencewhite></sencewhite>
        <div class="ins getall">
            <img v-lazy="datawe.modules[6].moduleContent.bannerImgSrc">
        </div>
        <coop :cooplist="datawe.modules[7].moduleContent.banners"></coop>
        <coop :cooplist="datacoop.modules[0].moduleContent.banners"></coop>
        <coop :cooplist="datacoop.modules[1].moduleContent.banners"></coop>
        <coop :cooplist="datacoop.modules[2].moduleContent.banners"></coop>
        <sencewhite></sencewhite>
         <div class="ins">
            <img v-lazy="datacoop.modules[4].moduleContent.bannerImgSrc">
        </div>
        <div class="ins">
            <img v-lazy="datacoop.modules[5].moduleContent.bannerImgSrc">
        </div>
        <div class="bot">
             <sencewhite></sencewhite>
            <bottom></bottom>
        </div>
    </div>
</template>
<script>
import swiper from '@/components/Swiper'
import axios from "axios"
import {mapState} from 'vuex'
import goods from '@/views/index/rec/Goods'
import sencetitle from '@/views/index/rec/Sencetitle'
import sencegood from '@/views/index/rec/Sencegood'
import sencewhite from '@/views/index/rec/Sencewhite'
import bottom from '@/views/index/rec/Bottom'
import coop from '@/views/index/rec/Coop'
import Vue from 'vue'
import { Lazyload } from 'vant'
Vue.use(Lazyload,{
    lazyComponent: true,
    loading:'app/src/assets/img/tihuan.gif',
    error:'app/src/assets/img/error.jpeg',
    preload:1.3,
})
export default {
    components:{
        swiper,
        goods,
        sencetitle,
        sencegood,
        sencewhite,
        coop,
        bottom
    },
    mounted(){
        this.$store.dispatch('index/getBannerRec')
        this.$store.dispatch('index/getBannerRecMore')
        this.$store.dispatch('index/getBannerRecSence')
        this.$store.dispatch('index/getBannerRecRes')
        this.$store.dispatch('index/getBannerRecBook')
        this.$store.dispatch('index/getBannerRecSplit')
        this.$store.dispatch('index/getBannerRecWe')
        this.$store.dispatch('index/getBannerRecCoop')
        console.log(this.datacoop)
    },
    computed:{
        ...mapState('index',['bannerrec','data','datamore','datasence','datares','databook','datasplit','datawe','datacoop'])
    }
}
</script>
<style lang="scss" scoped>
    .imgSever{
        height: 60px;
        width: 100%;
        margin: 12px 0;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .bannerLink{
        width: 100%;
        height: 75px;
        background-color: #fff;
        padding: 2px 3px;
        box-sizing: border-box;
        margin-bottom: 12px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .linklist{
        display: flex;
        width: 100%;
        box-sizing: border-box;
        background: #fff;
        justify-content: space-around;
        margin-bottom: 12px;
        padding: 18px 3% 5px;
        img{
           width: 47%;
        }
    }
    .sale{
        width: 100%;
        background-color: #fff;
        padding: 25px 5% 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        img{
            width: 32%;
        }
    }
    .ins{
        width: 100%;
        margin-bottom: 12px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .insport{
        width: 100%;
        height: 145px;
        margin-bottom: 12px;
        img{
            width: 100%;
        }
    }
    .sofa{
        width: 100%;
        height: 370px;
        padding: 30px 0 0;
        box-sizing: border-box;
        background-color: #fff;
        font-size: 0; // 去掉img默认3像素下边
        margin-bottom: 12px;
        .sofa_img{
            width: 100%;
            height: 180px;
            padding: 13px 13px 0;
            box-sizing: border-box;
            img{
            width: 100%;
            height: 100%;
        }
        }
    }
    .inspro{
        width: 100%;
        height: 105px;
        background: #fff;
        font-size: 0;
         margin-bottom: 18px;
        img{
            width: 100%;
            height: 100px;
        }
    }
    .getall{
        height: 41px;
    }
    .bot{
        background-color: #fff;
    }
</style>