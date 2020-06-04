<template>
    <div class="profileContainer flex">
        <div class="headerRow flex">
        <h1 style="color:#606060;">Supplier profile</h1>

        <div class="rightSight flex">
          <div class="goToFeedbacks" v-on:click="openFeedbacks">
            <h2 style="color:#606060;">Feedbacks</h2>
          </div>
        </div>
    </div>

        <div class="profileMainContainer flex">
        <div class="profileSubContainer flex">
            <supplierMainInfo :id="$route.params.id"/>
        </div>
        <div class="profileSubContainer flex">
           <earnings />
           <tripsCompleted />
           <tripsCanceled />
           <rates/>
        </div>
        </div>
    </div>    
</template>

<script>
import supplierMainInfo from "../components/supplierMainInfo.vue";
import earnings from "../components/earnings.vue";
import tripsCompleted from "../components/tripsCompleted.vue";
import tripsCanceled from "../components/tripsCanceled.vue";
import axios from "axios";
import rates from "../components/rates.vue";
import supplierOrderList from "../components/supplierOrderList.vue";

export default {
  name: "Supplier",
  components: {
    supplierMainInfo,
    earnings,
    tripsCompleted,
    tripsCanceled,
    rates,
    supplierOrderList
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response));
  },

  methods: {
    openFeedbacks(id) {
      this.$router.push(`/feedbacks/${id}`);
    }
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
  margin-left: 25px;
  justify-content: space-between;
  margin-bottom: 14px;
}
.headerRow h1 {
font-family: AvenirNext;
font-size: 32px;
line-height: 45px;
/* identical to box height, or 136% */
letter-spacing: 0.25831px;
mix-blend-mode: normal;
}


.goToFeedbacks h2 {
  margin: 0 35px;
  font-family: AvenirNext;
  font-size: 20px;
  line-height: 25px;
}
.goToOrders h2 {
  margin: 0 35px;
  font-family: AvenirNext;
  font-size: 20px;
  line-height: 25px;

}


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
