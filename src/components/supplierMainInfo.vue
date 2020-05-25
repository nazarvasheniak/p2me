<template>
    <div class="profileMainInfoContainer flex supplierMainInfoContainer" 
    >
        <div class="profileMainInfoSubContainer flex">
            <div class="subContainerSub flex">
              <div class="driversMainInfoTop">
                <img src="../assets/burder.png" alt>  
                <div class="driverMainInfoSubtitle">
                  <h3>{{supplier.name}}</h3>
                  <p>Date of registration: {{supplier.created}} </p>
                </div>
              </div>
                <div class="edit flex">
                  <div>
                    {{supplier.category}}
                  </div>
                </div>
            </div>
        </div>
        <div class="profileMainInfoSubContainer flex driversMainInfoText">
            <div class="supplierColumnContainerBlock">
                <strong>Tag line:</strong>
            </div>
            <div class="supplierColumnContainerBlock">
                <p> {{supplier.tag_line}} </p>
            </div>
        </div>
        <div class="profileMainInfoSubContainer">
            <h4>Information</h4>
            <p> {{supplier.description}} </p>
        </div>
        <div class="profileMainInfoSubContainer flex driversMainInfoText supplierContactInfoContainer">
            <div class="supplierColumnContainerBlock">
                <p><strong>E-mail:</strong> {{supplier.e_mail}} </p>
                <p><strong>Phone:</strong> {{supplier.phone}} </p>
                <p><strong>City:</strong> {{supplier.city}} </p>
            </div>
            <div class="supplierColumnContainerBlock">
                <p><strong>Instagram:</strong>-----</p>
                <p><strong>Facebook:</strong>------</p>
            </div>
        </div>
        <div class="profileMainInfoSubContainer flex driversMainInfoText supplierContactInfoContainer">
            <button class="redBackgroundButtonMain" v-on:click="openProductCategoryitem">View menu</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "supplierMainInfo",
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
.edit > div {
  font-size: 16px;
line-height: 25px;
display: flex;
align-items: center;
letter-spacing: 0.232479px;
color: #9B9B9B;
border: 1px solid rgba(151, 151, 151, 0.5);
box-sizing: border-box;
border-radius: 24px;
padding: 10px 31px;
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

.driverMainInfoSubtitle h3 {
  font-family: AvenirNext;
  font-size: 30px;
  line-height: 41px;
  /* identical to box height, or 137% */

  letter-spacing: 0.322887px;
  color: #4A4A4A;

}

.driverMainInfoSubtitle p {
  font-family: AvenirNext;
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
  font-family: AvenirNext;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height, or 137% */
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #4A4A4A;
}
.profileMainInfoColumn p {
  font-family: AvenirNext;
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
    margin-right: 25px;
    max-width: 45%;
    font-size: 16px;
    line-height: 22px;
    /* or 137% */
    letter-spacing: 0.172206px;
    color: #4A4A4A;
    margin-bottom: 19px;
}
.profileMainInfoSubContainer > h4 {
   font-family: AvenirNext;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height, or 137% */
    letter-spacing: 0.25831px;
    color: #4A4A4A;
    font-weight: bold;
}
.profileMainInfoSubContainer > p {
    font-family: AvenirNext;
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
    font-family: AvenirNext;
    font-size: 18px;
    line-height: 22px;
    /* or 122% */
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
</style>

