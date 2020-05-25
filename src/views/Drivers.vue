<template>
  <div class="ordersContainer flex driversListContainerMains">
    <!-- <div class="recentOrdersContainerRow flex driversMainNavigationTabs"> -->
    <div class="filter flex">
      <div class="filter-btns-left flex">
        <button
          v-bind:class="{'isActiveView': isDriverOrCourier,'isInActiveView': !isDriverOrCourier}"
          v-on:click="changeTab('online', true)"
          style="text-align: center;"
          >Drivers</button>
        <button
          v-bind:class="{'isActiveView': !isDriverOrCourier,'isInActiveView': isDriverOrCourier}"
          v-on:click="changeTab('online', false)"
          style="text-align: center;"
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
          <p style="color: #4A4A4A; margin: 0px;">Removed</p>
        </button>
      </div>
    </div>

    
    <!-- </div> -->
    <div class="recentOrdersContainerRow flex driversListCarouselContainer">
      <div class="content">
        <div v-if="currentTab === 'online'">
          <div class="recentOrdersContainerRow flex">
            <carousel
              class="sliderRecentOrders"
              :items="1"
              :nav="true"
              value="online"
              v-if="currentTab === 'online'"
            >
              <div class="driversListContainer">
                <div class="driversListRowHeader">
                  <span>Driver</span>
                  <span>Order</span>
                  <span>Transport</span>
                  <span>Class</span>
                  <span>Location</span>
                  <span>Start Date</span>
                  <span></span>
                </div>

                <div
                  class="driversListRowContent"
                  v-for="item in items"
                  :key="item.id"
                  v-on:click="openDriverProfile(item.id)"
                >
                  <div>
                    <img src="../assets/driver.png" alt />
                    <strong>{{ item.first_name }} {{ item.last_name }}</strong>
                  </div>
                  <div>#111111</div>
                  <div>{{ item.transport }}</div>
                  <div>{{ item.class }}</div>
                  <div>{{ item.location }}</div>
                  <div>{{ item.start_date }}</div>
                  <div v-on:click="">
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </carousel>
          </div>
        </div>

        <div v-if="currentTab === 'offline'">
          <carousel
            class="sliderRecentOrders"
            :items="1"
            :nav="true"
            value="offline"
            v-if="currentTab === 'offline'"
          >
            <div class="driversListContainer">
              <div class="driversListRowHeader">
                <span>Driver</span>
                <span>Last visit</span>
                <span>Transport</span>
                <span>Class</span>
                <span>Start Date</span>
                <span></span>
              </div>

              <div
                  class="driversListRowContent"
                  v-for="item in items"
                  :key="item.id"
                  v-on:click="-(item.id)"
                >
                  <div>
                    <img src="../assets/driver.png" alt />
                    <strong>{{ item.first_name }} {{ item.last_name }}</strong>
                  </div>
                  <div>{{ item.transport }}</div>
                  <div>{{ item.class }}</div>
                  <div>{{ item.location }}</div>
                  <div>{{ item.start_date }}</div>
                  <div>
                    <button>Remove</button>
                  </div>
                </div>
            </div>
          </carousel>
        </div>

        <div v-if="currentTab === 'removed'">
          <carousel
            class="sliderRecentOrders"
            :items="1"
            :nav="true"
            value="Removed"
            v-if="currentTab === 'removed'"
          >
            <div class="driversListContainer">
              <div class="driversListRowHeader">
                <span>Driver</span>
                <span>Reason for remove</span>
                <span>Transport</span>
                <span>Start date</span>
                <span>Remove date</span>
                <span></span>
              </div>

              <div
                  class="driversListRowContent"
                  v-for="item in items" 
                  :key="item.id"
                  v-on:click="openDriverProfile(item.id)"
                >
                  <div>
                    <img src="../assets/driver.png" alt />
                    <strong>{{ item.first_name }} {{ item.last_name }}</strong>
                  </div>
                  <div>{{ item.transport }}</div>
                  <div>{{ item.class }}</div>
                  <div>{{ item.location }}</div>
                  <div>{{ item.start_date }}</div>
                  <div v-on:click="">
                    <button>Remove</button>
                  </div>
                </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
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
    openDriverProfile(id) {
      this.$router.push(`/drive/${id}`);
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
    }
  },
  beforeMount() {
    this.loadDriversList(),
    this.loadCourierList();
 }
};
</script>

<style>
.content {
  width: 100%;
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
.driversListRowContent strong {
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  letter-spacing: 0.232479px;
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
  color: #FFFFFF;

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
