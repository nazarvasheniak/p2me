<template>
  <div class="profileContainer flex" v-if="order">
    <div class="headerRow flex">
      <h1>Order № {{ order.order_number }}</h1>
      <div class="flex"></div>
    </div>
    <div class="profileMainContainer flex">
      <div class="profileSubContainer flex">
        <supplierOrderSingleInfo v-bind:order="order" />
        <feedbackForRestaurant v-bind:order="order" />
      </div>
      <div class="profileSubContainer flex">
        <maps v-bind:order="order" />
        <rates v-bind:order="order"/>
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
  data() {
    return {
      order: null,
      showModal: false
    };
  },
  created() {
    this.$store.dispatch("order");
    localStorage.setItem("orderId", JSON.stringify(this.$route.params.id));
  },

  methods: {
    loadItem() {
      this.$store.dispatch("order").then(result => {
        console.log(result);
        this.order = result;
      });
    },

    accept() {
      this.$router.back();
      // Метод для изменения статуса PUT
    },

    decline() {
      this.$router.back();
    }
  },

  beforeMount() {
    this.loadItem();
  },
  destroyed() {
    localStorage.removeItem("orderId");
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
  font-family: AvenirNext;
  font-size: 36px;
  line-height: 49px;
  letter-spacing: 0.25831px;
  color: #4a4a4a;
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
