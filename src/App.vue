<template>
  <div id="app">
    <h1>A uid should display here: {{ uid }}.</h1>
    <h1>uid getter should display here: {{ uidGetter }}.</h1>
    <h1>VersionUID should be here: {{ versionUid }}.</h1>
    If you don't see one, check the Javascript console.
    There's probably an error there.
    <br>
    <button @click="setUid('uid-'+(id++))">Click Me to set uid</button>
    <br>
    <button @click="setVersion('456')">Click Me to set version</button>
    <br>
    <button @click="setUidModB('uidViaModB-'+(id++))">Click Me to set uid via modB</button>
  </div>
</template>

<script lang="ts">
import { userStore, modBStore } from '@/store'

export default {
  data () {
    return {
      id: 0
    }
  },
  computed: {
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
    }
  }
}
</script>
