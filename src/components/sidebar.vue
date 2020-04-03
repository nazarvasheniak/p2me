<template>
  <aside class="sidebarContainer flex" id="sidebar">
    <div class="sidebarSubContainer">
      <img :src="userType == 'supplier' ? logo : superadminLogo" class="logo"/>
    </div>
    <div class="sidebarSubContainer" v-if="userType == 'superadmin'">
      <router-link to="/request" class="menuButton flex">
        <span>
          <iconBase icon-name="Request">
            <iconHome />
          </iconBase>
        </span> Request
      </router-link>
      <router-link to="/drivers" class="menuButton flex">
        <span>
          <iconBase icon-name="Drivers">
            <iconDrivers />
          </iconBase>
        </span> Drivers
      </router-link>
      <router-link to="/suppliers" class="menuButton flex">
        <span>
          <iconBase icon-name="Suppliers">
            <iconProfile />
          </iconBase>
        </span> Suppliers
      </router-link>
      <router-link to="/clients" class="menuButton flex">
        <span>
          <iconBase icon-name="Clients">
            <iconClients />
          </iconBase>
        </span> Clients
      </router-link>
      <router-link to="/account" class="menuButton flex">
        <span>
          <iconBase icon-name="Account">
            <iconAccount />
          </iconBase>
        </span> Account
      </router-link>
    </div>
    <div class="sidebarSubContainer" v-if="userType == 'supplier'">
      <router-link to="/dashboard" class="menuButton flex">
        <span>
          <iconBase icon-name="Dashboard">
            <iconHome />
          </iconBase>
        </span> Dashboard
      </router-link>
      <router-link to="/Profile" class="menuButton flex">
        <span>
          <iconBase icon-name="Profile">
            <iconProfile />
          </iconBase>
        </span> Profile
      </router-link>
      <router-link to="/Products" class="menuButton flex">
        <span>
          <iconBase icon-name="Products">
            <iconProducts />
          </iconBase>
        </span> Products
      </router-link>
      <router-link to="/Orders" class="menuButton flex">
        <span>
          <iconBase icon-name="Orders">
            <iconOrders />
          </iconBase>
        </span> Orders
      </router-link>
      <router-link to="/Reviews" v-show="!isLoggedIn" class="menuButton flex">
        <span>
          <iconBase icon-name="Reviews">
            <iconReviews />
          </iconBase>
        </span> Reviews
      </router-link>
      <router-link to="/Clients" v-show="!isLoggedIn" class="menuButton flex">
        <span>
          <iconBase icon-name="Clients">
            <iconClients />
          </iconBase>
        </span> Clients
      </router-link>
      <router-link to="/request" v-show="!isLoggedIn" class="menuButton flex">
        <span>
          <iconBase icon-name="Dashboard">
            <iconHome />
          </iconBase>
        </span> Requests
      </router-link>
      <router-link to="/drivers" v-show="!isLoggedIn" class="menuButton flex">
        <span>
          <iconBase icon-name="Profile">
            <iconProfile />
          </iconBase>
        </span> Drivers
      </router-link>
      <router-link to="/suppliers" v-show="!isLoggedIn" class="menuButton flex">
        <span>
          <iconBase icon-name="Profile">
            <iconProfile />
          </iconBase>
        </span> Suppliers
      </router-link>
      <router-link to="/feedbacks" v-show="!isLoggedIn" class="menuButton flex">
        <span>
          <iconBase icon-name="Profile">
            <iconProfile />
          </iconBase>
        </span> Feedbacks
      </router-link>
      <router-link to="/settings" v-show="!isLoggedIn" class="menuButton flex">
        <span>
          <iconBase icon-name="Profile">
            <iconProfile />
          </iconBase>
        </span> Settings
      </router-link>
    </div>
  </aside>
</template>

<script>
import iconBase from "./iconBase.vue";
import iconHome from "./icons/iconHome.vue";
import iconProfile from "./icons/iconProfile.vue";
import iconProducts from "./icons/iconProducts.vue";
import iconOrders from "./icons/iconOrders.vue";
import iconReviews from "./icons/iconReviews.vue";
import iconClients from "./icons/iconClients.vue";
import iconDrivers from "./icons/iconDrivers.vue";
import iconAccount from "./icons/iconAccount.vue";
import logo from '../assets/logo.png';
import superadminLogo from '../assets/superadmin-logo.svg';

export default {
  name: "sidebar",
  components: {
    iconBase,
    iconHome,
    iconProfile,
    iconProducts,
    iconOrders,
    iconReviews,
    iconClients,
    iconAccount,
    iconDrivers
  },
  data() {
    return {
      logo,
      superadminLogo
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    },
    userType: () => localStorage.getItem('userType')
  },
};
</script>

<style scoped>
.sidebarSubContainer .logo {
  max-width: 100%;
}
.sidebarContainer {
  flex-flow: column nowrap;
  justify-content: space-around;
}
.sidebarSubContainer {
  font-family: AvenirNext;
  font-size: 20px;
  margin-bottom: 25px;
}
.menuButton {
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  margin: 14px auto;
  padding: 5px 10px;
  text-decoration: none;
  color: inherit;
}
.menuButton span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  margin-right: 45px;
  text-align: center;
  vertical-align: middle;
  transition: 1s;
  background-color: #fff;
  box-shadow: 0 2px 15px rgba(177, 177, 177, 0.488904);
}
.menuButton:hover {
  color: #fb888b;
}
.menuButton:hover span {
  color: #fb888b;
}
.menuButton:hover span {
  box-shadow: 0 0 3px 3px #fb888b;
}
.activePage {
  color: #fb888b;
}
.activePage > span {
  box-shadow: 0 0 3px 3px #fb888b;
}
</style>

