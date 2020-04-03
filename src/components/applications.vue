<template>
  <span>
    <div class="reportsRow flex">
      <h1>
        Number of applications
        <span>for</span>
      </h1>
      <vue-ctk-date-time-picker class="calendar" label="Select date range..." range v-model="value"></vue-ctk-date-time-picker>
    </div>
    <div>
      <GChart class="googleChart" type="AreaChart" :options="chartOptions" :data="chartData"/>
    </div>
  </span>
</template>
<script>
import { GChart } from "vue-google-charts";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";

export default {
  name: "applications",
  components: {
    GChart,
    VueCtkDateTimePicker
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
      chartOptions: {
        resizeDebounce: 400
      }
    };
  },

  // props: {
  //   resizeDebounce: 400
  // }
};
</script>

<style scoped>
@import "./vue-ctk-date-time-picker.min.css";
.reportsRow {
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
</style>


