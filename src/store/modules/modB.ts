// Here is how to use one module's state or mutations from another:
// Note: do NOT import @/store here (would cause circular import)
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import userModule from '@/store/modules/user'

@Module({ name: 'modB' })
export default class ModBModule extends VuexModule {
  version: string = '123'

  get versionUid () {
    // this is the key to using another module:
    // go up to the root, find the module, and cast it to the right type
    const userStore = this.context.rootState.user as userModule
    const uid = userStore.uid
    return this.version + '-' + uid
  }
  @Mutation
  setVersion (version: string) {
    this.version = version
  }
  @Action
  setUid (uid: string) {
    const userStore = this.context.rootState.user as userModule
    userStore.setUid(uid)
  }
}
