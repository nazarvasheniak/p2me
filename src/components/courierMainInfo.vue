<template>
  <div class="profileMainInfoContainer flex">
    <div class="profileMainInfoSubContainer flex">
      <div class="subContainerSub flex">
        <div class="driversMainInfoTop">
          <img src="../assets/driver.png" alt />
          <div class="driverMainInfoSubtitle">
           <h3>{{courier.first_name + courier.last_name}}</h3>
            <p>Date of registration: 13th November, 12:20</p>
          </div>
        </div>
        <div class="edit flex">
          <div>All orders</div>
        </div>
      </div>
    </div>
    <div class="profileMainInfoSubContainer flex driversMainInfoText">
      <div class="profileMainInfoColumn">
        <h3>Contacts & Info:</h3>
        <div class="profileDriverInfoBlockContainer">
          <p>
            <strong>Have a car to drive</strong>
          </p>
          <p>
            <strong>E-mail:</strong> {{courier.e_mail}} 
          </p>
          <p>
            <strong>Phone:</strong> {{courier.phone}}
          </p>
          <p>
            <strong>Date of birth:</strong> {{courier.birthday}}
          </p>
          <p>
            <strong>City:</strong> {{courier.city}}
          </p>
          <p>
            <strong>Language:</strong> {{courier.language}}
          </p>
        </div>
        <div class="profileDriverInfoBlockContainer">
          <p>
            <strong>Vehicle:</strong> {{courier.vehicle}}
          </p>
        </div>
        
        <div class="profileDriverInfoBlockContainer">
          <p>
            <strong>Card number:</strong> {{courier.card_number}} 
          </p>
          <p>
            <strong>Cardholder:</strong> {{courier.cardholder}}
          </p>
          <p>
            <strong>Bank:</strong> {{courier.bank_name}}
          </p>
          <p>
            <strong>Account number:</strong> {{courier.account_number}}
          </p>
          <p>
            <strong>Want to recieve money on credit card: </strong> {{courier.receive_money_on_card}}
          </p>
        </div>
        <div class></div>
      </div>

      <div class="profileMainInfoColumn">
        <h3>Documents:</h3>
        <img src="../assets/card1.png" alt />
        <img src="../assets/card2.png" alt />
        <img src="../assets/card3.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "courierMainInfo",
  data: () => ({
    courier: null
  }),
  mounted() {
    const id = this.$attrs.id;
    this.$store.dispatch("getCourier", id).then(result => {
      this.courier = result;
    });
  },
  methods: {
   
  }
};
</script>

<style scoped>
.profileMainInfoContainer {
  border-radius: 5px;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 15px 5px #e5e5e585;
  flex-flow: column nowrap;
  padding: 25px;
}
.subContainerSub {
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
}
.profileMainInfoSubContainer {
  width: 100%;
  flex-flow: column nowrap;
  position: relative;
}
.edit > div {
  font-size: 14px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #ffffff;
  background: radial-gradient(96.87% 96.87% at 3.13% 3.13%, #FB5F68 0%, #EA84AF 100%);
  box-sizing: border-box;
  border-radius: 24px;
  padding: 5px 30px;
  margin-bottom: 15px;
}
.edit > button:first-child {
  background: none;
  border: none;
  color: #d0102c;
  border-bottom: 2px solid transparent;
  transition: 0.7s;
}
.edit > button:first-child:hover {
  border-bottom: 2px solid #d0102c;
}
.subContainerSub img {
  width: 119px;
  height: 119px;
  display: block;
  margin-right: 18px;
}
.driverMainInfoSubtitle {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
}
.driverMainInfoSubtitle p {
  font-size: 12px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #4a4a4a;
  opacity: 0.5;
}
.subContainerSub {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.driversMainInfoTop {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.profileMainInfoColumn h3 {
  font-family: AvenirNext;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #4a4a4a;
}
.profileMainInfoColumn p {
  font-family: AvenirNext;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  color: #4a4a4a;
}
.profileDriverInfoBlockContainer {
  margin: 30px 1px;
  margin-bottom: 65px;
}
.driversMainInfoText {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 35px;
}
.profileMainInfoColumn img {
  width: 195px;
  margin: 9px 0px;
  display: block;
}
</style>

