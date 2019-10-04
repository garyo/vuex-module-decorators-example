// Here is how to use one module's state or mutations from another:
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { userStore } from '@/store/store-accessor' // circular import; OK though

console.log('in modB, userStore=', userStore) // expect "undefined" here

@Module({ name: 'modB' })
export default class ModBModule extends VuexModule {
  version: string = '123'

  get versionUid () {
    const uid = userStore.uid
    return `ver: "${this.version}" uid: "${uid}"`
  }
  @Mutation
  setVersion (version: string) {
    this.version = 'v' + version
  }
  @Action
  setUid (uid: string) {
    userStore.setUid(uid)
  }
}

console.log('end of modB')
