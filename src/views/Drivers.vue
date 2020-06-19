<template >
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
          <td class="tdClass" style="width: 5%;">Info</td>
          <td class="tdClass" style="width: 25%;">Drivers</td>
          <td class="tdClass" style="width: 12%;">Orders</td>
          <td class="tdClass" style="width: 12%;">Transport</td>
          <td class="tdClass" style="width: 12%;">Class</td>
          <td class="tdClass" style="width: 12%;">Location</td>
          <td class="tdClass" style="width: 12%;">Start date</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" style="height: 60px;">
          <!-- column -->
          <td class="driverClass">
            <button class="InfoDriver" v-on:click="openItemProfile(item.id)">...</button>
          </td>
          <td style="display: inline-flex;">
            <img
              v-bind:src="item.avatar"
              style="width: 40px; height: 40px;  margin-right: 10px; border-radius: 50px;"
            />
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
            <button class="removeButton" v-on:click="openModal(item)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal vindow -->
    <div class="decline-modal-container flex" v-if="isModalShow">
      <div class="modalka">
        <div class="close" v-on:click="showOrHiddenModal()">
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
        <div class="reasonType">
          <h4>Are you sure want to delete this client ?</h4>
        </div>
        <div class="mainContainerButton">
          <button
            class="modal-button-client"
            style="margin-right:45px; align-items: center;"
            v-on:click="removeItem()"
          >OK</button>
          <button class="modal-button-client" type="button" v-on:click="showOrHiddenModal()">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Drivers",
  data: () => ({
    isDriverOrCourier: true, //true= driver, false = courier
    tabs: [
      { title: "Online", value: "online", class: "dasdascsasdasdasda" },
      { title: "Offline", value: "offline" },
      { title: "Removed", value: "removed" }
    ],
    currentTab: "online",
    items: [],
    isModalShow: false,
    itemModel: null
  }),
  methods: {
    changeTab(newTab, isdriver = this.isDriverOrCourier) {
      this.currentTab = newTab;
      this.isDriverOrCourier = isdriver;
      if (isdriver === true) {
        this.loadDriversList();
      } else {
        this.loadCourierList();
      }
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
    showOrHiddenModal() {
      this.isModalShow = !this.isModalShow;
    },
    openModal(item) {
      this.itemModel = item;
      this.showOrHiddenModal();
    },
    removeItem() {
      const item = this.itemModel;
      const id = item.id;
      this.$store.dispatch("deleteDriver", {id: id, body: null}).then(result => {
        const message = "success deleted driver";
        alert(message);
      });
    }
  },
  mounted() {
    this.loadDriversList();
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
  color: #4a4a4a;
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

.modalka {
  width: 579px;
  height: 314px;
  padding: 61px 124px;
  position: relative;
  box-sizing: border-box;
  border-radius: 3px;
  background: #ffffff;
}

.modalka h2 {
  font-family: "AvenirNext", sans-serif;
  font-size: 30px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 0.14359px;
  color: #4a4a4a;
}

.driverClass {
  font-family: AvenirNext;
  font-size: 16px;
  line-height: 22px;
}
.InfoDriver {
  font-family: AvenirNext;
  font-size: 16px;
  line-height: 22px;
  background: none;
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
/* .driversListRowContent div:first-child {
  width: 25.1%;
}
.driversListRowHeader span:first-child {
  width: 25.1%;
} */
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
*/.OnlineView {
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

.button {
  /* border: 0;
  cursor: pointer; */
}

.modal-mask {
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: fixed;
  width: 670px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.14359px;
  color: #4a4a4a;
  padding: 35px 0 60px 0;
}

.modal-button {
  display: flex;
  justify-content: flex-end;
}

.modal-body {
  margin: 20px 0;
}

.modal-body-item {
  padding: 0 41px 10px 43px;
  display: flex;
  justify-content: space-between;
}

.modal-footer {
  text-align: -webkit-center;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/*==============================End MODAL =========*/

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: red;
  background: transparent;
  outline: none;
}

.modal-header h3 {
  font-family: AvenirNext;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
}

.modal-body p {
  font-family: AvenirNext;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
}
.btnD {
  width: 132px;
  height: 58px;
  background: radial-gradient(
    96.87% 96.87% at 3.13% 3.13%,
    #fb5f68 0%,
    #ea84af 100%
  );
  box-shadow: 0px 2px 15px #fcb3bb;
  border-radius: 24px;
  border: 0;
  font-family: "AvenirNext", sans-serif;
  font-size: 30px;
  line-height: 49px;
  letter-spacing: 0.172308px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
}
/* .btn:hover {
    transform: scale(1.1);
  }
  .btn-blue {
    background: radial-gradient(100% 100% at 0% 0%, #56CCF2 0%, #2F80ED 100%), radial-gradient(96.87% 96.87% at 3.13% 3.13%, #FB5F68 0%, #EA84AF 100%);
    box-shadow: 0px 2px 15px rgba(51, 201, 254, 0.16);
  }
  .btn-red {
    box-shadow: 0px 2px 15px #fcb3bb;
    background: linear-gradient(to right, #f56c80 0%, #ea84af 100%);
  } */
</style> 
