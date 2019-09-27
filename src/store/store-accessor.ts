import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UserModule from '@/store/modules/user'
import ModBModule from '@/store/modules/modB'

let userStore: UserModule
let modBStore: ModBModule

function initializeStores (store: Store<any>): void {
  userStore = getModule(UserModule, store)
  modBStore = getModule(ModBModule, store)
}

// for use in 'modules' store init
const modules = {
  'user': UserModule,
  'modB': ModBModule
}

export {
  initializeStores,
  userStore,
  modBStore,
  modules
}
