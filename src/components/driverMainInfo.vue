<template>
  <div class="profileMainInfoContainer flex">
    <div class="profileMainInfoSubContainer flex">
      <div class="subContainerSub flex">
        <div class="driversMainInfoTop">
          <img src="../assets/driver.png" alt />
          <div class="driverMainInfoSubtitle">
            <h3>{{driver.first_name + driver.last_name}}</h3>
            <p>Date of registration:13th November, 12:20</p>
          </div>
        </div>
        <div class="edit flex">
          <div>Online</div>
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
            <strong>E-mail:</strong> petrovivan@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +38 (012) 345-67-89
          </p>
          <p>
            <strong>Date of birth:</strong> 01.02.1986
          </p>
          <p>
            <strong>City:</strong> Kyiv
          </p>
          <p>
            <strong>Language:</strong> English
          </p>
        </div>
        <div class="profileDriverInfoBlockContainer">
          <p>
            <strong>Car class:</strong> Standart
          </p>
          <p>
            <strong>Car manufactorer:</strong> BMW
          </p>
          <p>
            <strong>Year of production:</strong> 2018
          </p>
          <p>
            <strong>Car number:</strong> AA111AA
          </p>
          <p>
            <strong>Driver’s license:</strong> AB123456
          </p>
          <p>
            <strong>Have a taxi license</strong>
          </p>
        </div>
        <div class="profileDriverInfoBlockContainer">
          <p>
            <strong>Expiration date of driver license:</strong> 01.02.2017
          </p>
          <p>
            <strong>Expiration date of car:</strong> 02.03.2015
          </p>
        </div>
        <div class="profileDriverInfoBlockContainer">
          <p>
            <strong>Card number:</strong> 1234 5678 9101 1213
          </p>
          <p>
            <strong>Cardholder:</strong> Ivan
          </p>
          <p>
            <strong>Bank:</strong> PrivatBank
          </p>
          <p>
            <strong>Account number:</strong> 123456789
          </p>
          <p>
            <strong>Want to receive money on credit card</strong>
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
  name: "driverMainInfo",
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
  background: #42d18a;
  border: 1px solid #42d18a;
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

