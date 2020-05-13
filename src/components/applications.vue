<template>
  <span>
    <div class="reportsRow flex">
      <h1>
        Number of applications
        <span>for</span>
      </h1>
       <!-- <vue-ctk-date-time-picker class="calendar" label="Select date range..." range v-model="value"></vue-ctk-date-time-picker>  -->
       <div class="headerRow flex" style="padding-right: 26px; box-sizing: border-box; ">
         <button class="DateView" style="border-radius: 44px; width: 158px; border: 1px solid #4A4A4A;">
          <p style=" margin: 0px, font-size: 20px, text-align: center, line-height: 27px;">12.07-19.07
           <span class="menu-icon">
             <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 0.15C16.3 -0.05 16 -0.05 15.8 0.15L8.3 7.85L0.8 0.15C0.6 -0.05 0.3 -0.05 0.1 0.15C3.7998e-07 0.25 0 0.349999 0 0.449999C0 0.549999 3.7998e-07 0.65 0.1 0.75L7.9 8.75C8.1 8.95 8.4 8.95 8.6 8.75L16.4 0.75C16.6 0.65 16.6 0.35 16.5 0.15Z" fill="#535353"/>
             </svg>
           </span>
          </p>
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
</style>


