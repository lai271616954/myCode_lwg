<template>
 <lazy-component>
    <div class="bottomlist">
            <div class="bottom">已经到底了</div>
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
    .bottomlist{
        background: #fff;
        margin-bottom: 50px;
         .bottom{
        height: 50px;
        width: 100%;
        text-align: center;
        line-height: 50px;
        font-size: 12px;
    }
    }
</style>