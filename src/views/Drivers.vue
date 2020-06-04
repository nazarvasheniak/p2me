<template>
  <div class="ordersContainer flex driversListContainerMains">
    <!-- <div class="recentOrdersContainerRow flex driversMainNavigationTabs"> -->
    <div class="filter flex">
      <div class="filter-btns-left flex">
        <button
          v-bind:class="{'isActiveView': isDriverOrCourier,'isInActiveView': !isDriverOrCourier}"
          v-on:click="changeTab('online', true)"
          style="text-align: center; outline: none;"
        >Drivers</button>
        <button
          v-bind:class="{'isActiveView': !isDriverOrCourier,'isInActiveView': isDriverOrCourier}"
          v-on:click="changeTab('online', false)"
          style="text-align: center; outline: none;"
        >Couriers</button>
      </div>

      <div class="filter-btns-right flex">
        <!-- class="recentOrdersContainerRow tabs flex" -->
        <button class="OnlineView" v-on:click="changeTab('online')" style="text-align: center;">
          <p style="color: #FFFFFF; margin: 0px;">Online</p>
        </button>
        <button class="OfflineView" v-on:click="changeTab('offline')" style="text-align: center;">
          <p style="color: #F9525B; margin: 0px;">Offline</p>
        </button>
        <button class="RemovedView" v-on:click="changeTab('removed')" style="text-align: center;">
          <p style="color: #4A4A4A; margin: 0px; ">Removed</p>
        </button>
      </div>
    </div>
     
     <table style="width: 100%; border-collapse:separate; border-spacing: 10px 5px;">
       <thead>
         <tr style="height: 70px;">
          <td class="tdClass" style="width: 25%;">Drivers</td>
          <td class="tdClass" style="width: 12%;">Orders</td>
          <td class="tdClass" style="width: 12%;">Transport</td>
          <td class="tdClass" style="width: 12%;">Class</td>
          <td class="tdClass" style="width: 12%;">Location</td>
          <td class="tdClass" style="width: 12%;">Start date</td>
         
         </tr>
        </thead>
       <tbody>
         <!-- row -->
          <tr v-for="(item, index) in items" :key="item.id" style="height: 60px;" v-on:click="openItemProfile(item.id)">
          <!-- column -->
           <td style="display: inline-flex;">
             <img v-bind:src="item.avatar" style="width: 40px; height: 40px;  margin-right: 10px; border-radius: 50px;"/>
              <div style=" text-align: center!important;">
                <p>{{ item.first_name }} {{ item.last_name }}</p>
              </div>
           </td>
           <td class="driverClass">#111111</td>
           <td class="driverClass">{{ item.transport }}</td>
           <td class="driverClass">{{ item.class }}</td>
           <td class="driverClass">{{ item.location }}</td>
           <td class="driverClass">{{ item.start_date }}</td>
           <td class="driverClass">
             <!-- <button class="removeButton" @click="deleteEvent(index)">Remove</button> -->
             <button class="removeButton" @click="remov">Remove</button>
           </td>
          </tr>
       </tbody>
     </table>
    
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import axios from "axios";

export default {
  name: "Drivers",
  components: {
    carousel
  },
  data: () => ({
    isDriverOrCourier: true, //true= driver, false = courier
    tabs: [
      { title: "Online", value: "online", class: "dasdascsasdasdasda" },
      { title: "Offline", value: "offline" },
      { title: "Removed", value: "removed" }
    ],
    currentTab: "online",
    items: []
  }),
  methods: {
    changeTab(newTab, isdriver = this.isDriverOrCourier) {
      this.currentTab = newTab;
      if (isdriver === true) {
        this.loadDriversList();
      } else {
        this.loadCourierList();
      }
      this.isDriverOrCourier = isdriver;
    },
    openItemProfile(id) {
      
      if (this.isDriverOrCourier === true) {
        this.$router.push(`/drive/${id}`);
      } else if (this.isDriverOrCourier === false) {
        this.$router.push(`/courier/${id}`);
      }
    },

    loadDriversList() {
      this.$store.dispatch("loadDriversList", this.currentTab).then(result => {
        this.items = result.drivers_list;
      });
    },
    loadCourierList() {
      // $store is a drivers.js
      this.$store.dispatch("loadCourierList", this.currentTab).then(result => {
        this.items = result.couriers_list;
      });
    },
    deleteEvent: function(index) {
     this.events.splice(index, 1);
   }
  },
  beforeMount() {
    this.loadDriversList();
    this.loadCourierList();
  }
};
</script>

<style>
.content {
  width: 100%;
}

.tdClass {
  font-family: AvenirNext;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.232479px;
  color: #4A4A4A;
}

