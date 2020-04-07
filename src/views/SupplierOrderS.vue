<template>
  <div class="ordersContainer flex suppliersListMainContainer suplierNewOrdersContainer">
    
    <div class="recentOrdersContainerRow flex">
  
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
        
    </div>
    <div class="recentOrdersContainerRow flex supplierNewOrdersListContainer">
        <div class="content">
            <div v-if="currentTab === 'New orders'">
              <div class="recentOrdersContainerRow flex">
                <supplierOrderList/>
              </div>
            </div>
            <div v-if="currentTab === 'Accepted'">
              <div class="recentOrdersContainerRow flex">
                <supplierOrderList/>
              </div>
            </div>
            <div v-if="currentTab === 'Picked up'">
              <div class="recentOrdersContainerRow flex">
                <supplierOrderList/>
              </div>
            </div>
            <div v-if="currentTab === 'Delivered'">
              <div class="recentOrdersContainerRow flex">
                <supplierOrderList/>
              </div>
            </div>
            <div v-if="currentTab === 'Declined'">
              <div class="recentOrdersContainerRow flex">
                <supplierOrderList/>
              </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Tabs from "vue-tabs-with-active-line";
import supplierOrderList from "../components/supplierOrderList.vue"

export default {
  name: "SupplierOrderS",
  components: {
    carousel,
    Tabs,
    supplierOrderList
  },
  data: () => ({
    tabs: [
      { title: "New orders", value: "New orders" },
      { title: "Accepted", value: "Accepted" },
      { title: "Picked up", value: "Picked up" },
      { title: "Delivered", value: "Delivered" },
      { title: "Declined", value: "Declined" } 

      
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

.content {
  width: 100%;
}

.ordersContainer {
  overflow-x: hidden;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
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
.suplierNewOrdersContainer .recentOrdersContainerRow.tabs.flex {
    justify-content: flex-start;
    padding-left: 15px;
    text-align: center;
}
.suplierNewOrdersContainer .recentOrdersContainerRow.tabs.flex button.tabs__item {
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
    margin-right: 45px;
    background: none;
} 
.suplierNewOrdersContainer .recentOrdersContainerRow.tabs.flex .tabs__item_active, .suplierNewOrdersContainer .recentOrdersContainerRow.tabs.flex .tabs__item:hover, .suplierNewOrdersContainer .recentOrdersContainerRow.tabs.flex .tabs__item_active:hover {  
    background: #FFFFFF!important;
    border-radius: 24px;
    font-size: 20px;
    line-height: 27px;
    border-color: white!important;
    display: flex;
    align-items: center;
    color: #4A4A4A!important;
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
.supplierMainInfoOrderList .driversListContainer .driversListRowContent > div {
  width: 16.3%!important;
}
.supplierMainInfoOrderList .driversListContainer .driversListRowHeader > span {
  width: 16.3%!important;
}
</style>
