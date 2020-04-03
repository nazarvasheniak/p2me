<template>
    <div class="profileContainer flex editDriverContainerMainBlock">
        <div class="headerRow flex">
        <h1>Edit profile</h1>

        </div>
        <div class="profileMainContainer ">
            <div class="profileSubContainer flex driverEditMainRow">
                <div class="profileMainInfoContainer ">
                    <div class="profileMainInfoSubContainer flex">
                        <div class="subContainerSub flex">
                            <div class="driverMainInfoTop">
                                <div class="driverMainInfoImage">
                                    <div class="driverMainInfoImageOverlay">
                                      <iconCamera/>
                                    </div>
                                    <img src="../assets/driver.png" alt> 
                                </div>
                                <h3>Petrov Ivan</h3>
                            </div>
                            <div class="edit flex">
                                <button class="redBorderButtonMain">Remove driver</button>
                            </div>
                        </div>
                    </div>
                    <div class="profileMainInfoSubContainer">
                        <div class="profileMainInfoColumn">
                           
                            <div class="profileDriverInfoBlockContainer">
                                 <h3>Contacts & Info:</h3>
                                <p><strong>Have a car to drive</strong></p>
                                <p><strong>E-mail:</strong> petrovivan@gmail.com</p>
                                <p><strong>Phone:</strong> +38 (012) 345-67-89</p>
                                <p><strong>Date of birth:</strong> 01.02.1986</p>
                                <p><strong>City:</strong> Kyiv</p>
                                <p><strong>Language:</strong> English</p>
                            </div>
                            <div class="profileDriverInfoBlockContainer">
                                 <h3>Personal and Vehicle info:</h3>
                                <p><strong>Car class:</strong> Standart</p>
                                <p><strong>Car manufactorer:</strong> BMW</p>
                                <p><strong>Year of production:</strong> 2018</p>
                                <p><strong>Car number:</strong> AA111AA</p>
                                <p><strong>Driver’s license:</strong> AB123456</p>
                                <p><strong>Have a taxi license </strong></p>
                            </div>
                            <!-- <div class="profileDriverInfoBlockContainer">
                                <p><strong>Expiration date of driver license:</strong> 01.02.2017</p>
                                <p><strong>Expiration date of car:</strong> 02.03.2015</p>
                            </div> -->
                            <div class="profileDriverInfoBlockContainer">
                                 <h3>Payment info:</h3>
                                <p><strong>Card number:</strong> 1234 5678 9101 1213</p>
                                <p><strong>Cardholder:</strong> Ivan</p>
                                <p><strong>Bank:</strong> PrivatBank</p>
                                <p><strong>Account number:</strong> 123456789</p>
                                <p><strong>Want to receive money on credit card</strong></p>
                            </div>
                            <div class="">

                            </div>
                        </div>
                        <h3>Documents:</h3>
                        <div class="profileMainInfoColumn driverDocumentsRowContainer">
                            <div class="driverEditDocumentsColumn">
                                <p><strong>Photo of driver license: </strong></p>
                                <p><small>(Photo of the current driving license, side with photo)</small></p>
                                <div class="driverMainInfoImage">
                                    <div class="driverMainInfoImageOverlay">
                                      <iconCamera/>
                                    </div>
                                    <img src="../assets/card1.png" alt>
                                </div>
                                <p><strong>Expiration date of driver</strong></p>
                                <p><strong>license:</strong> 01.02.2017</p>
                            </div>
                            <div class="driverEditDocumentsColumn">
                                <p><strong>Photo of technical passport: </strong></p>
                                <p><small>(Photo of technical passport, page with the car number)</small></p>
                                <div class="driverMainInfoImage">
                                    <div class="driverMainInfoImageOverlay">
                                      <iconCamera/>
                                    </div>
                                    <img src="../assets/card2.png" alt>
                                </div>
                                <p></p>
                            </div>
                            <div class="driverEditDocumentsColumn">
                                <p><strong>Photo of insurance: </strong></p>
                                <p><small>(OMTPL, photo of page with vehicle data and expiratioon date)</small></p>
                                <div class="driverMainInfoImage">
                                    <div class="driverMainInfoImageOverlay">
                                      <iconCamera/>
                                    </div>
                                    <img src="../assets/card3.png" alt>
                                </div>
                                <p><strong>Expiration date of car:</strong></p>
                                <p> 01.02.2017</p>
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
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response));
  }
};
</script>

<style scoped>
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
    width: 100%!important;
}
.driverMainInfoTop {
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
    align-items: center;
}
.editDriverContainerMainBlock .profileMainContainer {
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(30, 30, 30, 0.12);
    border-radius: 3px;
    padding: 30px;
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
    color: #FB5F68;
    border: 1px solid #FB5F68;
    box-shadow: 0px 2px 15px #FCB3BB;
    border-radius: 24px;
    padding : 9px 30px;
    background: none;
    transition: 0.7s;
}
.editDriverContainerMainBlock .edit {
    align-items: center;
}
.editDriverContainerMainBlock .redBorderButtonMain:hover {
    background: #FB5F68;
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
    font-size: 24px;
    line-height: 33px;
    display: flex;
    align-items: center;
    letter-spacing: 0.25831px;
    color: #4A4A4A;
    margin-top: 35px;
}
.editDriverContainerMainBlock p {
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #4A4A4A;
}
.driverMainInfoTop h3 {
    margin: 0px;
}
.driverDocumentsRowContainer p {
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
    border: 1px solid #FB5F68;
    box-shadow: 0px 2px 15px #FCB3BB;
    border-radius: 24px;
    padding : 9px 30px;
    background: #FB5F68;
    transition: 0.7s;
    margin: 39px auto;
}
.redBackgroundButtonMain:hover {
    background: none;
    color: #FB5F68;
    position: relative;
}
.driverEditDocumentsColumn small {
    padding-right: 15%;
}
.driverMainInfoImageOverlay {
    width: calc(100% - 19px);
    height: 100%;
    position: absolute;
    background-color: rgba(255,255,255,0.75);
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
    margin-bottom: 15px;
    font-size: 36px;
    line-height: 49px;
}
.profileDriverInfoBlockContainer {
    width: 33%;
}
</style>
