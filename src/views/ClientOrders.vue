<template>
  <div class="ordersContainer flex suppliersListMainContainer suplierNewOrdersContainer accountOrdersContainerMain">
    <carousel>
     <div class="recentOrdersContainerRow flex accountOrdersMainHeaders">
       <div class="headerRow flex">
         <button class="DateView" style="margin-left: 15px,border: 1px solid #4A4A4A,box-sizing: border-box; border-radius: 44px;">
          <p style="color: #4A4A4A, margin: 0px, font-size: 20px, text-align: center, line-height: 27px">12.07-19.07
           <span class="menu-icon">
             <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 0.15C16.3 -0.05 16 -0.05 15.8 0.15L8.3 7.85L0.8 0.15C0.6 -0.05 0.3 -0.05 0.1 0.15C3.7998e-07 0.25 0 0.349999 0 0.449999C0 0.549999 3.7998e-07 0.65 0.1 0.75L7.9 8.75C8.1 8.95 8.4 8.95 8.6 8.75L16.4 0.75C16.6 0.65 16.6 0.35 16.5 0.15Z" fill="#535353"/>
             </svg>
           </span>
          </p>
         </button>  
        </div>   
        <v-select
        class="vSelect"
        placeholder="Enter here..."
        :options="['1','2','3','4', '5', '10','15','20','25','30']"
      ></v-select>

      
        
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
</style>