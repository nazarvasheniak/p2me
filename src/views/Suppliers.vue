<template>
  <div class="suppContainer flex">
    <!-- <div class="myContent">  -->
    <div class="suppHeader flex">
      <!-- <div class="pageName"> -->
        <h1 class="suppName">Suppliers</h1>
      <!-- </div> -->

      <div class="suppChoose flex">
        <button class="suppCategory" v-on:click="changeTab('all suppliers', true)">All suppliers</button>
        <button class="suppCategory" v-on:click="changeTab('restaurants', true)" >Restaurants</button>
        <button class="suppCategory" v-on:click="changeTab('shopping', true)">Shopping</button>
        <button class="suppCategory" v-on:click="changeTab('markets', true)">Markets</button>
        <button class="suppCategory" v-on:click="changeTab('pharmacy', true)">Pharmacy</button>
        <button class="suppCategory" v-on:click="changeTab('removed', true)">Removed</button>
      </div>
    </div>

    <!-- <div class="tableHeader"> -->
    <table style="border-collapse:separate; border-spacing: 10px 5px;" >
       <!-- <carousel> -->
      <thead>
        <tr style="height: 70px;">
          <td class="tdClass">Supplier</td>
          <td class="tdClass">Category</td>
          <td class="tdClass">Schedule</td>
          <td class="tdClass">Location</td>
          <td class="tdClass">Start date</td>
          <td class="tdClass">
            <button v-on:click="accept">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="2.5"
                    y1="3.65001e-07"
                    x2="18.5"
                    y2="18.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FA626D" />
                    <stop offset="1" stop-color="#ED7FA5" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </td>
        </tr>
      </thead>
      <tbody >
        
        <!-- row -->
        <tr v-for="item in items" :key="item.id">
          <!-- column -->
          <td style="display: inline-flex;" >
            <img src="../assets/burder.png" alt="" style="width: 40px;  margin-right: 4px;" />
            <div>
              <strong class="spanPng" style="margin-right: 60px; padding-top: 15px;"> {{item.name}} </strong>
            </div>
          </td>
          <td>
            <span class="menuTable" style="margin-right: 100px;"> {{item.category}} </span>
          </td>
          <td>
            <span class="timeTable" style="margin-right: 100px;"> {{item.schedule}} </span>
          </td>
          <td>
            <span class="addressTable" style="margin-right: 80px;"> {{item.location}} </span>
          </td>
          <td>
            <span class="dateTable" style="margin-right: 80px;"> {{item.start_date}} </span>
          </td>
          <td>
            <button class="removeButton">Remove</button>
          </td>
        </tr>
      </tbody>
       <!-- </carousel> -->
    </table>

     <div class="accept-modal-container flex" v-if="acceptModalVision">
      <div class="modal">
        <div class="close" v-on:click="accept">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.707 0.293006C19.316 -0.0979941 18.684 -0.0979941 18.293 0.293006L10 8.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L8.58601 10L0.293006 18.293C-0.0979941 18.684 -0.0979941 19.316 0.293006 19.707C0.488006 19.902 0.744006 20 1.00001 20C1.25601 20 1.51201 19.902 1.70701 19.707L10 11.414L18.293 19.707C18.488 19.902 18.744 20 19 20C19.256 20 19.512 19.902 19.707 19.707C20.098 19.316 20.098 18.684 19.707 18.293L11.414 10L19.707 1.70701C20.098 1.31601 20.098 0.684006 19.707 0.293006Z"
              fill="#4A4A4A"
            />
          </svg>
        </div>
        <h2 style="margin-bottom: 25px;">Filters</h2>
        <form @submit.prevent="accept">
          <div class="categorysupp flex">
            <h4>Category:</h4>
            <div class="choosecategory">
              <v-select
                class="vSelect"
                placeholder="Currency"
                :options="['Food' ,'Clothes', 'Drive']"
              ></v-select>
            </div>

            <h4>Category:</h4>
            <div class="choosecategory">
              <v-select
                class="vSelect"
                placeholder="Currency"
                :options="['Food' ,'Clothes', 'Drive']"
              ></v-select>
            </div>

            <h4>Category:</h4>
            <div class="choosecategory">
              <v-select
                class="vSelect"
                placeholder="Currency"
                :options="['Food' ,'Clothes', 'Drive']"
              ></v-select>
            </div>

            <h4>Category:</h4>
            <div class="choosecategory">
              <v-select
                class="vSelect"
                placeholder="Currency"
                :options="['Food' ,'Clothes', 'Drive']"
              ></v-select>
            </div>

            <h4>Category:</h4>
            <div class="choosecategory">
              <v-select
                class="vSelect"
                placeholder="Currency"
                :options="['Food' ,'Clothes', 'Drive']"
              ></v-select>
            </div>

            <h4>Category:</h4>
            <div class="choosecategory">
              <v-select
                class="vSelect"
                placeholder="Currency"
                :options="['Food' ,'Clothes', 'Drive']"
              ></v-select>
            </div>

            <div class="button-ok">
              <button class="ok-button">OK</button>
            </div>
          </div>
        </form>
      </div>
    </div> 
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Tabs from "vue-tabs-with-active-line";
import vSelect from "vue-select";

