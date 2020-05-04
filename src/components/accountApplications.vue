<template>
  <span>
    <div class="reportsRow flex">
      <h1>
        Number of applications
        <span>for</span>
      </h1>
      <vue-ctk-date-time-picker class="calendar" label="Select date range..." range v-model="value"></vue-ctk-date-time-picker>
    </div>
    <div class="accountApplicationsTabs">
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
          <!-- </tabs> -->
        <div v-if="currentTab === 'All suppliers'">
             <GChart class="googleChart" type="AreaChart" :options="chartOptions" :data="chartData"/>
        </div>
        <div v-if="currentTab === 'Restaurants'">
            1
        </div>
        <div v-if="currentTab === 'Shopping'">
          2
        </div>
        <div v-if="currentTab === 'Markets'">
          3
        </div>
        <div v-if="currentTab === 'Pharmacy'">
          4
        </div>
        <div v-if="currentTab === 'Courier'">
          5
        </div>
        <div v-if="currentTab === 'Taxi'">
          6
        </div>
        <div v-if="currentTab === 'Buy to me'">
          7
        </div>
     
    </div>
     
  </span>
</template>
<script>
import { GChart } from "vue-google-charts";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import carousel from "vue-owl-carousel";
import Tabs from "vue-tabs-with-active-line";

export default {
  name: "accountApplications",
  components: {
    GChart,
    VueCtkDateTimePicker,
    carousel,
    Tabs
  },
  data() {
    return {
      chartData: [
        ["Year", "Expenses", "Profit"],
        ["01/19", 11000, 11000],
        ["02/19", 11150, 11200],
        ["03/19", 11250, 11400],
        ["04/19", 11500, 11300],
        ["05/19", 11750, 11400],
        ["06/19", 12000, 12500]
      ],
      value: null,
      tabs: [
      { title: "All suppliers", value: "All suppliers"},
      { title: "Restaurants", value: "Restaurants" },
      { title: "Shopping", value: "Shopping" },
      { title: "Markets", value: "Markets" },
      { title: "Pharmacy", value: "Pharmacy" },
      { title: "Courier", value: "Courier" },
      { title: "Taxi", value: "Taxi" },
      { title: "Buy to me", value: "Buy to me" }
    ],
      currentTab: "All suppliers"
    };
  },
  chartOptions: {
    resizeDebounce: 400
  },
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
  // props: {
  //   resizeDebounce: 400
  // }
};
</script>

<style scoped>
@import "./vue-ctk-date-time-picker.min.css";
.reportsRow {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 50px;
}
.reportsRow h1 span {
  font-size: 0.9em;
  color: #9b9b9b;
}
.reportsRow h1 {
  font-size: 1.8em;
}
.googleChart {
  width: 100%;
  
}
.calendar {
  margin: 0 25px;
  width: 65%;
}
.reportsRow h1 {
    width: 100%;
}
.tabs__item {
    font-size: 10px;
    line-height: 21px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    letter-spacing: normal;
    color: #56CCF2;
    background: none!important;
    border-color: transparent;
    padding: 5px 100px;
}
</style>


