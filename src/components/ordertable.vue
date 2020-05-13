<template>
  <div class="ordertable flex">
    <div class="ordertableHeading">Order:</div>
    <div class="ordertableItems flex">
      <div class="ordertableItemsRow flex" v-for="item in order.item_in_order" :key="item.id">
        <div class="itemName">{{ item.name }}</div>
        <div class="itemPrice">{{ item.price }}</div>
      </div>
    </div>
    <div class="ordertableItemsPrice flex">
      <span>Total price:</span>
      <span class="totalPrice">{{ order.total_price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ordertable",
  computed: {
    order() {
      return this.$store.getters.order;
    }
  },
};
</script>

<style scoped>
.ordertable {
  flex-flow: row nowrap;
  width: 100%;
    justify-content: space-between;
}
.ordertableHeading {
  justify-content: center;
  flex-flow: column nowrap;
  font-size: 1em;
  font-weight: 400;
  width: 10%;
  /* border: 1px solid #0000001c; */
}
.ordertableItems {
  flex-flow: column nowrap;
  font-size: 0.8em;
  width: 70%;
  /* border: 1px solid #0000001c; */
}
.itemName {
  width: 80%;
  color: #9b9b9b;
  font-weight: 400;
  font-size: 0.9em;
}
.itemPrice {
  width: 20%;
  font-size: 0.9em;
}
.ordertableItemsPrice {
  flex-flow: column nowrap;
  justify-content: center;
  font-size: 0.8em;
  width: 15%;
  padding-left: 5px;
  border-left: 1px solid #0000001c;
}
.ordertableItemsRow {
  width: 100%;
  margin: 5px 0;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.totalPrice {
  color: #fb888b;
  font-size: 1.2em;
}
</style>

