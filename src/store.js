import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './store/auth/auth'
import Products from './store/products/products'
import Orders from './store/orders/orders'
import Profile from './store/profile/profile'
import Dashboard from './store/dashboard/dashboard'
import Drivers from './store/drivers/drivers'

Vue.use(Vuex);

//  const store = new Vuex.Store( options: {

//  }
//  )

export default new Vuex.Store({
  modules: {
    Auth,
    Products,
    Orders,
    Profile,
    Dashboard,
    Drivers
  }
})
