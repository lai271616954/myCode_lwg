<template>
<lazy-component>
  <div class="block">
    <div v-for="data in sence.moduleContent.banners" :key="data.id">
      <div>
         <img v-lazy="data.bannerImgSrc" />
      </div>
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
    props:['sence']
}
</script>
<style lang="scss" scoped>
    .block{
        padding: 0 13px;
        background: #fff;
        margin-bottom: 18px;
        height: 200px;
        display: flex;
        padding: 20px 13px 10px;
        justify-content: space-between;
        div{
          width: 100%;
          img{
            width: 100%;
            height: 100%;
        }
        }
    }
</style>