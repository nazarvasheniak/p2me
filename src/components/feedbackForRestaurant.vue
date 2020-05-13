<template>
  <div class="ordersContainer flex driversListContainerMains supplierMainInfoOrderList">
        <div class="recentOrdersContainerRow flex driversListCarouselContainer">
            <div class="recentOrdersContainerRow ">
                <h3>Feedback for restaurant:</h3>
                <p> { { order.feedback } } </p>
            </div>
        </div>   
    </div>

</template>

<script>


export default {
  name: "feedbackForRestaurant" 
};
</script>

<style scoped>
  h3 {
    font-size: 24px;
    line-height: 33px;
    font-family: AvenirNext;
    letter-spacing: 0.25831px;
    color: #4A4A4A;
    font-weight: bold;
    padding-left: 34px;
    padding-top: 28px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-family: AvenirNext;
    letter-spacing: 0.215258px;
    color: #9B9B9B;
    padding-left: 34px;
    padding-top: 15px;
    padding-right: 25px;
  }
  .ordersContainer {
    overflow-x: hidden;
    height: 202px;
  }
</style> 
