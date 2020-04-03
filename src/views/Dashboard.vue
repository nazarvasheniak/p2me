<template>
  <div class="dashboardContainer">
    <div class="dashboardContainerRow flex">
      <div class="dashboardContainerSubRow flex">
        <div class="chartContainer">
          <dashchart/>
        </div>
      </div>
      <div class="dashboardContainerSubRow flex">
        <notpaid/>
        <refuses/>
      </div>
    </div>
    <div class="dashboardContainerRow"></div>
    <recentOrders/>
  </div>
</template>

<script>
import dashchart from "../components/dashchart.vue";
import notpaid from "../components/notpaid.vue";
import refuses from "../components/refuses.vue";
import recentOrders from "../components/recentOrders.vue";


export default {
  name: "Dashboard",
  components: {
    dashchart,
    notpaid,
    refuses,
    recentOrders
  },
  created() {
    this.$store.dispatch('load_board')
  },
  computed: {
    recent_order_id: {
        get() {
          return this.$store.getters.resent_order_id;
        },
        // set() {
        //   return this.$store.dispatch('')
        // }
    }
  }
};
</script>

<style scoped>
.dashboardContainer {
  width: 100%;
}
.dashboardContainerRow {
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
}
.dashboardContainerRow {
  width: 100%;
  align-items: stretch;
  /* border: 1px solid #000; */
}
.dashboardContainerSubRow {
  flex-flow: column nowrap;
}
.dashboardContainerRow > .dashboardContainerSubRow:nth-child(1) {
  width: 75%;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 0 15px 5px #e5e5e585;
  background: #fff;
}
.dashboardContainerRow > .dashboardContainerSubRow:nth-child(2) {
  width: 23%;
}
</style>
