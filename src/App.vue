<template>
  <div>
    <router-view />
    <FooterGuide v-show="$route.meta.isShowFooter" />
  </div>
</template>
<script>
// 引入底部组件
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
// 引入接口测试
// import { reqAddress, reqCategorys, reqShopList } from "./api";
export default {
  name: 'App',
  // 注册组件
  components: {
    FooterGuide
  },
  mounted() {
    this.$store.dispatch('getAddress');
    // this.$store.dispatch('getCategorys');
    // this.$store.dispatch('getShops');
  }
  // async mounted() {
  //   await reqAddress({
  //     longitude: "116.36867",
  //     latitude: "40.10038"
  //   });
  //   await reqCategorys()
  //   await reqShopList({
  //     longitude: '116.36867',
  //     latitude: '40.10038'
  //   })
  // }
};
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
