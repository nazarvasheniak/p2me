import axios from "axios";

export default {
    state: {
        productSections: [],
        productItems: [],
    },
    mutations: {
        LOAD_PRODUCT_SECTIONS(state, payload) {
            state.productSections = payload
        },
        LOAD_PRODUCT_ITEMS(state, payload) {
            state.productItems = payload
        },
    },
    actions: {
        load_products_sections(context, payload) {
            axios.get('http://localhost:8080/shop/133e3710-2a91-4683-a0c7-d6528a42c545', {
                headers: {
                    "Access-Control-Allow-Origin": '*',
                    "Content-Type": "application/json",
                    "X-CSRFToken": "4EvjDVNH3y2lYDl4c6j8UVVmgyFyLJwWj70HylvTt739n2h2rZYZ1Vw0sA5uyOq9",
                    Authorization: 'token ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    context.commit('LOAD_PRODUCT_SECTIONS', response.data.results.shop_sections);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        load_products_items(context, payload) {
            axios.get('http://localhost:8080/shop/133e3710-2a91-4683-a0c7-d6528a42c545', {
                headers: {
                    "Access-Control-Allow-Origin": '*',
                    "Content-Type": "application/json",
                    "X-CSRFToken": "4EvjDVNH3y2lYDl4c6j8UVVmgyFyLJwWj70HylvTt739n2h2rZYZ1Vw0sA5uyOq9",
                    Authorization: 'token ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    // console.log(response.data.results.items);
                    context.commit('LOAD_PRODUCT_ITEMS', response.data.results.items);
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    getters: {
        getProductSections: (state) => state.productSections,
        getProductItems: (state) => state.productItems
    }
}
