<template>
  <div class="ordersContainer flex">
    <tabs
      class="ordersContainerTabs tabs flex"
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'tabs'"
      :tab-class="'tabs__item'"
      :tab-active-class="'tabs__item_active'"
      :line-class="'tabs__active-line'"
      @onClick="handleClick"
    ></tabs>
    <div class="recentOrdersContainerRow flex">
      <carousel
        class="sliderRecentOrders"
        :items="1"
        :nav="true"
        value="NewFeedbacks"
        v-if="currentTab === 'NewFeedbacks'"
      >
        <div class="recentOrdersList flex">
          <div class="recentOrdersListItem flex">
            <span class="orderNumber">Order No</span>
            <span class="dateAndTime">Customer</span>
            <span class="customerInfo">Supplier</span>
            <span class="payment">Location</span>
            <span class="items">Comment</span>
            <span class="driver"></span>
          </div>
        </div>
        <div class="recentOrdersList flex">
          <div class="recentOrdersListItem flex">
            <span class="orderNumber">Order #1</span>
            <span class="dateAndTime">Date and Time</span>
            <span class="customerInfo">Customer info</span>
            <span class="payment">Payment</span>
            <span class="items">Items</span>
            <span class="driver">Driver</span>
          </div>
        </div>
      </carousel>
      <carousel
        class="sliderRecentOrders"
        :items="1"
        :nav="true"
        value="Accepted"
        v-if="currentTab === 'Accepted'"
      >
        <div class="recentOrdersList flex">
          <div class="recentOrdersListItem flex">
            <span class="orderNumber">Order No</span>
            <span class="dateAndTime">Customer</span>
            <span class="customerInfo">Supplier</span>
            <span class="payment">Location</span>
            <span class="items">Comment</span>
            <span class="driver"></span>
          </div>
        </div>
        <div class="recentOrdersList flex">
          <div class="recentOrdersListItem flex">
            <span class="orderNumber">Order No</span>
            <span class="dateAndTime">Customer</span>
            <span class="customerInfo">Supplier</span>
            <span class="payment">Location</span>
            <span class="items">Comment</span>
            <span class="driver"></span>
          </div>
        </div>
      </carousel>
      <carousel 
        class="sliderRecentOrders"
        :items="1"
        :nav="true"
        value="Declined"
        v-if="currentTab === 'Declined'"
      >
        <div class="recentOrdersList flex"> 
          <div class="recentOrdersListItem flex">
            <span class="orderNumber">Order No</span>
            <span class="dateAndTime">Customer</span>
            <span class="customerInfo">Supplier</span>
            <span class="payment">Location</span>
            <span class="items">Comment</span>
            <span class="driver"></span>
          </div>
        </div>
        <div class="recentOrdersList flex">
          <div class="recentOrdersListItem flex">
            <span class="orderNumber">Order No</span>
            <span class="dateAndTime">Customer</span>
            <span class="customerInfo">Supplier</span>
            <span class="payment">Location</span>
            <span class="items">Comment</span>
            <span class="driver"></span>
          </div>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Tabs from "vue-tabs-with-active-line";

export default {
  name: "Reviews",
  components: {
    carousel,
    Tabs
  },
  data: () => ({
    tabs: [
      { title: "New feedbacks", value: "NewFeedbacks" },
      { title: "Accepted", value: "Accepted" },
      { title: "Declined", value: "Declined" }
    ],
    currentTab: "NewFeedbacks"
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>


<style scoped>
.recentOrdersList > .recentOrdersListItem:first-child{
    font-weight: bold;
}
</style>

