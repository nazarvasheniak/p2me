<template>
  <div class="orderDetails flex">
    <div class="orderDetailsRow flex">
      <h2>Details:</h2>
    </div>
    <div class="orderDetailsRow flex">
      <p>Payment method:</p>
      <p>{{ order.payment_method }}</p>
    </div>
    <div class="orderDetailsRow flex">
      <p>Comment:</p>
      <p>{{ order.comment }}</p>
    </div>
    <div class="orderDetailsRow flex">
      <p>Waiting time:</p>
      <p>{{ order.waiting_time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderDetails",
  computed: {
    order() {
      return this.$store.getters.order;
    }
  }
};
</script>

<style scoped>
.orderDetails {
  flex-flow: column nowrap;
  width: 100%;
}

.orderDetailsRow {
  padding: 5px 10px;
  width: 100%;
  font-size: 0.8em;
  flex-flow: row nowrap;
  justify-content: space-between;
  transition: 0.7s;
}

.orderDetailsRow:hover {
  background: #f7f7f7;
}

.orderDetailsRow > p:nth-child(2) {
  color: #9b9b9b;
}

.orderDetailsRow {
}
</style>

