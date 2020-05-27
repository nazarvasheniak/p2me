<template>
  <div class="ordersContainer flex suppliersListMainContainer suplierNewOrdersContainer accountOrdersContainerMain">
    <carousel>
    <div class="headerRow1 flex">
         <button class="DateView1">
           <span class="datePicker">
             12.07-19.07
           </span>  
         </button>  
        </div>  

      
     <div class="chooseTypeOrderHeader flex">
       <button class="All">All</button>
       <button class="Restaurants">Restaurants</button>
       <button class="Shopping">Shopping</button>
       <button class="Taxi">Taxi</button>
       <button class="Pharmacy">Pharmacy</button>
       <button class="Courier">Courier</button>
       <button class="Markets">Markets</button>
       <button class="Buytome">Buy to me</button>
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
              <div class="recentOrdersContainerRow ">
                 <accountOrderListMain/> 
                
                
              </div>
            </div>
            <div v-if="currentTab === 'Accepted'">
              <div class="recentOrdersContainerRow flex">
                
              </div>
            </div>
            <div v-if="currentTab === 'Picked up'">
              <div class="recentOrdersContainerRow flex">
                
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
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Tabs from "vue-tabs-with-active-line";
import accountOrderListMain from "../components/accountOrderListMain.vue";
import vSelect from "vue-select";

export default {
  name: "ClientOrders",
  components: {
    carousel,
    Tabs,
    accountOrderListMain,
    vSelect
  },
  data: () => ({
    tabs: [
      { title: "New orders", value: "New orders" },
      { title: "Accepted", value: "Accepted" },
      { title: "Picked up", value: "Picked up" },
      { title: "Delivered", value: "Delivered" },
      { title: "Declined", value: "Declined" },
      { title: "Restaurants", value: "Restaurants" },
      { title: "Shopping", value: "Shopping" },
       { title: "Taxi", value: "Taxi" },
       { title: "Pharmacy", value: "Pharmacy" },
       { title: "Courier", value: "Courier" },
       { title: "Markets", value: "Markets" },
       { title: "Buy to me", value: "Buy to me" }
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



.chooseTypeOrderHeader {
 position: relative;
 display: flex;
 justify-content: center;
 
 }
.All {
margin-left: 10px;
margin-right: 15px;
font-size: 18px;
line-height: 27px;
align-items: center;
box-sizing: border-box;
border-radius: 24px;
color: #4A4A4A;

}

.Restaurants {
    font-family: AvenirNext;
    margin-right: 10px;
    font-size:18px;
    line-height: 27px;
    /* box-sizing: border-box;
    background: #6C6C6C; */
    box-sizing: border-box;
    border-radius: 24px;  
    background: #6C6C6C;
}
.Shopping {
  margin-right: 10px;
font-family: AvenirNext;
font-size: 18px;
line-height: 27px;
/* identical to box height, or 135% */
box-sizing: border-box;
display: flex;
align-items: center;

border-radius: 24px;

color: #4A4A4A;
}
.Taxi {
margin-right: 10px;
font-family: AvenirNext;
font-size: 18px;
line-height: 27px;
/* identical to box height, or 135% */
box-sizing: border-box;
display: flex;
align-items: center;
border-radius: 24px;
}
.Pharmacy {
margin-right: 10px;
font-family: AvenirNext;
font-size: 18px;
line-height: 27px;
/* identical to box height, or 135% */
box-sizing: border-box;
display: flex;
align-items: center;
border-radius: 24px;
}
.Courier {
margin-right: 10px;
font-family: AvenirNext;
font-size: 18px;
line-height: 27px;
/* identical to box height, or 135% */
box-sizing: border-box;
display: flex;
align-items: center;
border-radius: 24px;
}
.Markets {
margin-right: 10px;
font-family: AvenirNext;
font-size: 18px;
line-height: 27px;
/* identical to box height, or 135% */
box-sizing: border-box;
border-radius: 24px;
display: flex;
align-items: center;
}
.Buytome {
margin-right: 10px;
font-family: AvenirNext;
font-size: 18px;
line-height: 27px;
/* identical to box height, or 135% */
box-sizing: border-box;
border-radius: 24px;
display: flex;
align-items: center;
}
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
    background: #FFFFFF;
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

.headerRow1 {
  padding-right: 26px;
  height: 68px;
  padding-top: 8px;
  
}

.DateView1 {
 border-radius: 24px;
 width: 200px;
 height: 42px; 
 border: 1px solid rgba(0, 0, 0, 0.2);
}

.datepicker {
  margin-top: 5px;
   margin-bottom: 0; 
   font-size: 15px;
    text-align: center;
}
</style>