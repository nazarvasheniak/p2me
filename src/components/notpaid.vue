<template>
  <div class="notPaidContainer flex">
    <h4>Not paid</h4>
    <div class="notPaidContainerRow flex">
        <img src="../assets/usericon.png" alt="">
        <p>
            Clients:
            <span>{{board.order_picked_up}}</span>
            /
            <span>{{board.total_order}}</span>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "notpaid",
  computed: {
    board() {
      return this.$store.getters.getBoard
    }
  }
};
</script>

<style scoded>
.notPaidContainer {
  width: 100%;
  flex-flow: column nowrap;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 0 15px 5px #e5e5e585;
  background: #fff;
  justify-content: center;
  align-self: flex-start;
  margin-bottom: 20px;;
}
.notPaidContainer > h4{
    font-size: 1.2em;
    margin-bottom: 15px
}
.notPaidContainerRow >{
    font-size: 1em;
}
.notPaidContainerRow img{
    width: 45px;
    height: 45px;
    object-fit: contain;
    margin-right: 15px;
}
.notPaidContainerRow > p > span:nth-child(2){
    font-size: .75em;
    color: #9b9b9b;
}
.notPaidContainerRow {
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center
}
</style>


