<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>A uid should display here: {{ uid }}.</h1>
    If you don't see one, check the Javascript console.
    There's probably an error there.
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { userStore } from '@/store'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  uid: string = userStore.user ? userStore.user.uid : 'no-user'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
