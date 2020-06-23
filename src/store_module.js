import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
      moduleA: {
          namespaced: true,
          state: {
              count: 0,
              mymsgDict: "mAAAAAAAAAAAAAAAAAAA ymsgDict init",
              mymsg: " AAAAAAAAAAAAAAAAAAAAAAA mymsg init"
          },
          mutations: {
              increment(state) {
                  state.count++
              },
              setMsgDict(state, payload) {
                  state.mymsgDict = payload.message;
              },
              setMsg(state, payload) {
                  state.mymsg = payload;
              },
              updateMessage(state, message) {
                state.message = message;
              }
          }
      },
      moduleB: {
          namespaced: true,
          state: {
              count: 0,
              mymsgDict: "BBBBBBB mymsgDict init",
              mymsg: " BBBBBBBB mymsg init"
          },
          mutations: {
              increment(state) {
                  state.count++
              },
              setMsgDict(state, payload) {
                  state.mymsgDict = payload.message;
              },
              setMsg(state, payload) {
                  state.mymsg = payload;
              }
          }
      }
  }
})
export default store