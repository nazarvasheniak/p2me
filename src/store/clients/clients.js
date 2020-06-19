import axios from "axios";

export default {
    state: {
        clientList: [],
        customer: null
    },
    mutations: {
        LOAD_CLIENT_LIST(state, payload) {
            state.clients = payload
        }, 
        CHANGE_CLIENT_STATUS(state, payload) {
            state.clients = payload
        }
     },

    actions: 
    {
        loadClientList(context) {
            return new Promise((resolve, reject) => {
                axios.get('/api/superadmin/client_list/', {
                    headers: {
                        "Access-Control-Allow-Origin": '*',
                        "Content-Type": "application/json",
                        "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
                        Authorization: 'token ' + localStorage.getItem('token')
                    }
                })
                .then(response => {
                    context.commit('LOAD_CLIENT_LIST', response.data.client_list);
                    resolve(response.data);
                })
                .catch(e => {
                    reject(e);
                });   
            });
        },

        changeClientStatus (context, id) {
            return new Promise((resolve, reject) => {
                axios.put(`/api/superadmin/client_status_update/?customer_id=${id}`, {
                    headers: {
                        "Access-Control-Allow-Origin": '*',
                        "Content-Type": "application/json",
                        "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
                        Authorization: 'token ' + localStorage.getItem('token')
                    }
                })
                    .then(response => {
                        context.commit('GHANGE_CLIENT_STATUS', response.data);
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
        getClientList: (state) => state.clientList,
        changeClientStatus: (state) => state.clientStatus
    }
}
