import axios from "axios";

export default {
    state: {
        driversList: []
    },
    mutations: {
        LOAD_DRIVERS_LIST(state, payload) {
            state.driversList = payload
        }
    },
    actions: {
        loadDriversList(context, filter) {
            const formData = new FormData();
            formData.set('filter', filter);

            axios.get(`/api/superadmin/drivers_list/`, {
                headers: {
                    "Access-Control-Allow-Origin": '*',
                    "Content-Type": "application/json",
                    "X-CSRFToken": "j8PYQSsFNEHgI0qclM5zcMyCUH3vepQR9LEnZVut36UZ7K5XdWVDsVkkFLrgaySG",
                    Authorization: 'token ' + localStorage.getItem('token')
                },
                data: formData
            })
                .then(response => {
                    context.commit('LOAD_DRIVERS_LIST', response.data.drivers_list);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    getters: {
        getDriversList: (state) => state.driversList
    }
}
