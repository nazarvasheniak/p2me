import axios from "axios";

export default {
    state: {
        suppliersList: [],
        supplier: null
    },

    mutations: {
        LOAD_SUPPLIERS_LIST(state, payload) {
            state.suppliersList = payload
      },

        GET_SUPPLIER(state, payload) {
            state.supplier = payload
        }
   },

  actions: {
    loadSuppliersList(context, filter) {
        return new Promise((resolve, reject) => {
            axios.get('/api/superadmin/supplier_list/?filter=' + filter, {
                headers: {
                    "Access-Control-Allow-Origin": '*',
                    "Content-Type": "application/json",
                    "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
                    Authorization: 'token ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    context.commit('LOAD_SUPPLIERS_LIST', response.data.suppliers_list);
                    resolve(response.data);
                })
                .catch(e => {
                    reject(e);
                });
        });
    },

    getSupplier(context, id) {
        return new Promise((resolve, reject) => {
            axios.get(`/api/superadmin/supplier_detail/supplier_id=${id}`, {
                headers: {
                    "Access-Control-Allow-Origin": '*',
                    "Content-Type": "application/json",
                    "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
                    Authorization: 'token ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    context.commit('GET_SUPPLIER', response.data);
                    resolve(response.data);
                })
                .catch(e => {
                    // console.log(e);
                    reject(e);
                });
        });
    },
  },

  
  getters: {
      getSupplierList : (state) => state.suppliersList,
      getSupllier : (state) => state.supplier
  }
}