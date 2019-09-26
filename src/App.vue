<template>
  <div id="app">
    <h1>A uid should display here: {{ uid }}.</h1>
    <h1>uid getter should display here: {{ uidGetter }}.</h1>
    If you don't see one, check the Javascript console.
    There's probably an error there.
    <button @click="setUid('uid2')">Click Me</button>
  </div>
</template>

<script lang="ts">
import { userStore } from '@/store'

export default {
  data () {
    return {
      uid: userStore.uid || 'no-user',
      uidGetter: userStore.uidGetter || 'no-getter'
    }
  },
  methods: {
    setUid: (uid: string) => {
      userStore.setUid(uid)
    }
  }
}
</script>
