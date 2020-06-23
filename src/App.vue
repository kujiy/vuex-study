<template>
  <div id="app">
      Page app:
    <form>
        <input  v-model="compTitleVuex" >
        <input  v-model="compTitleVuex" >
        <HelloWorld/>
    </form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    compTitleVuex: {
      get() {
        return this.$store.state.moduleA.mymsg
      },
      set(value) {
        console.log(value);
        this.$store.commit('moduleA/setMsg', value)
      }
    }
  }
}
</script>
