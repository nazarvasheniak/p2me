<template>
  <div class="profileContainer flex editDriverContainerMainBlock">
    <div class="headerRow flex">
      <h1>Edit profile</h1>
    </div>
          <!-- new version -->
          <!-- <div class="container">
            <div class="row">
            <div class="col-sm">
              left
            </div>
            <div class="col-sm">
              center
            </div>
            <div class="col-sm">
              right -->
            <!--Example field -->
            <!-- <div class="form-group row">
              <label class="col-sm-auto col-form-label" style="font-size:12px;">Account number:</label>
              <div class="col-sm-8">
                <input class="form-control-plaintext" v-model="driverInfo.accountNumber"/>
              </div>
            </div>
            </div>
            </div>
          </div> -->
    <div class="profileMainContainer">
      <div class="profileSubContainer flex driverEditMainRow">
        <div class="profileMainInfoContainer">
          <div class="profileMainInfoSubContainer flex">
            <div class="subContainerSub flex">
              <div class="driverMainInfoTop">
                <div class="driverMainInfoImage">
                  <div class="driverMainInfoImageOverlay">
                    <iconCamera />
                  </div>
                  <img src="../assets/driver.png" alt />
                </div>
                  <input class="inputInputMain" v-model="driverInfo.fullName"/>
                </div>
              <div class="edit flex">
                <!-- <button class="redBorderButtonMain" v-on:click="accept">Remove driver</button> -->
                <button
                  class="redBorderButtonMain"
                  v-on:click="isOpenModalRemoveDriver()"
                >Remove driver</button>

                <!-- Modal window Remove Driver -->
                <div class="accept-modal-container flex" v-if="acceptModalVision">
                  <div class="modal" style="width: 679px; height: 540px;">
                    <div class="close" v-on:click="isOpenModalRemoveDriver()">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.707 0.293006C19.316 -0.0979941 18.684 -0.0979941 18.293 0.293006L10 8.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L8.58601 10L0.293006 18.293C-0.0979941 18.684 -0.0979941 19.316 0.293006 19.707C0.488006 19.902 0.744006 20 1.00001 20C1.25601 20 1.51201 19.902 1.70701 19.707L10 11.414L18.293 19.707C18.488 19.902 18.744 20 19 20C19.256 20 19.512 19.902 19.707 19.707C20.098 19.316 20.098 18.684 19.707 18.293L11.414 10L19.707 1.70701C20.098 1.31601 20.098 0.684006 19.707 0.293006Z"
                          fill="#4A4A4A"
                        />
                      </svg>
                    </div>
                    <h2>Please, select a reason of remove</h2>
                    <form @submit.prevent="accept">
                      <div class="removeModal flex">
                        <button 
                          style="width: 100%; height: 78px; text-align: left; border-bottom: 1px solid darkgray;"
                          v-on:click="selectReason('FirstValue')"
                        >First reason</button>

                        <button 
                          style="width: 100%; height: 78px; text-align: left; border-bottom: 1px solid darkgray;"
                          v-on:click="selectReason('FirstValue')"
                        >Second reason</button>

                        <button 
                          style="width: 100%; height: 78px; text-align: left; border-bottom: 1px solid darkgray;"
                          v-on:click="selectReason('FirstValue')"
                        >Third reason</button>

                        <button 
                          style="width: 100%; height: 78px; text-align: left; border-bottom: 1px solid darkgray;"
                          v-on:click="selectReason('FirstValue')"
                        >Another</button>
                      </div>
                        <button class="saveButton">
                          Save
                        </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="profileMainInfoSubContainer container">
            <div class="profileMainInfoColumn">
              <div class="profileDriverInfoBlockContainer">
                <h3>Contacts & Info:</h3>
                <p>
                  <strong>{{driverInfo.isHaveCar ? 'Have a car to drive' : ''}}</strong>
                </p>
                <p>
                   <strong>E-mail: </strong> 
                    <input class="inputInput" v-model="driverInfo.email"/>
                </p>
                <p>
                  <strong>Phone:</strong> 
                    <input class="inputInput" v-model="driverInfo.phone"/>   
                </p>
                <p>
                  <strong>Date of birth:</strong>
                   <input class="inputInput" v-model="driverInfo.birthday"/>
                </p>
                <p>
                  <strong>City:</strong>
                   <input class="inputInput" v-model="driverInfo.city"/>
                </p>
                <p>
                  <strong>Language:</strong> 
                   <input class="inputInput" v-model="driverInfo.language"/>
                </p>
              </div>
              <div class="profileDriverInfoBlockContainer">
                <h3>Personal and Vehicle info:</h3>
                <p>
                  <strong>Car class:</strong> 
                    <input class="inputInput" v-model="driverInfo.carClass"/>
                </p>
                <p>
                  <strong>Car manufactorer:</strong>
                    <input class="inputInput" v-model="driverInfo.carManufactorer"/>
                </p>
                <p>
                  <strong>Year of production:</strong>
                   <input class="inputInput" v-model="driverInfo.year"/>
                </p>
                <p>
                  <strong>Car number:</strong>
                    <input class="inputInput" v-model="driverInfo.carNumber"/>
                </p>
                <p>
                  <strong>Driver’s license:</strong>
                   <input class="inputInput" v-model="driverInfo.driverLicense"/>
                </p>
                <p>
                  <strong>{{driverInfo.isHaveLicense ? 'Have a taxi license' : ''}}</strong>
                </p>
              </div>
              <!-- <div class="profileDriverInfoBlockContainer">
                                <p><strong>Expiration date of driver license:</strong> 01.02.2017</p>
                                <p><strong>Expiration date of car:</strong> 02.03.2015</p>
              </div>-->
              <div class="profileDriverInfoBlockContainer">
                <h3>Payment info:</h3>
                <p>
                  <strong>Card number:</strong>
                   <input class="inputInput" v-model="driverInfo.cardNumber"/>
                </p>
                <p>
                  <strong>Cardholder:</strong>
                   <input class="inputInput" v-model="driverInfo.cardHolder"/>
                </p>
                <p>
                  <strong>Bank:</strong> 
                   <input class="inputInput" v-model="driverInfo.bank"/>
                </p>

                <p>
                  <strong>Account number:</strong>
                   <input class="inputInput" v-model="driverInfo.accountNumber" style="margin-left: -5px;"/>
                </p>
                <!-- <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Account number:</label>
                  <div class="col-sm-10">
                   <input class="form-control-plaintext" v-model="driverInfo.accountNumber"/>
                  </div>
                </div> -->
                <p>
                  <strong>
                    {{driverInfo.isReceiveMoneyoncard ? 'Want to receive money on credit card' : ''}}
                  </strong>
                </p>
              </div>
              <div class></div>
            </div>
            <h3>Documents:</h3>
            <div class="profileMainInfoColumn driverDocumentsRowContainer">
              <div class="driverEditDocumentsColumn">
                <p>
                  <strong>Photo of driver license:</strong>
                </p>
                <p>
                  <small>(Photo of the current driving license, side with photo)</small>
                </p>
                <div class="driverMainInfoImage">
                  <div class="driverMainInfoImageOverlay">
                    <iconCamera />
                  </div>
                  <img src="../assets/card1.png" alt />
                </div>
                <p>
                  <strong>Expiration date of driver</strong>
                </p>
                <p>
                  <strong>license:</strong>
                   <input class="inputInput" v-model="driverInfo.expirationDateofdriver"/>
                </p>
              </div>
              <div class="driverEditDocumentsColumn">
                <p>
                  <strong>Photo of technical passport:</strong>
                </p>
                <p>
                  <small>(Photo of technical passport, page with the car number)</small>
                </p>
                <div class="driverMainInfoImage">
                  <div class="driverMainInfoImageOverlay">
                    <iconCamera />
                  </div>
                  <img src="../assets/card2.png" alt />
                </div>
                <p></p>
              </div>
              <div class="driverEditDocumentsColumn">
                <p>
                  <strong>Photo of insurance:</strong>
                </p>
                <p>
                  <small>(OMTPL, photo of page with vehicle data and expiratioon date)</small>
                </p>
                <div class="driverMainInfoImage">
                  <div class="driverMainInfoImageOverlay">
                    <iconCamera />
                  </div>
                  <img src="../assets/card3.png" alt />
                </div>
                <p>
                  <strong>Expiration date of car:</strong>
                </p>
                <p>
                  <input class="inputInput" v-model="driverInfo.expirationDateofcar"/>
                  </p>
              </div>
            </div>
            <div class="profileMainInfoColumn">
              <button class="redBackgroundButtonMain">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import driverMainInfo from "../components/driverMainInfo.vue";
