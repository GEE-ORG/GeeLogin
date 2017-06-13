import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isLoading: false,
    isSignIn: true,
    user: {
      username: '',
      avatar: '',
      source: '',
      email: '',
      uid: -1
    }
  },
  mutations: {
    loaded (state) {
      state.isLoading = false;
    },
    loading (state) {
      state.isLoading = true;
    },
    toggleLoadingBar (state) {
      state.isLoading = !state.isLoading;
    },
    updateUser (state, user) {
      state.user = Object.assign(state.user, user);
    },
    setSignIn (state, isSignIn) {
      state.isSignIn = isSignIn;
    }
  }
})

if (!Vue.prototype.$http) {
  Vue.prototype.$http = async function (method, url, data = {}, headers = {}) {
    if (!method || !url) {
      throw new Error('method and url is required!');
    }
    store.commit('loading');
    const response = await axios({
      method,
      baseURL: process.env.NODE_ENV === 'development' ?
        'http://localhost:3001' :
        'https://account.geeku.net/',
      url,
      data,
      headers,
      withCredentials: true,
      validateStatus: function (status) {
        return status >= 200 && status < 300; // default
      },
    }).then(r => r);
    store.commit('loaded');
    // console.log(response.data);
    return response.data;
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
