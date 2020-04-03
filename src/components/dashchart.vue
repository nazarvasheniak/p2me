<template>
  <span>
    <div class="reportsRow flex">
      <h1>
        Reports
        <span>for</span>
      </h1>
      <vue-ctk-date-time-picker class="calendar" label="Select date range..." range
                                v-model="value"></vue-ctk-date-time-picker>
    </div>
    <div>
      <GChart class="googleChart" type="AreaChart" :options="chartOptions"  :data="chartData"/>
    </div>
  </span>
</template>
<script>
    import {GChart} from "vue-google-charts";
    import VueCtkDateTimePicker from "vue-ctk-date-time-picker";

    export default {
        name: "dashchart",
        components: {
            GChart,
            VueCtkDateTimePicker
        },
        data() {
            return {
                chartData: [
                    ["Year", "Expenses", "Profit"],
                    ["01/19", 11000, 11000],
                    ["02/19", 14150, 17200],
                    ["03/19", 11250, 14400],
                    ["04/19", 11500, 13300],
                    ["05/19", 11050, 21400],
                    ["06/19", 12000, 12500],
                    ["07/19", 16750, 17400],
                    ["08/19", 13750, 11400],
                    ["09/19", 21750, 21400],
                    ["10/19", 11350, 18400],
                    ["11/19", 11250, 11400],
                    ["12/19", 19750, 22400],
                ],
                value: null,
                chartOptions: {
                    resizeDebounce: 400
                }
            };
        },
      computed: {
        onChartReady() {
          return this.$store.getters.getOrderByDate
        }
      },
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
</style>


