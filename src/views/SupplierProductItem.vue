<template>
  <div class="productContainer flex supplierProductsList ">
    <div class="productContainerHeading flex">
      <h1>Product item</h1>
    </div>
    <div class="productSubContainer flex">
      <supplierProductImages/>
      <sipplierProductsDescription/>
    </div>
  </div>
  
</template>

<script>
import supplierProductImages from "../components/supplierProductImages.vue";
import sipplierProductsDescription from "../components/sipplierProductsDescription.vue";
export default {
  name: "product",
  components: {
    supplierProductImages,
    sipplierProductsDescription
  }
};
</script>

<style scoped>
.productContainer {
  width: 100%;
  flex-flow: column nowrap;
}
.productContainerHeading {
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
}
.productContainerHeading h1 {
  color: #fff;
  margin: 0;
  font-size: 1.6em;
  margin-bottom: 19px;
}
.productContainerHeading h2 {
  margin: 0 15px;
  color: #fff;
  font-size: 0.8em;
}
.productSubContainer {
  flex-flow: row nowrap;
  justify-content: space-between;
  align-self: flex-start;
  border-radius: 5px;
  box-shadow: 0 0 15px 5px #e5e5e585;
  background: #fff;
  padding: 45px 25px;
  width: 100%;
  margin-bottom: 25px;
}
.doneButtonContainer {
  width: 10%;
  justify-content: center;
  align-items: flex-start;
  margin: 0 10px;
}
.doneButton {
  width: 90%;
  border-radius: 25px;
  border: none;
  background: linear-gradient(to right, #f56c80 0%, #ea84af 100%);
  border: 1px solid transparent;
  padding: 10px 15px;
  color: #fff;
  font-size: 0.8em;
  cursor: pointer;
  transition: 0.7s;
  outline: none;
}
.doneButton:hover {
  transform: scale(1.1);
}

</style>
