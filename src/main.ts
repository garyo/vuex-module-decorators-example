import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App.vue'
console.log('in main.ts, vuex=', Vuex)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