import earnings from "../components/earnings.vue";
import tripsCompleted from "../components/tripsCompleted.vue";
import tripsCanceled from "../components/tripsCanceled.vue";
import axios from "axios";
import rates from "../components/rates.vue";
import iconCamera from "../components/icons/iconCamera.vue";

export default {
  name: "EditDriverS",
  components: {
    driverMainInfo,
    earnings,
    tripsCompleted,
    tripsCanceled,
    rates,
    iconCamera
  },

  data() {
    return {
      driverInfo: {
          isHaveCar: null,
          fullName: null,
          email: null,
          phone: null,
          birthday: null,
          city: null,
          language: null,
          carClass: null,
          carManufactorer: null,
          year: null,
          carNumber: null,
          driverLicense: null,
          isHaveLicense: null,
          cardNumber: null,
          cardHolder: null,
          bankName: null,
          accountNumber: null,
          isReceiveMoneyoncard: null,
          expirationDateofdriver: null,
          expirationDateofcar: null
        },
      acceptModalVision: false,
      selectReasonForRemoveDriver: ""
    };
  },

  methods: {
    isOpenModalRemoveDriver() {
      this.acceptModalVision = !this.acceptModalVision;
    },
    selectReason(value)
    {
        this.selectReasonForRemoveDriver = value;
    },
    Close() {},
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    loadInfo() {
      const id = this.$route.params.id;
      this.$store
      .dispatch("getDriver", id)
      .then(result => {
        const model = {
          isHaveCar: result.have_car,
          fullName: result.first_name+' '+result.last_name,
          email: result.e_mail,
          phone: result.phone,
          birthday: result.birthday,
          city: result.city,
          language: result.language,
          carClass: result.car_class,
          carManufactorer: result.car_manufactorer,
          year: result.year_of_production,
          carNumber: result.car_number,
          driverLicense: result.drivers_license,
          isHaveLicense: result.have_license,
          cardNumber: result.card_number,
          cardHolder: result.card_holder,
          bankName: result.bank_name,
          accountNumber: result.account_number,
          isReceiveMoneyoncard: result.receive_money_on_card,
          expirationDateofdriver: result.expiration_license,
          expirationDateofcar: result.expiration_car

        };
        debugger;
        
        this.driverInfo = model;
      });
    }
  },
  beforeMount(){
    this.loadInfo();
  }
};
</script>

