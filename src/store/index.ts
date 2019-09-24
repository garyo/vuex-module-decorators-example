import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import { initializeStores } from '@/store/store-accessor'
const initializer = (store: Store<any>) => initializeStores(store)
export const plugins = [initializer]
export * from '@/store/store-accessor' // re-export the modules

Vue.use(Vuex)

export default new Vuex.Store({
  plugins, // this wasn't in the doc -- needed?
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
