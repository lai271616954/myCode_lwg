<template>
 <lazy-component>
    <div>
        <span>查看全部</span>
        <i class="iconfont icon-more"></i>
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
    div{
        width: 100%;
        padding: 13px 17px;
        box-sizing: border-box;
        background: #fff;
        text-align: center;
        margin-bottom: 15px;
        span{
            vertical-align: middle;
            font-size: 12px;
        }
        i{
            vertical-align: middle;
            font-size: 12px;
        }
    }
</style>