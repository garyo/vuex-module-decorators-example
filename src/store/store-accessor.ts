// This is the "store accessor":
// It initializes all the modules using a Vuex plugin (see store/index.ts)
// In here you import all your modules, call getModule on them to turn them
// into the actual stores, and then re-export them.

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UserModule from '@/store/modules/user'
import ModBModule from '@/store/modules/modB'

// Each store is the singleton instance of its module class
export let userStore: UserModule
export let modBStore: ModBModule

export function initializeStores (store: Store<any>): void {
  userStore = getModule(UserModule, store)
  modBStore = getModule(ModBModule, store)
}

// for use in 'modules' store init (see store/index.ts), so each module
// appears as an element of the root store's state.
export const modules = {
  'user': UserModule,
  'modB': ModBModule
}
