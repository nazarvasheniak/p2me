<template>
  <div class="productDescriptionContainer flex sipplierProductContainerBlock">
    <div class="productDescriptionHeading flex">
      <h2>Burger</h2>
      <h4>
        Price: 
        <span>5$</span>
      </h4>
    </div>
    <div class="productDescriptionRow flex">
      <h4>Consist:</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante.</p>
    </div>
    <div class="productDescriptionRow flex">
      <h4>Maximum quantity of order:</h4>
      <v-select
        class="vSelect"
        placeholder="Enter here..."
        :options="['1','2','3','4', '5', '10','15','20','25','30']"
      ></v-select>
    </div>
    <div class="productDescriptionRow flex">
      <h4>Average time of delivery:</h4>
      <v-select class="vSelect" placeholder="Enter here..." :options="['10m','20m','30m', '40m']"></v-select>
    </div>
    <div class="productDescriptionRow flex">
      <h4>Description:</h4>
      <p>A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, barbecued, or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, bacon, onion, pickles, or chiles; condiments such as mustard, mayonnaise, ketchup, relish, or "special sauce"; and are frequently placed on sesame seed buns. A hamburger topped with cheese is called a cheeseburger.</p>
    </div>
    
  </div>
</template>

<script>
import productOptionsSizes from "../components/productOptionSizes.vue";
import productOptionsColors from "../components/productOptionColors.vue";
import vSelect from "vue-select";

export default {
  name: "sipplierProductsDescription",
  components: {
    vSelect,
    productOptionsSizes,
    productOptionsColors 
  }
};
</script>

<style>
.sipplierProductContainerBlock.productDescriptionContainer {
  width: 75%!important;
  flex-flow: column nowrap;
}
.productDescriptionHeading {
  width: 100%;
  border-bottom: 2px solid #777777;
  padding: 0 5px 25px;
  margin-bottom: 25px;
  align-items: center;
  justify-content: space-between;
}
.productDescriptionHeading h2 {
  font-size: 1.5em;
  width: 70%;
}
.sipplierProductContainerBlock .productDescriptionHeading h4 {
  color: #bdbdbd7c;
  font-size: 1em;
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 27px;
  /* identical to box height, or 135% */
  letter-spacing: 0.123077px;
  color: #595959;
  margin-bottom: 0px;
}
.mainCatSelectContainer {
  display: flex !important;
  flex-flow: row wrap;
  font-size: 0.8em;
}
.productDescriptionRow > input {
  border: 1px solid rgba(0, 0, 0, 0.15);
  height: 35px;
  border-radius: 3px;
  margin-right: 20px;
  text-indent: 7px;
  width: 100px;
}
.salePercent {
  position: relative;
}
.productDescriptionRow {
  width: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 10px 0;
}
.productDescriptionRow h4 {
  
}
.productDescriptionRow p {
  font-size: 0.8em;
  text-align: justify;
  
}
.vSelect {
  margin-bottom: 15px;
  width: 200px;
  font-size: 0.8em;
}
.productDescriptionRowSub {
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.productDescriptionRowSub span {
  color: #bdbdbd7c;
  margin-left: -10px;
  user-select: none;
  margin-top: 7px;
}
.productDescriptionRowSub > input {
  border: 1px solid rgba(0, 0, 0, 0.15);
  height: 35px;
  border-radius: 3px;
  margin-right: 20px;
  text-indent: 7px;
  padding-right: 15px;
}
.productDescriptionRowSub > .dropdown {
  width: 120px;
}
.drop {
  display: inline-block;
  vertical-align: top;
  padding: 15px;
  margin-bottom: 20px;
  width: auto;
  height: auto;
}
.drag {
  display: inline-block;
}
.sipplierProductContainerBlock .productDescriptionRow h4 {
  font-size: 20px;
  line-height: 27px;
  /* identical to box height, or 135% */
  letter-spacing: 0.123077px;
  color: #595959;
}
.sipplierProductContainerBlock .productDescriptionRow h4 p {
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  letter-spacing: 0.123077px;
  color: #595959;
}
</style>


