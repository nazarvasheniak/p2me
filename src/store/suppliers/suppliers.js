import axios from "axios";

export default {
    state: {
        suppliersList: [],
        supplier: null,
        suppliersItem: null,
        suppliersFeedback: null
    },

    mutations: {
        LOAD_SUPPLIERS_LIST(state, payload) {
            state.suppliersList = payload
      },

        GET_SUPPLIER(state, payload) {
            state.supplier = payload
        },

        GET_SUPPLIERS_ITEM(state, payload) {
            state.suppliersItem = payload
        },

        GET_SUPPLIERS_FEEDBACK(state, payload) {
            state.suppliersFeedback = payload
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
            axios.get(`/api/superadmin/supplier_detail/?supplier_id=${id}`, {
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
    getSuppliersItem (context, id) {
        return new Promise((resolve, reject) => {
            axios.get(`/api/superadmin/item_list_by_supplier/?supplier_id=${id}`, {
                headers: {
                    "Access-Control-Allow-Origin": '*',
                    "Content-Type": "application/json",
                    "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
                    Authorization: 'token ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    context.commit('GET_SUPPLIERS_ITEM', response.data);
                    resolve(response.data);
                })
                .catch(e => {
                    // console.log(e);
                    reject(e);
                });
        });
    },

    getSuppliersFeedback (context, data) {
        return new Promise((resolve, reject) => {
            axios.get(`/api/superadmin/feedback_list/?supplier_id=${data.id}&status=${data.status}`, {
                headers: {
                    "Access-Control-Allow-Origin": '*',
                    "Content-Type": "application/json",
                    "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
                    Authorization: 'token ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    context.commit('GET_SUPPLIERS_FEEDBACK', response.data);
                    resolve(response.data);
                })
                .catch(e => {
                    // console.log(e);
                    reject(e);
                });
        });
    }
  },

  
  getters: {
      getSupplierList : (state) => state.suppliersList,
      getSupplier : (state) => state.supplier,
      getSuppliersItem : (state) => state.suppliersItem,
      getSuppliersFeedback : (state) => state.getSuppliersFeedback
  }
}