<template>
  <span>
    <div class="reportsRow flex">
      <h1 style="width: 650px;">
        Number of applications
        <span>for</span>
      </h1>
       <!-- <vue-ctk-date-time-picker class="calendar" label="Select date range..." range v-model="value"></vue-ctk-date-time-picker>  -->
       <div class="headerRow1 flex">
         <button class="DateView1">
           <span class="datePicker">
             12.07-19.07
           </span>  
         </button>  
        </div>  
    </div>
     
     <div>
      <GChart class="googleChart" type="AreaChart" :options="chartOptions" :data="chartData"/>
    </div> 
  </span>
</template>
<script>
import { GChart } from "vue-google-charts";
// import VueCtkDateTimePicker from "vue-ctk-date-time-picker";

export default {
  name: "applications",
  components: {
    GChart,
    // VueCtkDateTimePicker
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
  margin-left: 34px;
  width: 657px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
}
.reportsRow h1 span {
  font-size: 0.9em;
  color: #9b9b9b;
  font-family: 'Avenir_Next';
}
.reportsRow h1 {
  font-size: 32px;
  line-height: 44px;
  font-family: 'Avenir_Next';
}
.googleChart {
  width: 100%;
  margin-left: 0px;
}
.calendar {
  margin: 0 25px;
  width: 65%;
}
.reportsRow h1 {
    width: 100%;
}

.headerRow1 {
  padding-right: 26px;
  height: 68px;
  padding-top: 8px;
  
}

.DateView1 {
 border-radius: 24px;
 width: 200px;
 height: 42px; 
 border: 1px solid rgba(0, 0, 0, 0.2);
}

.datepicker {
  margin-top: 5px;
   margin-bottom: 0; 
   font-size: 15px;
    text-align: center;
}
</style>


