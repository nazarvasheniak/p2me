<template>
  <div class="order flex">
    <h1>Order № {{ order.order_number }}</h1>
    <div class="primaryOrderSubContainer flex">
      <div class="primaryOrderContainer flex">
        <div class="primaryOrderContainerRow flex">
          <h2>
            Customer -
            <span>{{ order.customer }}</span>
          </h2>

          <a href="tel:3809888888">
            <img src="../assets/phone.png">
            {{ order.phone }}</a>
        </div>
        <div class="primaryOrderContainerRow flex">
          <ordertable/>
        </div>
        <div class="primaryOrderContainerRow flex">
          <orderDetails/>
        </div>
        <div class="primaryOrderContainerRow flex">
          <button class="decline" @click.prevent="showModal = !showModal">Decline</button>
          <button class="accept" @click.prevent="accept">Accept</button>
        </div>
      </div>
      <div class="secondaryOrderContainer flex">
        <div class="secondaryOrderContainerRow">
          <h3>Delivery adress</h3>
        </div>
        <div class="secondaryOrderContainerRow">
          <p class="adress">{{ order.delivery_adress }}</p>
        </div>
        <div class="secondaryOrderContainerRow">
          <p class="kmaway">{{ order.distance }} km</p>
        </div>
        <div class="secondaryOrderContainerRow">
          <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d51870.74434218033!2d46.66693211913999!3d24.729991214478483!4m3!1f0!21f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1547436881296"
                  width="312%"
                  height="312"
                  style="border:0"
                  allowfullscreen
          ></iframe>
        </div>
        <div class="secondaryOrderContainerRow">
          <button class="viewMap">See on the map</button>
        </div>
      </div>
    </div>
    <app-modal-order v-if="showModal" @declineStatus="decline=$event"></app-modal-order>
  </div>
</template>

<script>
  import ordertable from "../components/ordertable.vue";
  import orderDetails from "../components/orderDetails.vue";
  import modalOrder from  '../components/modalOrder'

  export default {
    name: "Order",
    components: {
      ordertable,
      orderDetails,
      appModalOrder: modalOrder
    },
    data() {
      return {
        showModal: false
      }
    },
    computed: {
      order() {
        return this.$store.getters.order;
      }
    },
    created() {
      this.$store.dispatch('order');
      localStorage.setItem('orderId', JSON.stringify(this.$route.params.id));
    },
    methods: {
      accept() {
        this.$router.back();
        // Метод для изменения статуса PUT
      },
      decline() {
        this.$router.back();
      }
    },
    destroyed() {
      localStorage.removeItem('orderId');
    }
  };
</script>

<style scoped>
  .order h1 {
    color: #535353;
    margin: -10px 0 10px;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.25831px;
  }

  .order {
    position: relative;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    flex-flow: column nowrap;
  }

  .primaryOrderSubContainer {
    width: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
  }

  .primaryOrderContainer {
    width: 100%;
  }

  .primaryOrderContainerRow {
    width: 100%;
    margin: 15px 0;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .primaryOrderContainerRow:last-child {
    justify-content: center;
  }

  .primaryOrderContainerRow a {
    color: inherit;
    text-decoration: none;
    transition: 0.7s;
    border-bottom: 1px solid transparent;
  }

  .primaryOrderContainerRow a:hover {
    border-bottom: 1px solid #9b9b9b;
  }

  .orderNames {
    color: #9b9b9b;
    color: 0.8em;
  }

  .primaryOrderContainer {
    width: 60%;
    background: #fff;
    padding: 25px;
    flex-flow: column nowrap;

    border-radius: 5px;
    box-shadow: 0 0 15px 5px #e5e5e585;
  }

  .secondaryOrderContainer {
    width: 35%;
    background: #fff;
    padding: 25px;
    border-radius: 5px;
    flex-flow: column nowrap;
    box-shadow: 0 0 15px 5px #e5e5e585;
  }

  .decline,
  .accept {
    margin: 5px 25px;
  }

  .decline,
  .accept:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
    border-radius: 24px;
    display: block;
    width: 108px;
    height: 48px;
    text-align: center;
    line-height: 43px;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.172206px;
    transition: 0.7s;
    color: #fff;
    border: 2px solid #f56c81;
    background-color: #f56c81;
    cursor: pointer;
    outline: none;
  }

  .accept,
  .decline:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
    border-radius: 24px;
    display: block;
    width: 108px;
    height: 48px;
    text-align: center;
    line-height: 43px;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.172206px;
    transition: 0.7s;
    background: #fff;
    border: 2px solid #f56c81;
    color: #f56c81;
    cursor: pointer;
    outline: none;
  }

  .adress {
    font-size: 0.9em;
  }

  .secondaryOrderContainerRow h3 {
    font-size: 1.2em;
  }

  .kmaway {
    color: #9b9b9b;
    font-size: .7em;
  }

  .secondaryOrderContainerRow iframe {
    width: 100%;
  }

  .viewMap {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
    border-radius: 24px;
    height: 48px;
    text-align: center;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 16px;
    width: 100%;
    transition: 0.7s;
    color: #fff;
    padding: 5px 35px;
    border: 2px solid #f56c81;
    background-color: #f56c81;
    cursor: pointer;
    outline: none;
    margin: 15px auto;
  }

  .viewMap:hover {
    color: #f56c81;
    background: #fff;
  }
</style>
