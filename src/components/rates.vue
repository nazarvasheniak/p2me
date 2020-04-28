<template>
  <div class="notPaidContainer flex ratesMainContainerBlock">
    <h4>Rating</h4>
    <div class="notPaidContainerRow flex">
        <div class="driver-rating-container">
          <img src="../assets/star.png" alt>
          <img src="../assets/star.png" alt>
          <img src="../assets/star.png" alt>
          <img src="../assets/star.png" alt>
          <img src="../assets/starz.png" alt>
        </div>
    </div>
    <div class="notPaidContainerRow flex">
            <span>4</span> /
            <span>5</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "rates"
};
</script>

<style scoped>
.notPaidContainer {
  width: 100%;
  flex-flow: column nowrap;
  padding: 25px;
  border-radius: 3px;
  box-shadow: 0px 2px 10px #e5e5e585;
  background: #fff;
  justify-content: center;
  align-self: flex-start;
  margin-bottom: 20px;;
}
.notPaidContainer > h4 {
    font-size: 1.2em;
    font-family: AvenirNext;
    margin-bottom: 0px;
    text-align: center;
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
.approved-progress {
    width: 100%;
    background: #e5e5e5;
    border-radius: 15px;
    height: 10.9px;
    position: relative;
    overflow: hidden;
}
.approved-progress:after {
    content: " ";
    width: 10%;
    height: 100%;
    background: linear-gradient(206.57deg,#65c6dd,#1ca0c4);
    position: absolute;
    z-index: 4;
    left: 0;
}
.ratesMainContainerBlock {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.ratesMainContainerBlock .notPaidContainerRow {
  font-size: 40px;
  line-height: 33px;
  display: flex;
  align-items: center;
  letter-spacing: 0.6375px;
  color: #4A4A4A;
}
.driver-rating-container {
  margin: 19px 0px;
}
</style>


