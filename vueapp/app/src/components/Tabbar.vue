<template>
  <div>
    <ul>
      <router-link
        tag="li"
        v-for="data in datalist"
        :key="data.text"
        :to="data.path"
        activeClass="active"
      >
        <i class="iconfont" :class="data.icon"></i>
        <span>{{data.text}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: [
        {
          path: "/index",
          text: "首页",
          icon: "icon-store"
        },
        {
          path: "/sort",
          text: "分类",
          icon: "icon-all"
        },
        {
          path: "/shopcar",
          text: "购物车",
          icon: "icon-cart"
        },
        {
          path: "/message",
          text: "消息",
          icon: "icon-email"
        },
        {
          path: "/center",
          text: "我",
          icon: "icon-account"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.active {
  color: #000;
}
div {
  position: fixed;
  border-top: 1px solid rgb(235, 228, 228);
  box-sizing: border-box;
  color: #808080;
  z-index: 10;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background:rgb(252, 250, 250);
  ul {
    display: flex;
    li {
      flex: 1;
      font-size: 13px;
      text-align: center;
      display: flex;
      flex-direction: column;
      line-height:23px;
      padding-top: 5px;
      box-sizing: border-box;
    }
  }
}
</style>