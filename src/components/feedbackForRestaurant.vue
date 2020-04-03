<template>
  <div class="ordersContainer flex driversListContainerMains supplierMainInfoOrderList">
        <div class="recentOrdersContainerRow flex driversListCarouselContainer">
            <div class="recentOrdersContainerRow ">
                <h3>Feedback for restaurant:</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. Aenean non lorem pellentesque quam molestie finibus a non nunc. Donec pharetra nulla sit amet justo ultrices lacinia.</p>
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
    /* identical to box height, or 137% */
    letter-spacing: 0.25831px;
    color: #4A4A4A;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 0.215258px;
    color: #9B9B9B;
  }
  .ordersContainer {
    overflow-x: hidden;
  }
</style> 
