<template>
  <div class="ordersContainer flex suppliersListMainContainer suppliersListMainContainerFeedbacks">
    <div class="content" style="width: 100%">
      <div class="flex">
        <button class="filter-button focus-none text-default text-table-head">New Feedbacks</button>
        <button
          class="filter-button focus-none text-default text-table-head"
          style="margin-left: 20px; margin-right: 20px"
        >Accepted</button>
        <button class="filter-button focus-none text-default text-table-head">Declined</button>
      </div>

      <table style="margin-top: 15px; margin-right: 10px;">
        <thead>
          <tr class="trFeedbacks">
            <td class="tdFeedbacks" style="width: 11%;">Order №</td>
            <td class="tdFeedbacks" style="width: 20%;">Customer</td>
            <td class="tdFeedbacks" style="width: 15%;">Supplier</td>
            <td class="tdFeedbacks" style="width: 20%;">Location</td>
            <td class="tdFeedbacks" style="width: 29%;">Comment</td>
            <td class="tdFeedbacks" style="width: 5%;"></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.supplier_id">
            <td>
              <div class="text-center inline-flex">
                <p class="text-default text-table-item"> {{item.order_number}} </p>
              </div>
            </td>
            <td>
              <div class="text-center inline-flex">
                <img
                  src="../assets/burder.png"
                  alt
                  style="width: 40px; height: 40px; margin: auto; margin-right: 5px;"
                />
                <p class="text-default text-table-item"> {{item.customer_name}} </p>
              </div>
            </td>
            <td>
              <div class="text-center inline-flex">
                <p class="text-default text-table-item"> {{item.supplier_name}} </p>
              </div>
            </td>
            <td>
              <div class="inline-flex">
                <p class="text-default text-table-item"> {{item.location}} </p>
              </div>
            </td>
            <td>
              <div class="inline-flex">
                <p class="text-default text-table-item"> {{item.comment}} </p>
              </div>
            </td>
            <td>
              <div>
                <button class="table-button-publish focus-none text-default text-table-item">Publish</button>
                <button class="table-button-delete focus-none text-default text-table-item">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Tabs from "vue-tabs-with-active-line";

export default {
  name: "feedbacks",
  data: () => ({
      isSupplier: true,
      supplier: null,
      items: []
  }),

  mounted() {
    debugger;
    this.$store.dispatch("getSuppliersFeedback", {
        id: this.$route.params.id,
        status: "active"
    }).then(result => {
      debugger;
      this.items = result;
    });
  }
//   data: () => ({
//     tabs: [
//       { title: "New feedbacks", value: "New feedbacks" },
//       { title: "Accepted", value: "Accepted" },
//       { title: "Declined", value: "Declined" }
//     ],
//     currentTab: "New feedbacks"
//   }),
//   methods: {
//     handleClick(newTab) {
//       this.currentTab = newTab;
//     }
//   }
};
</script>

<style >
.text-center {
  text-align: center !important;
}

.inline-flex {
  display: inline-flex;
}
.text-default {
  font-family: AvenirNext;
  color: #4a4a4a;
}

.text-table-head {
  font-size: 18px;
}
.text-table-item {
  font-size: 16px;
}

.content {
  width: 100%;
  margin-top: 0;
  margin-left: 10px;
}

.ordersContainer {
  overflow-x: hidden;
  flex-flow: column nowrap;
  /* justify-content: flex-start;
  align-items: flex-start; */
  width: 100%;
}

.trFeedbacks {
  background-color: #ffffff;
}

.tdFeedbacks {
  font-family: AvenirNext;
  font-size: 19px;
  line-height: 27px;
  letter-spacing: 0.232479px;
  color: #4a4a4a;
}

.focus-none:focus {
  outline: none;
}

.filter-button {
  background: transparent;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.filter-button:focus {
  background: #4a4a4a;
  border-radius: 24px;
  color: #ffffff;
}

.table-button-publish {
  background: radial-gradient(
    110.91px at 3.13% 3.13%,
    #fb5f68 0%,
    #ea84af 100%
  );
  border: 1px solid #fb5f68;
  border-radius: 24px;
  box-shadow: 0px 2px 15px #fcb3bb;
  color: white;
  margin-bottom: 8px;
  padding: 8px 25px;
  width: 100px;
}

.table-button-delete {
  background: transparent;
  border: 1px solid #fb5f68;
  border-radius: 24px;
  color: #fb5f68;
  padding: 8px 25px;
  width: 100px;
}

.tdMyFeedbacks1,
.tdMyFeedbacks2,
.tdMyFeedbacks3,
.tdMyFeedbacks4,
.tdMyFeedbacks5 {
  font-family: AvenirNext;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.206648px;
  color: #4a4a4a;
}

.ordersContainerTabs {
  margin: 5px 5px 15px;
  width: 100%;
}
.recentOrdersListItem:last-child {
  /* border-bottom: none; */
}
.suppliersListMainContainer .tabs__item {
  font-size: 14px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #ffffff;
  background: none;
  border-color: transparent;
  padding: 5px 30px;
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
  margin-right: 17px;
  display: block;
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
.feedbakcsListContainer {
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(30, 30, 30, 0.146031);
  border-radius: 3px;
  padding: 30px;
  margin-top: 25px;
}
.ordersContainer.suppliersListMainContainerFeedbacks {
  background: none;
  box-shadow: none;
  border-radius: none;
  padding: 0px;
}
.suppliersListMainContainerFeedbacks .recentOrdersContainerRow.tabs.flex {
  justify-content: flex-start;
  padding-left: 15px;
  text-align: center;
}
.suppliersListMainContainerFeedbacks
  .recentOrdersContainerRow.tabs.flex
  .tabs__item {
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  margin-right: 45px;
}
.suppliersListMainContainerFeedbacks
  .recentOrdersContainerRow.tabs.flex
  .tabs__item_active,
.suppliersListMainContainerFeedbacks
  .recentOrdersContainerRow.tabs.flex
  .tabs__item:hover,
.suppliersListMainContainerFeedbacks
  .recentOrdersContainerRow.tabs.flex
  .tabs__item_active:hover {
  background: !important;
  border-radius: 24px;
  font-size: 20px;
  line-height: 27px;
  border-color: white !important;
  display: flex;
  align-items: center;
  color: #4a4a4a !important;
}
.suppliersListMainContainerFeedbacks .driversListRowHeader span:nth-child(5) {
  width: 25.1%;
}
.suppliersListMainContainerFeedbacks .driversListRowHeader span {
  width: 14.1%;
}
.suppliersListMainContainerFeedbacks .driversListRowContent div:nth-child(5) {
  width: 25.1%;
}
.suppliersListMainContainerFeedbacks .driversListRowContent > div {
  width: 14.1%;
}
.suppliersListMainContainerFeedbacks .driversListRowHeader {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 19px;
  padding-top: 5px;
}
.suppliersListMainContainerFeedbacks .driversListRowContent div:nth-child(6) {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.suppliersListMainContainerFeedbacks .sliderRecentOrders {
  margin-top: 0px;
}
</style>
