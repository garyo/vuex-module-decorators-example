// ----------------------------------------------------------------------
// (c) Copyright 2019, Dark Star Systems, Inc.  All rights reserved.
// This file may contain proprietary and confidential information.
// DO NOT COPY or distribute in any form without prior written consent.
// ----------------------------------------------------------------------

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
