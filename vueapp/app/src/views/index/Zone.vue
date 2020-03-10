<template>
  <div>
    <swiper :banner="bannerzone"></swiper>
    <zonetit :datatit="datazone.modules[1]"></zonetit>
    <swipe :swipelist="datazone.modules[1].moduleContent.products"></swipe>
    <lookall></lookall>
    <zonetit :datatit="datazone.modules[2]"></zonetit>
    <zonegood :products="datazone.modules[2].moduleContent.products"></zonegood>
    <lookall></lookall>
    <zonetit :datatit="datazone.modules[3]"></zonetit>
    <zonegood :products="datazone.modules[3].moduleContent.products"></zonegood>
    <lookall></lookall>
    <hot :imglist="datazone.modules[4].moduleContent.banners"></hot>
    <bottom></bottom>
  </div>
</template>
<script>
import swiper from "@/components/Swiper"
import axios from "axios"
import { mapState } from "vuex"
import zonetit from "@/views/index/zone/Zonetit"
import swipe from "@/views/index/zone/Swipe"
import lookall from "@/views/index/zone/Lookall"
import zonegood from "@/views/index/zone/Zonegood"
import hot from "@/views/index/zone/Hot"
import bottom from "@/views/index/rec/Bottom"
export default {
  components: {
    swiper,
    zonetit,
    swipe,
    lookall,
    zonegood,
    hot,
    bottom
  },
  mounted() {
    this.$store.dispatch("index/getBannerZone")
    this.$store.dispatch("index/getZone")
    console.log(this.datazone)
  },
  computed: {
    ...mapState("index", ["bannerzone", "datazone"])
  }
}
</script>
<style lang="scss" scoped>
</style>