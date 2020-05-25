<template>
    <div class="profileContainer flex">
        <div class="headerRow flex">
          <h1>Driver profile</h1>
          <h2 @click="editProfile">Edit profile</h2>
        </div>
        <div class="profileMainContainer flex">
        <div class="profileSubContainer flex">
            <driverMainInfo :id="$route.params.id"/>
        </div>
        <div class="profileSubContainer flex">
            <earnings :id="$route.params.id"/>
            <tripsCompleted :id="$route.params.id"/>
            <tripsCanceled :id="$route.params.id"/>
            <rates :id="$route.params.id"/>
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

export default {
  name: "Drive",
  components: {
    driverMainInfo,
    earnings,
    tripsCompleted,
    tripsCanceled,
    rates
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response));
  },
  methods: {
    editProfile() {
      this.$router.push(`/editDriverS/${this.$route.params.id}`);
    }
  }
};
</script>

<style scoped>
.profileContainer {
  flex-flow: column nowrap;
  width: 100%;
  margin-bottom: 20px;
}
h1 {
  font-family: AvenirNext;
  font-size: 36px;
  line-height: 49px;
  letter-spacing: 0.25831px;
  color: #454545;
  mix-blend-mode: normal;
}
h2 {
  font-family: AvenirNext;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.25831px;
  color: #454545;
  cursor: pointer;
}

.profileMainContainer > .profileSubContainer:nth-child(1) {
  width: 60%;
}
.profileMainContainer > .profileSubContainer:nth-child(2) {
  width: 35%;
  flex-flow: column nowrap;
  background: transparent;
  box-shadow: none;
}
.headerRow {
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  justify-content: space-between;
  margin-bottom: 24px;
}
.headerRow h1 {
  color: #454545;
  margin: 0;
  font-size: 36px;
  line-height: 49px;
}
.profileMainContainer {
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: stretch;
}

.profileSubContainer {
  width: 100%;
  border-radius: 3px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
}
</style>
