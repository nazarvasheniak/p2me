<template>
  <div class="recentOrdersContainer flex">
    <div class="recentOrdersContainerRow flex">
      <h2>Recent orders</h2>
      <button class="seeAll">see all</button>
    </div>
    <div class="recentOrdersContainerRow flex">
      <carousel class="sliderRecentOrders" :items="1" :nav="true">
        <div class="recentOrdersList flex">
          <div class="recentOrdersListItem flex">
              <span class="orderNumber ">Order №</span>
              <span class="operator">Operator</span>
              <span class="location">Location</span>
              <span class="distance">Distance</span>
              <span class="startDate">Start date</span>
              <span class="status">Status</span>
          </div>
          <router-link :to="{name: 'order', params: {id: order.id}}"
                       class="recentOrdersListItem flex"
                       v-for="order in orders" :key="orders.id">
            <span class="orderNumber">{{order.order_number}}</span>
            <span class="operator">{{order.operator}}</span>
            <span class="location">{{order.location}}</span>
            <span class="distance">{{order.distance}}</span>
            <span class="startDate">{{order.start_date}}</span>
            <span class="status">{{order.status}}</span>
          </router-link>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "recentOrders",
  components: {
    carousel,
  },
  computed: {
    orders() {
      return this.$store.getters.getOrderList;
    }
  },
};
</script>

<style>
.recentOrdersContainer {
  width: 100%;
  margin: 50px 0;
  flex-flow: column nowrap;
  justify-content: flex-start;
  box-shadow: 0 0 15px 5px #e5e5e585;
  padding: 20px;
  align-items: flex-start;
  border-radius: 3px
}
.recentOrdersContainerRow {
  width: 100%;
  justify-content: space-between;
  align-content: flex-start;
  /* background: #fff; */
  align-items: flex-end;
}
.recentOrdersContainerRow h4 {
  font-size: 1.2em;
  font-weight: normal;
}
.seeAll {
  cursor: pointer;
  border: none;
  font-size: 0.8em;
  background: linear-gradient(#e5a8d6, #602693);
  -webkit-background-clip: text;
  outline: none;
  -webkit-text-fill-color: transparent;
  transition: 0.7s;
}
.seeAll:hover {
  transform: scale(1.05);
}
.sliderRecentOrders {
  width: 100%;
  margin-top: 35px;
  background: #fff;
  box-shadow: 0 0 15px 5px #e5e5e585;
  border-radius: 5px;
}
.recentOrdersList {
  width: 100%;
  flex-flow: column nowrap;
}
.recentOrdersList > .recentOrdersListItem:first-child {
  cursor: move;
}
.recentOrdersListItem {
  width: 100%;
  border-bottom: 2px solid #777777;
  padding: 15px;
  min-height: 80px;
  justify-content: space-between;
  align-items: stretch;
  transition: 0.7s;
  color: inherit;
  text-decoration: none;
}
.recentOrdersListItem:hover {
  background: linear-gradient(to right, #9a77fb83 0%, #33c8fe75 100%);
}
.recentOrdersListItem:first-child span {
  font-size: 0.8em;
}
.recentOrdersListItem:first-child:hover {
  background: transparent;
}
.recentOrdersListItem > span {
  padding: 2.5px;
  font-size: 0.8em;
}
.recentOrdersListItem > .orderNumber {
  width: 7%;
}
.recentOrdersListItem > .operator {
  width: 10%;
}
.recentOrdersListItem > .location {
  width: 20%;
  display: flex;
  flex-flow: column nowrap;
}
.recentOrdersListItem > .distance {
  width: 10%;
}
.recentOrdersListItem > .startDate {
  width: 20%;
  display: flex;
  flex-flow: column nowrap;
}
.recentOrdersListItem > .status {
  width: 10%;
}
</style>


