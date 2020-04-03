<template>
  <div class="refusesContainer flex">
    <h4>Refuses</h4>
    <div class="refusesContainerrow flex">
      <img src="../assets/refArrow.png" alt>
      <p>
        <span>{{board.order_refuses}}</span>
        /
        <span>{{board.total_order}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "resufes",
  computed: {
    board() {
      return this.$store.getters.getBoard
    }
  }
};
</script>

<style scoped>
.refusesContainer {
  width: 100%;
  background: linear-gradient(to right, #fb5c6b 0%, #ff9ea1 100%);
  flex-flow: column nowrap;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 0 15px 5px #e5e5e585;
  justify-content: center;
  align-self: flex-start;
}
.refusesContainer > h4 {
  font-size: 1.2em;
  margin-bottom: 15px;
  color: #fff;
}
.refusesContainerrow{
    justify-content: flex-start;
}
.refusesContainerrow >{
    font-size: 1em;
}
.refusesContainerrow img{
    width: 45px;
    height: 45px;
    object-fit: contain;
    margin-right: 15px;
}
.refusesContainerrow > p{
    color: #fff;
}
.refusesContainerrow > p > span:nth-child(1){
    font-weight: 900;
}
.refusesContainerrow > p > span:nth-child(2){
    font-size: .75em;
}
.refusesContainerrow {
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center
}
</style>

