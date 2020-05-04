<template>
  <div class="ordersContainer flex driversListContainerMains">

    <div class="recentOrdersContainerRow flex driversMainNavigationTabs">
        <h1>
          Clients
        </h1>

        <span class="clientsEdit" style="margin-top: 32px; margin-right: 35px;" >
          Edit
          </span>
    </div>
    <div class="recentOrdersContainerRow flex driversListCarouselContainer">
        <div class="content">
            <div class="recentOrdersContainerRow flex supplierClientsListBlock">
                <carousel
                    class="sliderRecentOrders"
                    :items="1"
                    :nav="true">
                    <div class="driversListContainer">
                        <div class="driversListRowHeader">
                            <span>Client name</span>
                            <span>Contacts</span>
                            <span>Orders</span>
                            <span>Comments</span>
                            <span>Date</span>
                            <!-- <span>    </span> -->
                        </div>
                        <div class="driversListRowContent" v-for="customer in clientList" :key="customer.id" 
                        v-on:click="" >
                            <div>
                            <img src="../assets/driver.png" alt >
                            <strong>{{customer.customer_name}}</strong>
                            </div>
                            <div class="suplliersClientsContactsBlock">
                                <p>{{customer.phone}}</p>
                                <p>{{customer.email}}</p>
                            </div>
                            <div>{{customer.total_orders}}</div>
                            <div>{{customer.comments}}</div>
                            <div>{{customer.date}}</div>
                            <div>
                            <button>Remove</button>
                            </div>
                        </div>
                        
                    </div>
                </carousel>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
//  import Tabs from "vue-tabs-with-active-line";

export default {
  name: "Clients",
  components: {
    carousel
  }, 
  data: () => ({
    // tabs: [
    //   { title: "Online", value: "online", class: "dasdascsasdasdasda" },
    //   { title: "Offline", value: "offline" },
    //   { title: "Removed", value: "removed" }
    // ],
  //   currentTab: "online",
  // driversList: []
  
     methods: {
       loadClientList() {
          this.$store.dispatch("loadClientList", this.currentTab).then(result => {
          this.clientList = result.client_list;
      });
       }
     },
     beforeMount() {
      this.loadClientsList();
  }
  }),
};
</script>

<style>

.content {
  width: 100%;
}


.driversMainNavigationTabs h1 {
    margin-left: 20px;
    margin-top: 10px;
}

.supplierClientsListBlock .driversListRowContent > div {
  width: 26.3%!important;
  width: 202px;
  height: 50px;
}
.supplierClientsListBlock .driversListRowHeader > span {
    width: 26.3%!important;  
   
}
.supplierClientsListBlock .driversListRowContent > div:last-child {
  justify-content: center;
  
}
.suplliersClientsContactsBlock {
  display: flex;
  flex-flow: column nowrap;
  align-items: center!important;
}
.suplliersClientsContactsBlock p {
  margin: 0px;
}
</style>



 
