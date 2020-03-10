<template>
 <lazy-component>
    <div class="title">
        <p class="strong">{{datatit.moduleName}}</p>
        <p class="little">{{datatit.moduleDescription}}</p>
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
    props:['datatit']
}
</script>
<style lang="scss" scoped>
    .title{
        width: 100%;
        height: 78px;
        background-color: #fff;
        text-align: center;
        margin-top: 15px;
        position: relative;
        padding-bottom: 15px;
        box-sizing: border-box;
        .strong{
            width: 100%;
            top: 20px;
            position: absolute;
            font-size: 15px;
            font-weight: bold;
            color:#333;
        }
        .little{
            font-size: 11px;
            color: #808080;
            position: absolute;
            bottom: 5px;
            width: 100%;
        }
    }
</style>