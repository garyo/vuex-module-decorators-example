import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { initializeStores } from '@/store/store-accessor'
Vue.use(Vuex)

console.log('In store/index.ts, about to initialize store')
const initializer = (store: Store<any>) => initializeStores(store)
export const plugins = [initializer]
export * from '@/store/store-accessor' // re-export the modules

export default new Store({
  plugins, // this wasn't in the doc -- needed?
  state: {},
  mutations: {},
  actions: {}
})
