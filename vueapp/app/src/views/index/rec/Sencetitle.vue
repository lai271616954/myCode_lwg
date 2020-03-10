<template>
 <lazy-component>
  <div class="title">
    <div>
      <img
        v-for="data in sencelist.moduleContent.banners"
        v-lazy="data.bannerImgSrc"
        :key="data.id"
      />
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
  props: ["sencelist"]
}
</script>
<style lang="scss" scoped>
.title {
  width: 100%;
  height: 67px;
  background: #fff;
  margin-bottom: 18px;
  padding: 0 15px;
  box-sizing: border-box;
  div {
    display: flex;
    height: 16px;
    position: relative;
    top: 40px;
    justify-content: space-between;
    img {
      height: 100%;
    }
  }
}
</style>