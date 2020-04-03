<template>
  <span class="earringMainBlockContainer">
    <div class="reportsRow flex">
      <h1>
        Earnings

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
  name: "earnings",
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
      value: null
    };
  },
  chartOptions: {
    resizeDebounce: 400
  }
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
  font-family: AvenirNext;
  font-size: 0.9em;
  color: #9b9b9b;
}
.reportsRow h1 {
  font-family: AvenirNext;
  font-size: 27px;
  line-height: 33px;
  /* identical to box height, or 137% */
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #4A4A4A;
}
.googleChart {
  width: 100%;
}
.calendar {
  margin: 0 25px;
  width: 65%;
}
.earringMainBlockContainer {
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(30, 30, 30, 0.12);
  width: 100%;
  padding: 30px;
  margin-bottom: 45px;
}

</style>