export default {
  name: "Suppliers",
  components: {
    carousel,
    Tabs,
    vSelect
  },
  data: () => ({
    isSupplier: true,
    tabs: [
      { title: "All suppliers", value: "All suppliers" },
      { title: "Restaurants", value: "Restaurants" },
      { title: "Shopping", value: "Shopping" },
      { title: "Markets", value: "Markets" },
      { title: "Pharmacy", value: "Pharmacy" },
      { title: "Removed", value: "Removed" }
    ],
    acceptModalVision: false,
    currentTab: "All suppliers"
  }),
  methods: {
    accept() {
      this.acceptModalVision = !this.acceptModalVision;
    },
    Close() {},
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    loadSuppliersList() {
      
      this.$store.dispatch("loadSuppliersList", this.currentTab).then(result => {
        this.items = result.suppliers_list;
      });
    },
  }
}
</script>

<style>
.myContent {
  width: 100%;
}

.suppContainer {
  overflow-x: hidden;
  /* overflow-y: hidden; */
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

.spanPng {
  font-family: AvenirNext;
  font-size: 17px;
   line-height: 20px; 
  align-items: center;
  letter-spacing: 0.232479px;
  color: #4a4a4a;
}

.h1 {
  font-family: AvenirNext;
  font-size: 32px;
  line-height: 33px;
  color: #4a4a4a;
  mix-blend-mode: multiply;
}

.suppHeader {
  flex-direction: row;
}

.suppChoose {
  flex-direction: row;
  justify-content: space-between;
  width: 750px;
  height: 45px;
  margin-left: 98px;
  margin-top: 15px;
  
  
}

.pageName {
  width: 139px;
  height: 53px;
  margin-top: 25px;
  margin-left: 25px;
  height: 83px;
  align-items: center;
}

.tableHeader {
  width: 1028px;
  height: 72px;
  margin-top: 20px;
  margin-left: 25px;
  /* border:2px solid red; */
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: space-between; */
}

.tableSupplier {
  width: 1028px;
  height: 72px;

  display: flex;
  flex-direction: row;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
}

.tableOne {
  font-family: AvenirNext;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.232479px;
  color: #4a4a4a;
  opacity: 0.21;
}

.tableTwo {
  font-family: AvenirNext;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.232479px;
  color: #4a4a4a;
  display: bold;
}

.tableThree {
  font-family: AvenirNext;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.232479px;
  color: #4a4a4a;
  display: bold;
}

.tableFour {
  font-family: AvenirNext;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.232479px;
  color: #4a4a4a;
  display: bold;
}

.tableFive {
  font-family: AvenirNext;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.232479px;
  color: #4a4a4a;
  display: bold;
}

.suppTable {
  width: 1028px;
  height: 42px;

  align-items: center;

  margin-left: 19px;
}

.suppName {
  font-family: AvenirNext;
  font-size: 27px;
  line-height: 33px;
  color: #4a4a4a;
  padding-top: 20px;
  padding-left: 40px;
  padding-bottom: 15px;

}

.suppCategory {
  
  border-radius: 17px;
  font-family: AvenirNext;
  font-size: 17px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #56ccf2;
  background-color: #fff;
 
}

.suppCategory:focus {
background: #56CCF2;
border: 1px solid #56CCF2;
box-sizing: border-box;
border-radius: 24px;
color: #FFFFFF;
}

.menuTable {
  font-family: AvenirNext;
  font-size: 16px;
  line-height: 22px;

  align-items: center;
  letter-spacing: 0.206648px;
  color: #4a4a4a;
}

.timeTable {
  font-family: AvenirNext;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.206648px;
  color: #4a4a4a;
}

.addressTable {
  font-family: AvenirNext;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 137% */

  align-items: center;
  letter-spacing: 0.206648px;
  color: #4a4a4a;
}

.dateTable {
  font-family: AvenirNext;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 137% */

  align-items: center;
  letter-spacing: 0.206648px;
  color: #4a4a4a;
}

.suppContent {
  width: 173px;
  height: 50px;
}

.suppContent img {
  text-align: center !important;
  width: 30px !important;
  height: 30px !important;
  margin-left: 5px;
}

.removeButton {
  font-family: "Avenir Next";
  margin-left: -15px;
  padding: 8px 23px;
  /* float: right; */
  /* display: block;  */
  /* text-align: center; */
  border: 1px solid #fb5f68;
  border-radius: 24px;
  font-size: 16px;
  line-height: 22px;
  /* align-items: center; */
  letter-spacing: 0.172206px;
  color: #fb5f68;
  /* padding: 8px 23px; */
  background: none;
}

.removeButton button:hover {
  background: #fb5f68;
  color: white;
  text-align: center;
}

.accept-modal-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
}

