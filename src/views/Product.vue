<template>
  <div class="productContainer flex">
    <div class="productContainerHeading flex" style="margin-bottom: 15px;">
      <h1>Product item</h1>
      <h2>(here you can edit your product)</h2>
    </div>
    <!-- <div class="productSSubContainer flex"> -->
    <div>
      <div style="float: left;width: 25%; min-width:350px; margin-right: 20px; margin-bottom: 15px;">
        <div style="margin-right: 2px; margin-left: 2px;"> 
          <img src="../assets/bbbb.png" alt style="width: 100%; border-radius: 4px;" />
        </div>
        <div>
          <img src="../assets/bbbb.png" alt style="width: 32%; margin-right: 2px; margin-left: 2px; border-radius: 4px;" />
          <img src="../assets/bbbb.png" alt style="width: 32%; margin-right: 2px; margin-left: 2px; border-radius: 4px;"  />
          <img src="../assets/bbbb.png" alt style="width: 32%; margin-right: 2px; margin-left: 2px; border-radius: 4px;" />
        </div>
      </div>
      <div class="itemProduct flex">
        <!-- <div class="itemProductFirstelement flex" style="display: block;" >
          <img src="../assets/bbbb.png" alt="">
        </div>

         <div class="itemProductFirstelement flex" style="display: block;">
          <img src="../assets/bbbb.png" alt="">
        </div>

         <div class="itemProductFirstelement flex" style="display: block;">
          <img src="../assets/bbbb.png" alt="">
        </div>

         <div class="itemProductFirstelement flex" style="display: block;">
          <img src="../assets/bbbb.png" alt="">
        </div>-->
      </div>
      <!-- <productImages/>  -->
      <div>
        <productDescription />
      </div>
      <!-- <div class="doneButtonContainer flex">
        <button class="doneButton">Done!</button>
      </div>-->
    </div>
  </div>
</template>

<script>
//  import productImages from "../components/productImages.vue";
import productDescription from "../components/productDescription.vue";
export default {
  name: "product",
  components: {
    // productImages,
    productDescription
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
  font-family: AvenirNext;
  color: #535353;
  margin: 0;
  font-size: 1.6em;
}
.productContainerHeading h2 {
  font-family: AvenirNext;
  margin: 0 15px;
  color: #535353;
  font-size: 0.8em;
}
.productSSubContainer {
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
.itemProductFirstelement {
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 0px;
  margin-bottom: 0px;
}
.itemProductFirstelement img {
  width: 400px;
  height: 350px;
  border-radius: 8px;
  position: absolute;
  /* width: 319px;
height: 305px;
left: 338px;
top: 187px; */
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
