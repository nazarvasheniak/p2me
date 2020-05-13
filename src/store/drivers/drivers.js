import axios from "axios";

export default {
    state: {
        driversList: [],
        courierList: [],
        driver: null
    },
    mutations: {
        LOAD_DRIVERS_LIST(state, payload) {
            state.driversList = payload
        },
        LOAD_COURIER_LIST(state, payload) {
            state.courierList = payload
        },
        GET_DRIVER(state, payload) {
            state.driver = payload
        }
    },
    actions: {
        loadDriversList(context, status) {
            
            return new Promise((resolve, reject) => {
                axios.get('/api/superadmin/driver_list/?status=' + status, {
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
                        reject(e);
                    });
            });
        },
        loadCourierList(context, filter) {
            return new Promise((resolve, reject) => {
                axios.get('/api/superadmin/couriers_list/?filter=' + filter, {
                    headers: {
                        "Access-Control-Allow-Origin": '*',
                        "Content-Type": "application/json",
                        "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
                        Authorization: 'token ' + localStorage.getItem('token')
                    }
                })
                    .then(response => {
                        context.commit('LOAD_COURIER_LIST', response.data.courier_list); //maybe need change response.data.courier_list to response.data check after fix backend
                        resolve(response.data);
                    })
                    .catch(e => {
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
        getCourierList: (state) => state.courierList,
        getDriversList: (state) => state.driversList,
        getDriver: (state) => state.driver
    }
}
