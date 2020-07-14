<template>
  <div class="ordersContainer flex driversListContainerMains">
    <div class="recentOrdersContainerRow flex driversMainNavigationTabs">
      <h1>Clients</h1>

      <span class="clientsEdit" style="margin-top: 32px; margin-right: 35px;">Edit</span>
    </div>

    <table style="width: 100%; border-collapse:separate; border-spacing: 10px 5px;">
      <thead>
        <tr style="height: 60px;">
          <td class="tdClassClient" style="width: 5%">Info</td>
          <td class="tdClassClient" style="width: 25%;">Clients name</td>
          <td class="tdClassClient" style="width: 20%;">Contacts</td>
          <td class="tdClassClient" style="width: 15%;">Orders</td>
          <td class="tdClassClient" style="width: 15%;">Comments</td>
          <td class="tdClassClient" style="width: 15%;">Date</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="customer in clientList"
          :key="customer.id"
          v-on:click="seeClient(item.id)"
          style="height: 60px;"
        >
          <td class="clientClass">
            <button class="infoDriver" v-on:click="seeClient(item.id)">...</button>
          </td>
          <td>
            <img src="../assets/driver.png" alt style="width: 40px;  margin-right: 10px;" />
            <span
              style="padding-top: 10px; font-family: AvenirNext; font-size: 20px;"
            >{{customer.customer_name}}</span>
          </td>
          <td class="clientClass">{{customer.phone}} {{customer.email}}</td>
          <td class="clientClass">{{customer.total_orders}}</td>
          <!-- <td class="clientClass">
            <input type="text" v-model="commentsInfo.comments"/>

          </td> -->
           <td class="clientClass">{{customer.comments}}</td> 
          <td class="clientClass">{{customer.date}}</td>
          <td class="clientsClass">
            <button class="removeButton" v-on:click="openModal(customer)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <div class="inputClient">
      <input type="text" v-model="commentsInfo.comments"/>
    </div> -->

    <!-- Modal vindow -->
    <div class="decline-modal-container flex" v-if="isModalShow">
      <div class="modalka">
        <div class="close" v-on:click="showOrHiddenModal()">
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
        <div class="reasonType">
          <h4>Are you sure want to delete this client ?</h4>
        </div>
        <div class="mainContainerButton">
          <button
            class="modal-button-client"
            style="margin-right:45px; align-items: center;"
            v-on:click="removeClient()"
          >OK</button>
          <button class="modal-button-client" type="button" v-on:click="showOrHiddenModal()">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
//  import Tabs from "vue-tabs-with-active-line";

export default {
  name: "Clients",
  data: () => ({
    clientList: [],
    isModalShow: false,
    itemModel: null,
    commentsInfo: null
  }),

  methods: {
    loadClientList() {
      this.$store.dispatch("loadClientList").then(result => {
        this.clientList = result;
      });
    },
    seeClient() {
      this.$router.push(`/clientOrders/`);
    },
    showOrHiddenModal() {
      this.isModalShow = !this.isModalShow;
    },
    openModal(client) {
      this.itemModel = client;
      this.showOrHiddenModal();
    },
    removeClient() {
      // const client = this.itemModel;
      // const id = 0;
      // debugger;
      // this.$store
      //   .dispatch("changeClientStatus", ())
      //   .then(result => {
      //     this.item = result.change_client_status;
      //   });
      // //write code and call $store
      // this.showOrHiddenModal();
    }
  },
  beforeMount() {
    this.loadClientList();
  }
};
</script>

<style>
.content {
  width: 100%;
}

.tdClassClient {
  font-family: AvenirNext;
  font-size: 18px;
  line-height: 25px;
}
.clientClass {
  font-family: AvenirNext;
  font-size: 16px;
  line-height: 22px;
  /* text-align: center!important;  */
}
.driversMainNavigationTabs h1 {
  margin-left: 20px;
  margin-top: 10px;
}

.supplierClientsListBlock .driversListRowContent > div {
  width: 26.3% !important;
  width: 202px;
  height: 50px;
}
.supplierClientsListBlock .driversListRowHeader > span {
  width: 26.3% !important;
}
.supplierClientsListBlock .driversListRowContent > div:last-child {
  justify-content: center;
}
.suplliersClientsContactsBlock {
  display: flex;
  flex-flow: column nowrap;
  align-items: center !important;
}
.suplliersClientsContactsBlock p {
  margin: 0px;
}

.decline-modal-container {
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

.InfoDriver {
  font-family: AvenirNext;
  font-size: 16px;
  line-height: 22px;
  background: none;
}

.modalka {
  width: 579px;
  height: 314px;
  padding: 61px 124px;
  position: relative;
  box-sizing: border-box;
  border-radius: 3px;
  background: #ffffff;
}
.close {
  position: absolute;
  right: 25px;
  top: 24px;
  cursor: pointer;
  z-index: 12;
}
.modalka h2 {
  font-family: "AvenirNext", sans-serif;
  font-size: 30px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 0.14359px;
  color: #4a4a4a;
}

.decline-modal-container form button {
  width: 132px;
  height: 58px;
  background: radial-gradient(
    96.87% 96.87% at 3.13% 3.13%,
    #fb5f68 0%,
    #ea84af 100%
  );
  box-shadow: 0px 2px 15px #fcb3bb;
  border-radius: 24px;
  border: 0;
  font-family: "AvenirNext", sans-serif;
  font-size: 30px;
  line-height: 49px;
  letter-spacing: 0.172308px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  align-items: center;
}

.decline-modal-container form {
  width: 100%;
  height: auto;
  margin-top: 52px;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.modal-button-client {
  width: 132px;
  height: 58px;
  background: radial-gradient(
    96.87% 96.87% at 3.13% 3.13%,
    #fb5f68 0%,
    #ea84af 100%
  );
  box-shadow: 0px 2px 15px #fcb3bb;
  border-radius: 24px;
  border: 0;
  font-family: "AvenirNext", sans-serif;
  font-size: 30px;
  line-height: 49px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
}

.mainContainerButton {
  display: flex;
  align-items: center;
}

.reasonType {
  width: 100%;
  align-items: center;
  margin-bottom: 52px;
}
.reasonType h4 {
  font-family: "AvenirNext", sans-serif;
  font-size: 30px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 0.14359px;
  color: #4a4a4a;
}
</style>



 
