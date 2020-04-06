<template>
  <div class="dashboardContainer" style="width: 100%;">
    <div class="dashboardContainerRow flex">
      <div class="dashboardContainerSubRow flex">
        <div class="chartContainer">
          <accountApplications/>
        </div>
      </div>
      <div class="dashboardContainerSubRow flex">
        <approved/>
        <denied/>
      </div>
    </div>
    <div class="dashboardContainerRow"></div>
    <accountOrderList/>
  </div>
</template>

<script>
import accountApplications from "../components/accountApplications.vue";
import approved from "../components/approved.vue";
import denied from "../components/denied.vue";
import accountOrderList from "../components/accountOrderList.vue";
import axios from "axios";

export default {
  name: "account",
  components: {
    accountApplications,
    approved,
    denied,
    accountOrderList
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response));
  }
};
</script>

<style>
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
.accountApplicationsTabs .tabs__item {
  font-size: 14px;
  line-height: 27px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #56CCF2;
  background: none!important;
  border-color: transparent;
  padding: 5px 30px;
  margin-bottom: 19px;
}
.accountApplicationsTabs .tabs__item_active, .accountApplicationsTabs .tabs__item:hover { 
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
</style>
