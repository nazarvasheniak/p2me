<template>
  	<div class="dashboardContainer">
    	<div class="dashboardContainerRow flex">
      		<div class="dashboardContainerSubRow flex">
        		<div class="chartContainer">
          			<applications />
        		</div>
      		</div>

      		<div class="dashboardContainerSubRow flex">
        		<approved v-bind:approved="driversApproved" v-bind:total="totalDrivers" />
        		<denied v-bind:denied="driversDenied" v-bind:total="totalDrivers" />
      		</div>
    	</div>

    	<div class="dashboardContainerRow"></div>

    	<requestList list="requests" />
 	</div>
</template>

<script>
import applications from "../components/applications.vue";
import approved from "../components/approved.vue";
import denied from "../components/denied.vue";
import requestList from "../components/requestList.vue";
import axios from "axios";

export default {
  	name: "Request",
  	components: {
		applications,
		approved,
		denied,
		requestList
	},
  	data: () => ({
		totalDrivers: 0,
		driversApproved: 0,
		driversDenied: 0,
		driversByDate: [],
		driversList: []
  	}),
  	mounted() {
    	axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
			.then(response => (this.info = response));
			  
    	axios.get("http://139.60.163.142:9000.superadmin/driver_status_update")
			  .then(response => (this.requests = response.data));
			  
		this.$store.dispatch("loadRequestsData")
			.then(result => {
				this.totalDrivers = result.total_drivers;
				this.driversApproved = result.drivers_approved;
				this.driversDenied = result.drivers_denied;
				this.driversByDate = result.drivers_by_date;
				this.driversList = result.driver_list;
			});
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
