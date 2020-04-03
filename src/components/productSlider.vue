<template>
  <div class="productSliderContainer">
      <carousel  :items="1" :nav="false" :autoplay="true" :start-position="URLhash">
          <img src="../assets/eats.jpg" alt="" data-hash="slide-1" class="productSlide">
          <img src="../assets/eats2.jpg" alt="" data-hash="slide-2" class="productSlide">
          <img src="../assets/eats3.jpg" alt="" data-hash="slide-3" class="productSlide">
          <img src="../assets/eats4.jpg" alt="" data-hash="slide-4" class="productSlide">
          <img src="../assets/eats5.jpg" alt="" data-hash="slide-5" class="productSlide">
      </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
    name: "productSlider",
    components: {
        carousel
    }
}
</script>

<style>
.productSliderContainer{
    width: 100%;
}
.carousel{
    width: 100%;
}
.productSlide{
    width: 100%;
    height: 400px;
    object-fit: cover;
}
</style>
