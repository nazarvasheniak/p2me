<template>
  <div class="prodcutsContainer flex supplierProductsList">
    <div class="headerRow flex">
      <h1>Products</h1>
    </div>
    <div class="prodcutsSubContainer flex">
      <div class="prodcutsSubContainerHeading flex">
        <h2>Select category</h2>
        <v-select
        class="vSelect"
        placeholder="Burgers"
        :options="['Burgers','Burgers','Burgers','Burgers','Burgers']"
      ></v-select>
      </div>
      <carousel 
                class="sliderRecentOrders"
                :items="1"
                :nav="true"
        >
      <div class="prodcutsSubContainerItems flex">
        <div class="prodcutsSubContainerItem flex">
          <div class="productImgContainerAddNew flex">
            <iconPlus/>
          </div>
          <span class="name flex">Lorem Ipsum</span>
          <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
        </div>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/BurgerPhoto.png" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
      </div>
      <div class="prodcutsSubContainerItems flex">
        <div class="prodcutsSubContainerItem flex">
          <div class="productImgContainerAddNew flex">
            <iconPlus/>
          </div>
          <span class="name flex">Lorem Ipsum</span>
          <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
        </div>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
      </div>
      <div class="prodcutsSubContainerItems flex">
        <div class="prodcutsSubContainerItem flex">
          <div class="productImgContainerAddNew flex">
            <iconPlus/>
          </div>
          <span class="name flex">Lorem Ipsum</span>
          <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
        </div>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
      </div>
      <div class="prodcutsSubContainerItems flex">
        <div class="prodcutsSubContainerItem flex">
          <div class="productImgContainerAddNew flex">
            <iconPlus/>
          </div>
          <span class="name flex">Lorem Ipsum</span>
          <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
        </div>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
        <router-link to="/products/product" class="routerLink">
          <div class="prodcutsSubContainerItem flex">
            <div class="productImgContainer">
              <img src="../assets/eats.jpg" alt>
              <span class="price">price: 15$</span>
            </div>
            <span class="name flex">Lorem Ipsum</span>
            <span class="description">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum…</span>
          </div>
        </router-link>
      </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import iconPlus from "../components/icons/iconPlus.vue";
import carousel from "vue-owl-carousel";
import vSelect from "vue-select";

export default {
  name: "SupplierProductS",
  components: {
    iconPlus,
    carousel,
    vSelect

  }
};
</script>

<style scoped>
.prodcutsContainer {
  width: 100%;
  flex-flow: column nowrap;
  align-items: flex-start;
}
.headerRow {
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
}
.headerRow h1 {
  color: #fff;
  margin: 0;
  font-size: 1.6em
}
h2 {
  padding-right: 30px;
}
.sliderRecentOrders {
  margin-top: 0px;
}
.prodcutsSubContainerHeading {
  padding-bottom: 0px;
}
.prodcutsSubContainer {
  width: 100%;
  padding: 25px;
  margin-bottom: 30px;
  flex-flow: column nowrap;
  border-radius: 5px;
  -webkit-box-shadow: 0 0 15px 5px #e5e5e585;
  box-shadow: 0 0 15px 5px #e5e5e585;
  background: #fff;
}

.prodcutsSubContainerItems {
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.prodcutsSubContainerItem {
  position: relative;
  margin: 15px 7.5px 30px;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px 15px 35px;
  width: 250px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 15px 5px #e5e5e585;
  box-shadow: 0 0 15px 5px #e5e5e585;
  transition: 0.7s;
}
.prodcutsSubContainerItem:hover {
  box-shadow: 0 0 15px 5px #9b77fb;
}
.productImgContainerAddNew {
  width: 225px;
  height: 160px;
  margin-bottom: 15px;
  background: linear-gradient(
    to right,
    rgba(154, 119, 251, 0.8) 0%,
    rgba(51, 200, 254, 0.8) 100%
  );
  justify-content: center;
  align-items: center;
}
.productImgContainer {
  width: 225px;
  height: 160px;
  margin-bottom: 15px;
  position: relative;
}
.productImgContainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.prodcutsSubContainerItem:hover > .productImgContainer > .price {
  bottom: 5px;
}
.price {
  position: absolute;
  color: #fff;
  z-index: 5;
  bottom: 0;
  left: 0;
  font-weight: 400;
  font-size: 0.8em;
  padding: 5px 15px;
  transition: 0.1s ease-in-out;
  background: linear-gradient(
    to right,
    rgba(154, 119, 251, 0.8) 0%,
    rgba(51, 200, 254, 0.8) 100%
  );
}
.name {
  margin-bottom: 15px;
  font-size: 0.9em;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
}
.description {
  font-size: 0.8em;
  color: #b6b6b6;
}
.routerLink{
  color: inherit;
  text-decoration: none;
}
.owl-prev:before {
  bottom: -69px!important;
}
</style>
