<template>
  <div class="productImagesContainer flex supplierProductContainerMain">
      <img src="../assets/gamburger.png" alt="">
      <carousel 
        class="sliderRecentOrders"
        :items="3"
        :nav="true"
        >
        <img src="../assets/gamburger.png" alt="">
        <img src="../assets/gamburger.png" alt="">
        <img src="../assets/gamburger.png" alt="">
        <img src="../assets/gamburger.png" alt="">
        <img src="../assets/gamburger.png" alt="">
        <img src="../assets/gamburger.png" alt="">
        <img src="../assets/gamburger.png" alt="">
        <img src="../assets/gamburger.png" alt="">
        <img src="../assets/gamburger.png" alt="">
        <img src="../assets/gamburger.png" alt="">
        <img src="../assets/gamburger.png" alt="">
        <img src="../assets/gamburger.png" alt="">
      </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "supplierProductImages",

  components: {
    carousel
  }
};
</script>

<style scoped>
.productImagesContainer {
  width: 19%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
}
.productImagesContainer > img {
  width: 100%;
}
.productImagesContainer .sliderRecentOrders img {
  padding: 5px;
}
.sliderRecentOrders {
  margin-top: 9px;
}
</style>


