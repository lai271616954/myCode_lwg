<template>
  <div id="app">
      <tabbar></tabbar>
      <router-view></router-view>
  </div>
</template>
<script>
import index from '@/views/Index'
import tabbar from '@/components/Tabbar'
export default {
  components:{
    index,
    tabbar
  }
}
</script>
<style lang="scss">
  *{
    margin:0;
    padding: 0;
  }
  ul{
    list-style:none;
  }

  html{
    touch-action: none;
  }
  body{
    background: #f5f5f5;
    // background: pink;
  }
</style>