<style scoped>
.headerRow {
  margin-left: 14px;
}

.headerRow h1 {
  font-family: AvenirNext;
  font-size: 36px;
  line-height: 49px;
  letter-spacing: 0.25831px;
  color: #454545;
  mix-blend-mode: normal;
}
.inputInput {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #C9C9C9;
  font-family: AvenirNext;
  font-size: 18px;
  line-height: 22px;
  color: #4A4A4A;
  margin-left: 5px;
}

.inputInputMain {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  font-family: AvenirNext;
  font-size: 22px;
  line-height: 22px;
  color: #4A4A4A;
  margin-left: 5px;
}
.profileContainer {
  flex-flow: column nowrap;
  width: 100%;
  margin-bottom: 25px;
}
.editDriverContainerMainBlock .profileMainInfoSubContainer .subContainerSub {
  justify-content: space-between;
  width: 100%;
  display: flex;
}
.driverEditMainRow {
  width: 100% !important;
}
.driverMainInfoTop {
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  align-items: center;
}
.editDriverContainerMainBlock .profileMainContainer {
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(30, 30, 30, 0.12);
  border-radius: 3px;
   padding: 20px; 
}
.driverMainInfoTop img {
  margin-right: 19px;
  width: 115px;
  height: 115px;
}
.redBorderButtonMain {
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 137% */
  display: flex;
  align-items: center;
  letter-spacing: 0.172206px;
  color: #fb5f68;
  border: 1px solid #fb5f68;
  box-shadow: 0px 2px 15px #fcb3bb;
  border-radius: 24px;
  padding: 9px 30px;
  background: none;
  transition: 0.7s;
}
.editDriverContainerMainBlock .edit {
  align-items: center;
}
.editDriverContainerMainBlock .redBorderButtonMain:hover {
  background: #fb5f68;
  color: white;
  text-align: center;
}
.editDriverContainerMainBlock .profileMainInfoColumn {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
}
.editDriverContainerMainBlock h3 {
  font-family: AvenirNext;
  font-size: 30px;
  line-height: 41px;
  letter-spacing: 0.322887px;
  /* text-decoration-line: underline; */
  color: #4a4a4a;
}
.editDriverContainerMainBlock p {
  font-family: AvenirNext;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #4a4a4a;
}
.driverMainInfoTop h3 {
  margin: 0px;
}
.driverDocumentsRowContainer p {
  font-family: AvenirNext;
  font-size: 16px;
  line-height: 25px;
  display: flex;
  align-items: center;

  color: #4a4a4a;
  margin: 5px 0px;
}
.driverDocumentsRowContainer img {
  width: 185px;
  margin: 30px 0px;
  position: relative;
}
.driverDocumentsRowContainer .driverEditDocumentsColumn {
  margin-top: 19px;
  width: 33%;
}
.redBackgroundButtonMain {
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.172206px;
  color: white;
  border: 1px solid #fb5f68;
  box-shadow: 0px 2px 15px #fcb3bb;
  border-radius: 24px;
  padding: 9px 30px;
  background: #fb5f68;
  transition: 0.7s;
  margin: 39px auto;
}
.redBackgroundButtonMain:hover {
  background: none;
  color: #fb5f68;
  position: relative;
}
.driverEditDocumentsColumn small {
  padding-right: 15%;
}
.driverMainInfoImageOverlay {
  width: calc(100% - 19px);
  height: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.75);
  top: 0px;
  left: 0%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  z-index: 9;
}
.driverMainInfoImage {
  position: relative;
}
.driverMainInfoImage img {
  position: relative;
}
.driverDocumentsRowContainer .driverMainInfoImageOverlay {
  width: 185px;
}
.driverMainInfoImageOverlay img {
  width: 30px;
  height: 31px;
}
.editDriverContainerMainBlock h1 {
  font-family: AvenirNext;
  margin-bottom: 15px;
  font-size: 36px;
  line-height: 49px;
}
.profileDriverInfoBlockContainer {
  width: 330px;
}
.profileDriverInfoBlockContainer h3 {
  font-family: AvenirNext;
  font-size: 24px;
  line-height: 33px;
  color: #4A4A4A;
  margin-top: 10px;
}

