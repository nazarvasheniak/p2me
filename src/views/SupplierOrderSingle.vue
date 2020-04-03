<template>
    <div class="profileContainer flex">
        <div class="headerRow flex">
        <h1>Order #111111</h1>
        <div class="flex">
        </div>
        </div>
        <div class="profileMainContainer flex">
        <div class="profileSubContainer flex">
            <supplierOrderSingleInfo/>
            <feedbackForRestaurant/>
        </div>
        <div class="profileSubContainer flex">
           <maps/>
           <rates/>
        </div>
        </div>
    </div>    
</template>

<script>
import supplierOrderSingleInfo from "../components/supplierOrderSingleInfo.vue";
import maps from "../components/maps.vue";
import axios from "axios";
import rates from "../components/rates.vue";
import feedbackForRestaurant from "../components/feedbackForRestaurant.vue";

export default {
  name: "SupplierOrderSingle",
  components: {
    supplierOrderSingleInfo,
    maps,
    rates,
    feedbackForRestaurant
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response));
  }
};
</script>

<style scoped>
.profileContainer {
  flex-flow: column nowrap;
  width: 100%;
  margin-bottom: 25px;
}
.profileMainContainer > .profileSubContainer:nth-child(1) {
  width: 60%;
}
.profileMainContainer > .profileSubContainer:nth-child(2) {
  width: 35%;
  flex-flow: column nowrap;
  background: transparent;
  box-shadow: none;
}
.headerRow {
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  justify-content: space-between;
  margin-bottom: 24px;
}
.headerRow h1 {
  color:#4A4A4A;
  margin: 0;
  font-size: 36px;
}
/* .headerRow h2 {
  margin: 0 15px;
  color: #fff;
  font-size: 0.8em;
} */
.profileMainContainer {
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: stretch;
}

.profileSubContainer {
  width: 100%;
  border-radius: 3px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  /* padding: 20px 25px; */
}
.contentContainer {
  margin-top: -89px;
}
@media only screen and (max-width: 1024px) {
  .profileMainContainer {
    flex-flow: column nowrap;
    width: 100%;
  }
  .profileMainContainer > .profileSubContainer:nth-child(1) {
    width: 100%;
  }
  .profileMainContainer > .profileSubContainer:nth-child(2) {
    width: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }
  .socialMainContainer {
    margin-top: 0 !important;
  }
  .contactsContainer,
  .socialMainContainer {
    width: 45% !important;
  }
  .editbleInput {
    width: 100%;
  }
  .bannersAndSalesSubRow {
    flex-flow: column nowrap;
  }
  .bannersAndSalesSubRowItem {
    width: 100%;
  }
  .bannersAndSalesSubRowItemAdd {
    height: auto;
  }
  .legalInfoContainerColumns {
    flex-flow: column nowrap;
  }
}
</style>
