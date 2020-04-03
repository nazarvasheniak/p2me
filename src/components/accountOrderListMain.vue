<template>
  <div class="ordersContainer flex driversListContainerMains supplierMainInfoOrderList">
        <div class="recentOrdersContainerRow flex driversListCarouselContainer">
            <div class="recentOrdersContainerRow flex">
                <carousel 
                    class="sliderRecentOrders"
                    :items="1"
                    :nav="true">
                    <div class="driversListContainer">
                        <div class="driversListRowHeader">
                            <span>Order #</span>
                            <span>Customer</span>
                            <span>Supplier</span>
                            <span>Driver</span>
                            <span>Date & Time</span>
                            <span>Status</span>
                            <span>Payment</span>
                            <span>Earned on delivery </span>
                            <span>Earned on supplier</span>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div><div>
                                <img src="../assets/icons/No.svg" alt="">
                                <img src="../assets/icons/dollarRed.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/timeNone.svg" alt="">
                                <img src="../assets/icons/dollarNone.svg" alt=""> 
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/Yes.svg" alt="">
                                <img src="../assets/icons/dollarGreen.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/Yes.svg" alt="">
                                <img src="../assets/icons/greenRadio.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/No.svg" alt="">
                                <img src="../assets/icons/redRadio.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/timeNone.svg" alt="">
                                <img src="../assets/icons/dollarNone.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent flex totalsAccountRowSums">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div class="totalsAccountDivInfos">Total on this page:</div>
                            <div class="totalsAccountDivInfos">$60</div>
                            <div class="totalsAccountDivInfos">$60</div>
                        </div>
                        <div class="driversListRowContent flex totalsAccountRowSums">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div class="totalsAccountDivInfos">Total on this period:</div>
                            <div class="totalsAccountDivInfos">$1297</div>
                            <div class="totalsAccountDivInfos">$1532</div>
                        </div>
                    </div>
                    <div class="driversListContainer">
                        <div class="driversListRowHeader">
                            <span>Order #</span>
                            <span>Customer</span>
                            <span>Supplier</span>
                            <span>Driver</span>
                            <span>Date & Time</span>
                            <span>Status</span>
                            <span>Payment</span>
                            <span>Earned on delivery </span>
                            <span>Earned on supplier</span>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/Yes.svg" alt="">
                                <img src="../assets/icons/greenRadio.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/Yes.svg" alt="">
                                <img src="../assets/icons/greenRadio.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/Yes.svg" alt="">
                                <img src="../assets/icons/greenRadio.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/No.svg" alt="">
                                <img src="../assets/icons/redRadio.svg" alt="">
                                
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/timeNone.svg" alt="">
                                <img src="../assets/icons/dollarNone.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/No.svg" alt="">
                                <img src="../assets/icons/dollarNone.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent flex totalsAccountRowSums">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div class="totalsAccountDivInfos">Total on this page:</div>
                            <div class="totalsAccountDivInfos">$120</div>
                            <div class="totalsAccountDivInfos">$120</div>
                        </div>
                        <div class="driversListRowContent flex totalsAccountRowSums">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div class="totalsAccountDivInfos">Total on this period:</div>
                            <div class="totalsAccountDivInfos">$1297</div>
                            <div class="totalsAccountDivInfos">$1532</div>
                        </div>
                    </div>
                    <div class="driversListContainer">
                        <div class="driversListRowHeader">
                            <span>Order #</span>
                            <span>Customer</span>
                            <span>Supplier</span>
                            <span>Driver</span>
                            <span>Date & Time</span>
                            <span>Statust</span>
                            <span>Payment</span>
                            <span>Earned on delivery </span>
                            <span>Earned on supplier</span>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/Yes.svg" alt="">
                                <img src="../assets/icons/greenRadio.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                <img src="../assets/icons/No.svg" alt="">
                                <img src="../assets/icons/redRadio.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                 <img src="../assets/icons/Yes.svg" alt="">
                                <img src="../assets/icons/greenRadio.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                 <img src="../assets/icons/Yes.svg" alt="">
                                <img src="../assets/icons/greenRadio.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                 <img src="../assets/icons/timeNone.svg" alt="">
                                <img src="../assets/icons/dollarNone.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent">
                            <div>#111111</div>
                            <div>John Johnson</div>
                            <div>Burger King</div>
                            <div>Max Kurton</div>
                            <div>12.05.2018, 12:55</div>
                            <div>Successfull</div>
                            <div>
                                 <img src="../assets/icons/timeNone.svg" alt="">
                                <img src="../assets/icons/dollarNone.svg" alt="">
                            </div>
                            <div class="text-center">$10</div>
                            <div class="text-center">$10</div>
                        </div>
                        <div class="driversListRowContent flex totalsAccountRowSums">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div class="totalsAccountDivInfos">Total on this page:</div>
                            <div class="totalsAccountDivInfos">$120</div>
                            <div class="totalsAccountDivInfos">$120</div>
                        </div>
                        <div class="driversListRowContent flex totalsAccountRowSums">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div class="totalsAccountDivInfos">Total on this period:</div>
                            <div class="totalsAccountDivInfos">$1297</div>
                            <div class="totalsAccountDivInfos">$1532</div>
                        </div>
                    </div>  
                </carousel>
            </div>
        </div>   
    </div>

