import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import Axios from 'axios'

const token = localStorage.getItem('token')

const axios = Axios.create({
  baseURL: 'https://adonis-agrisol-api.herokuapp.com/api/',
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

window.axios = axios
Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
