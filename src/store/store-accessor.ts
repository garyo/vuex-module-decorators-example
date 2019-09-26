import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import user from '@/store/modules/user'

let userStore: user

function initializeStores (store: Store<any>): void {
  userStore = getModule(user, store)
  console.log('initializing stores!')
}

export {
  initializeStores,
  userStore
}
