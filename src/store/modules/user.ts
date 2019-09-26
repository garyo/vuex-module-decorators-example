// Vuex store for User data

import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'user' })
export default class UserModule extends VuexModule {
  uid = 'the-user-uid'
  get uidGetter () {
    console.log('in uidGetter')
    return this.uid
  }
  @Mutation
  setUid (uid: string) {
    console.log('setting uid to', uid)
    this.uid = uid
  }
}
