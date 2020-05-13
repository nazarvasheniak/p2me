<template>
  <div class="productDescriptionContainer flex">
    <div class="productDescriptionHeading flex">
      <h2>Ibuprofen</h2>
      <h4>
        Code:
        <span>012345</span>
      </h4>
    </div>
    <div class="productDescriptionRow flex">
      <h4>Status:</h4>
      <span>Active</span>
      
      <!-- <v-select class="vSelect" placeholder="Enter here..." :options="['10m','20m','30m', '40m']"></v-select> -->
    </div>

    <div class="productDescriptionRow flex">
      <h4>Price:</h4>
      <!-- <div class="productDescriptionRowSub flex">  -->
        <!-- <input type="number"> -->
        <span>120                      UAH</span>
        
        <!-- <v-select class="vSelect" placeholder="Currency" :options="['UAH' ,'USD', 'EUR']"></v-select> -->
      <!-- </div> -->
    </div>
    
    <div class="productDescriptionRow flex">
      <h4>Badge:</h4>
      <span>Hot Price</span>
      <!-- <v-select class="vSelect" placeholder="Enter here..." :options="['Top price','Best selling']"></v-select> -->
    </div>
    <div class="productDescriptionRow flex">
      <h4>Sale:</h4>
      <span>0%</span>
       <!-- <div class="productDescriptionRowSub flex">
        <input
          type="number"
          placeholder="0"
          class="salePercent"
          maxlength="2"
          pattern="/^(?!qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролджэяячсмитьбюіґїє\.,\\/\{\}\[\]:;"
        >
        <span>%</span>
      </div> -->
    </div>
    <!-- <div class="productDescriptionRow flex">
      <productOptionsSizes/>
    </div>
    <div class="productDescriptionRow flex">
      <productOptionsColors/>
    </div> -->
    <div class="productDescriptionRow flex">
      <h4>Release form:</h4>
      <span>Pills</span>
      <div></div>
    </div>

    <div class="productDescriptionRow flex">
      <h4>Country Manufacture</h4>
      <span>Indonesia</span>
      <!-- <v-select
        class="vSelect"
        placeholder="Enter here..."
        :options="['1','2','3','4', '5', '10','15','20','25','30']"
      ></v-select> -->
    </div>

    <!-- <div class="productDescriptionRow flex">
      <h4>Volume:</h4>
      <span>600        g</span>
    </div> -->
    
    <div class="productDescriptionRow flex">
      <h4>Average time of delivery:</h4>
      <span>20 min</span>
      <!-- <v-select class="vSelect" placeholder="Enter here..." :options="['10m','20m','30m', '40m']"></v-select> -->
    </div>
    <div class="productDescriptionRow flex">
      <h4>Description:</h4>
      <span>A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, barbecued, or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, bacon, onion, pickles, or chiles; condiments such as mustard, mayonnaise, ketchup, relish, or "special sauce"; and are frequently placed on sesame seed buns. A hamburger topped with cheese is called a cheeseburger.</span>
    </div>
    <div class="productDescriptionRow flex">
      <h4>Shop selection:</h4>
      <button class="kyivButton">Kyiv,Stereo Plaza, 37/2</button>
      <!-- <div class="mainCatSelectContainer flex" v-show="false">
        <label class="mainCatSelectItem">
          Mayakovskogo st., 68
          <input type="checkbox" name="subCatSelect" class="mainCatSelect">
        </label>
        <label class="mainCatSelectItem">
          Balzaka bl., 96
          <input type="checkbox" name="subCatSelect" class="mainCatSelect">
        </label>
        <label class="mainCatSelectItem">
          Zakrevskogo st.,75/2
          <input type="checkbox" name="subCatSelect" class="mainCatSelect">
        </label>
      </div> -->
    </div>
  </div>
</template>

<script>
import productOptionsSizes from "../components/productOptionSizes.vue";
import productOptionsColors from "../components/productOptionColors.vue";

import vSelect from "vue-select";
export default {
  name: "productDescription2",
  components: {
    vSelect,
    productOptionsSizes,
    productOptionsColors
  }
};
</script>

<style>
.productDescriptionContainer {
  width: 48%;
  flex-flow: column nowrap;
  justify-content: flex-end;
  margin-left: 0px;
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
  font-family: AvenirNext;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.215258px;

color: #4A4A4A;
}
.productDescriptionHeading h4 {
font-family: AvenirNext;
font-size: 20px;
line-height: 23px;
letter-spacing: 0.25831px;

color: #4A4A4A;

}
.mainCatSelectContainer {
  display: flex !important;
  flex-flow: row wrap;
  font-size: 0.8em;
}
.kyivButton {
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
  font-family: AvenirNext;
  margin-bottom: 10px;
}
.productDescriptionRow span {
  font-family: AvenirNext;
  font-size: 0.8em;
  text-align: justify;
  color: #9B9B9B;
  text-decoration: underline;
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
</style>


