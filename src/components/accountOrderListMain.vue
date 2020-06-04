<template>
  <div class="ordersContainer flex driversListContainerMains supplierMainInfoOrderList">
    <div class="recentOrdersContainerRow flex driversListCarouselContainer">
      <div class="recentOrdersContainerRow flex">
        <carousel class="sliderRecentOrders" :items="1" :nav="true">
          <div class="driversListContainer">
            <div class="driversListRowHeader">
              <span>Order #</span>
              <span>Customer</span>
              <span>Supplier</span>
              <span>Driver</span>
              <span>Date & Time</span>
              <span>Payment</span>
              <span>Status</span>
              <span>Earned on delivery</span>
              <span>Earned on supplier</span>
            </div>
            <div
              class="driversListRowContent"
              v-for="item in items"
              :key="item.id"
              v-on:click="routeToOrder(item.id)">
              <div style="justify-content: left;">{{item.order_number}}</div> 
              <div style="justify-content: left;">{{item.customer_name}}</div>
              <div style="justify-content: left;">{{item.supplier_name}}</div>
              <div style="justify-content: left;">{{item.driver_name}}</div>
              <div style="justify-content: left;">{{item.date_time}}</div>
              <div style="justify-content: left;">
                 <span class="paymentStatus" v-show="item.payment_status === 'paid' && item.payment_method === 'card'">
                      <img src="../assets/icons/card_ok.png" alt="">
                    </span>
                    <span class="paymentStatus" v-show="item.payment_status === 'wait' && item.payment_method === 'card'">
                      <img src="../assets/icons/card_await.png" alt="">
                    </span>
                    <span class="paymentStatus" v-show="item.payment_status === 'not_paid' && item.payment_method === 'card'" >
                      <img src="../assets/icons/card_decline.png" alt="">
                    </span>
                    <span class="paymentStatus" v-show="item.payment_status === 'paid' && item.payment_method === 'cash'">
                      <img src="../assets/icons/cash_ok.png" alt="">
                    </span>
                    <span class="paymentStatus" v-show="item.payment_status === 'wait' && item.payment_method === 'cash'">
                      <img src="../assets/icons/cash_await.png" alt="">
                    </span>
                    <span class="paymentStatus" v-show="item.payment_status === 'not_paid' && item.payment_method === 'cash'">
                      <img src="../assets/icons/cash_decline.png" alt="">
                    </span>

                <!-- <img
                  style="width: 20px!important; height: 20px!important;"
                  src="../assets/icons/No.svg"
                  alt
                />
                <img
                  style="width: 20px!important; height: 20px!important;"
                  src="../assets/icons/dollarRed.svg"
                  alt
                /> -->
              </div>
              <div style="justify-content: left;">{{item.payment_status}}</div>
              <div style="justify-content: left;" class="text-center">{{item.earned_delivery}}</div>
              <div style="justify-content: left;" class="text-center">{{item.earned_supplier}}</div>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "accountOrderListMain",
  components: {
    carousel
  },
  data() {
    return {
      items: [],
      filter: {
        dateStart: null,
        dateStop: null,
        category: null,
        status: null
      }
    };
  },
  methods: {
    loadItems() {
      this.$store.dispatch("load_orders", this.filter).then(result => {
        this.items = result.order_list;
      });
    },
    routeToOrder(id) {
       this.$router.push(`/supplierOrderSingle/${id}`);
      // const routePath = "/supplierordersingle/" + id;
      // this.$router.push(routePath);
    }
  },
  beforeMount() {
    this.loadItems();
  }
};
</script>

<style >
.ordersContainer {
  overflow-x: hidden;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.recentOrdersListItem:last-child {
  border-bottom: none;
}

.driversListContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 1057px;
  height: 550px;
}
.driversListRowHeader {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
}
.driversListRowContent {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 19px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.driversListRowContent > div {
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.206648px;
  color: #4a4a4a;
}
.driversListRowHeader span {
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.232479px;
  color: #4a4a4a;
  display: block;

  height: auto;
}

.driversListRowContent strong {
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  letter-spacing: 0.232479px;
  color: #4a4a4a;
  padding-left: 19px;
}

.ordersContainer {
  padding: 25px;
  border-radius: 5px;
  -webkit-box-shadow: 0 0 15px 5px #e5e5e585;
  box-shadow: 0 0 15px 5px #e5e5e585;
  background: #fff;
}

.img {
}

.sliderRecentOrders {
  width: 100%;
  margin-top: 35px;
  background: transparent;
  box-shadow: none;
  border-radius: 1px;
}

.driversListRowContent div:nth-child(7) {
  justify-content: flex-end;
}
.supplierMainInfoOrderList .owl-theme .owl-nav {
  width: 100% !important;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 0px;
  height: 28px;
}
.supplierMainInfoOrderList .owl-theme .owl-dots {
  width: 100% !important;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.driversListCarouselContainer .content {
  overflow: hidden !important;
}
.supplierMainInfoOrderList {
  margin: 45px 0px;
}
.supplierMainInfoOrderList .driversListRowContent > div {
  width: 11.5% !important;
}
.supplierMainInfoOrderList .driversListRowHeader > span {
  width: 11.5% !important;
}
.totalsAccountDivInfos {
  font-size: 16px;
  line-height: 33px;
  /* or 206% */
  display: block !important;
  align-items: center;
  color: #4a4a4a;
  font-weight: bold;
  text-align: center;
}
.totalsAccountRowSums {
  border-bottom: none !important;
  align-items: center;
  flex-flow: row nowrap;
}
.totalsAccountRowSums div:nth-child(8) {
  font-size: 24px;
  line-height: 33px;
  /* identical to box height, or 137% */
  color: #4a4a4a;
}
.totalsAccountRowSums div:nth-child(9) {
  font-size: 24px;
  line-height: 33px;
  /* identical to box height, or 137% */
  color: #4a4a4a;
}
</style> 
