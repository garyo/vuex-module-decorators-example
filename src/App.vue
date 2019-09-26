<template>
  <div id="app">
    <h1>A uid should display here: {{ uid }}.</h1>If you don't see one, check the Javascript console.
    There's probably an error there.
  </div>
</template>

<script lang="ts">
import { userStore } from '@/store'

export default {
  data () {
    return {
      uid: userStore.user ? userStore.user.uid : 'no-user'
    }
  }
}
</script>
