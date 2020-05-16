<template>
  <div class="notPaidContainer flex">
    <h4>Delivery adress</h4>
    <p> {{ order.delivery_adress }}</p>
    <p><small>2 km from center</small>
    <div class="notPaidContainerRow ">
        <img src="../assets/mapsvvv.png" alt="">
    </div>
    <div class="notPaidContainerRow ">
        <button>See on the map</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "maps",
  props: ['order']
};
</script>

<style scoped>
h4 {
  font-size: 24px;
  line-height: 33px;
  /* identical to box height, or 137% */
  letter-spacing: 0.172206px;
  color: #4A4A4A;
  margin-bottom: 8px;
}
p {
  font-size: 18px;
  line-height: 25px;
  /* identical to box height, or 139% */
  letter-spacing: 0.172206px;
  color: #4A4A4A;
  margin: 0px;
  margin-bottom: 8px;

}
p small {
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 137% */
  letter-spacing: 0.172206px;
  color: #9B9B9B;
}
button {
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 137% */
  letter-spacing: 0.172206px;
  color: #FFFFFF;
  background: radial-gradient(186.09px at 3.13% 3.13%, #FB5F68 0%, #EA84AF 100%);
  box-shadow: 0px 2px 15px #FCB3BB;
  border-radius: 24px;
  padding: 10px 35px;
  border-color: transparent;
  margin: 0px auto;
  display: block;
  transition: 0.7s;
}
button:hover {
  color: #FB5F68;
  background: none;
  border-color: #FB5F68;
}
img {
  width: 100%;
  display: block;
  margin: 35px 0px;
  height: auto;
}
</style>


