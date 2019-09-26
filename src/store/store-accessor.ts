import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UserModule from '@/store/modules/user'

let userStore: UserModule

function initializeStores (store: Store<any>): void {
  userStore = getModule(UserModule, store)
}

// for use in 'modules' store init
const modules = {
  'user': UserModule
}

export {
  initializeStores,
  userStore,
  modules
}
