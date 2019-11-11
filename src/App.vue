<template>
  <div id="app" class="cart">
    <Top />
    <Center />
    <Bottom />
  </div>
</template>

<script>
import Top from "./components/top";
import Center from "./components/center";
import Bottom from "./components/bottom";
export default {
  name: "app",
  components: {
    Top,
    Center,
    Bottom
  },
  created(){
    this.$store.dispatch("handleAsyncGoodsList")
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.cart {
  width: 990px;
  margin: 30px auto;
}
</style>