.removeButton {
  font-family: "Avenir Next";
  margin-left: -15px;
  padding: 8px 23px;
  border: 1px solid #fb5f68;
  border-radius: 24px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.172206px;
  color: #fb5f68;
  background: none;
  outline: none;
}

.removeButton:hover {
  background: #fb5f68;
  color: white;
  text-align: center;
  outline: none;
}

.driverClass {
 font-family: AvenirNext;
 font-size: 16px;
 line-height: 22px;
}
.driversListContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
}
.driversListRowHeader {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
}
.driversListRowContent {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 19px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.driversListRowContent img {
  text-align: center !important;
  width: 50px !important;
  height: 50px !important;
}
.driversListRowContent > div {
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.206648px;
  color: #4a4a4a;
  width: 14.1%;
}
.driversListRowHeader span {
  font-family: "Avenir Next";
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.232479px;
  color: #4a4a4a;
  display: block;
  width: 14.1%;
  height: auto;
}
.driversListRowContent div:first-child {
  width: 25.1%;
}
.driversListRowHeader span:first-child {
  width: 25.1%;
}
.driversListRowContent p {
  font-size: 20px;
  align-items: center;
  letter-spacing: 0.232479px;
  display: flex;
  color: #4a4a4a;
  padding-left: 19px;
}
.ordersContainer {
  padding: 25px;
  border-radius: 5px;
  -webkit-box-shadow: 0 0 15px 5px #e5e5e585;
  box-shadow: 0 0 15px 5px #e5e5e585;
  background: #fff;
}
.sliderRecentOrders {
  width: 100%;
  margin-top: 35px;
  background: transparent;
  box-shadow: none;
  border-radius: 1px;
}
.driversMainNavigationTabs .tabs__item {
  font-size: 14px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  padding: 5px 30px;
  margin: 1px 9px;
}

.isActiveView {
  font-family: "Avenir Next";
  width: 124px;
  height: 44px;
  border-radius: 24px;
  background: #6c6c6c;
  font-size: 20px;
  text-align: center;
  line-height: 23px;
  color: #ffffff;
}

.isInActiveView {
  font-family: "Avenir Next";
  width: 124px;
  height: 44px;
  background: #ffffff;
  color: #535353;
  border-radius: 24px;
  line-height: 23px;
  display: inline-block;
  font-size: 20px;
  line-height: 23px;
}
.OnlineView {
  font-family: "Avenir Next";
  background: #42d18a;
  border: 1px solid #42d18a;
  box-sizing: border-box;
  border-radius: 24px;
  width: 106px;
  height: 38px;
  outline: #42d18a;
}
.OfflineView {
  font-family: "Avenir Next";
  margin-right: 10px;
  margin-left: 10px;
  background: #ffffff;
  border: 1px solid #ff4040;
  box-sizing: border-box;
  border-radius: 24px;
  width: 106px;
  height: 38px;
  outline: none;
}

.RemovedView {
  font-family: "Avenir Next";
  margin-right: 10px;
  opacity: 0.5;
  border: 1px solid #4a4a4a;
  box-sizing: border-box;
  border-radius: 24px;
  width: 124px;
  height: 38px;
  outline: none;
}
*/ .OnlineView {
  font-family: "Avenir Next";
  position: absolute;
  background: #42d18a;
  border: 1px solid #42d18a;
  box-sizing: border-box;
  border-radius: 24px;
  width: 106px;
  height: 38px;
  margin-right: 10px;
}

.driversMainNavigationTabs h1 {
  font-size: 32px;
  line-height: 33px;
  color: #4a4a4a;
}

.driversListRowContent {
  font-family: "Avenir Next";
}

.driversListRowContent button {
  font-family: "Avenir Next";
  float: right;
  display: block;
  text-align: center;
  border: 1px solid #fb5f68;
  border-radius: 24px;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.172206px;
  color: #fb5f68;
  padding: 8px 23px;
  background: none;
}
.driversMainNavigationTabs nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
}
.tabs__active-line {
  width: 1px !important;
}

.driversListRowContent div:nth-child(7) {
  justify-content: flex-end;
}
.driversListContainerMains .owl-theme .owl-nav {
  width: 75vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 0px;
  height: 28px;
}
.driversListContainerMains .owl-theme .owl-dots {
  width: 75vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.driversListCarouselContainer .content {
  overflow: hidden !important;
}
.driversListRowContent button:hover {
  background: #fb5f68;
  color: white;
  text-align: center;
}

.filter {
  width: 100%;
  height: 110px;
  padding: 0 25px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.filter-btns-right,
.filter-btns-left {
  width: 350px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.filter-btns-left {
  width: 260px;
}

button {
  border: 0;
  cursor: pointer;
}
</style> 
