<template>
    <div class="profileMainInfoContainer flex supplierMainInfoContainer">
        <div class="profileMainInfoSubContainer flex">
            <div class="subContainerSub flex">
              <div class="driversMainInfoTop"> 
                <div class="driverMainInfoSubtitle">
                  <h3><strong>Customer</strong> - <span>John Doe</span></h3>
                </div>
              </div>
                <div class="edit flex">
                  <img src="../assets/phone.png" alt=""> 
                  <p>+ 38 (095) 332 43 23</p>
                </div>
            </div>
        </div>
        <div class="profileMainInfoSubContainer flex driversMainInfoText">
            <div>
                <div class="supplierColumnContainerBlock">
                    <strong>Order:</strong>
                </div>
                <div class="supplierColumnContainerBlock">
                    <p>Burger Filadelfia, 1 pc. </p>
                    <p>Coca Colla, 2 pc.</p>
                </div>
            </div>
            <div class="totalPriceContainer">
                <div class="supplierColumnContainerBlock">
                    <p><strong>$32,50</strong></p>
                    <p><strong>$49,99</strong></p>
                </div>
                <div class="supplierColumnContainerBlock">
                    <p><strong>Total price:</strong></p>
                    <p class="totalPriceCountContainer">$82,49</p>
                </div>
            </div>
            
        </div>
        <div class="profileMainInfoSubContainer">
            <h4>Details:</h4>
            <div class="supplierSingleOrdeDetails">

                <p><strong>Payment method:</strong> <span>Cash</span></p>
                <p><strong>Comment:</strong> <span>Call before delivery</span></p>
                <p><strong>Waiting time:</strong> <span>I can wait about 1 hour</span></p>
            </div>
            
        </div>
        <div class="profileMainInfoSubContainer driversMainInfoText supplierContactInfoContainer orderStatusBar">
             <h4>Status order: </h4>
             <div class="approved-progress"></div>
        </div>
        <div class="profileMainInfoSubContainer flex driversMainInfoText supplierContactInfoContainer orderDriverContainer">
             <h4>Driver: </h4>
             <span>Max Curton</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "supplierOrderSingleInfo",
  data() {
    return {
      disabled: true,
      profileName: "Los Pollos Hermanos Restaurant",
      mainInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus quos omnis optio, enim neque similique quaerat perspiciatis culpa tenetur placeat nostrum quis veritatis architecto impedit. Adipisci, exercitationem! Quo, iusto!"
    };
  },
  methods: {
    editInfo: function() {
      ///console.log("click event is done");
    }
  }
};
/*function test(){
  ///console.log(123)
} */
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
.edit {
display: flex;
align-items: center;
flex-flow: row nowrap;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.200907px;
color: #4A4A4A;
}
.edit img {
  width: 24px;
  margin-right: 9px;
  height: 24px;
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

  color: #4A4A4A;

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
  font-size: 24px;
  line-height: 33px;
  /* identical to box height, or 137% */
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #4A4A4A;
}
.profileMainInfoColumn p {
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  color: #4A4A4A;
}
.profileDriverInfoBlockContainer {
  margin: 30px 1px;
  margin-bottom: 65px;
}
.driversMainInfoText {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 35px;
}
.profileMainInfoColumn img {
  width: 195px;
  margin: 9px 0px;
  display: block;
}
.supplierMainInfoContainer .driversMainInfoText p {
    margin: 0px;
}
.supplierColumnContainerBlock {
    margin-right: 75px;
    max-width: 95%;
    margin-bottom: 19px;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 137% */
    letter-spacing: 0.172206px;
    color: #9B9B9B;
}
.supplierColumnContainerBlock strong {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.193732px;
    color: #4A4A4A;
}
.totalPriceContainer .supplierColumnContainerBlock strong {
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 137% */
    letter-spacing: 0.0956702px;

    color: #4A4A4A;
}
.profileMainInfoSubContainer > h4 {
    font-size: 24px;
    line-height: 33px;
    /* identical to box height, or 137% */
    letter-spacing: 0.25831px;
    color: #4A4A4A;
    font-weight: bold;
    margin-bottom: 9px;
}
.profileMainInfoSubContainer > p {
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    letter-spacing: 0.215258px;
    color: #9B9B9B;
    font-weight: 100;
}
.supplierContactInfoContainer {
    margin-top: 0px;
}
.supplierContactInfoContainer p {
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #4A4A4A;
    margin-bottom: 19px!important;
}

.redBackgroundButtonMain {
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 137% */
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
    margin: 5px auto;
}
.redBackgroundButtonMain:hover {
    background: none;
    color: #FB5F68;
    position: relative;
}

.driversMainInfoText > div {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
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





.totalPriceCountContainer {
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.119588px;
  color: #FB888B;
}
.supplierMainInfoContainer .driversMainInfoText .totalPriceContainer p {
  margin-bottom: 9px;
}
.supplierSingleOrdeDetails p {
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.172207px;
  color: #9B9B9B;
}
.supplierSingleOrdeDetails p strong {
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.193732px;
  color: #4A4A4A;
  min-width: 185px;
  display: inline-block;
  margin-right: 35px;
}
.orderStatusBar {
  flex-flow: column;
  margin-top: 35px;
  margin-bottom: 34px;
}
.orderStatusBar h4 {
  margin-bottom: 45px;
}
.orderStatusBar .approved-progress:after {
  background: linear-gradient(180.68deg, #9CE693 0%, #69D65C 100%);
}
.orderDriverContainer {
  justify-content: flex-start;
}
.orderDriverContainer span {
    font-size: 24px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.05px;
    text-decoration-line: underline;
    color: #4A4A4A;
}
.orderDriverContainer h4 {
  font-size: 24px;
  line-height: 1;
  margin-right: 9px;
  letter-spacing: 0.107629px;
  color: #4A4A4A;

}
</style>

