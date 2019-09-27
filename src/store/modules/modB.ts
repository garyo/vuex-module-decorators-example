import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { userStore } from '@/store'
@Module({ name: 'modB' })
export default class ModBModule extends VuexModule {
  version = 123
  versionUid = ''
  @Mutation
  setVersion (version: number) {
    this.version = version
    this.versionUid = `${version} ${userStore.uid}`
  }
}
