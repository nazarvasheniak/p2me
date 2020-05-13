import axios from "axios";

export default {
  state: {
    orders: [],
    resent_order_id: [],
    order: []
  },
  getters: {
    getOrders: (state) => state.orders,
    resent_order_id: state => {
      return state.resent_order_id
    },
    order: state => {
      return state.order
    }
  },
  mutations: {
    LOAD_ORDERS(state, payload) {
      state.orders = payload
    },
    resent_order_id: (state, payload) => {
      state.resent_order_id = payload
    },
    order: (state, payload) => {
      state.order = payload
    }
  },
  actions: {
    load_orders(context, filter) {

      return new Promise((resolve, reject) => {
      axios.get('/api/superadmin/order_list/', {
        headers: {
          "Access-Control-Allow-Origin": '*',
          "Content-Type": "application/json",
          "X-CSRFToken": "XLfvlH0F5xJyajfGu58nIFdtvprf8h70SkqfjMEnzWs5jwgy9bqmEBDlMi71Arse",
          Authorization: 'token ' + localStorage.getItem('token')
        }
      })
          .then(response => {
            context.commit('LOAD_ORDERS', response.data.orders_list);
            resolve(response.data);
            
          })
          .catch(e => {
            reject(e);
          });
        });
    },
    order({commit}, payload) {
      axios.get('/api/superadmin//order_detail/' + localStorage.getItem('orderId'), {
        headers: {
          "Access-Control-Allow-Origin": '*',
          "Content-Type": "application/json",
          "X-CSRFToken": "XLfvlH0F5xJyajfGu58nIFdtvprf8h70SkqfjMEnzWs5jwgy9bqmEBDlMi71Arse",
          Authorization: 'token ' + localStorage.getItem('token')
        }
      })
          .then(response => {
            // console.log(response.data);
            commit('order', response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

  }
}
