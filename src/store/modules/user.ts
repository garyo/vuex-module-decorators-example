// Vuex store for User data

import Vue from 'vue'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

class User {
  name: string = 'theUser'
  uid: string = 'uid-001'
}

/** "User" Vuex module: current user and profile */
@Module({ name: 'user' })
class UserModule extends VuexModule {
  user: User | null = null

  get uid () {
    return this.user ? this.user.uid : null
  }
}

export default UserModule
