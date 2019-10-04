// This is the "store accessor":
// It initializes all the modules using a Vuex plugin (see store/index.ts)
// In here you import all your modules, call getModule on them to turn them
// into the actual stores, and then re-export them.

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UserModule from '@/store/modules/user'
import ModBModule from '@/store/modules/modB'

// Each store is the singleton instance of its module class
// Use these -- they have methods for state/getters/mutations/actions
// (result from getModule(...))
export let userStore: UserModule
export let modBStore: ModBModule

// initializer plugin: sets up state/getters/mutations/actions for each store
export function initializeStores (store: Store<any>): void {
  userStore = getModule(UserModule, store)
  modBStore = getModule(ModBModule, store)
}

// for use in 'modules' store init (see store/index.ts), so each module
// appears as an element of the root store's state.
// (This is required!)
export const modules = {
  'user': UserModule,
  'modB': ModBModule
}

console.log('end of store-accessor: UserModule=<', typeof UserModule, '>') // expect "function"
// @ts-ignore ("accessed before being defined")
console.log(' and userStore=<', typeof userStore, '>', userStore) // expect "undefined", OK
