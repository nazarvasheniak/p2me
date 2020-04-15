import axios from "axios";

export default {
    state: {
        total_drivers: 0,
        drivers_approved: 0,
        drivers_denied: 0,
        drivers_by_date: [],
        driver_list: []
    },
    mutations: {
        LOAD_REQUESTS_DATA(state, payload) {
            state = payload;
        }
    },
    actions: {
        loadRequestsData(context) {
            return new Promise((resolve, reject) => {
                axios.get('/api/superadmin/drivers_dashboard/', {
                    headers: {
                        "Access-Control-Allow-Origin": '*',
                        "Content-Type": "application/json",
                        "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
                        Authorization: 'token ' + localStorage.getItem('token')
                    }
                })
                    .then(response => {
                        context.commit('LOAD_REQUESTS_DATA', response.data);
                        resolve(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                        reject(e);
                    });
            });
        }
    }
}
