<template>

  <div id="app">
    <form>
        <label for="title">title</label>
        <input id="title" type="text" v-model="title">
        <input id="compTitle" type="text" v-model="compTitle">
        <hr>
        <input :value="message" @input="updateMessage">
        <input  v-model="$store.state.moduleA.message" >
        <hr>

        <input  v-model="compTitleVuex" >
        <input  v-model="compTitleVuex" >

    </form>
   <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      title: ""
    }
  },
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      message: state => state.moduleA.message
    }),
    compTitle: function () {
      return this.title;
    },
    compTitleVuex: {
      get() {
        return this.$store.state.moduleA.mymsg
      },
      set(value) {
        console.log(value);
        this.$store.commit('moduleA/setMsg', value)
      }
    }
  },
  methods: {
    updateMessage(e) {
      this.$store.commit('moduleA/updateMessage', e.target.value);
    }
  },
  created() {
    console.log("---------------------------------------------");
    console.log(this.$store.state.count);
    this.$store.commit('increment');
    console.log(this.$store.state.count);

    console.log(this.$store.state.mymsgDict);
    this.$store.commit('setMsgDict', {message:'mymsgDict updated'});
    console.log(this.$store.state.mymsgDict);

    console.log(this.$store.state.mymsg);
    this.$store.commit('setMsg', ' mymsg updated');
    console.log(this.$store.state.mymsg);

    console.log("---------------------------------------------");

    console.log(this.$store.state.moduleA.count);
    this.$store.commit('moduleA/increment');
    console.log(this.$store.state.moduleA.count);

    console.log(this.$store.state.moduleA.mymsgDict);
    this.$store.commit('moduleA/setMsgDict', {message:'mymsgDict updated'});
    console.log(this.$store.state.moduleA.mymsgDict);

    console.log(this.$store.state.moduleA.mymsg);
    this.$store.commit('moduleA/setMsg', ' mymsg updated');
    console.log(this.$store.state.moduleA.mymsg);

    console.log("---------------------------------------------");
    console.log(this.computedMsg);
    console.log("---------------------------------------------");
    console.log("---------------------------------------------");
    console.log("---------------------------------------------");

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