.profileDriverInfoBlockContainer strong {
  font-family: AvenirNext;
  font-size: 18px;
  line-height: 22px;
  color: #4A4A4A;
}
.accept-modal-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
}

.modal {
  width: 779px;
  height: 774px;
  padding: 61px 124px;
  position: relative;
  box-sizing: border-box;
  border-radius: 3px;
  background: #ffffff;
}

.removeModal {
  width: 477px;
  height: 315px;
  /* margin-left: 52px; */
  margin-right: 50px;
  margin-bottom: 45px;
  border: 1px solid #f92f6e;
  flex-direction: column;
  align-items: flex-start;
}

.saveButton {
/* position: absolute;
left: 45.07%;
right: 45.07%;
/* top: 61.56%; */
/* bottom: 33.5%;  */
width: 142px;
height: 58px;
margin-left: 155px;
/* margin-top: 35px; */
/* margin-bottom: 50px; */
background: radial-gradient(96.87% 96.87% at 3.13% 3.13%, #FB5F68 0%, #EA84AF 100%);
box-shadow: 0px 2px 15px #FCB3BB;
border-radius: 24px;
font-family: AvenirNext;
font-size: 36px;
line-height: 49px;
letter-spacing: 0.172308px;
color: #FFFFFF;


}
</style>
