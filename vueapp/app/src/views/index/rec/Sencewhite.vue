<template>
<lazy-component>
   <div class="white">
       <div></div>
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
    
}
</script>
<style lang="scss" scoped>
    .white{
        width: 100%;
        height: 30px;
        background-color: #fff;
        margin-bottom: 18px;
        padding: 0 20px;
        box-sizing: border-box;
        div{
            width: 100%;
            height: 1px;
            background-color: lightgray;
            position: relative;
            top: 20%;
        }
    }
</style>