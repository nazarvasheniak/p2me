import axios from "axios";

export default {
    state: {
        Clients: [],
        customer: null
    },
    mutations: {
        LOAD_CLIENT_LIST(state, payload) {
            state.clients = payload
        }
    },

    actions: {
        loadClientList (context, filter) {
            return new Promise((resolve, reject) => {
                axios.get('/api/superadmin/client_list/?status=' + filter, {
                    "Access-Control-Allow-Origin": '*',
                    "Content-Type": "application/json",
                    "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
                    Authorization: 'token ' + localStorage.getItem('token')
                })
            

            .then(response => {
                context.commit('LOAD_CLIENT_LIST', response.data.client_list);
                resolve(response.data);
            })
            .catch(e => {
                reject(e);
            });   
     } 
    }
 
   },

   getters: {
    getClientList: (state) => state.clientList,
    
}
}