.modal {
  width: 979px;
  height: 531px;
  padding: 61px 124px;
  position: relative;
  box-sizing: border-box;
  border-radius: 3px;
  background: #ffffff;
}

/* .modal h2 {
margin-bottom: 20px;
font-family: Avenir Next;
font-size: 32px;
line-height: 44px;
/* identical to box height, or 137% */

/* letter-spacing: 0.153162px; */

/* color: #4A4A4A;
} */

.close {
  position: absolute;
  right: 25px;
  top: 24px;
  cursor: pointer;
  z-index: 12;
}

.categorysupp {
  height: 444px;
  flex-flow: row wrap;
  top: 10px;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
}
.choosecategory {
  position: relative;
  margin: 5px 7.5px 20px;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: start;
  padding: 15px 15px 35px;
  width: 250px;

  background-color: #fff;
  -webkit-box-shadow: 0 0 15px 5px #e5e5e585;
  box-shadow: 0 0 15px 5px #e5e5e585;
  transition: 0.7s;
}
/* input {
	width: 18px;
	height: 18px;
	background: transparent;
	border: 1px solid #4A4A4A;
} */
.modal h2 {
  font-family: "AvenirNext";
  font-size: 30px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.14359px;
  color: #4a4a4a;
  margin-bottom: 20px;
}

.button-ok {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 285px;
  margin-bottom: 60px;
  margin-top: 30px;
}

.ok-button {
  background: #fb5f68;
  /* box-shadow: 0px 2px 15px #FCB3BB; */
  border-radius: 24px;
  display: flex;
  width: 142px;
  height: 58px;
  justify-content: center;
  font-family: AvenirNext;
  font-size: 30px;
  line-height: 49px;
  /* identical to box height, or 163% */

  display: flex;
  align-items: center;
  letter-spacing: 0.172308px;

  color: #ffffff;
}

.v-select {
  border: none;
  height: 20px;
  weight: 40px;
}

.accept,
.decline {
  margin: 5px 1px;
}

.accept,
.decline:hover {
  color: #fff;
  background-color: #f56c81;
}

.accept,
.accept:hover,
.decline  {
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  border-radius: 24px;
  display: block;
  width: 108px;
  height: 48px;
  text-align: center;
  line-height: 43px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.172206px;
  -webkit-transition: 0.7s;
  transition: 0.7s;
  border: 2px solid #f56c81;
  cursor: pointer;
  outline: none;
}

.tdClass {
  font-family: AvenirNext;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.232479px;
  color: #4A4A4A;
}

.tdClass button {
  
}

/* .accept:hover,
.decline {
  background: #fff;
  color: #f56c81; */

.ordersContainerTabs {
  position: absolute;
  margin: 5px 5px 15px;
  width: 100%;
}
.recentOrdersListItem:last-child {
  border-bottom: none;
}
.suppliersListMainContainer .tabs__item {
  display: inline;
  font-size: 14px;
  line-height: 26px;
  /* identical to box height, or 193% */
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #56ccf2;
  background: none;
  border-color: transparent;
  padding: 5px 30px;
}
.suppliersListMainContainer .tabs__item_active,
.suppliersListMainContainer .tabs__item:hover {
  background: #56ccf2 !important;
  border: 1px solid #56ccf2;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 14px;
  line-height: 27px;
  /* identical to box height, or 193% */
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #ffffff !important;
}
.driversListContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
}
.driversListRowHeader {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
}
.driversListRowContent {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.driversListRowContent img {
  width: 100%;
}
.driversListRowContent strong {
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  letter-spacing: 0.232479px;
  color: #4a4a4a;
}
.suppliersListMainContainer .content {
  overflow: hidden !important;
}
.suppliersListMainContainer h1 {
  margin-right: 5%;
}
.suppliersListMainContainer .owl-theme .owl-nav {
  width: 75vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 0px;
  height: 28px;
}
.suppliersListMainContainer .owl-theme .owl-dots {
  width: 75vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.driversListRowHeader svg {
  float: right;
}
.driversListRowContent > div:last-child {
  justify-content: flex-end;
}
</style>
