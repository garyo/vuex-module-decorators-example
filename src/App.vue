<template>
  <div id="app">
    <h1>Root state: {{ rootState.root }}</h1>
    <h1>A uid should display here (from user module): {{ uid }}.</h1>
    <h1>uid getter should display here (user module): {{ uidGetter }}.</h1>
    <h1>Version-UID should be here (modB getter): {{ versionUid }}.</h1>
    If you don't see one, check the Javascript console.
    There's probably an error there.
    <br>
    <button @click="setUid('uid-'+(id++))">Click Me to set uid (user module)</button>
    Should see all uids above switch to "uid-N" (incrementing)
    <br>
    <button @click="setVersion('456')">Click Me to set version (modB)</button>
    Should see version switch to "456"
    <br>
    <button @click="setUidModB('uidViaModB-'+(id++))">Click Me to set uid via
    modB -> modA</button>
    Should see uids update to "uidViaModB-N"; calls modB action which calls modA action
    <br>
    <button @click="setVersionUser('999'+(id++))">Click Me to set version via
    user -> modB</button>
    Should see versions update to "999"; calls user action which calls modB action
  </div>
</template>

<script lang="ts">
import Store, { userStore, modBStore } from '@/store'

export default {
  data () {
    return {
      id: 0
    }
  },
  computed: {
    rootState: () => Store.state,
    uid: () => userStore.uid || 'no-user',
    uidGetter: () => userStore.uidGetter || 'no-getter',
    versionUid: () => modBStore.versionUid || 'no-versionuid'
  },
  methods: {
    setUid: (uid: string) => {
      userStore.setUid(uid)
    },
    setUidModB: (uid: string) => {
      modBStore.setUid(uid)
    },
    setVersion: (version: string) => {
      modBStore.setVersion(version)
    },
    setVersionUser: (version: string) => {
      userStore.setModBVersion(version)
    }
  }
}
</script>
