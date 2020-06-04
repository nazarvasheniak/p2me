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

    <table style="width: 100%; border-collapse:separate; border-spacing: 10px 5px;">
      <thead>
        <tr style="height: 70px;">
          <td class="tdClassClient" style="width: 25%;">Clients name</td>
          <td class="tdClassClient" style="width: 20%;">Contacts</td>
          <td class="tdClassClient" style="width: 15%;">Orders</td>
          <td class="tdClassClient" style="width: 15%;">Comments</td>
          <td class="tdClassClient" style="width: 15%;">Date</td> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in clientList" :key="customer.id" v-on:click="seeClient(item.id)" style="height: 60px;">
          <td>
            <img src="../assets/driver.png" alt style="width: 40px;  margin-right: 10px;" >
            <span style="padding-top: 10px; font-family: AvenirNext; font-size: 20px;">{{customer.customer_name}}</span>
          </td>
          <td class="clientClass">{{customer.phone}} {{customer.email}}</td>
          <td class="clientClass">{{customer.total_orders}}</td>
          <td class="clientClass">{{customer.comments}}</td>
          <td class="clientClass">{{customer.date}}</td>
          <td class="clientsClass">
             <button class="removeButton">Remove</button>
          </td>

        </tr>  
      </tbody> 
    </table>

    <!-- <div class="recentOrdersContainerRow flex driversListCarouselContainer">
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
                            
                        </div>
                        <div class="driversListRowContent" v-for="customer in clientList" :key="customer.id" >
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
    </div> -->

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
    clientList: []
  }),
   
     methods: {
       loadClientList() {
          this.$store.dispatch("loadClientList").then(result => {
          this.clientList = result;
      });
       },
       seeClient() {
         this.$router.push(`/clientOrders/`);
       }
     },
     beforeMount() {
      this.loadClientList();
  }
  
};
</script>

<style>

.content {
  width: 100%;
}

.tdClassClient {
 font-family: AvenirNext;
 font-size: 18px;
 line-height: 25px;
 
}
.clientClass {
 font-family: AvenirNext;
 font-size: 16px;
 line-height: 22px;
  /* text-align: center!important;  */
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



 
