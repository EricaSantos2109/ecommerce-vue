import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.css'
import axios from 'axios'

axios.interceptors.request.use(config => {
  if(store.state.token) {
    config.headers.Authorization = store.state.token
  }
  return config
});

axios.interceptors.response.use(res => {
    return res
  }, error => {
    if(error.response.status === 403) {
      alert('Não autorizado!')
    } else if (error.response.status === 401) {
      store.commit('logout')
      //router.push('')
    }
    throw error
});

axios.defaults.baseURL = "https://8080-pink-marten-3zsf98ss.ws-us08.gitpod.io/ecommerce";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')