import axios from "axios";

export default {
  state: {
    supplier_profile: JSON.parse(localStorage.getItem('supplierProfile')) || '' ,
    shop_profile: JSON.parse(localStorage.getItem('shopProfile')) || '',
    category_tree: JSON.parse(localStorage.getItem('category_tree')) || '',
    categories: JSON.parse(localStorage.getItem('categories')) || '',
    restaurant_category: JSON.parse(localStorage.getItem('restaurant_category')) || '',
    market_category: JSON.parse(localStorage.getItem('market_category')) || '',
    pharmacy_category: JSON.parse(localStorage.getItem('pharmacy_category')) || '',
    shopping_category: JSON.parse(localStorage.getItem('shopping_category')) || '',
    upload_documents: JSON.parse(localStorage.getItem('upload_documents')) || ''
  },
  getters: {
    getSupplierProfile: (state) => state.supplier_profile,
    getShopProfile: (state) => state.shop_profile,
    getUploadDocuments: (state) => state.upload_documents,
    getCategoryTree: (state) => state.category_tree,
    getCategories: (state) => state.categories,
    getRestaurantCategory: (state) => state.restaurant_category,
    getMarketCategory: (state) => state.market_category,
    getPharmacyCategory: (state) => state.pharmacy_category,
    getShoppingCategory: (state) => state.shopping_category
  },
  mutations: {
    LOAD_SUPPLIER_PROFILE(state, payload) {
      state.supplier_profile = payload
    },
    LOAD_SHOP_PROFILE(state, payload) {
      state.shop_profile = payload
    },
    LOAD_CATEGORY_TREE(state, payload) {
      state.category_tree = payload
    },
    LOAD_CATEGORIES(state, payload) {
      state.categories = payload
    },
    LOAD_RESTAURANT_CATEGORY(state, payload) {
      state.restaurant_category = payload
    },
    LOAD_MARKET_CATEGORY(state, payload) {
      state.market_category = payload
    },
    LOAD_PHARMACY_CATEGORY(state, payload) {
      state.pharmacy_category = payload
    },
    LOAD_SHOPPING_CATEGORY(state, payload) {
      state.shopping_category = payload
    },
    LOAD_DOCUMENTS(state, payload) {
      state.upload_documents = payload
    },
  },
  actions: {
    load_profile(context, payload) {
      axios.get('http://139.60.163.142:9000/supplier/profile_detail/', {
        headers: {
          "Access-Control-Allow-Origin": '*',
          "Content-Type": "application/json",
          "X-CSRFToken": "6lMyM9V3Zo6xy7pJdqIGjufAWQ9NJJCdXqxWjxFDegfIsCkeH8XcSlAvUQk8VWz6",
          Authorization: 'token ' + localStorage.getItem('token')
        }
      })
          .then(response => {
            console.log(response.data.shop_profile.category_tree);

            context.commit('LOAD_CATEGORIES', response.data.shop_profile.category_tree[0].name);
            context.commit('LOAD_DOCUMENTS', response.data.upload_documents);
            context.commit('LOAD_SUPPLIER_PROFILE', response.data.supplier_profile);
            context.commit('LOAD_SHOP_PROFILE', response.data.shop_profile);
          })
          .catch(e => {
            console.log(e);
          });
    },
    load_category_tree(context, payload) {
      axios.get('http://139.60.163.142:9000/supplier/category_tree/', {
        headers: {
           "Access-Control-Allow-Origin": '*',
          "Content-Type": "application/json",
          "X-CSRFToken": "6lMyM9V3Zo6xy7pJdqIGjufAWQ9NJJCdXqxWjxFDegfIsCkeH8XcSlAvUQk8VWz6",
          Authorization: 'token ' + localStorage.getItem('token')
        }
      })
          .then(response => {
            // console.log(response.data.category_tree);
            context.commit('LOAD_CATEGORY_TREE', response.data.category_tree);
            context.commit('LOAD_RESTAURANT_CATEGORY', response.data.category_tree[0].section);
            context.commit('LOAD_MARKET_CATEGORY', response.data.category_tree[1].section);
            context.commit('LOAD_PHARMACY_CATEGORY', response.data.category_tree[2].type);
            context.commit('LOAD_SHOPPING_CATEGORY', response.data.category_tree[3].type);

          })
          .catch(e => {
            console.log(e);
          });
    }

  },

}
