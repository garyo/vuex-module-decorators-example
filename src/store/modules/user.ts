// Vuex store for User data

import { Module, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'user' })
export default class UserModule extends VuexModule {
  uid = 'the-user-uid'
  getUid() {
    console.log('in getUid')
    return this.uid
  }
}
