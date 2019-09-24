// ----------------------------------------------------------------------
// (c) Copyright 2019, Dark Star Systems, Inc.  All rights reserved.
// This file may contain proprietary and confidential information.
// DO NOT COPY or distribute in any form without prior written consent.
// ----------------------------------------------------------------------

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
