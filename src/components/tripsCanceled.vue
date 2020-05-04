<template>
  <div class="refusesContainer flex">
    <h4>Canceled trips</h4>
    <div class="refusesContainerrow flex">
 
         <span class="big-number-denied">{{driver.canceled_trips}}</span> / <span>{{driver.total_trips}}</span>
    </div>
</div>
</template>

<script>
// export default {
//   name: "tripsCanceled"
// };
export default {
  name: "tripsCanceled",
  data: () => ({
    driver: null
  }),
  mounted() {
    const id = this.$attrs.id;
    this.$store.dispatch("getDriver", id).then(result => {
      this.driver = result;
    });
  },
  methods: {
    // getDriver() {
    //   debugger;
    //   this.$store.dispatch("getDriver", this.id).then(result => {
    //     this.driver = result.driver;
    //   });
    // }
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
  margin-bottom: 45px;
}
.refusesContainer > h4 {
  font-family: AvenirNext;
  font-size: 1.2em;
  margin-bottom: 15px;
  color: #fff;
  text-align: center;
}
.refusesContainerrow{
    justify-content: flex-start;
}
.refusesContainerrow {
    justify-content: center!important;
    line-height: 66px;
    /* or 165% */
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.6375px;
    color: #FFFFFF;
    font-size: 30px;
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
.recentOrdersContainerRow h4 {

	font-weight: 400
}
.big-number-denied {
  font-size: 49px;
}
</style>

