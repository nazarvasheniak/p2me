import axios from "axios";

export default {
    state: {
        driversList: [],
        driver: null
    },
    mutations: {
        LOAD_DRIVERS_LIST(state, payload) {
            state.driversList = payload
        },
        GET_DRIVER(state, payload) {
            state.driver = payload
        }
    },
    actions: {
        loadDriversList(context, filter) {
            return new Promise((resolve, reject) => {
                axios.get('/api/superadmin/drivers_list/?filter=' + filter, {
                    headers: {
                        "Access-Control-Allow-Origin": '*',
                        "Content-Type": "application/json",
                        "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
                        Authorization: 'token ' + localStorage.getItem('token')
                    }
                })
                    .then(response => {
                        context.commit('LOAD_DRIVERS_LIST', response.data.drivers_list);
                        resolve(response.data);
                    })
                    .catch(e => {
                        // console.log(e);
                        reject(e);
                    });
            });
        },
        getDriver(context, id) {
            return new Promise((resolve, reject) => {
                axios.get(`/api/superadmin/driver_detail/${id}/`, {
                    headers: {
                        "Access-Control-Allow-Origin": '*',
                        "Content-Type": "application/json",
                        "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
                        Authorization: 'token ' + localStorage.getItem('token')
                    }
                })
                    .then(response => {
                        context.commit('GET_DRIVER', response.data);
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
        getDriversList: (state) => state.driversList,
        getDriver: (state) => state.driver
    }
}
