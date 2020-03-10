<template>
  <div>
    <swiper :banner="bannerhome"></swiper>
    <zonetit :datatit="datahome.modules[1]"></zonetit>
    <swipe :swipelist="datahome.modules[1].moduleContent.products"></swipe>
    <lookall></lookall>
    <zonetit :datatit="datahome.modules[2]"></zonetit>
    <zonegood :products="datahome.modules[2].moduleContent.products"></zonegood>
    <lookall></lookall>
    <zonetit :datatit="datahome.modules[3]"></zonetit>
    <zonegood :products="datahome.modules[3].moduleContent.products"></zonegood>
    <div class="bot">
         <lookall></lookall>
        <bottom></bottom>
    </div>
  </div>
</template>
<script>
import swiper from "@/components/Swiper"
import axios from "axios"
import { mapState } from "vuex"
import zonetit from "@/views/index/zone/Zonetit"
import lookall from "@/views/index/zone/Lookall"
import zonegood from "@/views/index/zone/Zonegood"
import hot from "@/views/index/zone/Hot"
import swipe from "@/views/index/zone/Swipe"
import bottom from "@/views/index/rec/Bottom"
export default {
  components: {
    swiper,
    zonetit,
    swipe,
    lookall,
    zonegood,
    hot,
    swipe,
    bottom
  },
  mounted() {
    this.$store.dispatch("index/getBannerHome")
    this.$store.dispatch("index/getHome")
    console.log(this.datahome)
  },
  computed: {
    ...mapState("index", ["bannerhome", "datahome"])
  }
};
</script>
<style lang="scss" scoped>
    .bot{
        background-color: #fff;
    }
</style>