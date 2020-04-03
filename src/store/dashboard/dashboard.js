import axios from "axios";

export default {
  state: {
    board: [],
    orderByDate: [],
    orderList: []
  },
  mutations: {
    LOAD_BOARD(state, payload) {
      state.board = payload
    },
    LOAD_ORDER_BY_DATE(state, payload) {
      state.orderByDate = payload
    },
    LOAD_ORDER_LIST(state, payload) {
      state.orderList = payload
    }
  },
  actions: {
    load_board(context) {
      axios.get('http://localhost:8080/control_panel/supplier/dashboard/?page=1', {
        headers: {
          "Access-Control-Allow-Origin": '*',
          "Content-Type": "application/json",
          "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
          Authorization: 'token ' + localStorage.getItem('token')
        }
      })
          .then(response => {
            // console.log(response.data.order_list);
            context.commit('LOAD_BOARD', response.data);
            context.commit('LOAD_ORDER_BY_DATE', response.data.orders_by_date);
            context.commit('LOAD_ORDER_LIST', response.data.order_list);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  getters: {
    getBoard: (state) => state.board,
    getOrderByDate: (state) => state.board,
    getOrderList: (state) => state.orderList
  }
}
