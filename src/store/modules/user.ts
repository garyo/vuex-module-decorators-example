// Vuex store for User data

// Note: do NOT import @/store here (would cause circular import)
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { modBStore } from '@/store/store-accessor'

console.log('in user module, modB=', modBStore) // expect "undefined" here

@Module({ name: 'user' })
export default class UserModule extends VuexModule {
  uid = 'the-user-uid'
  get uidGetter () {
    return this.uid
  }
  @Mutation
  setUid (uid: string) {
    console.log('setting uid to', uid)
    this.uid = uid
  }

  @Action
  setModBVersion (version: string) {
    console.log('user module: telling modB to set version to', version + '-fromUserMod')
    modBStore.setVersion(version + '-fromUserMod')
  }
}

console.log('end of user module')
