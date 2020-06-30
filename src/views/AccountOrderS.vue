<template>
  <div class="ordersContainer flex suppliersListMainContainer suplierNewOrdersContainer accountOrdersContainerMain">
    
     <div class="headerRowAccount flex">
         <button class="DateViewAccount">
           <!-- <p class="datePickerAccount"  v-on:click="isHidden = !isHidden"  id="loginFormLink" >
             12.07-19.07
           </p> 
           <v-md-date-range-picker  v-if="!isHidden">
            
           </v-md-date-range-picker>  -->
         </button>  
        </div>  

    
     <div class="recentOrdersContainerRow flex supplierNewOrdersListContainer accountApplicationsTabs">
        
        <div class="content">
            <tabs
        class="recentOrdersContainerRow tabs flex"
        :tabs="tabs"
        :currentTab="currentTab"
        :wrapper-class="'tabs'"
        :tab-class="'tabs__item'"
        :tab-active-class="'tabs__item_active'"
        :line-class="'tabs__active-line'"
        @onClick="handleClick"
        ></tabs> 
            <div v-if="currentTab === 'New orders'">
              <div class="recentOrdersContainerRow">
                <accountOrderListMain/>
              </div>
            </div>
            <div v-if="currentTab === 'Accepted'">
              <div class="recentOrdersContainerRow flex">
                <accountOrderListMain/>
              </div>
            </div>
            <div v-if="currentTab === 'Picked up'">
              <div class="recentOrdersContainerRow flex">
                <accountOrderListMain/>
              </div>
            </div>
            <div v-if="currentTab === 'Delivered'">
              <div class="recentOrdersContainerRow flex">
                
              </div>
            </div>
            <div v-if="currentTab === 'Declined'">
              <div class="recentOrdersContainerRow flex">
                
              </div>
            </div>
        </div>
    </div> 

  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Tabs from "vue-tabs-with-active-line";
import accountOrderListMain from "../components/accountOrderListMain.vue";
import vSelect from "vue-select";
import VMdDateRangePicker from "v-md-date-range-picker";
import "v-md-date-range-picker/dist/v-md-date-range-picker.css";



export default {
  name: "AccountOrderS",
  components: {
    carousel,
    Tabs,
    accountOrderListMain,
    vSelect
  },
  data: () => ({
    // return {
    //             isHidden: true
    //         };
    tabs: [
      { title: "New orders", value: "New orders" },
      { title: "Accepted", value: "Accepted" },
      { title: "Picked up", value: "Picked up" },
      { title: "Delivered", value: "Delivered" },
      { title: "Declined", value: "Declined" },
      // { title: "Restaurants", value: "Restaurants" },
      // { title: "Shopping", value: "Shopping" },
      // { title: "Taxi", value: "Taxi" },
      // { title: "Pharmacy", value: "Pharmacy" },
      // { title: "Courier", value: "Courier" },
      // { title: "Markets", value: "Markets" },
      // { title: "Buy to me", value: "Buy to me" }
    ],
    currentTab: "New orders"
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>

<style>
.ordersContainer {
  overflow-x: hidden;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}
/* .headerRow {
  border: 1px solid rgb(189, 108, 108);
   border-radius: 34px;
   margin-left: 30px;
   background: #F2F2F2;
    */
/* } */

.content {
  width: 100%;
}


.Dateview {
 
  height: 68px;
  box-sizing: border-box;
  /* display: block; */
   text-align: center;
   
   border: 1px solid #4A4A4A;
   
   background: #F2F2F2;
   margin-right: 5px;
}

.menu-icon {
  padding-left: 19px
}
.svg {
  width: 100px;
  height: 30px;
}

/* .recentOrdersContainerRow {
  
} */
.ordersContainerTabs {
  margin: 5px 5px 15px;
  width: 100%;
}
.recentOrdersListItem:last-child {
  border-bottom: none;
}
.suppliersListMainContainer  .tabs__item {
  font-size: 14px;
  line-height: 27px;
  /* identical to box height, or 193% */
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #56CCF2;
  background: none;
  border-color: transparent;
  padding: 5px 30px;
}
.suppliersListMainContainer .tabs__item_active,
.suppliersListMainContainer .tabs__item:hover {
  background: #56CCF2!important;
  border: 1px solid #56CCF2;
  box-sizing: border-box;
  border-radius: 24px;
  font-size: 14px;
  line-height: 27px;
  /* identical to box height, or 193% */
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #FFFFFF!important;
}
.driversListContainer {
  display: flex;
  flex-flow: column nowrap ;
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
  color: #4A4A4A;
}
.suppliersListMainContainer .content {
  overflow: hidden!important;
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
.ordersContainer.suplierNewOrdersContainer {
    background: none;
    box-shadow: none;
    border-radius: none;
    padding: 0px;
}
.suplierNewOrdersContainer .supplierMainInfoOrderList {
  margin: 19px 1px;
}
.suplierNewOrdersContainer .sliderRecentOrders {
  margin-top: 0px;
}
.accountOrdersContainerMain .ordersContainer {
    padding: 1px!important;;
    border-radius: none!important;;
    box-shadow: none!important;;
    background: none!important;;
}
.accountOrdersContainerMain .content {
    background: none;
    box-shadow: 0px 2px 25px rgba(30, 30, 30, 0.146031);
    border-radius: 3px;
    padding: 25px;
} 
.suplierNewOrdersContainer .accountApplicationsTabs .recentOrdersContainerRow.tabs.flex button.tabs__item {
  font-size: 14px;
  line-height: 27px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #56CCF2;
  background: none!important;
  border-color: transparent;
  padding: 5px 9px;
  margin-bottom: 19px;
}
.suplierNewOrdersContainer .accountApplicationsTabs .recentOrdersContainerRow.tabs.flex button.tabs__item_active, .suplierNewOrdersContainer .accountApplicationsTabs .recentOrdersContainerRow.tabs.flex button.tabs__item:hover { 
    background: #56CCF2!important;
    border: 1px solid #56CCF2;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 24px;
    font-size: 14px;
    line-height: 27px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    letter-spacing: 0.25831px;
    color: #FFFFFF!important;
}
.accountOrdersMainHeaders h1 {
  font-size: 32px;
  line-height: 44px;
  /* or 137% */
  display: flex;
  align-items: center;
  letter-spacing: 0.229609px;
  color: #FFFFFF;
  margin-right: 19px;
}
.accountOrdersMainHeaders {
 justify-content: flex-start;
 align-items: center;
 flex-flow: row nowrap;
 margin-bottom: 19px;
}
.accountOrdersMainHeaders .vSelect {
  margin-bottom: 0px;
  border-color: white;
  color: white;
}
.accountOrdersMainHeaders .v-select.searchable .dropdown-toggle {
  border-color: white;

}
.accountOrdersMainHeaders .v-select input[type=search]::placeholder {
  color: white;
}
.accountOrdersMainHeaders .v-select .open-indicator:before {
  border-color: white;    
}

.headerRowAccount {
  padding-right: 26px;
  height: 68px;
  padding-top: 8px;
  background: none;
  margin-bottom: 34px;
  margin-left: 45px;
  
  
}

.DateViewAccount {
 border-radius: 24px;
 width: 200px;
 height: 38px; 
 border: 2px solid rgba(74, 74, 74, 0.5);
 background: none;
 outline: none;
 
}

.datePickerAccount {
   margin-top: 5px;
   margin-bottom: 0; 
   font-size: 18px;
   text-align: center;
   font-family: AvenirNext;
   font-size: 20px; 
   color: #4A4A4A;
}
</style>
