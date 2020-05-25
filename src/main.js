import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import "./vee-validate"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

Vue.prototype.$http = Axios;
Vue.config.productionTip = false
const token = localStorage.getItem('user-token');

if (token) {
  Vue.prototype.$http.default.headers.common['Authorization'] = token
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