</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "accountOrderListMain",
  components: {
    carousel
  }
};
</script>

<style >
.ordersContainer {
  overflow-x: hidden;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.recentOrdersListItem:last-child {
  border-bottom: none;
}

.driversListContainer {
  display: flex;
  flex-flow: column nowrap ;
  justify-content: flex-start;

}
.driversListRowHeader {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
}
.driversListRowContent {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 19px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.driversListRowContent > div {
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.206648px;
  color: #4A4A4A;

}
.driversListRowHeader span {
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.232479px;
  color: #4A4A4A;
  display: block;

  height: auto;
}

.driversListRowContent strong {
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  letter-spacing: 0.232479px;
  color: #4A4A4A;
  padding-left: 19px;
}

.ordersContainer {
  padding: 25px;
  border-radius: 5px;
  -webkit-box-shadow: 0 0 15px 5px #e5e5e585;
  box-shadow: 0 0 15px 5px #e5e5e585;
  background: #fff; 

}
.sliderRecentOrders {
  width: 100%;
  margin-top: 35px;
  background: transparent;
  box-shadow: none;
  border-radius: 1px;
}

.driversListRowContent div:nth-child(7) {
  justify-content: flex-end;
}
.supplierMainInfoOrderList .owl-theme .owl-nav {
  width: 100%!important;  
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 0px;
  height: 28px;
}
.supplierMainInfoOrderList .owl-theme .owl-dots {
  width: 100%!important;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.driversListCarouselContainer .content {
  overflow: hidden!important;
}
.supplierMainInfoOrderList {
    margin: 45px 0px;
}
.supplierMainInfoOrderList .driversListRowContent > div {
    width: 11.5%!important;
}
.supplierMainInfoOrderList .driversListRowHeader > span {
    width:  11.5%!important;
}
.totalsAccountDivInfos {
    font-size: 16px;
    line-height: 33px;
    /* or 206% */
    display: block!important;
    align-items: center;
    color: #4A4A4A;
    font-weight: bold;
    text-align: center;
    
}
.totalsAccountRowSums {
    border-bottom: none!important;
    align-items: center;
    flex-flow: row nowrap;
}
.totalsAccountRowSums div:nth-child(8) {
    font-size: 24px;
    line-height: 33px;
    /* identical to box height, or 137% */
    color: #4A4A4A;
}
.totalsAccountRowSums div:nth-child(9) {
    font-size: 24px;
    line-height: 33px;
    /* identical to box height, or 137% */
    color: #4A4A4A;
}
</style> 
